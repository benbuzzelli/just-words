import { ASSESSMENT_WORDS, LEARNING_WORDS } from './words.js';

// ── State ──

const STATE_KEY = 'justwords_state';

function defaultState() {
  return {
    onboarded: false,
    level: null,        // 1, 2, or 3 (tier)
    pace: 20,           // words per week
    assignedWords: [],  // array of { word, assignedDate, seen }
    seenWords: [],      // words the user has marked as learned
    startDate: null,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch {}
  return defaultState();
}

function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

// ── Screen management ──

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    if (s.classList.contains('active')) {
      s.classList.remove('active');
      s.classList.add('exit-left');
      setTimeout(() => s.classList.remove('exit-left'), 300);
    }
  });
  const target = document.getElementById(`screen-${id}`);
  // small delay so the exit animation plays first
  setTimeout(() => target.classList.add('active'), 30);
}

// ── Assessment ──

let assessIndex = 0;
let assessScore = 0;

function startAssessment() {
  assessIndex = 0;
  assessScore = 0;
  showScreen('assess');
  renderAssessWord();
}

function renderAssessWord() {
  const total = ASSESSMENT_WORDS.length;
  const progress = document.getElementById('assess-progress');
  const wordEl = document.getElementById('assess-word');
  const hint = document.getElementById('assess-hint');

  progress.style.width = `${(assessIndex / total) * 100}%`;

  if (assessIndex >= total) {
    finishAssessment();
    return;
  }

  const w = ASSESSMENT_WORDS[assessIndex];
  wordEl.textContent = w.word;
  hint.textContent = `${assessIndex + 1} of ${total}`;
}

function finishAssessment() {
  // Determine level based on how many they knew
  const total = ASSESSMENT_WORDS.length;
  const ratio = assessScore / total;

  if (ratio >= 0.8) {
    state.level = 3;
  } else if (ratio >= 0.4) {
    state.level = 2;
  } else {
    state.level = 1;
  }

  showPrefs();
}

function showPrefs() {
  showScreen('prefs');
  const result = document.getElementById('level-result');
  const labels = {
    1: 'Curious Newcomer',
    2: 'Well-Read Explorer',
    3: 'Word Connoisseur',
  };
  const descriptions = {
    1: "We'll start you with uncommon but approachable words and work up from there.",
    2: "You've got a solid vocabulary. We'll mix in rarer finds alongside the uncommon.",
    3: "Impressive range. We'll dig into the truly obscure corners of English for you.",
  };
  result.innerHTML = `<strong>${labels[state.level]}</strong><br>${descriptions[state.level]}`;
}

// ── Word assignment ──

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function getWordsForLevel(level) {
  // Level 1 → only tier 1
  // Level 2 → tier 1 + tier 2
  // Level 3 → all tiers (prefer tier 2+3)
  let pool;
  if (level === 1) {
    pool = LEARNING_WORDS.filter(w => w.tier === 1);
  } else if (level === 2) {
    pool = LEARNING_WORDS.filter(w => w.tier <= 2);
  } else {
    pool = [...LEARNING_WORDS];
  }
  return pool;
}

function assignDailyWords() {
  const today = getToday();

  // Already assigned for today?
  const todaysWords = state.assignedWords.filter(w => w.assignedDate === today);
  if (todaysWords.length > 0) return;

  // Figure out how many words per day
  const perDay = Math.ceil(state.pace / 7);

  // Get available pool (exclude already assigned words)
  const assignedWordTexts = new Set(state.assignedWords.map(w => w.word));
  const seenSet = new Set(state.seenWords);
  const pool = getWordsForLevel(state.level)
    .filter(w => !assignedWordTexts.has(w.word) && !seenSet.has(w.word));

  // Shuffle and pick
  const shuffled = pool.sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, perDay);

  for (const w of picked) {
    state.assignedWords.push({
      word: w.word,
      assignedDate: today,
      seen: false,
    });
  }

  saveState(state);
}

// ── Render today ──

function renderToday() {
  showScreen('today');
  assignDailyWords();

  const today = getToday();
  const todaysWords = state.assignedWords.filter(w => w.assignedDate === today);
  const wordList = document.getElementById('word-list');
  const emptyState = document.getElementById('empty-state');

  if (todaysWords.length === 0) {
    wordList.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  wordList.style.display = 'flex';
  emptyState.style.display = 'none';

  wordList.innerHTML = todaysWords.map(entry => {
    const wordData = LEARNING_WORDS.find(w => w.word === entry.word);
    if (!wordData) return '';
    const seenClass = entry.seen ? 'seen' : '';
    return `
      <div class="word-card ${seenClass}" data-word="${wordData.word}">
        <div class="word-card-header">
          <span class="word-card-word">${wordData.word}</span>
          <span class="word-card-pos">${wordData.pos}</span>
        </div>
        <p class="word-card-def">${wordData.definition}</p>
      </div>
    `;
  }).join('');

  // Tap to view detail
  wordList.querySelectorAll('.word-card').forEach(card => {
    card.addEventListener('click', () => {
      const word = card.dataset.word;
      renderDetail(word);
    });
  });
}

// ── Detail ──

function renderDetail(wordStr) {
  const wordData = LEARNING_WORDS.find(w => w.word === wordStr);
  if (!wordData) return;

  // Mark as seen
  const entry = state.assignedWords.find(w => w.word === wordStr);
  if (entry) entry.seen = true;
  saveState(state);

  showScreen('detail');

  const container = document.getElementById('detail-content');
  const isLearned = state.seenWords.includes(wordStr);

  let rootsHtml = '';
  if (wordData.roots) {
    rootsHtml = `
      <div class="detail-section">
        <div class="detail-section-title">Etymology</div>
        <p class="detail-origin">${wordData.roots.origin}</p>
        ${wordData.roots.parts ? `
          <div class="root-parts">
            ${wordData.roots.parts.map(p => {
              const [root, meaning] = p.split(' → ');
              return `<span class="root-chip"><strong>${root}</strong> → ${meaning || ''}</span>`;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  container.innerHTML = `
    <h2 class="detail-word">${wordData.word}</h2>
    ${wordData.pronunciation ? `<p class="detail-pronunciation">${wordData.pronunciation}</p>` : ''}
    <p class="detail-pos">${wordData.pos}</p>
    <div class="detail-section">
      <div class="detail-section-title">Definition</div>
      <p class="detail-definition">${wordData.definition}</p>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Example</div>
      <p class="detail-example">"${wordData.example}"</p>
    </div>
    ${rootsHtml}
    <button class="detail-mark-btn ${isLearned ? 'learned' : ''}" id="btn-mark">
      ${isLearned ? 'Marked as learned' : 'Mark as learned'}
    </button>
  `;

  document.getElementById('btn-mark').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    if (!state.seenWords.includes(wordStr)) {
      state.seenWords.push(wordStr);
      btn.textContent = 'Marked as learned';
      btn.classList.add('learned');
      saveState(state);
    }
  });
}

// ── Settings ──

function renderSettings() {
  showScreen('settings');

  const stat = document.getElementById('stat-learned');
  stat.textContent = `${state.seenWords.length} words learned`;

  // Highlight current pace
  const settingsPace = document.querySelectorAll('#screen-settings .pace-btn');
  settingsPace.forEach(btn => {
    btn.classList.toggle('selected', Number(btn.dataset.pace) === state.pace);
  });
}

// ── Init & events ──

function init() {
  if (state.onboarded) {
    renderToday();
    return;
  }
  showScreen('welcome');
}

// Welcome → Assessment
document.getElementById('btn-start').addEventListener('click', startAssessment);

// Assessment answers
document.getElementById('btn-know').addEventListener('click', () => {
  assessScore++;
  assessIndex++;
  renderAssessWord();
});

document.getElementById('btn-dont-know').addEventListener('click', () => {
  assessIndex++;
  renderAssessWord();
});

// Preferences pace buttons
document.querySelectorAll('#screen-prefs .pace-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#screen-prefs .pace-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.pace = Number(btn.dataset.pace);
  });
});

// Start learning
document.getElementById('btn-go').addEventListener('click', () => {
  state.onboarded = true;
  state.startDate = getToday();
  saveState(state);
  renderToday();
});

// Detail back
document.getElementById('btn-back').addEventListener('click', renderToday);

// Settings
document.getElementById('btn-settings').addEventListener('click', renderSettings);
document.getElementById('btn-back-settings').addEventListener('click', renderToday);

// Settings pace buttons
document.querySelectorAll('#screen-settings .pace-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#screen-settings .pace-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.pace = Number(btn.dataset.pace);
    saveState(state);
  });
});

// Reset
document.getElementById('btn-reset').addEventListener('click', () => {
  if (confirm('This will erase all your progress. Are you sure?')) {
    localStorage.removeItem(STATE_KEY);
    state = defaultState();
    showScreen('welcome');
  }
});

// Go
init();
