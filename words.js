// Curated word database — ~900 words organized by difficulty tier
// Tier 1: Uncommon but encountered in literature/journalism
// Tier 2: Rare, mostly academic/literary contexts
// Tier 3: Very obscure, delightfully weird

const WORDS = [
  {
    "word": "limerence",
    "pos": "noun",
    "definition": "The state of being infatuated or obsessed with another person, typically involuntary and characterized by a strong desire for reciprocation.",
    "example": "Her limerence made it impossible to concentrate on anything but the hope of seeing him again.",
    "roots": {
      "origin": "Coined by psychologist Dorothy Tennov in 1979, possibly from Latin 'limen' (threshold) — the threshold of emotional overwhelm."
    },
    "tier": 1,
    "pronunciation": "/ˈlɪm.ər.əns/"
  },
  {
    "word": "sonder",
    "pos": "noun",
    "definition": "The realization that each passerby has a life as vivid and complex as your own.",
    "example": "Standing in the crowded station, he was struck by a deep sonder watching hundreds of strangers rush past.",
    "roots": {
      "origin": "Coined by John Koenig in 'The Dictionary of Obscure Sorrows' (2012). From German 'sonder' (special) and French 'sonder' (to probe)."
    },
    "tier": 1,
    "pronunciation": "/ˈsɑn.dər/"
  },
  {
    "word": "petrichor",
    "pos": "noun",
    "definition": "The pleasant, earthy smell produced when rain falls on dry soil.",
    "example": "After weeks of drought, the first drops of rain released a wave of petrichor across the valley.",
    "roots": {
      "origin": "Greek 'petra' (stone) + 'ichor' (the fluid that flows in the veins of gods in Greek mythology). Coined in 1964 by Australian researchers.",
      "parts": [
        "petra → stone",
        "ichor → ethereal fluid"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpɛt.rɪ.kɔr/"
  },
  {
    "word": "ephemeral",
    "pos": "adjective",
    "definition": "Lasting for a very short time; transitory.",
    "example": "The cherry blossoms are beautiful precisely because they are so ephemeral.",
    "roots": {
      "origin": "Greek 'ephemeros' — lasting only a day.",
      "parts": [
        "epi → upon",
        "hemera → day"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈfɛm.ər.əl/"
  },
  {
    "word": "mellifluous",
    "pos": "adjective",
    "definition": "Sweet-sounding; pleasant to hear, especially of a person's voice or words.",
    "example": "The singer's mellifluous voice filled the cathedral with warmth.",
    "roots": {
      "origin": "Latin 'mellifluus'.",
      "parts": [
        "mel → honey",
        "fluere → to flow"
      ]
    },
    "tier": 1,
    "pronunciation": "/məˈlɪf.lu.əs/"
  },
  {
    "word": "serendipity",
    "pos": "noun",
    "definition": "The occurrence of events by chance in a happy or beneficial way.",
    "example": "It was pure serendipity that they met at the bookshop and discovered they were neighbors.",
    "roots": {
      "origin": "Coined by Horace Walpole in 1754, from the Persian fairy tale 'The Three Princes of Serendip' (an old name for Sri Lanka)."
    },
    "tier": 1,
    "pronunciation": "/ˌsɛr.ənˈdɪp.ɪ.ti/"
  },
  {
    "word": "laconic",
    "pos": "adjective",
    "definition": "Using very few words; concise to the point of seeming rude.",
    "example": "His laconic reply — 'No.' — ended the debate instantly.",
    "roots": {
      "origin": "Greek 'Lakonikos', referring to the people of Laconia (Sparta), who were famous for pithy speech. When Philip II of Macedon threatened 'If I invade Laconia, I shall turn you out,' the Spartans replied with a single word: 'If.'"
    },
    "tier": 1,
    "pronunciation": "/ləˈkɑn.ɪk/"
  },
  {
    "word": "ineffable",
    "pos": "adjective",
    "definition": "Too great or extreme to be expressed or described in words.",
    "example": "The beauty of the aurora borealis was truly ineffable.",
    "roots": {
      "origin": "Latin 'ineffabilis'.",
      "parts": [
        "in → not",
        "effari → to speak out",
        "ex + fari → out + to speak"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈɛf.ə.bəl/"
  },
  {
    "word": "sanguine",
    "pos": "adjective",
    "definition": "Optimistic or positive, especially in a difficult situation.",
    "example": "Despite the company's losses, the CEO remained sanguine about the future.",
    "roots": {
      "origin": "Latin 'sanguineus' (of blood). In medieval medicine, a 'sanguine' temperament was associated with an excess of blood, believed to produce cheerfulness and confidence.",
      "parts": [
        "sanguis → blood"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsæŋ.ɡwɪn/"
  },
  {
    "word": "panacea",
    "pos": "noun",
    "definition": "A solution or remedy for all difficulties or diseases.",
    "example": "There is no panacea for the world's environmental problems.",
    "roots": {
      "origin": "Greek 'panakeia', from the goddess Panakeia, daughter of Asclepius (god of medicine).",
      "parts": [
        "pan → all",
        "akos → remedy"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌpæn.əˈsi.ə/"
  },
  {
    "word": "quixotic",
    "pos": "adjective",
    "definition": "Exceedingly idealistic; unrealistic and impractical.",
    "example": "His quixotic plan to end all poverty single-handedly was admirable but doomed.",
    "roots": {
      "origin": "From Don Quixote, the delusionally idealistic knight in Cervantes' 1605 novel."
    },
    "tier": 1,
    "pronunciation": "/kwɪkˈsɑt.ɪk/"
  },
  {
    "word": "aplomb",
    "pos": "noun",
    "definition": "Self-confidence or assurance, especially in a demanding situation.",
    "example": "She handled the hostile interview questions with remarkable aplomb.",
    "roots": {
      "origin": "French 'aplomb' (perpendicularity, balance).",
      "parts": [
        "à → to/at",
        "plomb → lead (the metal), as in a plumb line — perfectly vertical, steady"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈplɑm/"
  },
  {
    "word": "insouciant",
    "pos": "adjective",
    "definition": "Showing a casual lack of concern; carefree.",
    "example": "He gave an insouciant shrug when told the deadline had moved up.",
    "roots": {
      "origin": "French 'insouciant'.",
      "parts": [
        "in → not",
        "soucier → to care (from Latin sollicitare, to disturb)"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈsu.si.ənt/"
  },
  {
    "word": "verisimilitude",
    "pos": "noun",
    "definition": "The appearance of being true or real.",
    "example": "The novel's verisimilitude made readers forget it was fiction.",
    "roots": {
      "origin": "Latin 'verisimilitudo'.",
      "parts": [
        "verus → true",
        "similis → similar"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌvɛr.ɪ.sɪˈmɪl.ɪ.tjud/"
  },
  {
    "word": "vicissitude",
    "pos": "noun",
    "definition": "A change of circumstances or fortune, typically one that is unwelcome or unpleasant.",
    "example": "The vicissitudes of life in a frontier town made resilience a necessity.",
    "roots": {
      "origin": "Latin 'vicissitudo' (change, alternation).",
      "parts": [
        "vicis → turn, change"
      ]
    },
    "tier": 1,
    "pronunciation": "/vɪˈsɪs.ɪ.tjud/"
  },
  {
    "word": "obsequious",
    "pos": "adjective",
    "definition": "Obedient or attentive to an excessive or servile degree.",
    "example": "The obsequious waiter hovered at their table, refilling glasses after every sip.",
    "roots": {
      "origin": "Latin 'obsequiosus'.",
      "parts": [
        "ob → toward",
        "sequi → to follow"
      ]
    },
    "tier": 1,
    "pronunciation": "/əbˈsi.kwi.əs/"
  },
  {
    "word": "perfunctory",
    "pos": "adjective",
    "definition": "Carried out with a minimum of effort or reflection; done as a routine duty.",
    "example": "She gave a perfunctory nod before returning to her phone.",
    "roots": {
      "origin": "Latin 'perfunctorius'.",
      "parts": [
        "per → through (completely)",
        "fungi → to perform"
      ]
    },
    "tier": 1,
    "pronunciation": "/pərˈfʌŋk.tər.i/"
  },
  {
    "word": "sycophant",
    "pos": "noun",
    "definition": "A person who acts obsequiously toward someone important in order to gain advantage; a flatterer.",
    "example": "The king surrounded himself with sycophants who told him only what he wanted to hear.",
    "roots": {
      "origin": "Greek 'sykophantes' — originally meaning 'one who shows figs,' possibly referring to informers who reported illegal fig exporters in ancient Athens.",
      "parts": [
        "sykon → fig",
        "phainein → to show"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɪk.ə.fænt/"
  },
  {
    "word": "perspicacious",
    "pos": "adjective",
    "definition": "Having a ready insight into and understanding of things; mentally sharp.",
    "example": "A perspicacious reader will notice the foreshadowing in chapter one.",
    "roots": {
      "origin": "Latin 'perspicax'.",
      "parts": [
        "per → through",
        "specere → to look"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌpɜr.spɪˈkeɪ.ʃəs/"
  },
  {
    "word": "recalcitrant",
    "pos": "adjective",
    "definition": "Having an obstinately uncooperative attitude toward authority or discipline.",
    "example": "The recalcitrant teenager refused every suggestion offered by the counselor.",
    "roots": {
      "origin": "Latin 'recalcitrare' — to kick back.",
      "parts": [
        "re → back",
        "calcitrare → to kick (from calx, heel)"
      ]
    },
    "tier": 1,
    "pronunciation": "/rɪˈkæl.sɪ.trənt/"
  },
  {
    "word": "defenestration",
    "pos": "noun",
    "definition": "The act of throwing someone or something out of a window.",
    "example": "The Defenestration of Prague in 1618 helped spark the Thirty Years' War.",
    "roots": {
      "origin": "Latin, coined in the 17th century.",
      "parts": [
        "de → down from",
        "fenestra → window"
      ]
    },
    "tier": 2,
    "pronunciation": "/dɪˌfɛn.ɪˈstreɪ.ʃən/"
  },
  {
    "word": "sesquipedalian",
    "pos": "adjective",
    "definition": "Characterized by long words; long-winded. (Of a word itself) polysyllabic.",
    "example": "His sesquipedalian writing style made even simple ideas seem impenetrable.",
    "roots": {
      "origin": "Latin 'sesquipedalis' — literally 'a foot and a half long,' used by Horace to mock overly long words.",
      "parts": [
        "sesqui → one and a half",
        "pes/pedis → foot"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌsɛs.kwɪ.pɪˈdeɪ.li.ən/"
  },
  {
    "word": "apricity",
    "pos": "noun",
    "definition": "The warmth of the sun in winter.",
    "example": "They sat on the bench enjoying the apricity on an otherwise frigid January afternoon.",
    "roots": {
      "origin": "Latin 'apricus' — exposed to the sun, warmed by the sun.",
      "parts": [
        "apricus → sun-warmed, basking"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈprɪs.ɪ.ti/"
  },
  {
    "word": "callipygian",
    "pos": "adjective",
    "definition": "Having well-shaped buttocks.",
    "example": "The Venus Callipyge statue in Naples is perhaps the most famous callipygian figure in art history.",
    "roots": {
      "origin": "Greek 'kallipygos'.",
      "parts": [
        "kallos → beauty",
        "pyge → buttocks"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌkæl.ɪˈpɪdʒ.i.ən/"
  },
  {
    "word": "eigengrau",
    "pos": "noun",
    "definition": "The dark gray color perceived by the eye in perfect darkness, distinct from black.",
    "example": "Close your eyes in a dark room and the color you see isn't black — it's eigengrau.",
    "roots": {
      "origin": "German compound word.",
      "parts": [
        "eigen → own, intrinsic",
        "grau → gray"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈaɪ.ɡən.ɡraʊ/"
  },
  {
    "word": "velleity",
    "pos": "noun",
    "definition": "A wish or inclination not strong enough to lead to action.",
    "example": "His desire to learn the piano never progressed beyond a velleity.",
    "roots": {
      "origin": "Latin 'velleitas'.",
      "parts": [
        "velle → to wish (a weaker form of 'voluntas' — will)"
      ]
    },
    "tier": 2,
    "pronunciation": "/vɛˈli.ɪ.ti/"
  },
  {
    "word": "logorrhea",
    "pos": "noun",
    "definition": "A tendency to extreme loquacity; excessive and often incoherent talkativeness.",
    "example": "The professor's logorrhea turned a simple answer into a forty-minute tangent.",
    "roots": {
      "origin": "Greek compound.",
      "parts": [
        "logos → word, speech",
        "rhoia → flow (same root as 'diarrhea')"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌlɑɡ.əˈri.ə/"
  },
  {
    "word": "tmesis",
    "pos": "noun",
    "definition": "The separation of parts of a compound word by an intervening word, used for emphasis.",
    "example": "'Abso-bloody-lutely' is a classic example of tmesis.",
    "roots": {
      "origin": "Greek 'tmesis' — a cutting.",
      "parts": [
        "temnein → to cut"
      ]
    },
    "tier": 2,
    "pronunciation": "/təˈmi.sɪs/"
  },
  {
    "word": "alexithymia",
    "pos": "noun",
    "definition": "The inability to recognize or describe one's own emotions.",
    "example": "His alexithymia meant he could never answer when asked how he felt about something.",
    "roots": {
      "origin": "Modern coinage from Greek roots (1970s).",
      "parts": [
        "a → without",
        "lexis → word",
        "thymos → emotion, spirit"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˌlɛk.sɪˈθɪm.i.ə/"
  },
  {
    "word": "hiraeth",
    "pos": "noun",
    "definition": "A deep longing for a home you cannot return to, or that maybe never was.",
    "example": "The emigrant felt hiraeth every time she smelled bread baking, reminded of her grandmother's kitchen.",
    "roots": {
      "origin": "Welsh — no direct English equivalent. One of the quintessential 'untranslatable' words."
    },
    "tier": 2,
    "pronunciation": "/ˈhɪr.aɪθ/"
  },
  {
    "word": "autoschediasm",
    "pos": "noun",
    "definition": "Something improvised or composed on the spur of the moment.",
    "example": "His wedding toast was a charming autoschediasm that somehow outshone the rehearsed speeches.",
    "roots": {
      "origin": "Greek 'autoschediasma'.",
      "parts": [
        "auto → self",
        "schedios → near, offhand, improvised"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɔˌtoʊˈskɛd.i.æz.əm/"
  },
  {
    "word": "apophenia",
    "pos": "noun",
    "definition": "The tendency to perceive meaningful connections between unrelated things.",
    "example": "Seeing faces in clouds is a gentle form of apophenia.",
    "roots": {
      "origin": "German 'Apophänie', coined by psychiatrist Klaus Conrad in 1958.",
      "parts": [
        "apo → away from",
        "phainein → to show, appear"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.əˈfi.ni.ə/"
  },
  {
    "word": "palimpsest",
    "pos": "noun",
    "definition": "A manuscript on which the original writing has been effaced to make room for later writing, but traces of the original remain.",
    "example": "The city is a palimpsest, each generation's architecture layered over the last.",
    "roots": {
      "origin": "Greek 'palimpsestos'.",
      "parts": [
        "palin → again",
        "psestos → rubbed smooth (from psen, to rub)"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpæl.ɪmp.sɛst/"
  },
  {
    "word": "susurrus",
    "pos": "noun",
    "definition": "A whispering or rustling sound.",
    "example": "A susurrus of wind through the wheat field was the only sound for miles.",
    "roots": {
      "origin": "Latin 'susurrus' — a humming, muttering. An onomatopoeia: the word sounds like what it describes."
    },
    "tier": 2,
    "pronunciation": "/suˈsɜr.əs/"
  },
  {
    "word": "phosphene",
    "pos": "noun",
    "definition": "A ring or spot of light produced by pressure on the eyeball.",
    "example": "When she rubbed her tired eyes, bursts of phosphenes danced across her vision.",
    "roots": {
      "origin": "Greek compound.",
      "parts": [
        "phos → light",
        "phainein → to show"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈfɑs.fin/"
  },
  {
    "word": "ultracrepidarian",
    "pos": "noun",
    "definition": "A person who gives opinions on matters outside their knowledge.",
    "example": "Social media is full of ultracrepidarians confidently opining on epidemiology.",
    "roots": {
      "origin": "From Latin 'ultra crepidam' — 'beyond the sandal.'",
      "parts": [
        "ultra → beyond",
        "crepida → sandal, sole"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌʌl.trə.ˌkrɛp.ɪˈdɛr.i.ən/"
  },
  {
    "word": "parapraxis",
    "pos": "noun",
    "definition": "A slip of the tongue or pen thought to reveal unconscious wishes. Also known as a 'Freudian slip.'",
    "example": "Calling his new girlfriend by his ex's name was an embarrassing parapraxis.",
    "roots": {
      "origin": "Greek, popularized by Sigmund Freud.",
      "parts": [
        "para → beside, amiss",
        "praxis → action, deed"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpær.əˈpræk.sɪs/"
  },
  {
    "word": "syncretism",
    "pos": "noun",
    "definition": "The amalgamation of different religions, cultures, or schools of thought.",
    "example": "Vodou is a syncretism of West African spiritual traditions and Catholicism.",
    "roots": {
      "origin": "Greek 'synkretismos'.",
      "parts": [
        "syn → together",
        "Krete → Crete"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsɪŋ.krɪ.tɪz.əm/"
  },
  {
    "word": "liminal",
    "pos": "adjective",
    "definition": "Occupying a position at a boundary or threshold. Relating to a transitional stage.",
    "example": "Airports are liminal spaces — you're neither where you were nor where you're going.",
    "roots": {
      "origin": "Latin 'limen' — threshold.",
      "parts": [
        "limen → threshold, boundary"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈlɪm.ɪ.nəl/"
  },
  {
    "word": "cacoethes",
    "pos": "noun",
    "definition": "An irresistible urge to do something inadvisable.",
    "example": "He had a cacoethes for correcting strangers' grammar, which won him no friends.",
    "roots": {
      "origin": "Greek 'kakoethes'.",
      "parts": [
        "kakos → bad",
        "ethos → disposition, habit"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌkæk.oʊˈi.θiz/"
  },
  {
    "word": "ferrule",
    "pos": "noun",
    "definition": "A metal cap or band placed on the end of a stick to strengthen it.",
    "example": "The brass ferrule on his walking cane clicked against the cobblestones.",
    "roots": {
      "origin": "Latin 'viriola' (little bracelet). Spelling influenced by 'ferrum' (iron)."
    },
    "tier": 3,
    "pronunciation": "/ˈfɛr.əl/"
  },
  {
    "word": "aglet",
    "pos": "noun",
    "definition": "The plastic or metal sheath at the end of a shoelace.",
    "example": "Without its aglet, the frayed shoelace refused to thread through the eyelet.",
    "roots": {
      "origin": "French 'aiguillette', diminutive of 'aiguille' (needle).",
      "parts": [
        "aiguille → needle (from Latin acus)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈæɡ.lɪt/"
  },
  {
    "word": "obelus",
    "pos": "noun",
    "definition": "The symbol ÷ (division sign), or a dagger symbol (†) used in ancient manuscripts.",
    "example": "Medieval scribes used the obelus to flag text they suspected was a later addition.",
    "roots": {
      "origin": "Greek 'obelos' — a pointed stick, skewer.",
      "parts": [
        "obelos → spit, pointed pillar"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɑb.ɪ.ləs/"
  },
  {
    "word": "bruxism",
    "pos": "noun",
    "definition": "The involuntary or habitual grinding of the teeth, typically during sleep.",
    "example": "Her dentist suggested a night guard to protect against the damage from bruxism.",
    "roots": {
      "origin": "Greek 'brychein' — to gnash the teeth.",
      "parts": [
        "brychein → to gnash, grind"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈbrʌk.sɪz.əm/"
  },
  {
    "word": "zugzwang",
    "pos": "noun",
    "definition": "A situation where the obligation to act is a disadvantage, because any move worsens one's position.",
    "example": "The negotiations had reached a zugzwang — any concession would weaken their position.",
    "roots": {
      "origin": "German compound.",
      "parts": [
        "Zug → move",
        "Zwang → compulsion, obligation"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtsʊɡ.tsvæŋ/"
  },
  {
    "word": "proprioception",
    "pos": "noun",
    "definition": "The unconscious sense of where your body parts are without looking.",
    "example": "You can touch your nose with your eyes closed thanks to proprioception.",
    "roots": {
      "origin": "Latin compound, coined by neurophysiologist Charles Sherrington.",
      "parts": [
        "proprius → one's own",
        "capere → to take, grasp"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌproʊ.pri.oʊˈsɛp.ʃən/"
  },
  {
    "word": "lethologica",
    "pos": "noun",
    "definition": "The inability to remember a particular word — the 'tip of the tongue' phenomenon.",
    "example": "She experienced a maddening bout of lethologica, the actor's name dancing just out of reach.",
    "roots": {
      "origin": "Greek compound.",
      "parts": [
        "lethe → forgetfulness",
        "logos → word"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌlɛθ.əˈlɑdʒ.ɪ.kə/"
  },
  {
    "word": "merism",
    "pos": "noun",
    "definition": "A rhetorical device referring to a whole by listing some of its parts.",
    "example": "'Lock, stock, and barrel' is a merism for a complete gun, meaning 'everything.'",
    "roots": {
      "origin": "Greek 'merismos' — a dividing.",
      "parts": [
        "merizein → to divide",
        "meros → part"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈmɛr.ɪz.əm/"
  },
  {
    "word": "tittle",
    "pos": "noun",
    "definition": "The small distinguishing mark on a letter, such as the dot over an 'i' or 'j'.",
    "example": "The phrase 'jot or tittle' refers to the smallest possible detail.",
    "roots": {
      "origin": "Latin 'titulus' — title, superscription."
    },
    "tier": 3,
    "pronunciation": "/ˈtɪt.əl/"
  },
  {
    "word": "kenopsia",
    "pos": "noun",
    "definition": "The eerie, forlorn atmosphere of a place usually bustling but now abandoned.",
    "example": "Walking through the empty school on a Sunday filled her with kenopsia.",
    "roots": {
      "origin": "Coined by John Koenig in 'The Dictionary of Obscure Sorrows.'",
      "parts": [
        "kenos → empty (Greek)",
        "opsis → sight, view (Greek)"
      ]
    },
    "tier": 3,
    "pronunciation": "/kɛˈnɑp.si.ə/"
  },
  {
    "word": "widdershins",
    "pos": "adverb",
    "definition": "In a direction contrary to the sun's course; counterclockwise.",
    "example": "The witches danced widdershins around the fire at midnight.",
    "roots": {
      "origin": "Middle Low German 'weddersins' — opposite course.",
      "parts": [
        "wider → against",
        "sin → direction"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈwɪd.ər.ʃɪnz/"
  },
  {
    "word": "mamihlapinatapai",
    "pos": "noun",
    "definition": "A look shared by two people, each wishing the other would initiate something both desire.",
    "example": "They shared a mamihlapinatapai across the room, each hoping the other would speak first.",
    "roots": {
      "origin": "Yaghan language (Tierra del Fuego). Listed in Guinness Book of World Records as the 'most succinct word.'"
    },
    "tier": 3,
    "pronunciation": "/ˌmɑ.mi.ˌlɑp.ɪ.ˈnɑt.ə.paɪ/"
  },
  {
    "word": "recrudescence",
    "pos": "noun",
    "definition": "The recurrence of an undesirable condition after a period of abatement.",
    "example": "The recrudescence of violence after the ceasefire shattered hopes for peace.",
    "roots": {
      "origin": "Latin 'recrudescere'.",
      "parts": [
        "re → again",
        "crudescere → to become raw (from crudus — raw)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌri.kruˈdɛs.əns/"
  },
  {
    "word": "colophon",
    "pos": "noun",
    "definition": "A publisher's emblem or a statement at the end of a book about its production.",
    "example": "The colophon at the back noted the book was printed on acid-free paper in Garamond type.",
    "roots": {
      "origin": "Greek 'kolophon' — summit, finishing touch. From the ancient city of Colophon."
    },
    "tier": 3,
    "pronunciation": "/ˈkɑl.ə.fɑn/"
  },
  {
    "word": "shibboleth",
    "pos": "noun",
    "definition": "A custom or belief distinguishing a particular group. Originally: a pronunciation test for detecting foreigners.",
    "example": "Pronouncing 'GIF' with a hard G has become a shibboleth among certain internet communities.",
    "roots": {
      "origin": "Hebrew 'shibboleth' — ear of grain. From the Book of Judges: used to identify Ephraimites who couldn't pronounce 'sh.'"
    },
    "tier": 3,
    "pronunciation": "/ˈʃɪb.ə.lɛθ/"
  },
  {
    "word": "antepenultimate",
    "pos": "adjective",
    "definition": "Third from last.",
    "example": "In the word 'banana,' the stress falls on the antepenultimate syllable.",
    "roots": {
      "origin": "Latin compound.",
      "parts": [
        "ante → before",
        "paene → almost",
        "ultimus → last"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌæn.ti.pɪˈnʌl.tɪ.mɪt/"
  },
  {
    "word": "scurryfunge",
    "pos": "verb",
    "definition": "To rush around cleaning when you see company is coming.",
    "example": "She scurryfunged the living room in a panic when the doorbell rang unexpectedly.",
    "roots": {
      "origin": "English dialectal (18th century). Likely a playful compound of 'scurry' and 'funge.'"
    },
    "tier": 3,
    "pronunciation": "/ˈskɜr.i.fʌndʒ/"
  },
  {
    "word": "scripturient",
    "pos": "adjective",
    "definition": "Having a consuming passion for writing.",
    "example": "The scripturient teenager filled journal after journal with stories and poems.",
    "roots": {
      "origin": "Latin.",
      "parts": [
        "scribere → to write",
        "-urient → having desire for"
      ]
    },
    "tier": 3,
    "pronunciation": "/skrɪpˈtjʊr.i.ənt/"
  },
  {
    "word": "abderian",
    "pos": "adjective",
    "definition": "Given to incessant or foolish laughter.",
    "example": "His abderian reaction to the solemn ceremony was deeply inappropriate.",
    "roots": {
      "origin": "From Abdera, an ancient Thracian city whose inhabitants were stereotyped as stupid and prone to silly laughter."
    },
    "tier": 3,
    "pronunciation": "/æbˈdɪr.i.ən/"
  },
  {
    "word": "psithurism",
    "pos": "noun",
    "definition": "The sound of wind through trees; the rustling of leaves.",
    "example": "She fell asleep on the hammock to the gentle psithurism of the oaks overhead.",
    "roots": {
      "origin": "Greek 'psithuros' — whispering.",
      "parts": [
        "psithuros → whispering"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsɪθ.jʊr.ɪz.əm/"
  },
  {
    "word": "abibliophobia",
    "pos": "noun",
    "definition": "The fear of running out of things to read.",
    "example": "Her abibliophobia explained the precautionary stack of ten books in her carry-on.",
    "roots": {
      "origin": "Modern coinage from Latin and Greek roots.",
      "parts": [
        "a → without",
        "biblio → book",
        "phobia → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌeɪ.ˌbɪb.li.oʊˈfoʊ.bi.ə/"
  },
  {
    "word": "xertz",
    "pos": "verb",
    "definition": "To gulp down food or drink greedily.",
    "example": "He xertzed the entire glass of water after the long run.",
    "roots": {
      "origin": "Origin uncertain — possibly dialectal English. Gained currency through competitive Scrabble."
    },
    "tier": 3,
    "pronunciation": "/zɜrts/"
  },
  {
    "word": "snollygoster",
    "pos": "noun",
    "definition": "A shrewd, unprincipled person, especially a politician.",
    "example": "The editorial called the senator a snollygoster who would say anything to get reelected.",
    "roots": {
      "origin": "American English (19th century). Possibly from 'snallygaster,' a mythical creature from Maryland German immigrant folklore."
    },
    "tier": 3,
    "pronunciation": "/ˈsnɑl.i.ɡɑs.tər/"
  },
  {
    "word": "clinomania",
    "pos": "noun",
    "definition": "An excessive desire to stay in bed.",
    "example": "Every Monday morning, her clinomania fought a losing battle against her alarm clock.",
    "roots": {
      "origin": "Greek compound.",
      "parts": [
        "klinein → to lean, recline",
        "mania → madness, obsession"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌklaɪ.noʊˈmeɪ.ni.ə/"
  },
  {
    "word": "crepuscular",
    "pos": "adjective",
    "definition": "Of or relating to twilight. (Of an animal) active at dawn or dusk.",
    "example": "Deer are crepuscular, which is why you're most likely to see them at dusk.",
    "roots": {
      "origin": "Latin 'crepusculum' — twilight.",
      "parts": [
        "crepusculum → twilight"
      ]
    },
    "tier": 3,
    "pronunciation": "/krɪˈpʌs.kjʊ.lər/"
  },
  {
    "word": "plangent",
    "pos": "adjective",
    "definition": "Loud, reverberating, and often mournful in sound. Used to describe resonant, melancholy tones.",
    "example": "The plangent tolling of the bell carried across the empty village square.",
    "roots": {
      "origin": "Latin 'plangens', present participle of 'plangere' (to beat, to lament).",
      "parts": [
        "plangere → to beat the breast in grief"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈplæn.dʒənt/"
  },
  {
    "word": "saturnine",
    "pos": "adjective",
    "definition": "Having a gloomy, sluggish temperament; slow and grim in manner.",
    "example": "His saturnine expression rarely softened, even at parties.",
    "roots": {
      "origin": "From Saturn, the Roman god associated with melancholy, via medieval astrology which linked the planet Saturn with gloominess.",
      "parts": [
        "Saturnus → Roman god of time and harvest"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsæt.ər.naɪn/"
  },
  {
    "word": "mercurial",
    "pos": "adjective",
    "definition": "Subject to sudden or unpredictable changes of mood; volatile and lively.",
    "example": "Her mercurial temperament kept colleagues guessing about her reaction to any given piece of news.",
    "roots": {
      "origin": "From Mercury, the Roman messenger god known for speed and changeability, also linked to the element mercury's fluid behavior.",
      "parts": [
        "Mercurius → Roman god of messengers and trade"
      ]
    },
    "tier": 1,
    "pronunciation": "/mərˈkjʊr.i.əl/"
  },
  {
    "word": "ennui",
    "pos": "noun",
    "definition": "A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.",
    "example": "A long rainy week without plans had settled over him like ennui.",
    "roots": {
      "origin": "French 'ennui', from Old French 'enui', from 'enuier' (to bore, to annoy), itself from Latin 'inodiare' (to make hateful).",
      "parts": [
        "in → intensive",
        "odium → hatred"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɑnˈwi/"
  },
  {
    "word": "languor",
    "pos": "noun",
    "definition": "A state of pleasant tiredness or dreamy inertia; listless weakness or relaxation.",
    "example": "The heat of the afternoon brought a comfortable languor over the whole household.",
    "roots": {
      "origin": "Latin 'languor' (faintness, weariness), from 'languere' (to be faint or weak).",
      "parts": [
        "languere → to be faint"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlæŋ.ɡər/"
  },
  {
    "word": "specious",
    "pos": "adjective",
    "definition": "Superficially plausible but actually wrong or misleading; deceptively attractive in appearance.",
    "example": "The lawyer's argument sounded compelling in the moment, but it was ultimately specious.",
    "roots": {
      "origin": "Latin 'speciosus' (good-looking, plausible), from 'species' (appearance, kind).",
      "parts": [
        "species → appearance",
        "osus → full of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈspi.ʃəs/"
  },
  {
    "word": "didactic",
    "pos": "adjective",
    "definition": "Intended to teach or instruct, often in a way that is perceived as overly moralizing or preachy.",
    "example": "The novel had its charms, but its didactic tone made the moral lessons feel heavy-handed.",
    "roots": {
      "origin": "Greek 'didaktikos' (skilled at teaching), from 'didaskein' (to teach).",
      "parts": [
        "didaskein → to teach"
      ]
    },
    "tier": 1,
    "pronunciation": "/daɪˈdæk.tɪk/"
  },
  {
    "word": "tendentious",
    "pos": "adjective",
    "definition": "Expressing a particular point of view; promoting a cause; biased.",
    "example": "The documentary was criticized for being tendentious rather than balanced.",
    "roots": {
      "origin": "From Medieval Latin 'tendentia' (tendency), from Latin 'tendere' (to stretch, to aim).",
      "parts": [
        "tendere → to stretch toward"
      ]
    },
    "tier": 1,
    "pronunciation": "/tɛnˈdɛn.ʃəs/"
  },
  {
    "word": "diaphanous",
    "pos": "adjective",
    "definition": "Light, delicate, and translucent; so thin as to be nearly transparent.",
    "example": "She wore a diaphanous scarf that rippled like mist in the morning breeze.",
    "roots": {
      "origin": "Greek 'diaphanes', from 'dia' (through) + 'phainein' (to show).",
      "parts": [
        "dia → through",
        "phainein → to show"
      ]
    },
    "tier": 1,
    "pronunciation": "/daɪˈæf.ə.nəs/"
  },
  {
    "word": "pellucid",
    "pos": "adjective",
    "definition": "Translucently clear; easily understood; expressed without obscurity.",
    "example": "His pellucid prose made even the most complex ideas feel straightforward.",
    "roots": {
      "origin": "Latin 'pellucidus', from 'per' (through) + 'lucidus' (bright, clear).",
      "parts": [
        "per → through",
        "lux/lucis → light"
      ]
    },
    "tier": 1,
    "pronunciation": "/pɛˈlu.sɪd/"
  },
  {
    "word": "lachrymose",
    "pos": "adjective",
    "definition": "Tearful or given to weeping; inducing tears; mournful.",
    "example": "The film's lachrymose ending left the entire audience reaching for tissues.",
    "roots": {
      "origin": "Latin 'lacrimosus', from 'lacrima' (tear).",
      "parts": [
        "lacrima → tear"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlæk.rɪ.moʊs/"
  },
  {
    "word": "perspicuous",
    "pos": "adjective",
    "definition": "Clearly expressed and easily understood; lucid.",
    "example": "A good teacher makes even difficult concepts perspicuous through careful choice of words.",
    "roots": {
      "origin": "Latin 'perspicuus' (transparent, clear), from 'perspicere' (to look through).",
      "parts": [
        "per → through",
        "specere → to look"
      ]
    },
    "tier": 1,
    "pronunciation": "/pərˈspɪk.ju.əs/"
  },
  {
    "word": "pulchritudinous",
    "pos": "adjective",
    "definition": "Having great physical beauty; beautiful.",
    "example": "The word 'pulchritudinous' is ironic — it describes beauty in the ugliest-sounding syllables.",
    "roots": {
      "origin": "Latin 'pulchritudo' (beauty), from 'pulcher' (beautiful).",
      "parts": [
        "pulcher → beautiful"
      ]
    },
    "tier": 1,
    "pronunciation": "/pʌlˈkrɪt.ɪ.du.dɪ.nəs/"
  },
  {
    "word": "voluble",
    "pos": "adjective",
    "definition": "Speaking or spoken incessantly and fluently; talkative.",
    "example": "She was voluble at dinner parties, moving seamlessly from one anecdote to the next.",
    "roots": {
      "origin": "Latin 'volubilis' (easily rolling, fluent), from 'volvere' (to roll).",
      "parts": [
        "volvere → to roll"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvɑl.jʊ.bəl/"
  },
  {
    "word": "loquacious",
    "pos": "adjective",
    "definition": "Tending to talk a great deal; excessively chatty.",
    "example": "The loquacious tour guide filled every moment of the journey with historical commentary.",
    "roots": {
      "origin": "Latin 'loquax' (talkative), from 'loqui' (to speak).",
      "parts": [
        "loqui → to speak"
      ]
    },
    "tier": 1,
    "pronunciation": "/loʊˈkweɪ.ʃəs/"
  },
  {
    "word": "magniloquent",
    "pos": "adjective",
    "definition": "Using high-flown or bombastic language; pompously worded.",
    "example": "The senator's magniloquent acceptance speech was long on flourish and short on substance.",
    "roots": {
      "origin": "Latin 'magniloquus', from 'magnus' (great) + 'loqui' (to speak).",
      "parts": [
        "magnus → great",
        "loqui → to speak"
      ]
    },
    "tier": 1,
    "pronunciation": "/mæɡˈnɪl.ə.kwənt/"
  },
  {
    "word": "sedulous",
    "pos": "adjective",
    "definition": "Showing dedication and diligence; persevering and assiduous.",
    "example": "Through sedulous practice, she transformed herself from an average student into a virtuoso.",
    "roots": {
      "origin": "Latin 'sedulus' (busy, attentive), from 'sedulo' (sincerely, without deception).",
      "parts": [
        "se → without",
        "dolus → trickery, guile"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɛdʒ.ʊ.ləs/"
  },
  {
    "word": "mendacious",
    "pos": "adjective",
    "definition": "Not telling the truth; lying; given to frequent deception.",
    "example": "The memoir was later revealed to be largely mendacious, a fabrication dressed as confession.",
    "roots": {
      "origin": "Latin 'mendax' (lying), from 'mendum' (fault, defect).",
      "parts": [
        "mendum → fault, defect"
      ]
    },
    "tier": 1,
    "pronunciation": "/mɛnˈdeɪ.ʃəs/"
  },
  {
    "word": "fulgent",
    "pos": "adjective",
    "definition": "Shining brilliantly; radiant; gleaming.",
    "example": "The fulgent dome of the cathedral caught the midday sun and glowed like burnished gold.",
    "roots": {
      "origin": "Latin 'fulgens', present participle of 'fulgere' (to shine, to flash).",
      "parts": [
        "fulgere → to shine, flash"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈfʌl.dʒənt/"
  },
  {
    "word": "tenebrous",
    "pos": "adjective",
    "definition": "Dark, shadowy, and mysterious; full of obscurity.",
    "example": "They made their way through tenebrous corridors that smelled of damp stone.",
    "roots": {
      "origin": "Latin 'tenebrosus', from 'tenebrae' (darkness).",
      "parts": [
        "tenebrae → darkness, shadows"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈtɛn.ɪ.brəs/"
  },
  {
    "word": "melancholic",
    "pos": "adjective",
    "definition": "Having a feeling of pensive sadness, typically with no obvious cause; characterized by melancholy.",
    "example": "The painting had a melancholic quality that lingered long after you had looked away.",
    "roots": {
      "origin": "Greek 'melankholia', from 'melas' (black) + 'khole' (bile), reflecting the ancient humoral theory that excess black bile caused sadness.",
      "parts": [
        "melas → black",
        "khole → bile"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌmɛl.ənˈkɑl.ɪk/"
  },
  {
    "word": "sanguinary",
    "pos": "adjective",
    "definition": "Involving or causing much bloodshed; bloodthirsty.",
    "example": "The historian described the campaign as one of the most sanguinary of the century.",
    "roots": {
      "origin": "Latin 'sanguinarius', from 'sanguis' (blood).",
      "parts": [
        "sanguis → blood"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsæŋ.ɡwɪ.nɛr.i/"
  },
  {
    "word": "lugubrious",
    "pos": "adjective",
    "definition": "Looking or sounding mournful and dismal, often in an exaggerated way.",
    "example": "The clown's lugubrious expression was oddly funnier than any smile could have been.",
    "roots": {
      "origin": "Latin 'lugubris', from 'lugere' (to mourn).",
      "parts": [
        "lugere → to mourn"
      ]
    },
    "tier": 1,
    "pronunciation": "/luˈɡu.bri.əs/"
  },
  {
    "word": "truculent",
    "pos": "adjective",
    "definition": "Eager or quick to argue or fight; aggressively defiant.",
    "example": "The truculent witness refused to answer questions without challenging their premise.",
    "roots": {
      "origin": "Latin 'truculentus', from 'trux/trucis' (fierce, savage).",
      "parts": [
        "trux → fierce, savage"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈtrʌk.jʊ.lənt/"
  },
  {
    "word": "contumacious",
    "pos": "adjective",
    "definition": "Stubbornly or willfully disobedient to authority; insubordinate.",
    "example": "The contumacious student refused to stand during the school's formal assembly.",
    "roots": {
      "origin": "Latin 'contumax' (obstinate), from 'con' (intensive) + 'tumere' (to swell with pride).",
      "parts": [
        "con → intensive",
        "tumere → to swell with pride"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌkɑn.tjʊˈmeɪ.ʃəs/"
  },
  {
    "word": "pusillanimous",
    "pos": "adjective",
    "definition": "Showing a lack of courage or determination; timid and cowardly.",
    "example": "The pusillanimous response from leadership only emboldened those calling for change.",
    "roots": {
      "origin": "Late Latin 'pusillanimis', from 'pusillus' (very small) + 'animus' (spirit, soul).",
      "parts": [
        "pusillus → very small",
        "animus → spirit"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌpju.sɪˈlæn.ɪ.məs/"
  },
  {
    "word": "magnanimous",
    "pos": "adjective",
    "definition": "Generous or forgiving, especially toward a rival or someone less powerful.",
    "example": "In victory, she was magnanimous, praising her opponent's effort with genuine warmth.",
    "roots": {
      "origin": "Latin 'magnanimus', from 'magnus' (great) + 'animus' (spirit, soul).",
      "parts": [
        "magnus → great",
        "animus → spirit"
      ]
    },
    "tier": 1,
    "pronunciation": "/mæɡˈnæn.ɪ.məs/"
  },
  {
    "word": "querulous",
    "pos": "adjective",
    "definition": "Complaining in a whining or petulant manner; habitually fretful.",
    "example": "After hours of delay, even the most patient passengers grew querulous.",
    "roots": {
      "origin": "Latin 'querulus', from 'queri' (to complain).",
      "parts": [
        "queri → to complain"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkwɛr.ʊ.ləs/"
  },
  {
    "word": "diffident",
    "pos": "adjective",
    "definition": "Modest or shy due to a lack of self-confidence; reluctant to assert oneself.",
    "example": "Despite her talent, she was diffident about sharing her work in public.",
    "roots": {
      "origin": "Latin 'diffidere' (to mistrust), from 'dis' (not) + 'fidere' (to trust).",
      "parts": [
        "dis → not, apart",
        "fidere → to trust"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈdɪf.ɪ.dənt/"
  },
  {
    "word": "ebullient",
    "pos": "adjective",
    "definition": "Cheerful and full of energy; enthusiastically exuberant.",
    "example": "His ebullient personality made every meeting feel like a celebration.",
    "roots": {
      "origin": "Latin 'ebullire' (to boil up, to bubble over), from 'ex' (out) + 'bullire' (to boil).",
      "parts": [
        "ex → out",
        "bullire → to boil"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈbʊl.jənt/"
  },
  {
    "word": "phlegmatic",
    "pos": "adjective",
    "definition": "Having an unemotional and stolidly calm disposition; not easily excited.",
    "example": "He took the devastating news in a phlegmatic way that unnerved those around him.",
    "roots": {
      "origin": "Greek 'phlegmatikos', from 'phlegma' (inflammation, phlegm), one of the four humors associated with calm temperament.",
      "parts": [
        "phlegma → phlegm, inflammation"
      ]
    },
    "tier": 1,
    "pronunciation": "/flɛɡˈmæt.ɪk/"
  },
  {
    "word": "choleric",
    "pos": "adjective",
    "definition": "Easily angered; bad-tempered and irritable.",
    "example": "The choleric director stormed off set after the third take failed to satisfy him.",
    "roots": {
      "origin": "Greek 'kholerikos', from 'khole' (bile). In humoral theory, excess yellow bile caused irritability.",
      "parts": [
        "khole → bile"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkɑl.ər.ɪk/"
  },
  {
    "word": "inveterate",
    "pos": "adjective",
    "definition": "Having a habit, activity, or interest that is long-established and unlikely to change.",
    "example": "She was an inveterate traveler who could not stay in one city for more than a few months.",
    "roots": {
      "origin": "Latin 'inveteratus', from 'in' (intensive) + 'vetus/veteris' (old).",
      "parts": [
        "in → intensive",
        "vetus → old"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈvɛt.ər.ɪt/"
  },
  {
    "word": "inimical",
    "pos": "adjective",
    "definition": "Tending to obstruct or harm; hostile; unfriendly.",
    "example": "The harsh climate was inimical to the crops they had hoped to grow.",
    "roots": {
      "origin": "Latin 'inimicus' (enemy), from 'in' (not) + 'amicus' (friend).",
      "parts": [
        "in → not",
        "amicus → friend"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈnɪm.ɪ.kəl/"
  },
  {
    "word": "inimitable",
    "pos": "adjective",
    "definition": "So good or unusual as to be impossible to copy; unique.",
    "example": "The comedian had an inimitable style that no imitator ever quite captured.",
    "roots": {
      "origin": "Latin 'inimitabilis', from 'in' (not) + 'imitari' (to imitate).",
      "parts": [
        "in → not",
        "imitari → to imitate"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈnɪm.ɪ.tə.bəl/"
  },
  {
    "word": "meliorist",
    "pos": "noun",
    "definition": "A person who believes the world can be made better through human effort; one who holds that progress is possible.",
    "example": "She was a meliorist at heart, convinced that each small act of decency improved the whole.",
    "roots": {
      "origin": "Latin 'melior' (better), from which 'meliorate' (to improve) derives.",
      "parts": [
        "melior → better"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈmi.li.ər.ɪst/"
  },
  {
    "word": "apocryphal",
    "pos": "adjective",
    "definition": "Of doubtful authenticity; widely circulated but probably not true.",
    "example": "The story of Newton discovering gravity after an apple hit his head is largely apocryphal.",
    "roots": {
      "origin": "Greek 'apokryphos' (hidden, secret), from 'apo' (away) + 'kryptein' (to hide).",
      "parts": [
        "apo → away from",
        "kryptein → to hide"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈpɑk.rɪ.fəl/"
  },
  {
    "word": "hagiography",
    "pos": "noun",
    "definition": "A biography that idealizes its subject; an adulatory account treating a person as saintly.",
    "example": "The authorized memoir read more like hagiography than honest portraiture.",
    "roots": {
      "origin": "Greek 'hagios' (holy, sacred) + 'graphein' (to write).",
      "parts": [
        "hagios → holy, sacred",
        "graphein → to write"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌhæɡ.iˈɑɡ.rə.fi/"
  },
  {
    "word": "solipsism",
    "pos": "noun",
    "definition": "The view that the self is all that can be known to exist; extreme self-absorption.",
    "example": "His solipsism made genuine empathy nearly impossible — he could only really imagine his own experience.",
    "roots": {
      "origin": "Latin 'solus' (alone) + 'ipse' (self).",
      "parts": [
        "solus → alone",
        "ipse → self"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɑl.ɪp.sɪz.əm/"
  },
  {
    "word": "antipodean",
    "pos": "adjective",
    "definition": "Relating to places on the opposite side of the earth; diametrically opposed.",
    "example": "Their opinions were antipodean — agreeing on nothing, from politics to taste in food.",
    "roots": {
      "origin": "Greek 'antipodes' (people with feet opposite), from 'anti' (opposite) + 'pous/podos' (foot).",
      "parts": [
        "anti → opposite",
        "pous → foot"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌæn.tɪˈpoʊ.di.ən/"
  },
  {
    "word": "ossify",
    "pos": "verb",
    "definition": "To harden into bone; to become rigid or unable to change through long habit.",
    "example": "After decades without reform, the institution had ossified into something unrecognizable from its founding ideals.",
    "roots": {
      "origin": "Latin 'os/ossis' (bone) + 'facere' (to make).",
      "parts": [
        "os/ossis → bone",
        "facere → to make"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɑs.ɪ.faɪ/"
  },
  {
    "word": "vitiate",
    "pos": "verb",
    "definition": "To impair or weaken the quality or efficiency of something; to make faulty or defective.",
    "example": "The conflict of interest was enough to vitiate the entire testimony.",
    "roots": {
      "origin": "Latin 'vitiare' (to injure, to corrupt), from 'vitium' (fault, defect).",
      "parts": [
        "vitium → fault, defect"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvɪʃ.i.eɪt/"
  },
  {
    "word": "evince",
    "pos": "verb",
    "definition": "To reveal or demonstrate a quality or feeling clearly.",
    "example": "Her response evinced a level of patience that few in the room could have mustered.",
    "roots": {
      "origin": "Latin 'evincere' (to overcome, to prove), from 'ex' (out) + 'vincere' (to conquer).",
      "parts": [
        "ex → out",
        "vincere → to conquer"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈvɪns/"
  },
  {
    "word": "inure",
    "pos": "verb",
    "definition": "To accustom someone to something unpleasant so that they are no longer affected by it.",
    "example": "Years of working in emergency medicine had inured her to scenes that would shock others.",
    "roots": {
      "origin": "From Middle English 'in ure' (in use, in practice), from Old French 'oeuvre' (work), from Latin 'opera'.",
      "parts": [
        "in ure → in use, in practice"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈnjʊr/"
  },
  {
    "word": "fulminate",
    "pos": "verb",
    "definition": "To express vehement protest or condemnation; to thunder against something.",
    "example": "The columnist fulminated against the decision in his weekly editorial.",
    "roots": {
      "origin": "Latin 'fulminare' (to strike with lightning), from 'fulmen' (lightning bolt).",
      "parts": [
        "fulmen → lightning bolt"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈfʌl.mɪ.neɪt/"
  },
  {
    "word": "excoriate",
    "pos": "verb",
    "definition": "To criticize someone very severely; to strip or abrade the skin.",
    "example": "The review excoriated the film, calling it a cynical cash grab with nothing to offer.",
    "roots": {
      "origin": "Latin 'excoriare' (to strip the skin from), from 'ex' (off) + 'corium' (skin, hide).",
      "parts": [
        "ex → off",
        "corium → skin, hide"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɛkˈskɔr.i.eɪt/"
  },
  {
    "word": "obfuscate",
    "pos": "verb",
    "definition": "To render obscure, unclear, or unintelligible; to bewilder or confuse.",
    "example": "The report seemed designed to obfuscate rather than illuminate the findings.",
    "roots": {
      "origin": "Latin 'obfuscare', from 'ob' (over) + 'fuscare' (to darken), from 'fuscus' (dark).",
      "parts": [
        "ob → over, against",
        "fuscus → dark"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɑb.fʌ.skeɪt/"
  },
  {
    "word": "dissemble",
    "pos": "verb",
    "definition": "To conceal or disguise one's true feelings, motives, or nature; to feign.",
    "example": "He was too honest to dissemble — his face always betrayed what his words tried to hide.",
    "roots": {
      "origin": "Middle English, altered from 'dissimulate', from Latin 'dissimulare' (to hide), from 'dis' (not) + 'simulare' (to simulate).",
      "parts": [
        "dis → not",
        "simulare → to simulate, pretend"
      ]
    },
    "tier": 1,
    "pronunciation": "/dɪˈsɛm.bəl/"
  },
  {
    "word": "gainsay",
    "pos": "verb",
    "definition": "To speak against or deny; to contradict or dispute.",
    "example": "No one could gainsay the results — the evidence was simply too strong.",
    "roots": {
      "origin": "Old English 'gegnsecgan', from 'gegn' (against) + 'secgan' (to say).",
      "parts": [
        "gegn → against",
        "secgan → to say"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɡeɪn.seɪ/"
  },
  {
    "word": "impugn",
    "pos": "verb",
    "definition": "To dispute the truth, validity, or honesty of something; to call into question.",
    "example": "She felt the question was designed to impugn her integrity, not explore the facts.",
    "roots": {
      "origin": "Latin 'impugnare' (to attack), from 'in' (against) + 'pugnare' (to fight).",
      "parts": [
        "in → against",
        "pugnare → to fight"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪmˈpjun/"
  },
  {
    "word": "enjoin",
    "pos": "verb",
    "definition": "To instruct or urge someone to do something; to legally prohibit someone from doing something.",
    "example": "The court enjoined the company from releasing the product pending further review.",
    "roots": {
      "origin": "Old French 'enjoindre', from Latin 'injungere' (to join to, to impose), from 'in' + 'jungere' (to join).",
      "parts": [
        "in → into",
        "jungere → to join"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɛnˈdʒɔɪn/"
  },
  {
    "word": "palliate",
    "pos": "verb",
    "definition": "To make a disease or problem less severe without removing its cause; to alleviate or excuse.",
    "example": "The treatment could only palliate symptoms, not cure the underlying condition.",
    "roots": {
      "origin": "Latin 'palliare' (to cloak), from 'pallium' (cloak).",
      "parts": [
        "pallium → cloak, covering"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpæl.i.eɪt/"
  },
  {
    "word": "abscond",
    "pos": "verb",
    "definition": "To leave hurriedly and secretly, typically to escape from custody or avoid legal proceedings.",
    "example": "The treasurer absconded with the funds before the audit could be completed.",
    "roots": {
      "origin": "Latin 'abscondere' (to hide away), from 'abs' (away) + 'condere' (to hide, to store).",
      "parts": [
        "abs → away",
        "condere → to hide"
      ]
    },
    "tier": 1,
    "pronunciation": "/æbˈskɑnd/"
  },
  {
    "word": "expatiate",
    "pos": "verb",
    "definition": "To speak or write at length or in detail on a subject; to roam freely.",
    "example": "Given any opening, he would expatiate on the history of the local countryside for hours.",
    "roots": {
      "origin": "Latin 'expatiare' (to digress, to wander), from 'ex' (out) + 'spatiari' (to walk about), from 'spatium' (space).",
      "parts": [
        "ex → out",
        "spatium → space, room"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɛkˈspeɪ.ʃi.eɪt/"
  },
  {
    "word": "umbrage",
    "pos": "noun",
    "definition": "Offense or annoyance at something perceived as a slight; shade from trees.",
    "example": "He took umbrage at the implication that he had not done his share of the work.",
    "roots": {
      "origin": "French 'ombrage' (shade, suspicion), from Latin 'umbra' (shadow).",
      "parts": [
        "umbra → shadow, shade"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈʌm.brɪdʒ/"
  },
  {
    "word": "turpitude",
    "pos": "noun",
    "definition": "Depravity or wickedness; morally shameful behavior.",
    "example": "The charges alleged moral turpitude sufficient to revoke his professional license.",
    "roots": {
      "origin": "Latin 'turpitudo', from 'turpis' (base, shameful).",
      "parts": [
        "turpis → base, ugly, shameful"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈtɜr.pɪ.tjud/"
  },
  {
    "word": "hubris",
    "pos": "noun",
    "definition": "Excessive pride or self-confidence, often resulting in the downfall of the proud person.",
    "example": "The CEO's hubris in ignoring his advisers ultimately led to the company's collapse.",
    "roots": {
      "origin": "Greek 'hybris' (excessive pride, insolence toward the gods).",
      "parts": [
        "hybris → insolence, outrage"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈhju.brɪs/"
  },
  {
    "word": "sophistry",
    "pos": "noun",
    "definition": "The use of clever but false arguments, especially with the intention of deceiving.",
    "example": "What looked like a brilliant argument was exposed under pressure as pure sophistry.",
    "roots": {
      "origin": "Greek 'sophistria', from 'sophistes' (a wise man, a teacher of rhetoric), from 'sophos' (wise).",
      "parts": [
        "sophos → wise"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɑf.ɪ.stri/"
  },
  {
    "word": "equivocation",
    "pos": "noun",
    "definition": "The use of ambiguous language to conceal the truth or to avoid committing oneself; prevarication.",
    "example": "After an hour of equivocation, the senator still hadn't answered the question directly.",
    "roots": {
      "origin": "Latin 'aequivocatio', from 'aequivocus' (of equal voice), from 'aequus' (equal) + 'vox/vocis' (voice).",
      "parts": [
        "aequus → equal",
        "vox → voice"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˌkwɪv.əˈkeɪ.ʃən/"
  },
  {
    "word": "apostasy",
    "pos": "noun",
    "definition": "The abandonment or renunciation of a religious or political belief or principle.",
    "example": "His public conversion was seen as apostasy by his former colleagues.",
    "roots": {
      "origin": "Greek 'apostasia' (defection), from 'apostanai' (to stand away from), from 'apo' (away) + 'histanai' (to stand).",
      "parts": [
        "apo → away from",
        "histanai → to stand"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈpɑs.tə.si/"
  },
  {
    "word": "hegemony",
    "pos": "noun",
    "definition": "Leadership or dominance, especially by one country or social group over others.",
    "example": "The novel explored how cultural hegemony shapes what we consider normal or valuable.",
    "roots": {
      "origin": "Greek 'hegemonia' (leadership), from 'hegemon' (leader), from 'hegeisthai' (to lead).",
      "parts": [
        "hegeisthai → to lead, to guide"
      ]
    },
    "tier": 1,
    "pronunciation": "/hɪˈdʒɛm.ə.ni/"
  },
  {
    "word": "pathos",
    "pos": "noun",
    "definition": "A quality that evokes pity or sadness; the evocation of tender or melancholy emotion.",
    "example": "The scene had real pathos — a small child standing alone in a crowded train station.",
    "roots": {
      "origin": "Greek 'pathos' (suffering, feeling, emotion), from 'paschein' (to experience, to suffer).",
      "parts": [
        "paschein → to suffer, to experience"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpeɪ.θɑs/"
  },
  {
    "word": "bathos",
    "pos": "noun",
    "definition": "An abrupt, jarring transition from the sublime to the mundane; insincere sentimentality.",
    "example": "The epic speech ended in bathos when the speaker knocked over the podium microphone.",
    "roots": {
      "origin": "Greek 'bathos' (depth), from 'bathys' (deep). Coined in its literary sense by Alexander Pope.",
      "parts": [
        "bathys → deep"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈbeɪ.θɑs/"
  },
  {
    "word": "catharsis",
    "pos": "noun",
    "definition": "The process of releasing strong or repressed emotions through art, drama, or some other means; emotional purification.",
    "example": "Writing about the accident had been a form of catharsis she hadn't known she needed.",
    "roots": {
      "origin": "Greek 'katharsis' (purification, cleansing), from 'kathairein' (to cleanse), from 'katharos' (pure).",
      "parts": [
        "katharos → pure, clean"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəˈθɑr.sɪs/"
  },
  {
    "word": "apothegm",
    "pos": "noun",
    "definition": "A short, witty, instructive saying; a pithy maxim.",
    "example": "Her grandmother had an apothegm for every occasion, each one cutting to the heart of the matter.",
    "roots": {
      "origin": "Greek 'apophthegma', from 'apo' (away) + 'phtheggesthai' (to speak out).",
      "parts": [
        "apo → away",
        "phtheggesthai → to speak out plainly"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæp.ə.θɛm/"
  },
  {
    "word": "kenning",
    "pos": "noun",
    "definition": "A compound expression in Old Norse or Old English poetry used as a poetic substitute for a noun, such as 'whale-road' for the sea.",
    "example": "The kenning 'word-hoard' for vocabulary is one of the most evocative from Old English poetry.",
    "roots": {
      "origin": "Old Norse 'kenning', from 'kenna' (to know, to perceive, to call by name).",
      "parts": [
        "kenna → to know, to name"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkɛn.ɪŋ/"
  },
  {
    "word": "chiasmus",
    "pos": "noun",
    "definition": "A rhetorical figure in which the order of terms in the first clause is reversed in the second, as in 'Ask not what your country can do for you.'",
    "example": "Kennedy's most remembered line is an example of chiasmus — the reversal creates a symmetry that lodges in the mind.",
    "roots": {
      "origin": "Greek 'khiasmos', from 'khiazein' (to mark with an X), from 'khi' (the letter chi, X-shaped).",
      "parts": [
        "khi → the letter chi (X)"
      ]
    },
    "tier": 1,
    "pronunciation": "/kaɪˈæz.məs/"
  },
  {
    "word": "anodyne",
    "pos": "adjective",
    "definition": "Not likely to cause offense or strong feeling; bland and inoffensive; soothing pain.",
    "example": "The official statement was deliberately anodyne, designed to calm without committing.",
    "roots": {
      "origin": "Greek 'anodynos' (free from pain), from 'an' (without) + 'odyne' (pain).",
      "parts": [
        "an → without",
        "odyne → pain"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæn.ə.daɪn/"
  },
  {
    "word": "exigent",
    "pos": "adjective",
    "definition": "Pressing; requiring immediate action or attention; demanding.",
    "example": "The exigent circumstances left no time for deliberation.",
    "roots": {
      "origin": "Latin 'exigens', from 'exigere' (to demand, to drive out), from 'ex' + 'agere' (to drive).",
      "parts": [
        "ex → out",
        "agere → to drive, to act"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɛk.sɪ.dʒənt/"
  },
  {
    "word": "parlous",
    "pos": "adjective",
    "definition": "Full of danger or uncertainty; perilous.",
    "example": "The company found itself in a parlous financial state after the failed expansion.",
    "roots": {
      "origin": "Middle English contraction of 'perilous', from Old French 'perillous', from Latin 'periculosus' (dangerous).",
      "parts": [
        "periculum → danger, trial"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpɑr.ləs/"
  },
  {
    "word": "penurious",
    "pos": "adjective",
    "definition": "Extremely poor; stingy and unwilling to spend money.",
    "example": "Despite inheriting a fortune, he lived in a penurious fashion that puzzled everyone around him.",
    "roots": {
      "origin": "Latin 'penuriosus', from 'penuria' (want, scarcity).",
      "parts": [
        "penuria → want, scarcity"
      ]
    },
    "tier": 1,
    "pronunciation": "/pɪˈnjʊr.i.əs/"
  },
  {
    "word": "nugatory",
    "pos": "adjective",
    "definition": "Of no value or importance; trivial; useless.",
    "example": "The amendment was so watered down as to make its provisions entirely nugatory.",
    "roots": {
      "origin": "Latin 'nugatorius', from 'nugari' (to trifle), from 'nugae' (trifles, nonsense).",
      "parts": [
        "nugae → trifles, nonsense"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈnu.ɡə.tɔr.i/"
  },
  {
    "word": "insipid",
    "pos": "adjective",
    "definition": "Lacking flavor, vigor, or interest; dull and lifeless.",
    "example": "The food was perfectly edible but insipid — it needed salt, or perhaps a better chef.",
    "roots": {
      "origin": "Latin 'insipidus', from 'in' (not) + 'sapidus' (flavorful), from 'sapere' (to taste).",
      "parts": [
        "in → not",
        "sapere → to taste, to be wise"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈsɪp.ɪd/"
  },
  {
    "word": "vapid",
    "pos": "adjective",
    "definition": "Offering nothing that is stimulating or challenging; bland and dull.",
    "example": "The conversation was vapid — all pleasantries, nothing worth remembering.",
    "roots": {
      "origin": "Latin 'vapidus' (flat, savourless), related to 'vapor' (steam).",
      "parts": [
        "vapor → steam, that which has evaporated away"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvæp.ɪd/"
  },
  {
    "word": "anamnesis",
    "pos": "noun",
    "definition": "Recollection, especially of a supposed previous existence; a patient's account of their medical history.",
    "example": "The poet described childhood as a kind of anamnesis — glimpses of something known before.",
    "roots": {
      "origin": "Greek 'anamnesis' (remembrance), from 'ana' (back, again) + 'mimneskesthai' (to remember).",
      "parts": [
        "ana → back, again",
        "mimneskesthai → to remember"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌæn.æmˈni.sɪs/"
  },
  {
    "word": "venal",
    "pos": "adjective",
    "definition": "Open to bribery; corruptly mercenary; motivated by money.",
    "example": "The venal official had a price for every favor he could grant.",
    "roots": {
      "origin": "Latin 'venalis' (for sale), from 'venum' (sale).",
      "parts": [
        "venum → sale, goods for sale"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvi.nəl/"
  },
  {
    "word": "insolent",
    "pos": "adjective",
    "definition": "Showing a rude and arrogant lack of respect; boldly disrespectful.",
    "example": "The insolent reply shocked even the interviewer, who was used to difficult guests.",
    "roots": {
      "origin": "Latin 'insolens' (unusual, arrogant), from 'in' (not) + 'solere' (to be accustomed).",
      "parts": [
        "in → not",
        "solere → to be accustomed to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɪn.sə.lənt/"
  },
  {
    "word": "pernicious",
    "pos": "adjective",
    "definition": "Having a harmful effect, especially in a subtle or gradual way.",
    "example": "The study examined the pernicious influence of misinformation on public health decisions.",
    "roots": {
      "origin": "Latin 'perniciosus' (destructive), from 'pernicies' (destruction), from 'per' (completely) + 'nex/necis' (death).",
      "parts": [
        "per → completely",
        "nex → violent death"
      ]
    },
    "tier": 1,
    "pronunciation": "/pərˈnɪʃ.əs/"
  },
  {
    "word": "abstruse",
    "pos": "adjective",
    "definition": "Difficult to understand; obscure and complex.",
    "example": "The philosopher's abstruse writing style put off all but the most dedicated readers.",
    "roots": {
      "origin": "Latin 'abstrusus', past participle of 'abstrudere' (to push away, to conceal), from 'abs' (away) + 'trudere' (to push).",
      "parts": [
        "abs → away",
        "trudere → to push"
      ]
    },
    "tier": 1,
    "pronunciation": "/æbˈstrus/"
  },
  {
    "word": "recondite",
    "pos": "adjective",
    "definition": "Not known by many people; obscure; dealing with specialist or little-known subject matter.",
    "example": "His lectures covered some of the most recondite corners of Byzantine legal history.",
    "roots": {
      "origin": "Latin 'reconditus', from 'recondere' (to store away, to hide), from 're' (back) + 'condere' (to put away).",
      "parts": [
        "re → back",
        "condere → to put away, to store"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈrɛk.ən.daɪt/"
  },
  {
    "word": "arcane",
    "pos": "adjective",
    "definition": "Understood by few; mysterious and secret; requiring special knowledge.",
    "example": "She was fluent in the arcane terminology of maritime law.",
    "roots": {
      "origin": "Latin 'arcanus' (secret, closed), from 'arca' (chest, box).",
      "parts": [
        "arca → chest, box — something locked away"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɑrˈkeɪn/"
  },
  {
    "word": "meretricious",
    "pos": "adjective",
    "definition": "Apparently attractive but having in reality no value or integrity; showily attractive.",
    "example": "The design was meretricious — all glittering surfaces and no substance.",
    "roots": {
      "origin": "Latin 'meretricius', from 'meretrix' (prostitute), from 'merere' (to earn, to deserve).",
      "parts": [
        "merere → to earn"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌmɛr.ɪˈtrɪʃ.əs/"
  },
  {
    "word": "execrable",
    "pos": "adjective",
    "definition": "Extremely bad or unpleasant; detestable.",
    "example": "The acoustics in the venue were execrable — the band sounded like they were playing inside a cave.",
    "roots": {
      "origin": "Latin 'execrabilis' (accursed), from 'execrari' (to curse), from 'ex' + 'sacrare' (to make sacred/accursed).",
      "parts": [
        "ex → out of",
        "sacer → sacred, accursed"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɛk.sɪ.krə.bəl/"
  },
  {
    "word": "redolent",
    "pos": "adjective",
    "definition": "Strongly reminiscent or suggestive of something; having a pleasant smell.",
    "example": "The attic was redolent of cedar and old paper, a smell she associated with her grandmother.",
    "roots": {
      "origin": "Latin 'redolere' (to emit a smell), from 're' (again, back) + 'olere' (to smell).",
      "parts": [
        "re → again, back",
        "olere → to smell"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈrɛd.ə.lənt/"
  },
  {
    "word": "sartorial",
    "pos": "adjective",
    "definition": "Relating to tailoring, clothes, or style of dress.",
    "example": "His sartorial choices were impeccable — every suit fitted as though it had been made for no one else.",
    "roots": {
      "origin": "Latin 'sartor' (tailor), from 'sarcire' (to patch, to mend).",
      "parts": [
        "sarcire → to patch, to mend"
      ]
    },
    "tier": 1,
    "pronunciation": "/sɑrˈtɔr.i.əl/"
  },
  {
    "word": "fugacious",
    "pos": "adjective",
    "definition": "Tending to disappear; fleeting; transient.",
    "example": "Youth, she wrote, is the most fugacious gift — gone before you know it.",
    "roots": {
      "origin": "Latin 'fugax/fugacis' (fleeting), from 'fugere' (to flee).",
      "parts": [
        "fugere → to flee"
      ]
    },
    "tier": 1,
    "pronunciation": "/fjuˈɡeɪ.ʃəs/"
  },
  {
    "word": "moribund",
    "pos": "adjective",
    "definition": "In terminal decline; at the point of death; lacking vitality.",
    "example": "The once-thriving fishing industry was now moribund, sustained only by habit and subsidy.",
    "roots": {
      "origin": "Latin 'moribundus' (dying), from 'mori' (to die).",
      "parts": [
        "mori → to die"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈmɔr.ɪ.bʌnd/"
  },
  {
    "word": "nascent",
    "pos": "adjective",
    "definition": "Just coming into existence and beginning to develop; emerging.",
    "example": "The nascent democracy was fragile, still finding its shape in the wake of revolution.",
    "roots": {
      "origin": "Latin 'nascens', present participle of 'nasci' (to be born).",
      "parts": [
        "nasci → to be born"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈneɪ.sənt/"
  },
  {
    "word": "inchoate",
    "pos": "adjective",
    "definition": "Just begun and not fully formed or developed; undeveloped; confused.",
    "example": "She had inchoate ambitions but no clear plan for how to achieve them.",
    "roots": {
      "origin": "Latin 'incohatus' (recently begun), from 'in' + 'cohum' (strap used to begin plowing).",
      "parts": [
        "in → into",
        "cohum → yoke strap — just beginning to plow"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈkoʊ.ɪt/"
  },
  {
    "word": "fecund",
    "pos": "adjective",
    "definition": "Producing or capable of producing an abundance of offspring or new growth; highly productive.",
    "example": "The fecund writer published three novels, two essay collections, and dozens of stories in a single decade.",
    "roots": {
      "origin": "Latin 'fecundus' (fruitful), related to 'fetus' (offspring).",
      "parts": [
        "fecundus → fruitful, productive"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈfɛk.ənd/"
  },
  {
    "word": "propitious",
    "pos": "adjective",
    "definition": "Giving or indicating a good chance of success; favorable.",
    "example": "The weather seemed propitious — clear skies and a light wind, perfect for the crossing.",
    "roots": {
      "origin": "Latin 'propitius' (favorable, gracious), from 'pro' (for) + 'petere' (to seek).",
      "parts": [
        "pro → for, in favor of",
        "petere → to seek, to fly toward"
      ]
    },
    "tier": 1,
    "pronunciation": "/prəˈpɪʃ.əs/"
  },
  {
    "word": "inauspicious",
    "pos": "adjective",
    "definition": "Not conducive to success; not favorable; ominous.",
    "example": "An inauspicious beginning — the car broke down three miles from home on moving day.",
    "roots": {
      "origin": "Latin 'inauspiciosus', from 'in' (not) + 'auspicium' (omen from birds), from 'avis' (bird) + 'specere' (to observe).",
      "parts": [
        "in → not",
        "avis → bird",
        "specere → to look"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪn.ɔˈspɪʃ.əs/"
  },
  {
    "word": "zealot",
    "pos": "noun",
    "definition": "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals.",
    "example": "He was not merely passionate — he was a zealot who brooked no disagreement.",
    "roots": {
      "origin": "Greek 'zelotes' (jealous imitator), from 'zelos' (zeal, fervor).",
      "parts": [
        "zelos → zeal, fervor"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈzɛl.ət/"
  },
  {
    "word": "sycophancy",
    "pos": "noun",
    "definition": "Obsequious behavior toward someone important in order to gain advantage; flattery.",
    "example": "The boardroom was thick with sycophancy — no one dared challenge the chairman's ideas.",
    "roots": {
      "origin": "Greek 'sykophantes' (informer), from 'sykon' (fig) + 'phainein' (to show), with an obscure connection to fig-showing as an insulting gesture.",
      "parts": [
        "sykon → fig",
        "phainein → to show"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɪk.ə.fən.si/"
  },
  {
    "word": "temerity",
    "pos": "noun",
    "definition": "Excessive confidence or boldness; audacity.",
    "example": "She had the temerity to correct the professor in front of his own class.",
    "roots": {
      "origin": "Latin 'temeritas' (rashness, chance), from 'temere' (rashly, without cause).",
      "parts": [
        "temere → rashly, blindly"
      ]
    },
    "tier": 1,
    "pronunciation": "/təˈmɛr.ɪ.ti/"
  },
  {
    "word": "intrepid",
    "pos": "adjective",
    "definition": "Fearless and adventurous; characterized by resolute courage.",
    "example": "The intrepid journalist had reported from six conflict zones in as many years.",
    "roots": {
      "origin": "Latin 'intrepidus', from 'in' (not) + 'trepidus' (alarmed, trembling).",
      "parts": [
        "in → not",
        "trepidus → alarmed, trembling"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈtrɛp.ɪd/"
  },
  {
    "word": "impecunious",
    "pos": "adjective",
    "definition": "Having very little or no money; penniless.",
    "example": "The young artist was impecunious but not unhappy, sustained by work and ambition.",
    "roots": {
      "origin": "Latin 'im' (not) + 'pecuniosus' (wealthy), from 'pecunia' (money, wealth derived from cattle).",
      "parts": [
        "im → not",
        "pecunia → money, cattle-wealth"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪm.pɪˈkju.ni.əs/"
  },
  {
    "word": "munificent",
    "pos": "adjective",
    "definition": "More generous than is usual or necessary; lavishly generous.",
    "example": "A munificent donor funded the entire new wing of the library anonymously.",
    "roots": {
      "origin": "Latin 'munificus', from 'munus' (gift, duty) + 'facere' (to make).",
      "parts": [
        "munus → gift, service",
        "facere → to make"
      ]
    },
    "tier": 1,
    "pronunciation": "/mjuˈnɪf.ɪ.sənt/"
  },
  {
    "word": "parsimonious",
    "pos": "adjective",
    "definition": "Unwilling to spend money or use resources; extremely frugal; miserly.",
    "example": "His parsimonious habits were legendary — he reused tea bags twice and turned off lights constantly.",
    "roots": {
      "origin": "Latin 'parsimonia' (frugality), from 'parcere' (to spare, to be thrifty).",
      "parts": [
        "parcere → to spare, to be economical"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌpɑr.sɪˈmoʊ.ni.əs/"
  },
  {
    "word": "cogent",
    "pos": "adjective",
    "definition": "Clear, logical, and convincing; powerfully persuasive.",
    "example": "The barrister made a cogent case that even the opposing side reluctantly acknowledged.",
    "roots": {
      "origin": "Latin 'cogens', present participle of 'cogere' (to drive together, to compel), from 'co' (together) + 'agere' (to drive).",
      "parts": [
        "co → together",
        "agere → to drive"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkoʊ.dʒənt/"
  },
  {
    "word": "probity",
    "pos": "noun",
    "definition": "The quality of having strong moral principles; complete honesty and integrity.",
    "example": "In a profession not known for it, her probity was remarked upon by friends and opponents alike.",
    "roots": {
      "origin": "Latin 'probitas' (goodness, honesty), from 'probus' (good, upright).",
      "parts": [
        "probus → good, upright"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈproʊ.bɪ.ti/"
  },
  {
    "word": "cupidity",
    "pos": "noun",
    "definition": "Greed for money or possessions; excessive desire for wealth.",
    "example": "It was cupidity more than ideology that drove him — the cause was secondary to the profit.",
    "roots": {
      "origin": "Latin 'cupiditas' (desire, greed), from 'cupere' (to desire).",
      "parts": [
        "cupere → to desire, to long for"
      ]
    },
    "tier": 1,
    "pronunciation": "/kjuˈpɪd.ɪ.ti/"
  },
  {
    "word": "felicity",
    "pos": "noun",
    "definition": "Intense happiness; the ability to find appropriate expression for something; an apt phrase or expression.",
    "example": "She had a felicity of expression that made even simple observations feel illuminating.",
    "roots": {
      "origin": "Latin 'felicitas' (happiness, fertility), from 'felix/felicis' (happy, fertile).",
      "parts": [
        "felix → happy, fruitful"
      ]
    },
    "tier": 1,
    "pronunciation": "/fəˈlɪs.ɪ.ti/"
  },
  {
    "word": "cacophony",
    "pos": "noun",
    "definition": "A harsh discordant mixture of sounds; dissonance.",
    "example": "Opening night at the market was a cacophony of vendors, musicians, and traffic.",
    "roots": {
      "origin": "Greek 'kakophonia', from 'kakos' (bad) + 'phone' (sound).",
      "parts": [
        "kakos → bad",
        "phone → sound, voice"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəˈkɒf.ə.ni/"
  },
  {
    "word": "euphony",
    "pos": "noun",
    "definition": "The quality of being pleasing to the ear; a pleasant combination of sounds.",
    "example": "He chose words not just for their meaning but for their euphony — how they felt in the mouth.",
    "roots": {
      "origin": "Greek 'euphonia', from 'eu' (good, well) + 'phone' (sound).",
      "parts": [
        "eu → good, well",
        "phone → sound, voice"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈju.fə.ni/"
  },
  {
    "word": "banal",
    "pos": "adjective",
    "definition": "So lacking in originality as to be obvious or boring; trite and predictable.",
    "example": "The plot was banal — every twist predictable, every character exactly what they appeared to be.",
    "roots": {
      "origin": "French 'banal' (commonplace), from Old French 'ban' (public proclamation, communal use).",
      "parts": [
        "ban → feudal lord's proclamation — available to all, thus ordinary"
      ]
    },
    "tier": 1,
    "pronunciation": "/bəˈnɑl/"
  },
  {
    "word": "trite",
    "pos": "adjective",
    "definition": "Overused and hence lacking significance; not fresh or original.",
    "example": "The eulogist's remarks were trite — borrowed phrases that could have been said of anyone.",
    "roots": {
      "origin": "Latin 'tritus', past participle of 'terere' (to rub, to wear away).",
      "parts": [
        "terere → to rub, to wear away"
      ]
    },
    "tier": 1,
    "pronunciation": "/traɪt/"
  },
  {
    "word": "furtive",
    "pos": "adjective",
    "definition": "Attempting to avoid notice or attention; secretive and stealthy.",
    "example": "He cast furtive glances over his shoulder before slipping the letter under the door.",
    "roots": {
      "origin": "Latin 'furtivus' (stolen, secret), from 'furtum' (theft), from 'fur' (thief).",
      "parts": [
        "fur → thief"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈfɜr.tɪv/"
  },
  {
    "word": "limpid",
    "pos": "adjective",
    "definition": "Completely clear and transparent; (of prose) clear and easily comprehensible.",
    "example": "The mountain stream was limpid, every pebble visible at the bottom.",
    "roots": {
      "origin": "Latin 'limpidus' (clear, transparent), possibly related to 'lympha' (water).",
      "parts": [
        "limpidus → clear, transparent"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlɪm.pɪd/"
  },
  {
    "word": "lassitude",
    "pos": "noun",
    "definition": "Physical or mental weariness; lack of energy.",
    "example": "A deep lassitude settled over her in the days following the diagnosis.",
    "roots": {
      "origin": "Latin 'lassitudo' (weariness), from 'lassus' (tired).",
      "parts": [
        "lassus → weary, tired"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlæs.ɪ.tuːd/"
  },
  {
    "word": "solicitude",
    "pos": "noun",
    "definition": "Care and concern for the well-being of someone; anxious concern.",
    "example": "Her solicitude for the patients extended beyond her official hours.",
    "roots": {
      "origin": "Latin 'sollicitudo' (anxiety, concern), from 'sollicitus' (agitated), from 'sollus' (whole) + 'citus' (moved).",
      "parts": [
        "sollus → whole",
        "ciere → to move, to stir"
      ]
    },
    "tier": 1,
    "pronunciation": "/səˈlɪs.ɪ.tuːd/"
  },
  {
    "word": "propinquity",
    "pos": "noun",
    "definition": "The state of being close to someone or something in space or time; nearness; kinship.",
    "example": "Propinquity has a strange power — people who work near each other often become close friends.",
    "roots": {
      "origin": "Latin 'propinquitas' (nearness), from 'propinquus' (near), from 'prope' (near).",
      "parts": [
        "prope → near"
      ]
    },
    "tier": 1,
    "pronunciation": "/prəˈpɪŋ.kwɪ.ti/"
  },
  {
    "word": "verdant",
    "pos": "adjective",
    "definition": "Green with grass or other rich vegetation; lushly green.",
    "example": "The valley was verdant after a wet spring, every hillside thick with growth.",
    "roots": {
      "origin": "Old French 'verdant', from 'verd' (green), from Latin 'viridis' (green).",
      "parts": [
        "viridis → green, fresh"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvɜr.dənt/"
  },
  {
    "word": "perspicacity",
    "pos": "noun",
    "definition": "A ready insight into things; shrewdness and sharp understanding.",
    "example": "What set her apart as a critic was perspicacity — she saw what others overlooked.",
    "roots": {
      "origin": "Latin 'perspicacitas', from 'perspicax' (sharp-sighted), from 'perspicere' (to see through).",
      "parts": [
        "per → through",
        "specere → to look, to see"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌpɜr.spɪˈkæs.ɪ.ti/"
  },
  {
    "word": "compunction",
    "pos": "noun",
    "definition": "A feeling of guilt or moral scruple that prevents or follows wrongdoing.",
    "example": "He dismissed the workers with no apparent compunction.",
    "roots": {
      "origin": "Latin 'compunctio' (pricking, remorse), from 'compungere' (to prick), from 'com' (together) + 'pungere' (to prick).",
      "parts": [
        "com → intensive",
        "pungere → to prick, to sting"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəmˈpʌŋk.ʃən/"
  },
  {
    "word": "desuetude",
    "pos": "noun",
    "definition": "A state of no longer being used or practiced; disuse.",
    "example": "Many of the old laws had fallen into desuetude long before they were formally repealed.",
    "roots": {
      "origin": "Latin 'desuetudo' (disuse), from 'desuescere' (to become unaccustomed), from 'de' (from) + 'suescere' (to be accustomed).",
      "parts": [
        "de → away from",
        "suescere → to be accustomed"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈdɛs.wɪ.tuːd/"
  },
  {
    "word": "incandescent",
    "pos": "adjective",
    "definition": "Emitting light as a result of being heated; brilliantly talented; extremely intense.",
    "example": "Her performance was incandescent — a talent that seemed to generate its own light.",
    "roots": {
      "origin": "Latin 'incandescens', from 'incandescere' (to glow white-hot), from 'in' + 'candescere' (to become bright), from 'candere' (to shine).",
      "parts": [
        "in → intensive",
        "candere → to shine, to glow"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪn.kænˈdɛs.ənt/"
  },
  {
    "word": "denouement",
    "pos": "noun",
    "definition": "The final part of a play, film, or narrative in which the strands of the plot are drawn together and matters are resolved.",
    "example": "The denouement left audiences divided — some felt satisfied, others cheated.",
    "roots": {
      "origin": "French 'dénouement', from 'dénouer' (to untie), from 'dé' (un-) + 'nouer' (to knot), from Latin 'nodare' (to knot).",
      "parts": [
        "dé → un-",
        "nouer → to knot"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌdeɪ.nuˈmɑ̃/"
  },
  {
    "word": "risible",
    "pos": "adjective",
    "definition": "Arousing laughter or provoking ridicule; laughable.",
    "example": "The proposal was dismissed as risible by every expert in the room.",
    "roots": {
      "origin": "Latin 'risibilis', from 'ridere' (to laugh).",
      "parts": [
        "ridere → to laugh"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈrɪz.ɪ.bəl/"
  },
  {
    "word": "fatuous",
    "pos": "adjective",
    "definition": "Silly and pointless; complacently foolish.",
    "example": "The fatuous grin on his face showed he had understood nothing of what was just explained.",
    "roots": {
      "origin": "Latin 'fatuus' (foolish, tasteless).",
      "parts": [
        "fatuus → foolish, insipid"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈfætʃ.u.əs/"
  },
  {
    "word": "otiose",
    "pos": "adjective",
    "definition": "Serving no practical purpose or result; superfluous; idle.",
    "example": "The committee's third review of the same proposal struck everyone as otiose.",
    "roots": {
      "origin": "Latin 'otiosus' (at leisure, free from work), from 'otium' (leisure).",
      "parts": [
        "otium → leisure, ease"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈoʊ.ʃi.oʊs/"
  },
  {
    "word": "maudlin",
    "pos": "adjective",
    "definition": "Self-pityingly or tearfully sentimental, especially because of drink; effusively emotional.",
    "example": "After the second glass of wine, he became maudlin, rehashing old grievances with bleary eyes.",
    "roots": {
      "origin": "From 'Maudlin', the medieval English form of 'Magdalene', from depictions of Mary Magdalene weeping in religious art.",
      "parts": [
        "Maudlin → Mary Magdalene, the weeping figure"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈmɔd.lɪn/"
  },
  {
    "word": "crepitate",
    "pos": "verb",
    "definition": "To make a crackling sound; to crackle.",
    "example": "The fire began to crepitate as pine knots caught and the room filled with warmth.",
    "roots": {
      "origin": "Latin 'crepitare' (to creak, to crackle), from 'crepere' (to rattle, to crack).",
      "parts": [
        "crepere → to rattle, to crack"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkrɛp.ɪ.teɪt/"
  },
  {
    "word": "attenuate",
    "pos": "verb",
    "definition": "To reduce the force, effect, or value of something; to make thin or slender.",
    "example": "The new regulations were designed to attenuate the risk of another financial crisis.",
    "roots": {
      "origin": "Latin 'attenuare' (to make thin), from 'ad' (to) + 'tenuis' (thin).",
      "parts": [
        "ad → toward",
        "tenuis → thin, fine"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈtɛn.ju.eɪt/"
  },
  {
    "word": "enervate",
    "pos": "verb",
    "definition": "To make someone feel drained of energy or vitality; to weaken.",
    "example": "The heat of the afternoon enervated everyone; by three o'clock, no one could concentrate.",
    "roots": {
      "origin": "Latin 'enervare' (to remove the sinews from), from 'ex' (out) + 'nervus' (sinew, nerve).",
      "parts": [
        "ex → out of",
        "nervus → sinew, nerve, strength"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɛn.ər.veɪt/"
  },
  {
    "word": "proscribe",
    "pos": "verb",
    "definition": "To formally forbid something by law or authority; to condemn; to banish.",
    "example": "The treaty proscribed the testing of nuclear weapons in any of the signatory nations.",
    "roots": {
      "origin": "Latin 'proscribere' (to post a notice of outlawry), from 'pro' (in front of) + 'scribere' (to write).",
      "parts": [
        "pro → before, in public",
        "scribere → to write"
      ]
    },
    "tier": 1,
    "pronunciation": "/proʊˈskraɪb/"
  },
  {
    "word": "prescient",
    "pos": "adjective",
    "definition": "Having or showing knowledge of events before they take place; prophetically accurate.",
    "example": "The economist's warnings proved prescient — the crash came almost exactly as she predicted.",
    "roots": {
      "origin": "Latin 'praesciens', from 'praescire' (to know beforehand), from 'prae' (before) + 'scire' (to know).",
      "parts": [
        "prae → before",
        "scire → to know"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈprɛʃ.ənt/"
  },
  {
    "word": "harbinger",
    "pos": "noun",
    "definition": "A person or thing that announces or signals the approach of another; a forerunner.",
    "example": "Crocuses are harbingers of spring, pushing through the snow before anything else dares appear.",
    "roots": {
      "origin": "Middle English 'herbergere' (one who provides lodging, a forerunner who prepares the way), from Old French 'herberge' (lodging).",
      "parts": [
        "herberge → lodging, shelter"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈhɑr.bɪn.dʒər/"
  },
  {
    "word": "portent",
    "pos": "noun",
    "definition": "A sign or warning that something momentous or calamitous is likely to happen; an omen.",
    "example": "The unusual stillness of the birds was taken as a portent of trouble to come.",
    "roots": {
      "origin": "Latin 'portentum' (omen, prodigy), from 'portendere' (to foretell), from 'por' (forward) + 'tendere' (to stretch).",
      "parts": [
        "por → forward",
        "tendere → to stretch"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpɔr.tɛnt/"
  },
  {
    "word": "celerity",
    "pos": "noun",
    "definition": "Swiftness of movement; rapidity.",
    "example": "The dispatch rider moved with celerity that would have impressed anyone watching.",
    "roots": {
      "origin": "Latin 'celeritas' (speed), from 'celer' (swift, quick).",
      "parts": [
        "celer → swift"
      ]
    },
    "tier": 1,
    "pronunciation": "/səˈlɛr.ɪ.ti/"
  },
  {
    "word": "asperity",
    "pos": "noun",
    "definition": "Harshness of tone or manner; roughness or sharpness of surface or climate.",
    "example": "He replied with unusual asperity — the question had touched a nerve.",
    "roots": {
      "origin": "Latin 'asperitas' (roughness), from 'asper' (rough, harsh).",
      "parts": [
        "asper → rough, harsh"
      ]
    },
    "tier": 1,
    "pronunciation": "/æˈspɛr.ɪ.ti/"
  },
  {
    "word": "alacrity",
    "pos": "noun",
    "definition": "Brisk and cheerful readiness to act; eager willingness.",
    "example": "She accepted the challenge with alacrity, barely pausing before saying yes.",
    "roots": {
      "origin": "Latin 'alacritas' (liveliness, eagerness), from 'alacer' (lively, brisk).",
      "parts": [
        "alacer → lively, brisk, eager"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈlæk.rɪ.ti/"
  },
  {
    "word": "recidivism",
    "pos": "noun",
    "definition": "The tendency of a criminal to reoffend; habitual relapse into crime or undesirable behavior.",
    "example": "The program aimed to address the root causes of recidivism through education and counseling.",
    "roots": {
      "origin": "Latin 'recidivus' (falling back), from 'recidere' (to fall back), from 're' (back) + 'cadere' (to fall).",
      "parts": [
        "re → back",
        "cadere → to fall"
      ]
    },
    "tier": 1,
    "pronunciation": "/rɪˈsɪd.ɪ.vɪz.əm/"
  },
  {
    "word": "verity",
    "pos": "noun",
    "definition": "A true principle or belief, especially one of fundamental importance; truth.",
    "example": "He spoke of these ideas as eternal verities, truths beyond the reach of argument.",
    "roots": {
      "origin": "Latin 'veritas' (truth), from 'verus' (true).",
      "parts": [
        "verus → true"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvɛr.ɪ.ti/"
  },
  {
    "word": "tractable",
    "pos": "adjective",
    "definition": "Easy to deal with; compliant; responsive to management or discipline.",
    "example": "The problem was more tractable than it first appeared — a few key adjustments solved it.",
    "roots": {
      "origin": "Latin 'tractabilis', from 'tractare' (to handle), from 'trahere' (to drag, to draw).",
      "parts": [
        "trahere → to draw, to handle"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈtræk.tə.bəl/"
  },
  {
    "word": "emollient",
    "pos": "adjective",
    "definition": "Having the quality of softening or soothing; tending to avoid conflict; conciliatory.",
    "example": "His emollient manner helped defuse situations that would have boiled over with anyone else.",
    "roots": {
      "origin": "Latin 'emollire' (to soften), from 'ex' (out, intensive) + 'mollis' (soft).",
      "parts": [
        "ex → intensive",
        "mollis → soft"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈmɒl.jənt/"
  },
  {
    "word": "ineluctable",
    "pos": "adjective",
    "definition": "Unable to be resisted or avoided; inescapable.",
    "example": "There is something ineluctable about the passage of time — one can delay acknowledgment, not the fact.",
    "roots": {
      "origin": "Latin 'ineluctabilis', from 'in' (not) + 'eluctari' (to struggle out of), from 'ex' + 'luctari' (to wrestle).",
      "parts": [
        "in → not",
        "ex → out",
        "luctari → to struggle, to wrestle"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪn.ɪˈlʌk.tə.bəl/"
  },
  {
    "word": "numinous",
    "pos": "adjective",
    "definition": "Having a strong religious or spiritual quality; evoking a sense of the transcendent or divine.",
    "example": "The empty cathedral at dawn had a numinous quality, as though the space itself held something sacred.",
    "roots": {
      "origin": "Latin 'numen' (divine will, divine power, deity).",
      "parts": [
        "numen → divine will, the nod of a god"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈnjuː.mɪ.nəs/"
  },
  {
    "word": "penumbra",
    "pos": "noun",
    "definition": "The partially shaded outer region of a shadow; the outlying fringe around something central.",
    "example": "She lived in the penumbra of his fame — acknowledged only as a footnote in his biography.",
    "roots": {
      "origin": "Modern Latin 'paenumbra', from Latin 'paene' (almost) + 'umbra' (shadow).",
      "parts": [
        "paene → almost",
        "umbra → shadow"
      ]
    },
    "tier": 1,
    "pronunciation": "/pɪˈnʌm.brə/"
  },
  {
    "word": "hypnagogic",
    "pos": "adjective",
    "definition": "Relating to the transitional state between wakefulness and sleep; of the drowsy period just before falling asleep.",
    "example": "The hypnagogic images that floated through his mind as he drifted off were vivid and strange.",
    "roots": {
      "origin": "Greek 'hypnos' (sleep) + 'agogos' (leading), from 'agein' (to lead).",
      "parts": [
        "hypnos → sleep",
        "agein → to lead"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌhɪp.nəˈɡɒdʒ.ɪk/"
  },
  {
    "word": "simulacrum",
    "pos": "noun",
    "definition": "An image or representation of something; a superficial likeness that lacks the substance of the original.",
    "example": "The theme park was a simulacrum of history — all surface and spectacle, nothing real beneath.",
    "roots": {
      "origin": "Latin 'simulacrum' (image, likeness), from 'simulare' (to imitate, to feign).",
      "parts": [
        "simulare → to make similar, to pretend"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌsɪm.jəˈleɪ.krəm/"
  },
  {
    "word": "fugue",
    "pos": "noun",
    "definition": "A state of dissociation or loss of awareness of one's identity; also a contrapuntal musical composition built on a recurring theme.",
    "example": "The weeks after the accident were a fugue — she moved through them, but nothing seemed real.",
    "roots": {
      "origin": "French 'fugue' or Italian 'fuga', from Latin 'fuga' (flight), from 'fugere' (to flee).",
      "parts": [
        "fugere → to flee"
      ]
    },
    "tier": 1,
    "pronunciation": "/fjuːɡ/"
  },
  {
    "word": "apotheosis",
    "pos": "noun",
    "definition": "The highest point in the development of something; the elevation of someone to divine status.",
    "example": "The final concert was the apotheosis of his career — everything he had worked for, fully realized.",
    "roots": {
      "origin": "Greek 'apotheosis', from 'apotheoun' (to deify), from 'apo' (away) + 'theos' (god).",
      "parts": [
        "apo → away, completely",
        "theos → god"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˌpɒθ.iˈoʊ.sɪs/"
  },
  {
    "word": "coda",
    "pos": "noun",
    "definition": "A concluding passage of a musical composition or literary work; a conclusion that rounds off or completes a sequence.",
    "example": "The epilogue read less like a chapter than a coda — brief, quiet, resolving nothing new.",
    "roots": {
      "origin": "Italian 'coda' (tail), from Latin 'cauda' (tail).",
      "parts": [
        "cauda → tail"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkoʊ.də/"
  },
  {
    "word": "lacuna",
    "pos": "noun",
    "definition": "A gap or missing portion in a manuscript, text, or argument; an empty space.",
    "example": "There is a notable lacuna in the historical record — no letters survive from that decade.",
    "roots": {
      "origin": "Latin 'lacuna' (pit, pool, hole), from 'lacus' (lake, pit).",
      "parts": [
        "lacus → lake, hollow"
      ]
    },
    "tier": 1,
    "pronunciation": "/ləˈkjuː.nə/"
  },
  {
    "word": "concatenation",
    "pos": "noun",
    "definition": "A series of linked events or things; a chain of connected causes or effects.",
    "example": "What brought them together was a concatenation of small decisions, none of them momentous alone.",
    "roots": {
      "origin": "Latin 'concatenare' (to link together), from 'con' (together) + 'catena' (chain).",
      "parts": [
        "con → together",
        "catena → chain"
      ]
    },
    "tier": 1,
    "pronunciation": "/kɒnˌkæt.əˈneɪ.ʃən/"
  },
  {
    "word": "susurration",
    "pos": "noun",
    "definition": "A soft murmur or whisper; a continuous low whispering or rustling sound.",
    "example": "The susurration of the congregation rose and fell like a tide before the service began.",
    "roots": {
      "origin": "Latin 'susurratio', from 'susurrare' (to whisper), an imitative word.",
      "parts": [
        "susurrare → to hum, to whisper (imitative)"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌsuː.səˈreɪ.ʃən/"
  },
  {
    "word": "valediction",
    "pos": "noun",
    "definition": "The action of saying farewell; a statement or address made at the time of departure.",
    "example": "His valediction was brief but sincere — no grand speeches, just a handshake and a quiet goodbye.",
    "roots": {
      "origin": "Latin 'valedicere' (to say farewell), from 'vale' (farewell) + 'dicere' (to say).",
      "parts": [
        "vale → be well, farewell",
        "dicere → to say"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌvæl.ɪˈdɪk.ʃən/"
  },
  {
    "word": "inefficacious",
    "pos": "adjective",
    "definition": "Not producing the desired effect; ineffective.",
    "example": "The medicine proved inefficacious against the new strain and had to be withdrawn.",
    "roots": {
      "origin": "Latin 'inefficax', from 'in' (not) + 'efficax' (effective), from 'efficere' (to bring about).",
      "parts": [
        "in → not",
        "efficere → to bring about, to accomplish"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪn.ɛf.ɪˈkeɪ.ʃəs/"
  },
  {
    "word": "sedulity",
    "pos": "noun",
    "definition": "Careful and persistent effort; diligent and devoted application.",
    "example": "The archive had been assembled with remarkable sedulity over half a century.",
    "roots": {
      "origin": "Latin 'sedulitas', from 'sedulus' (busy, attentive).",
      "parts": [
        "sedulo → without deception, zealously"
      ]
    },
    "tier": 1,
    "pronunciation": "/sɪˈdjuː.lɪ.ti/"
  },
  {
    "word": "sanguinity",
    "pos": "noun",
    "definition": "Optimism and confidence, especially in difficult situations; cheerful hopefulness.",
    "example": "Despite the odds, his sanguinity was infectious — others found themselves believing things would work out.",
    "roots": {
      "origin": "Latin 'sanguineus' (of blood), from 'sanguis' (blood). In humoral medicine, a blood-dominated constitution meant cheerfulness.",
      "parts": [
        "sanguis → blood"
      ]
    },
    "tier": 1,
    "pronunciation": "/sæŋˈɡwɪn.ɪ.ti/"
  },
  {
    "word": "pellucidity",
    "pos": "noun",
    "definition": "The quality of being translucently clear, or of being easily understood; lucidity.",
    "example": "The pellucidity of her writing was a gift — complex ideas made immediately accessible.",
    "roots": {
      "origin": "From 'pellucid', from Latin 'pellucidus', from 'per' (through) + 'lucere' (to shine).",
      "parts": [
        "per → through",
        "lucere → to shine"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌpɛl.juˈsɪd.ɪ.ti/"
  },
  {
    "word": "gloaming",
    "pos": "noun",
    "definition": "The period of dim light just after sunset or before sunrise; twilight. Often carries a poetic or wistful quality.",
    "example": "They sat on the porch and watched the gloaming settle over the hills.",
    "roots": {
      "origin": "Old English 'glōmung', from 'glōm' meaning twilight, related to 'glow'.",
      "parts": [
        "glōm → twilight/dusk",
        "-ing → noun suffix indicating a period or process"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɡloʊ.mɪŋ/"
  },
  {
    "word": "caliginous",
    "pos": "adjective",
    "definition": "Misty, dark, and gloomy; characterized by thick obscuring haze or fog.",
    "example": "The sailors peered through the caliginous morning air, unable to sight the harbor.",
    "roots": {
      "origin": "Latin 'caliginosus', from 'caligo' meaning darkness, mist, or fog.",
      "parts": [
        "caligo → mist/darkness",
        "-ous → full of"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəˈlɪdʒ.ɪ.nəs/"
  },
  {
    "word": "pluvial",
    "pos": "adjective",
    "definition": "Of or relating to rain; characterized by abundant rainfall.",
    "example": "The pluvial season transformed the dry savanna into a lush, green landscape.",
    "roots": {
      "origin": "Latin 'pluvialis', from 'pluvia' meaning rain, from 'pluere' to rain.",
      "parts": [
        "pluvia → rain",
        "-al → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpluː.vi.əl/"
  },
  {
    "word": "virga",
    "pos": "noun",
    "definition": "Streaks of rain or ice crystals that fall from a cloud but evaporate before reaching the ground.",
    "example": "From the airplane window, she watched virga trail beneath distant storm clouds like ghostly curtains.",
    "roots": {
      "origin": "Latin 'virga' meaning rod, twig, or streak.",
      "parts": [
        "virga → rod/streak"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvɜr.ɡə/"
  },
  {
    "word": "lenticular",
    "pos": "adjective",
    "definition": "Shaped like a lens or lentil; used in meteorology to describe lens-shaped clouds often seen over mountains.",
    "example": "The lenticular cloud hovering above the summit looked almost too symmetrical to be natural.",
    "roots": {
      "origin": "Latin 'lenticularis', from 'lenticula' meaning small lentil.",
      "parts": [
        "lens → lentil/lens shape",
        "-icular → resembling or relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/lɛnˈtɪk.jə.lər/"
  },
  {
    "word": "zephyr",
    "pos": "noun",
    "definition": "A soft, gentle breeze, especially one from the west. Also used figuratively to describe anything light and refreshing.",
    "example": "A zephyr rustled through the meadow, carrying the scent of wildflowers.",
    "roots": {
      "origin": "Greek 'Zephyros', the god of the west wind, from 'zophos' meaning darkness or the west.",
      "parts": [
        "Zephyros → west wind god"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈzɛf.ər/"
  },
  {
    "word": "foehn",
    "pos": "noun",
    "definition": "A warm, dry wind that descends the leeward side of a mountain range, often causing rapid temperature increases.",
    "example": "The foehn melted what little snow remained on the lower slopes within a single afternoon.",
    "roots": {
      "origin": "German 'Föhn', from Latin 'Favonius', the Roman name for the west wind.",
      "parts": [
        "Favonius → favorable/west wind"
      ]
    },
    "tier": 1,
    "pronunciation": "/feɪn/"
  },
  {
    "word": "flocculent",
    "pos": "adjective",
    "definition": "Having a fluffy or woolly appearance; resembling tufts of wool or soft, loosely clumped matter.",
    "example": "The flocculent clouds drifted lazily across the blue afternoon sky.",
    "roots": {
      "origin": "Latin 'flocculus', diminutive of 'floccus' meaning tuft of wool.",
      "parts": [
        "floccus → tuft of wool",
        "-ulent → full of or resembling"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈflɒk.jə.lənt/"
  },
  {
    "word": "diurnal",
    "pos": "adjective",
    "definition": "Relating to or occurring during the daytime, or occurring every day. Contrasted with nocturnal.",
    "example": "The diurnal temperature swings in the desert can exceed fifty degrees Fahrenheit.",
    "roots": {
      "origin": "Latin 'diurnalis', from 'diurnus' meaning of the day, from 'dies' meaning day.",
      "parts": [
        "dies → day",
        "-urnus → belonging to",
        "-al → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/daɪˈɜr.nəl/"
  },
  {
    "word": "sibilant",
    "pos": "adjective",
    "definition": "Having or producing a hissing sound, especially the consonant sounds of s and sh.",
    "example": "The sibilant rustle of the grass announced the snake's presence before it was seen.",
    "roots": {
      "origin": "Latin 'sibilans', present participle of 'sibilare' meaning to hiss or whistle.",
      "parts": [
        "sibilare → to hiss",
        "-ant → doing or being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɪb.ɪ.lənt/"
  },
  {
    "word": "stentorian",
    "pos": "adjective",
    "definition": "Extremely loud and powerful, especially in reference to a voice or sound.",
    "example": "His stentorian voice carried to the back of the auditorium without any amplification.",
    "roots": {
      "origin": "From Stentor, the Greek herald in the Iliad whose voice was as loud as fifty men.",
      "parts": [
        "Stentor → legendary loud-voiced herald"
      ]
    },
    "tier": 1,
    "pronunciation": "/stɛnˈtɔr.i.ən/"
  },
  {
    "word": "sonorous",
    "pos": "adjective",
    "definition": "Having a rich, full, and deep sound; impressive or grand in style.",
    "example": "The cellist drew a sonorous tone from the instrument that filled the entire hall.",
    "roots": {
      "origin": "Latin 'sonorus', from 'sonor' meaning sound, from 'sonare' to sound.",
      "parts": [
        "sonare → to sound",
        "-ous → full of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɒn.ər.əs/"
  },
  {
    "word": "dulcet",
    "pos": "adjective",
    "definition": "Sweet and soothing to the ear; melodious and gentle in sound.",
    "example": "The dulcet notes of the flute drifted through the open window.",
    "roots": {
      "origin": "Latin 'dulcis' meaning sweet, via Old French 'doucet'.",
      "parts": [
        "dulcis → sweet"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈdʌl.sɪt/"
  },
  {
    "word": "ululation",
    "pos": "noun",
    "definition": "A long, wavering, high-pitched sound of wailing or lamentation; also used as an expression of grief or joy.",
    "example": "The ululation of the mourners echoed from the hillside.",
    "roots": {
      "origin": "Latin 'ululatio', from 'ululare' meaning to howl or wail; onomatopoeic.",
      "parts": [
        "ululare → to howl (imitative)",
        "-tion → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌʌl.jəˈleɪ.ʃən/"
  },
  {
    "word": "melisma",
    "pos": "noun",
    "definition": "The singing of a single syllable of text while moving through several different notes in succession.",
    "example": "The gospel singer's melisma on the final note brought the audience to its feet.",
    "roots": {
      "origin": "Greek 'melisma' meaning melody or song, from 'melos' meaning song or musical phrase.",
      "parts": [
        "melos → song/melody",
        "-isma → result or product of"
      ]
    },
    "tier": 1,
    "pronunciation": "/məˈlɪz.mə/"
  },
  {
    "word": "cacophonous",
    "pos": "adjective",
    "definition": "Involving or producing a harsh, unpleasant mixture of loud sounds.",
    "example": "The construction site outside was cacophonous from seven in the morning until dark.",
    "roots": {
      "origin": "Greek 'kakophonos', from 'kakos' meaning bad and 'phone' meaning voice or sound.",
      "parts": [
        "kakos → bad",
        "phone → voice/sound",
        "-ous → full of"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəˈkɒf.ə.nəs/"
  },
  {
    "word": "evanescent",
    "pos": "adjective",
    "definition": "Soon passing out of sight, memory, or existence; quickly fading or disappearing.",
    "example": "The rainbow was evanescent, lasting only a minute before the clouds shifted.",
    "roots": {
      "origin": "Latin 'evanescens', from 'evanescere' meaning to vanish, from 'e-' (out) and 'vanescere' (to vanish).",
      "parts": [
        "e- → out",
        "vanescere → to vanish",
        "-ent → being or doing"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɛv.əˈnɛs.ənt/"
  },
  {
    "word": "sempiternal",
    "pos": "adjective",
    "definition": "Lasting or existing forever throughout all time; eternal and unchanging.",
    "example": "The mountains gave her a sense of sempiternal calm, unchanged since long before her birth.",
    "roots": {
      "origin": "Latin 'sempiternalis', from 'semper' meaning always and 'aeternus' meaning eternal.",
      "parts": [
        "semper → always",
        "aeternus → eternal",
        "-al → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌsɛm.pɪˈtɜr.nəl/"
  },
  {
    "word": "immemorial",
    "pos": "adjective",
    "definition": "Originating or existing from before the time that memory, record, or tradition began; ancient beyond memory.",
    "example": "Fishermen had worked these waters since time immemorial.",
    "roots": {
      "origin": "Medieval Latin 'immemorialis', from Latin 'in-' (not) and 'memorialis' (of memory).",
      "parts": [
        "in- → not",
        "memoria → memory",
        "-al → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪm.əˈmɔr.i.əl/"
  },
  {
    "word": "dilapidated",
    "pos": "adjective",
    "definition": "In a state of disrepair or ruin through neglect or age.",
    "example": "The dilapidated farmhouse at the edge of town had been abandoned for decades.",
    "roots": {
      "origin": "Latin 'dilapidatus', past participle of 'dilapidare' meaning to scatter stones, from 'dis-' and 'lapis' meaning stone.",
      "parts": [
        "dis- → apart",
        "lapis → stone",
        "-ated → made or caused to be"
      ]
    },
    "tier": 1,
    "pronunciation": "/dɪˈlæp.ɪ.deɪ.tɪd/"
  },
  {
    "word": "senescent",
    "pos": "adjective",
    "definition": "Growing old; aging; in biology, relating to the process of deterioration with age.",
    "example": "The senescent oak still bloomed each spring, though its trunk had grown hollow.",
    "roots": {
      "origin": "Latin 'senescens', from 'senescere' meaning to grow old, from 'senex' meaning old.",
      "parts": [
        "senex → old",
        "-escere → to become",
        "-ent → being or doing"
      ]
    },
    "tier": 1,
    "pronunciation": "/sɪˈnɛs.ənt/"
  },
  {
    "word": "perambulate",
    "pos": "verb",
    "definition": "To walk or travel through or around an area, especially for pleasure or inspection.",
    "example": "He liked to perambulate the old neighborhood on Sunday mornings before the streets grew busy.",
    "roots": {
      "origin": "Latin 'perambulare', from 'per-' (through) and 'ambulare' (to walk).",
      "parts": [
        "per- → through",
        "ambulare → to walk",
        "-ate → to do"
      ]
    },
    "tier": 1,
    "pronunciation": "/pərˈæm.bjə.leɪt/"
  },
  {
    "word": "genuflect",
    "pos": "verb",
    "definition": "To lower one knee to the ground as a sign of reverence or submission; figuratively, to show excessive deference.",
    "example": "Critics accused the committee of genuflecting to the most powerful donors rather than addressing the public's needs.",
    "roots": {
      "origin": "Latin 'genuflectere', from 'genu' meaning knee and 'flectere' meaning to bend.",
      "parts": [
        "genu → knee",
        "flectere → to bend"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈdʒɛn.jə.flɛkt/"
  },
  {
    "word": "lope",
    "pos": "verb",
    "definition": "To run with a long, bounding stride; to move easily and rhythmically.",
    "example": "The dog loped across the field, covering the distance effortlessly.",
    "roots": {
      "origin": "Old Norse 'hlaupa' meaning to leap or run, related to Old English 'hleapan'.",
      "parts": [
        "hlaupa → to leap/run"
      ]
    },
    "tier": 1,
    "pronunciation": "/loʊp/"
  },
  {
    "word": "sashay",
    "pos": "verb",
    "definition": "To walk or move with an exaggerated, confident, often swaying motion; to strut.",
    "example": "She sashayed into the room and immediately commanded everyone's attention.",
    "roots": {
      "origin": "Alteration of French 'chassé', a dance step meaning to chase or glide.",
      "parts": [
        "chassé → to chase/glide (dance term)"
      ]
    },
    "tier": 1,
    "pronunciation": "/sæˈʃeɪ/"
  },
  {
    "word": "sidle",
    "pos": "verb",
    "definition": "To walk sideways or obliquely, especially in a cautious or furtive manner.",
    "example": "He sidled up to the bar and ordered quietly, hoping not to be recognized.",
    "roots": {
      "origin": "Back-formation from 'sideling', from Old English 'sīdeling' meaning sideways.",
      "parts": [
        "side → flank/edge",
        "-ling → in the manner of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsaɪ.dəl/"
  },
  {
    "word": "meander",
    "pos": "verb",
    "definition": "To follow a winding course; to proceed or proceed aimlessly and slowly without a specific destination.",
    "example": "They meandered through the old city for hours, stopping whenever something caught their eye.",
    "roots": {
      "origin": "From the Maeander River in Turkey, known for its winding course; Greek 'Maiandros'.",
      "parts": [
        "Maiandros → winding river in Asia Minor"
      ]
    },
    "tier": 1,
    "pronunciation": "/miˈæn.dər/"
  },
  {
    "word": "gesticulate",
    "pos": "verb",
    "definition": "To use gestures, especially dramatic ones, instead of or in addition to speech.",
    "example": "He gesticulated wildly as he described the near-miss accident on the highway.",
    "roots": {
      "origin": "Latin 'gesticulari', from 'gesticulus' meaning gesture, diminutive of 'gestus'.",
      "parts": [
        "gestus → gesture/bearing",
        "-culate → to perform or do repeatedly"
      ]
    },
    "tier": 1,
    "pronunciation": "/dʒɛˈstɪk.jə.leɪt/"
  },
  {
    "word": "genuflection",
    "pos": "noun",
    "definition": "The act of kneeling on one knee as a gesture of respect or reverence; figuratively, an act of excessive deference.",
    "example": "Each player performed a brief genuflection before the statue at the entrance to the stadium.",
    "roots": {
      "origin": "Latin 'genuflexio', from 'genu' (knee) and 'flectere' (to bend).",
      "parts": [
        "genu → knee",
        "flectere → to bend",
        "-ion → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌdʒɛn.jəˈflɛk.ʃən/"
  },
  {
    "word": "lollop",
    "pos": "verb",
    "definition": "To move in a clumsy, bounding manner with large, ungainly strides or leaps.",
    "example": "The Saint Bernard lolloped across the yard to greet the arriving guests.",
    "roots": {
      "origin": "Probably related to 'loll', suggesting floppy or loose movement, possibly influenced by 'gallop'.",
      "parts": [
        "loll → to hang loosely",
        "-op → frequentative suffix"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlɒl.əp/"
  },
  {
    "word": "amble",
    "pos": "verb",
    "definition": "To walk at a slow, leisurely pace without hurry or effort.",
    "example": "After dinner they ambled along the boardwalk, watching the sun sink into the sea.",
    "roots": {
      "origin": "Latin 'ambulare' meaning to walk, via Old French 'ambler'.",
      "parts": [
        "ambulare → to walk"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæm.bəl/"
  },
  {
    "word": "undulate",
    "pos": "verb",
    "definition": "To move in a smooth, wave-like motion; to have a wavy form or outline.",
    "example": "Fields of wheat undulated in the wind like a golden sea.",
    "roots": {
      "origin": "Latin 'undulare', from 'unda' meaning wave.",
      "parts": [
        "unda → wave",
        "-ulate → to cause or perform"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈʌn.djə.leɪt/"
  },
  {
    "word": "oscillate",
    "pos": "verb",
    "definition": "To move back and forth in a regular rhythm; to waver between different opinions or states.",
    "example": "Public opinion seemed to oscillate between enthusiasm and deep skepticism throughout the campaign.",
    "roots": {
      "origin": "Latin 'oscillare', from 'oscillum' meaning small mask hung as a charm, which swung in the breeze.",
      "parts": [
        "oscillum → swinging object",
        "-ate → to do"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɒs.ɪ.leɪt/"
  },
  {
    "word": "coruscate",
    "pos": "verb",
    "definition": "To emit vivid flashes of light; to sparkle or glitter brilliantly.",
    "example": "The chandelier coruscated in the candlelight, scattering small rainbows across the ceiling.",
    "roots": {
      "origin": "Latin 'coruscare' meaning to flash, glitter, or brandish.",
      "parts": [
        "coruscare → to flash/glitter",
        "-ate → to do"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkɔr.ə.skeɪt/"
  },
  {
    "word": "scintillate",
    "pos": "verb",
    "definition": "To emit sparks or flashes of light; figuratively, to be brilliantly clever or lively.",
    "example": "The conversation scintillated with wit and ideas that had everyone leaning forward.",
    "roots": {
      "origin": "Latin 'scintillare' meaning to sparkle, from 'scintilla' meaning spark.",
      "parts": [
        "scintilla → spark",
        "-ate → to do"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɪn.tɪ.leɪt/"
  },
  {
    "word": "toothsome",
    "pos": "adjective",
    "definition": "Temptingly tasty; attractive and appetizing. Can also mean physically attractive.",
    "example": "The bakery window displayed a toothsome array of pastries and glazed confections.",
    "roots": {
      "origin": "From 'tooth' (in the sense of appetite or taste) + '-some' (characterized by).",
      "parts": [
        "tooth → taste/appetite",
        "-some → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈtuːθ.səm/"
  },
  {
    "word": "unctuous",
    "pos": "adjective",
    "definition": "Having a greasy or oily quality; figuratively, excessively flattering or ingratiating in a way that seems insincere.",
    "example": "The unctuous praise from the new salesman made everyone at the table uncomfortable.",
    "roots": {
      "origin": "Latin 'unctuosus', from 'unctum' meaning ointment, from 'ungere' to anoint.",
      "parts": [
        "ungere → to anoint",
        "-uous → full of or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈʌŋk.tʃu.əs/"
  },
  {
    "word": "piquant",
    "pos": "adjective",
    "definition": "Having a pleasantly sharp, spicy, or tart flavor; pleasantly stimulating or provocative to the mind.",
    "example": "The piquant sauce balanced the richness of the braised meat perfectly.",
    "roots": {
      "origin": "French 'piquant', present participle of 'piquer' meaning to prick or sting.",
      "parts": [
        "piquer → to prick/sting",
        "-ant → doing or being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpiː.kənt/"
  },
  {
    "word": "astringent",
    "pos": "adjective",
    "definition": "Causing the contraction of body tissues; having a sharp, bitter taste or effect. Also: sharply incisive in manner.",
    "example": "The unripe persimmons had an astringent quality that dried the mouth.",
    "roots": {
      "origin": "Latin 'astringens', from 'astringere' meaning to bind tight, from 'ad-' and 'stringere'.",
      "parts": [
        "ad- → to/toward",
        "stringere → to bind/tighten",
        "-ent → being or doing"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈstrɪn.dʒənt/"
  },
  {
    "word": "umami",
    "pos": "noun",
    "definition": "A savory, deeply satisfying taste considered the fifth basic flavor alongside sweet, sour, salty, and bitter.",
    "example": "Parmesan, anchovies, and soy sauce all share that deep umami quality that makes dishes feel complete.",
    "roots": {
      "origin": "Japanese 'umami', from 'umai' meaning delicious and 'mi' meaning taste.",
      "parts": [
        "umai → delicious",
        "mi → taste"
      ]
    },
    "tier": 1,
    "pronunciation": "/uːˈmɑː.mi/"
  },
  {
    "word": "oleaginous",
    "pos": "adjective",
    "definition": "Rich in or covered with oil; greasy. Figuratively: insincerely flattering or fawning.",
    "example": "His oleaginous manner made the dinner guests exchange glances behind his back.",
    "roots": {
      "origin": "Latin 'oleagineus', from 'olea' meaning olive tree.",
      "parts": [
        "olea → olive tree",
        "-ginous → of the nature of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌoʊ.liˈædʒ.ɪ.nəs/"
  },
  {
    "word": "acrid",
    "pos": "adjective",
    "definition": "Having an unpleasantly strong and bitter smell or taste; bitter or rancorous in tone.",
    "example": "Acrid smoke from the burning tires drifted across the highway.",
    "roots": {
      "origin": "Latin 'acer' meaning sharp or keen, influenced by 'acid'.",
      "parts": [
        "acer → sharp/keen",
        "-id → having a quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæk.rɪd/"
  },
  {
    "word": "sapid",
    "pos": "adjective",
    "definition": "Having a strong, agreeable flavor; interesting or engaging to the mind.",
    "example": "The long-aged cheese was sapid in a way that younger versions simply could not achieve.",
    "roots": {
      "origin": "Latin 'sapidus', from 'sapere' meaning to taste or to be wise.",
      "parts": [
        "sapere → to taste/be wise",
        "-id → having a quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsæp.ɪd/"
  },
  {
    "word": "viand",
    "pos": "noun",
    "definition": "An article of food, especially a choice or delicate dish.",
    "example": "The banquet table was laden with viands from three different continents.",
    "roots": {
      "origin": "Old French 'viande' meaning food, from Latin 'vivanda' meaning things for living, from 'vivere' to live.",
      "parts": [
        "vivere → to live",
        "-anda → things necessary for"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈvaɪ.ənd/"
  },
  {
    "word": "collation",
    "pos": "noun",
    "definition": "A light meal; also the act of comparing and examining things systematically.",
    "example": "After the morning session, they gathered for a collation of sandwiches and tea.",
    "roots": {
      "origin": "Latin 'collatio', from 'collatus', past participle of 'conferre' meaning to bring together.",
      "parts": [
        "con- → together",
        "ferre → to bring/carry",
        "-tion → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəˈleɪ.ʃən/"
  },
  {
    "word": "deglutition",
    "pos": "noun",
    "definition": "The act or process of swallowing.",
    "example": "The patient experienced painful deglutition following the throat procedure.",
    "roots": {
      "origin": "Latin 'deglutitio', from 'deglutire' meaning to swallow down.",
      "parts": [
        "de- → down",
        "glutire → to swallow",
        "-tion → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌdiː.ɡluˈtɪʃ.ən/"
  },
  {
    "word": "rectitude",
    "pos": "noun",
    "definition": "Morally correct behavior or thinking; righteousness and uprightness of character.",
    "example": "She approached every decision with a quiet rectitude that earned the respect of her colleagues.",
    "roots": {
      "origin": "Latin 'rectitudo', from 'rectus' meaning straight or right.",
      "parts": [
        "rectus → straight/right",
        "-tudo → state or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈrɛk.tɪ.tuːd/"
  },
  {
    "word": "iniquity",
    "pos": "noun",
    "definition": "Immoral or grossly unfair behavior; wickedness and injustice.",
    "example": "The report exposed iniquities that had been built into the system for decades.",
    "roots": {
      "origin": "Latin 'iniquitas', from 'iniquus' meaning unequal or unjust.",
      "parts": [
        "in- → not",
        "aequus → equal/fair",
        "-ity → state or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈnɪk.wɪ.ti/"
  },
  {
    "word": "impunity",
    "pos": "noun",
    "definition": "Exemption from punishment or freedom from the injurious consequences of an action.",
    "example": "Wealthy defendants seemed to act with impunity in a justice system stacked against the poor.",
    "roots": {
      "origin": "Latin 'impunitas', from 'impunis' meaning unpunished.",
      "parts": [
        "in- → not",
        "poena → punishment",
        "-ity → state or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪmˈpjuː.nɪ.ti/"
  },
  {
    "word": "contrite",
    "pos": "adjective",
    "definition": "Feeling or expressing remorse at the recognition of having done wrong.",
    "example": "He appeared genuinely contrite during the apology, making no excuses for his behavior.",
    "roots": {
      "origin": "Latin 'contritus', past participle of 'conterere' meaning to grind down or crush.",
      "parts": [
        "con- → together/completely",
        "terere → to grind/crush",
        "-ite → state of being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkɒn.traɪt/"
  },
  {
    "word": "absolution",
    "pos": "noun",
    "definition": "Formal release from guilt, obligation, or punishment; formal forgiveness of sins in religious contexts.",
    "example": "He sought absolution not from the church but from the people his decisions had harmed.",
    "roots": {
      "origin": "Latin 'absolutio', from 'absolvere' meaning to set free.",
      "parts": [
        "ab- → away from",
        "solvere → to loosen/release",
        "-tion → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌæb.səˈluː.ʃən/"
  },
  {
    "word": "malfeasance",
    "pos": "noun",
    "definition": "Wrongdoing or misconduct, especially by a public official or person in a position of authority.",
    "example": "The audit uncovered malfeasance that extended throughout the entire finance department.",
    "roots": {
      "origin": "Old French 'malfaisance', from 'mal-' (bad) and 'faisance' (doing), from Latin 'facere' (to do).",
      "parts": [
        "mal- → bad/wrong",
        "facere → to do",
        "-ance → act or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/mælˈfiː.zəns/"
  },
  {
    "word": "comity",
    "pos": "noun",
    "definition": "Courtesy and considerate behavior toward others; friendly civility. In law, the mutual recognition of each other's laws by nations or states.",
    "example": "A spirit of comity among the committee members allowed them to reach consensus despite their differences.",
    "roots": {
      "origin": "Latin 'comitas', from 'comis' meaning friendly or courteous.",
      "parts": [
        "comis → friendly/courteous",
        "-ity → state or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkɒm.ɪ.ti/"
  },
  {
    "word": "amity",
    "pos": "noun",
    "definition": "Friendship and peaceful harmony between individuals or groups.",
    "example": "The two rival departments eventually arrived at a state of amity that improved the whole organization.",
    "roots": {
      "origin": "Latin 'amicitas', from 'amicus' meaning friend, from 'amare' to love.",
      "parts": [
        "amare → to love",
        "amicus → friend",
        "-ity → state or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæm.ɪ.ti/"
  },
  {
    "word": "rapprochement",
    "pos": "noun",
    "definition": "The establishment or resumption of harmonious relations between parties after a period of conflict.",
    "example": "The diplomatic rapprochement between the two countries ended decades of economic isolation.",
    "roots": {
      "origin": "French 'rapprochement', from 'rapprocher' meaning to bring closer together.",
      "parts": [
        "re- → again",
        "approcher → to approach/bring closer",
        "-ment → result or state"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌræp.roʊʃˈmɑ̃/"
  },
  {
    "word": "concord",
    "pos": "noun",
    "definition": "Agreement or harmony between people or groups; a state of peaceful coexistence.",
    "example": "After years of tension, the neighborhood finally achieved a fragile concord.",
    "roots": {
      "origin": "Latin 'concordia', from 'concors' meaning agreeing, from 'con-' (together) and 'cor' (heart).",
      "parts": [
        "con- → together",
        "cor → heart",
        "-ia → state or quality"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkɒŋ.kɔrd/"
  },
  {
    "word": "schism",
    "pos": "noun",
    "definition": "A split or division between strongly opposed parties caused by differences in opinion or belief.",
    "example": "The controversy created a lasting schism in the organization that took years to heal.",
    "roots": {
      "origin": "Greek 'schisma' meaning cleft or division, from 'schizein' meaning to split.",
      "parts": [
        "schizein → to split",
        "-ma → result of an action"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈskɪz.əm/"
  },
  {
    "word": "fractious",
    "pos": "adjective",
    "definition": "Easily irritated or difficult to control; inclined to quarrel or rebel.",
    "example": "The fractious coalition struggled to agree on even the most basic legislative agenda.",
    "roots": {
      "origin": "From 'fraction', related to Latin 'fractio' meaning a breaking, from 'frangere' to break.",
      "parts": [
        "frangere → to break",
        "-ious → full of or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈfræk.ʃəs/"
  },
  {
    "word": "acrimony",
    "pos": "noun",
    "definition": "Bitterness or ill feeling, especially in speech or manner during a dispute.",
    "example": "The divorce proceedings were conducted with such acrimony that both parties were left exhausted.",
    "roots": {
      "origin": "Latin 'acrimonia', from 'acer' meaning sharp or keen.",
      "parts": [
        "acer → sharp/keen",
        "-monia → quality or condition"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæk.rɪ.moʊ.ni/"
  },
  {
    "word": "opprobrium",
    "pos": "noun",
    "definition": "Harsh criticism or censure; the public disgrace arising from shameful conduct.",
    "example": "The senator faced public opprobrium after the scandal broke in the press.",
    "roots": {
      "origin": "Latin 'opprobrium', from 'ob-' (against) and 'probrum' (shameful deed).",
      "parts": [
        "ob- → against",
        "probrum → shameful deed"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈproʊ.bri.əm/"
  },
  {
    "word": "obloquy",
    "pos": "noun",
    "definition": "Strong public condemnation or blame; a state of disgrace resulting from public criticism.",
    "example": "Despite the obloquy heaped on his name, he refused to resign.",
    "roots": {
      "origin": "Latin 'obloquium', from 'obloqui' meaning to speak against.",
      "parts": [
        "ob- → against",
        "loqui → to speak",
        "-y → state or quality"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɒb.lə.kwi/"
  },
  {
    "word": "anathema",
    "pos": "noun",
    "definition": "Something or someone greatly detested or loathed; a formal ecclesiastical curse.",
    "example": "Compromise was anathema to the faction's hardliners.",
    "roots": {
      "origin": "Greek 'anathema' meaning a thing devoted to evil, from 'anatithenai' meaning to set up or dedicate.",
      "parts": [
        "ana- → up",
        "tithenai → to place/set",
        "-ema → result of an action"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈnæθ.ɪ.mə/"
  },
  {
    "word": "calumny",
    "pos": "noun",
    "definition": "The making of false and defamatory statements about someone; slander.",
    "example": "The politician dismissed the accusations as pure calumny spread by his opponents.",
    "roots": {
      "origin": "Latin 'calumnia' meaning false accusation, from 'calvi' meaning to deceive.",
      "parts": [
        "calvi → to deceive/trick",
        "-mnia → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈkæl.əm.ni/"
  },
  {
    "word": "ignominy",
    "pos": "noun",
    "definition": "Public shame or disgrace; dishonor and humiliation.",
    "example": "He accepted the ignominy of public censure rather than drag colleagues into the scandal.",
    "roots": {
      "origin": "Latin 'ignominia', from 'in-' (not) and 'nomen' (name), meaning loss of good name.",
      "parts": [
        "in- → not",
        "nomen → name/reputation",
        "-ia → state or quality"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɪɡ.nə.mɪ.ni/"
  },
  {
    "word": "clemency",
    "pos": "noun",
    "definition": "Mercy and leniency, especially toward an offender or enemy; mildness of weather.",
    "example": "The judge showed clemency given the defendant's youth and lack of prior offenses.",
    "roots": {
      "origin": "Latin 'clementia', from 'clemens' meaning mild or gentle.",
      "parts": [
        "clemens → mild/gentle",
        "-ia → state or quality"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈklɛm.ən.si/"
  },
  {
    "word": "forbearance",
    "pos": "noun",
    "definition": "Patient restraint; the quality of being tolerant and showing self-control in the face of provocation.",
    "example": "She managed the difficult client with remarkable forbearance over many months.",
    "roots": {
      "origin": "Old English 'forberan', from 'for-' (away/abstaining) and 'beran' (to bear/carry).",
      "parts": [
        "for- → away/abstaining",
        "beran → to bear",
        "-ance → state or quality"
      ]
    },
    "tier": 1,
    "pronunciation": "/fɔrˈbɛr.əns/"
  },
  {
    "word": "indemnity",
    "pos": "noun",
    "definition": "Security or protection against a loss or other financial burden; compensation for harm or loss.",
    "example": "The treaty included a clause of indemnity for citizens who lost property during the conflict.",
    "roots": {
      "origin": "Latin 'indemnitas', from 'indemnis' meaning unhurt or undamaged.",
      "parts": [
        "in- → not",
        "damnum → loss/damage",
        "-ity → state or quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪnˈdɛm.nɪ.ti/"
  },
  {
    "word": "restitution",
    "pos": "noun",
    "definition": "The restoration of something lost or stolen to its proper owner; compensation for injury or loss.",
    "example": "The court ordered full restitution to everyone who had been defrauded.",
    "roots": {
      "origin": "Latin 'restitutio', from 'restituere' meaning to restore.",
      "parts": [
        "re- → back/again",
        "statuere → to set up/establish",
        "-tion → act or result"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌrɛs.tɪˈtuː.ʃən/"
  },
  {
    "word": "exculpate",
    "pos": "verb",
    "definition": "To clear someone from blame or fault; to show or declare someone to be not guilty.",
    "example": "New evidence finally exculpated him after he had spent three years in prison.",
    "roots": {
      "origin": "Latin 'exculpare', from 'ex-' (out of) and 'culpa' (fault/blame).",
      "parts": [
        "ex- → out of",
        "culpa → fault/blame",
        "-ate → to do"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɛks.kʌl.peɪt/"
  },
  {
    "word": "inculpate",
    "pos": "verb",
    "definition": "To accuse or blame someone; to show evidence that someone is involved in a crime or wrongdoing.",
    "example": "The leaked documents inculpated several senior officials in the cover-up.",
    "roots": {
      "origin": "Latin 'inculpare', from 'in-' (into) and 'culpa' (fault/blame).",
      "parts": [
        "in- → into",
        "culpa → fault/blame",
        "-ate → to do"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɪn.kʌl.peɪt/"
  },
  {
    "word": "sylvan",
    "pos": "adjective",
    "definition": "Relating to or characteristic of woods or forests; pleasantly rural and wooded.",
    "example": "The trail wound through sylvan glades where sunlight filtered through old-growth canopy.",
    "roots": {
      "origin": "Latin 'silvanus', from 'silva' meaning wood or forest.",
      "parts": [
        "silva → wood/forest",
        "-an → relating to or belonging to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɪl.vən/"
  },
  {
    "word": "riparian",
    "pos": "adjective",
    "definition": "Relating to or situated on the banks of a river or other watercourse.",
    "example": "Riparian vegetation along the creek provided crucial habitat for migratory birds.",
    "roots": {
      "origin": "Latin 'riparius', from 'ripa' meaning riverbank.",
      "parts": [
        "ripa → riverbank",
        "-arian → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/rɪˈpɛr.i.ən/"
  },
  {
    "word": "littoral",
    "pos": "adjective",
    "definition": "Relating to or on the shore of the sea or a lake; the zone between high and low tide marks.",
    "example": "The littoral ecosystem was among the most biologically diverse in the region.",
    "roots": {
      "origin": "Latin 'littoralis', from 'litus' (littus) meaning seashore.",
      "parts": [
        "litus → shore/beach",
        "-al → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlɪt.ər.əl/"
  },
  {
    "word": "lacustrine",
    "pos": "adjective",
    "definition": "Of or relating to lakes; produced or formed in lakes.",
    "example": "The lacustrine sediments revealed thousands of years of climate history.",
    "roots": {
      "origin": "Latin 'lacustris', from 'lacus' meaning lake.",
      "parts": [
        "lacus → lake",
        "-trine → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ləˈkʌs.trɪn/"
  },
  {
    "word": "palustrine",
    "pos": "adjective",
    "definition": "Of, relating to, or living in marshes or swamps.",
    "example": "The palustrine wetlands were teeming with amphibians in the spring.",
    "roots": {
      "origin": "Latin 'paluster', from 'palus' meaning swamp or marsh.",
      "parts": [
        "palus → marsh/swamp",
        "-trine → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/pəˈlʌs.trɪn/"
  },
  {
    "word": "viridian",
    "pos": "noun",
    "definition": "A bluish-green pigment and color; a vivid, slightly cool shade of green.",
    "example": "The artist mixed viridian with white to capture the exact color of shallow Caribbean water.",
    "roots": {
      "origin": "Latin 'viridis' meaning green.",
      "parts": [
        "viridis → green",
        "-ian → relating to or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/vɪˈrɪd.i.ən/"
  },
  {
    "word": "cerulean",
    "pos": "adjective",
    "definition": "Deep sky blue; a bright, clear shade of blue resembling a cloudless sky.",
    "example": "The cerulean water of the lagoon was so clear they could see the sandy bottom from the boat.",
    "roots": {
      "origin": "Latin 'caeruleus' meaning sky-blue, from 'caelum' meaning sky or heaven.",
      "parts": [
        "caelum → sky/heaven",
        "-ean → resembling or of the nature of"
      ]
    },
    "tier": 1,
    "pronunciation": "/səˈruː.li.ən/"
  },
  {
    "word": "aureate",
    "pos": "adjective",
    "definition": "Made of or having the color of gold; (of language) ornate and florid.",
    "example": "The setting sun cast an aureate glow over the cathedral spires.",
    "roots": {
      "origin": "Latin 'aureatus', from 'aurum' meaning gold.",
      "parts": [
        "aurum → gold",
        "-ate → having the quality of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɔr.i.ɪt/"
  },
  {
    "word": "sanguineous",
    "pos": "adjective",
    "definition": "Of, relating to, or involving blood; blood-red in color.",
    "example": "The surgeon noted sanguineous fluid accumulating in the wound.",
    "roots": {
      "origin": "Latin 'sanguineus', from 'sanguis' meaning blood.",
      "parts": [
        "sanguis → blood",
        "-eous → full of or resembling"
      ]
    },
    "tier": 1,
    "pronunciation": "/sæŋˈɡwɪn.i.əs/"
  },
  {
    "word": "stygian",
    "pos": "adjective",
    "definition": "Extremely dark, gloomy, or forbidding; of or relating to the Styx, the underworld river of Greek mythology.",
    "example": "The mine descended into stygian depths where even powerful headlamps barely penetrated.",
    "roots": {
      "origin": "Latin 'Stygius', from Greek 'Stygios', from 'Styx', the river of the underworld.",
      "parts": [
        "Styx → underworld river (Greek myth)",
        "-ian → relating to or resembling"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈstɪdʒ.i.ən/"
  },
  {
    "word": "lucent",
    "pos": "adjective",
    "definition": "Glowing with or giving off light; luminous and translucent.",
    "example": "The moon hung lucent and full above the sleeping city.",
    "roots": {
      "origin": "Latin 'lucens', present participle of 'lucere' meaning to shine.",
      "parts": [
        "lucere → to shine",
        "-ent → being or doing"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈluː.sənt/"
  },
  {
    "word": "lambent",
    "pos": "adjective",
    "definition": "Softly bright or radiant; lightly brilliant or playful, especially of a flame or light.",
    "example": "The lambent glow of the campfire made the faces around it warm and peaceful.",
    "roots": {
      "origin": "Latin 'lambens', present participle of 'lambere' meaning to lick (as a flame licks).",
      "parts": [
        "lambere → to lick",
        "-ent → being or doing"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈlæm.bənt/"
  },
  {
    "word": "phosphorescent",
    "pos": "adjective",
    "definition": "Emitting light without combustion or heat; glowing in the dark after exposure to light.",
    "example": "The phosphorescent plankton lit up the water around the boat with an eerie blue glow.",
    "roots": {
      "origin": "Greek 'phosphoros' meaning light-bearing, from 'phos' (light) and 'phoros' (bearing).",
      "parts": [
        "phos → light",
        "phoros → bearing/carrying",
        "-escent → becoming or emitting"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌfɒs.fə.ˈrɛs.ənt/"
  },
  {
    "word": "gossamer",
    "pos": "adjective",
    "definition": "Light, delicate, and thin; resembling or suggesting a fine filament of spider's web.",
    "example": "She wore a gossamer scarf that drifted in the breeze like smoke.",
    "roots": {
      "origin": "Middle English, probably from 'goose' + 'summer', referring to the warm autumn period when spider webs drift in the air.",
      "parts": [
        "goose → goose",
        "summer → summer (mild autumn season)"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɡɒs.ə.mər/"
  },
  {
    "word": "exiguous",
    "pos": "adjective",
    "definition": "Very small in size or amount; meager and scanty.",
    "example": "They survived on exiguous rations during the final weeks of the expedition.",
    "roots": {
      "origin": "Latin 'exiguus' meaning small or meager, from 'exigere' meaning to weigh out or demand.",
      "parts": [
        "ex- → out",
        "agere → to drive/weigh",
        "-ous → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪɡˈzɪɡ.ju.əs/"
  },
  {
    "word": "capacious",
    "pos": "adjective",
    "definition": "Roomy and able to hold or contain a great deal; having a large capacity.",
    "example": "The capacious living room easily accommodated the entire extended family.",
    "roots": {
      "origin": "Latin 'capax', from 'capere' meaning to take or hold.",
      "parts": [
        "capere → to hold/take",
        "-acious → tending or inclined to"
      ]
    },
    "tier": 1,
    "pronunciation": "/kəˈpeɪ.ʃəs/"
  },
  {
    "word": "prodigious",
    "pos": "adjective",
    "definition": "Remarkably or impressively great in extent, size, or degree; abnormally large.",
    "example": "She had a prodigious memory that allowed her to recall passages she had read only once.",
    "roots": {
      "origin": "Latin 'prodigiosus', from 'prodigium' meaning omen or portent.",
      "parts": [
        "pro- → forth",
        "agere → to drive",
        "-ious → full of or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/prəˈdɪdʒ.əs/"
  },
  {
    "word": "infinitesimal",
    "pos": "adjective",
    "definition": "Extremely small; so small as to be incapable of measurement.",
    "example": "The margin of error was infinitesimal but enough to alter the final ranking.",
    "roots": {
      "origin": "Modern Latin 'infinitesimus', formed from 'infinitus' (infinite) on the model of 'centesimus' (hundredth).",
      "parts": [
        "infinitus → infinite/boundless",
        "-esimal → ordinal suffix"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌɪn.fɪn.ɪˈtɛs.ɪ.məl/"
  },
  {
    "word": "melancholia",
    "pos": "noun",
    "definition": "A deep, persistent sadness or depression; a pensive mood characterized by brooding and gloom.",
    "example": "A mood of melancholia settled over him every autumn as the days shortened.",
    "roots": {
      "origin": "Greek 'melancholia', from 'melas' (black) and 'chole' (bile), based on the ancient idea that excess black bile caused depression.",
      "parts": [
        "melas → black",
        "chole → bile"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌmɛl.ənˈkoʊ.li.ə/"
  },
  {
    "word": "nostalgia",
    "pos": "noun",
    "definition": "A sentimental longing or wistful affection for a past period or place one associates with happiness.",
    "example": "The smell of pine and old books filled her with nostalgia for her grandmother's house.",
    "roots": {
      "origin": "Greek 'nostos' (homecoming) and 'algos' (pain); coined in the 17th century to describe homesickness.",
      "parts": [
        "nostos → homecoming/return",
        "algos → pain"
      ]
    },
    "tier": 1,
    "pronunciation": "/nɒˈstæl.dʒə/"
  },
  {
    "word": "wistful",
    "pos": "adjective",
    "definition": "Having or showing a feeling of vague or regretful longing; pensively sad.",
    "example": "She paused at the window with a wistful look, watching the children play below.",
    "roots": {
      "origin": "From 'wist', possibly from 'wistly' meaning attentively, possibly related to 'whist' (quiet/still).",
      "parts": [
        "wist → attentive longing",
        "-ful → full of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈwɪst.fəl/"
  },
  {
    "word": "dolorous",
    "pos": "adjective",
    "definition": "Feeling or expressing great sorrow or distress; very sad.",
    "example": "The dolorous keening of the pipes drifted over the assembled mourners.",
    "roots": {
      "origin": "Old French 'doloros', from Latin 'dolorosus', from 'dolor' meaning pain or grief.",
      "parts": [
        "dolor → pain/grief",
        "-ous → full of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈdɒl.ər.əs/"
  },
  {
    "word": "petulant",
    "pos": "adjective",
    "definition": "Childishly sulky or bad-tempered, especially in response to a minor setback or frustration.",
    "example": "His petulant response to the criticism made him look less like a leader.",
    "roots": {
      "origin": "Latin 'petulans', from 'petulare' meaning to attack or be wanton, related to 'petere' to seek.",
      "parts": [
        "petere → to seek/attack",
        "-ant → doing or being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpɛtʃ.ə.lənt/"
  },
  {
    "word": "irascible",
    "pos": "adjective",
    "definition": "Having or showing a tendency to be easily angered; hot-tempered.",
    "example": "The irascible chef was brilliant in the kitchen but difficult to work alongside.",
    "roots": {
      "origin": "Latin 'irascibilis', from 'irasci' meaning to be angry, from 'ira' meaning anger.",
      "parts": [
        "ira → anger",
        "-scibilis → able or tending to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪˈræs.ɪ.bəl/"
  },
  {
    "word": "pugnacious",
    "pos": "adjective",
    "definition": "Eager or quick to argue, quarrel, or fight; aggressive.",
    "example": "The pugnacious columnist seemed to relish controversy more than truth.",
    "roots": {
      "origin": "Latin 'pugnax', from 'pugnare' meaning to fight, from 'pugnus' meaning fist.",
      "parts": [
        "pugnus → fist",
        "pugnare → to fight",
        "-acious → tending to"
      ]
    },
    "tier": 1,
    "pronunciation": "/pʌɡˈneɪ.ʃəs/"
  },
  {
    "word": "cantankerous",
    "pos": "adjective",
    "definition": "Bad-tempered, argumentative, and uncooperative; persistently difficult to deal with.",
    "example": "The cantankerous landlord refused to fix anything without a fight.",
    "roots": {
      "origin": "Possibly from Middle English 'contekour' meaning quarreler, from 'contek' meaning strife.",
      "parts": [
        "contek → strife/quarrel",
        "-ous → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/kænˈtæŋ.kər.əs/"
  },
  {
    "word": "obstreperous",
    "pos": "adjective",
    "definition": "Noisy and difficult to control; resisting control in a loud and unruly manner.",
    "example": "The obstreperous crowd drowned out the speaker's opening remarks.",
    "roots": {
      "origin": "Latin 'obstreperus', from 'ob-' (against) and 'strepere' (to make a noise).",
      "parts": [
        "ob- → against",
        "strepere → to make a noise",
        "-ous → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/əbˈstrɛp.ər.əs/"
  },
  {
    "word": "refractory",
    "pos": "adjective",
    "definition": "Stubborn or unmanageable; resistant to a process or stimulus; difficult to fuse or work.",
    "example": "The refractory patient refused all suggested treatments for months.",
    "roots": {
      "origin": "Latin 'refractarius', from 'refractus', past participle of 'refringere' meaning to break up.",
      "parts": [
        "re- → back",
        "frangere → to break",
        "-ory → relating to or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/rɪˈfræk.tər.i/"
  },
  {
    "word": "obdurate",
    "pos": "adjective",
    "definition": "Stubbornly refusing to change one's opinion or course of action; hardhearted.",
    "example": "Despite appeals for mercy, the committee remained obdurate in its decision.",
    "roots": {
      "origin": "Latin 'obduratus', from 'obdurare' meaning to harden, from 'ob-' and 'durus' (hard).",
      "parts": [
        "ob- → against/intensifier",
        "durus → hard",
        "-ate → state of being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈɒb.djʊ.rɪt/"
  },
  {
    "word": "ingénue",
    "pos": "noun",
    "definition": "An innocent or unsophisticated young woman, especially as a stock character in a film or play.",
    "example": "She was tired of being cast as the ingénue and pushed for more complex roles.",
    "roots": {
      "origin": "French 'ingénue', feminine of 'ingénu', from Latin 'ingenuus' meaning native, freeborn, or frank.",
      "parts": [
        "in- → in/within",
        "genu → born",
        "ingenuus → freeborn/frank"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæn.ʒə.njuː/"
  },
  {
    "word": "sybaritic",
    "pos": "adjective",
    "definition": "Fond of sensuous luxury and pleasure; self-indulgent.",
    "example": "He spent the summer in sybaritic ease at a villa by the sea.",
    "roots": {
      "origin": "From Sybaris, an ancient Greek city in southern Italy known for the luxury of its inhabitants.",
      "parts": [
        "Sybaris → ancient city known for luxury",
        "-itic → relating to or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌsɪb.əˈrɪt.ɪk/"
  },
  {
    "word": "voluptuary",
    "pos": "noun",
    "definition": "A person devoted to luxury and sensual pleasure; one who lives for enjoyment.",
    "example": "The estate had been designed by a voluptuary who spared no expense on comfort.",
    "roots": {
      "origin": "Latin 'voluptuarius', from 'voluptas' meaning pleasure.",
      "parts": [
        "voluptas → pleasure/delight",
        "-ary → one who is characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/vəˈlʌp.tʃu.ɛr.i/"
  },
  {
    "word": "ascetic",
    "pos": "adjective",
    "definition": "Characterized by or suggesting the practice of severe self-discipline and abstention from indulgence.",
    "example": "The ascetic lifestyle of the monks extended to their bare cells and plain diet.",
    "roots": {
      "origin": "Greek 'asketikos', from 'asketes' meaning monk or hermit, from 'askein' to exercise or train.",
      "parts": [
        "askein → to exercise/train",
        "-tic → relating to or characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/əˈsɛt.ɪk/"
  },
  {
    "word": "mendicant",
    "pos": "noun",
    "definition": "A beggar; also, a member of a religious order that originally relied entirely on charitable donations.",
    "example": "A mendicant sat cross-legged near the temple entrance, a wooden bowl beside him.",
    "roots": {
      "origin": "Latin 'mendicans', from 'mendicare' meaning to beg, from 'mendicus' meaning beggar.",
      "parts": [
        "mendicus → beggar",
        "-ant → one who does"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈmɛn.dɪ.kənt/"
  },
  {
    "word": "penury",
    "pos": "noun",
    "definition": "Extreme poverty; a very small and inadequate amount of something.",
    "example": "The artist lived in penury for years before his work was recognized.",
    "roots": {
      "origin": "Latin 'penuria' meaning scarcity or want.",
      "parts": [
        "penuria → scarcity/want"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpɛn.jʊ.ri/"
  },
  {
    "word": "lucre",
    "pos": "noun",
    "definition": "Money, especially when regarded as sordid or distasteful; the gain or profit from something considered disreputable.",
    "example": "He claimed to have entered politics for principle, not filthy lucre.",
    "roots": {
      "origin": "Latin 'lucrum' meaning gain or profit.",
      "parts": [
        "lucrum → gain/profit"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈluː.kər/"
  },
  {
    "word": "largesse",
    "pos": "noun",
    "definition": "Generosity in bestowing money or gifts upon others; the money or gifts given generously.",
    "example": "The foundation distributed its largesse to organizations across the arts and sciences.",
    "roots": {
      "origin": "Old French 'largesse', from 'large' meaning generous, from Latin 'largus' meaning abundant.",
      "parts": [
        "largus → abundant/generous",
        "-esse → quality or state of"
      ]
    },
    "tier": 1,
    "pronunciation": "/lɑːrˈdʒɛs/"
  },
  {
    "word": "parsimony",
    "pos": "noun",
    "definition": "Extreme unwillingness to spend money or use resources; extreme frugality.",
    "example": "His parsimony was legendary—he would walk miles to save a dollar.",
    "roots": {
      "origin": "Latin 'parsimonia', from 'parcere' meaning to spare or be sparing.",
      "parts": [
        "parcere → to spare",
        "-monia → quality or condition"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈpɑːr.sɪ.moʊ.ni/"
  },
  {
    "word": "niggardly",
    "pos": "adjective",
    "definition": "Ungenerous with money, time, or resources; mean and grudging.",
    "example": "The niggardly budget allocation left the department unable to hire the staff it needed.",
    "roots": {
      "origin": "From 'niggard', possibly from Old Norse 'hnøggr' meaning stingy.",
      "parts": [
        "niggard → miser/stingy person",
        "-ly → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈnɪɡ.ərd.li/"
  },
  {
    "word": "extravagant",
    "pos": "adjective",
    "definition": "Lacking restraint in spending money or using resources; exceeding what is reasonable or appropriate.",
    "example": "Her extravagant tastes were at odds with her modest income.",
    "roots": {
      "origin": "Medieval Latin 'extravagans', from 'extra-' (outside) and 'vagari' (to wander).",
      "parts": [
        "extra- → outside",
        "vagari → to wander",
        "-ant → doing or being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɪkˈstræv.ə.ɡənt/"
  },
  {
    "word": "prodigal",
    "pos": "adjective",
    "definition": "Spending money or resources freely and recklessly; wastefully extravagant.",
    "example": "He had been prodigal with the inheritance, and within a decade it was gone.",
    "roots": {
      "origin": "Latin 'prodigus', from 'prodigere' meaning to drive away or squander.",
      "parts": [
        "pro- → forth/away",
        "agere → to drive",
        "-al → relating to"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈprɒd.ɪ.ɡəl/"
  },
  {
    "word": "profligate",
    "pos": "adjective",
    "definition": "Recklessly extravagant or wasteful in the use of resources; licentious and dissolute.",
    "example": "The profligate spending during the boom years left the company exposed when the market turned.",
    "roots": {
      "origin": "Latin 'profligatus', past participle of 'profligare' meaning to dash to the ground or ruin.",
      "parts": [
        "pro- → forward/down",
        "fligere → to strike",
        "-ate → state of being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈprɒf.lɪ.ɡɪt/"
  },
  {
    "word": "solecism",
    "pos": "noun",
    "definition": "A grammatical mistake in speech or writing; a breach of good manners or etiquette.",
    "example": "Using 'less' instead of 'fewer' is a common solecism that editors often flag.",
    "roots": {
      "origin": "Latin 'soloecismus', from Greek 'soloikismos', from 'Soloi', a city in Cilicia whose inhabitants spoke Greek badly.",
      "parts": [
        "Soloi → city known for corrupted Greek speech",
        "-ism → practice or act of"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈsɒl.ɪ.sɪz.əm/"
  },
  {
    "word": "apposite",
    "pos": "adjective",
    "definition": "Apt in the circumstances or in relation to something; highly pertinent and appropriate.",
    "example": "His apposite remarks during the debate earned him praise from both sides of the aisle.",
    "roots": {
      "origin": "Latin 'appositus', past participle of 'apponere' meaning to place near.",
      "parts": [
        "ad- → to/near",
        "ponere → to place",
        "-ite → state of being"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˈæp.ə.zɪt/"
  },
  {
    "word": "germane",
    "pos": "adjective",
    "definition": "Relevant and appropriate to the matter in hand; closely related to the subject being discussed.",
    "example": "Only raise points that are germane to today's agenda—we'll have time for other issues later.",
    "roots": {
      "origin": "Latin 'germanus' meaning having the same parents; closely related.",
      "parts": [
        "germanus → of the same birth/closely related"
      ]
    },
    "tier": 1,
    "pronunciation": "/dʒərˈmeɪn/"
  },
  {
    "word": "supererogatory",
    "pos": "adjective",
    "definition": "Going beyond what is required or expected; performing more than is demanded by duty.",
    "example": "The lawyer's detailed preparation was supererogatory given how straightforward the case was.",
    "roots": {
      "origin": "Latin 'supererogare', from 'super-' (above) and 'erogare' (to pay out).",
      "parts": [
        "super- → above/beyond",
        "erogare → to pay out/spend",
        "-ory → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ˌsuː.pər.ɪˈrɒɡ.ə.tɔːr.i/"
  },
  {
    "word": "auspicious",
    "pos": "adjective",
    "definition": "Conducive to success; promising a good or fortunate outcome.",
    "example": "It was an auspicious beginning to what would become a long and productive collaboration.",
    "roots": {
      "origin": "Latin 'auspiciosus', from 'auspicium' meaning divination from bird observation.",
      "parts": [
        "avis → bird",
        "specere → to look/observe",
        "-ious → characterized by"
      ]
    },
    "tier": 1,
    "pronunciation": "/ɔːˈspɪʃ.əs/"
  },
  {
    "word": "apodictic",
    "pos": "adjective",
    "definition": "Clearly established or beyond dispute; expressing or of the nature of necessary truth. Often used in logic and philosophy to describe propositions that are necessarily true.",
    "example": "His apodictic certainty about the outcome of the experiment left no room for doubt among his colleagues.",
    "roots": {
      "origin": "Greek apodeiktikos, from apodeiknynai meaning 'to demonstrate'",
      "parts": [
        "apo → away, completely",
        "deiknynai → to show"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.əˈdɪk.tɪk/"
  },
  {
    "word": "iatrogenic",
    "pos": "adjective",
    "definition": "Relating to illness or harm caused by medical examination or treatment rather than by the underlying disease. Widely used in medical literature and increasingly in policy discussions.",
    "example": "The patient's secondary infection was iatrogenic, acquired during her hospital stay for an unrelated surgery.",
    "roots": {
      "origin": "Greek iatros meaning 'physician' + -genic meaning 'produced by'",
      "parts": [
        "iatros → physician",
        "genos → birth, origin",
        "-ic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/aɪˌæt.rəˈdʒɛn.ɪk/"
  },
  {
    "word": "litotes",
    "pos": "noun",
    "definition": "A rhetorical figure in which understatement is used, especially where an affirmative is expressed by negating its opposite. Common in Old English poetry and everyday British speech.",
    "example": "When she said the surgery was 'not without its risks,' she was employing litotes to soften a truly alarming prognosis.",
    "roots": {
      "origin": "Greek litotes from litos meaning 'plain, meager'",
      "parts": [
        "litos → smooth, plain, simple"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈlaɪ.tə.tiːz/"
  },
  {
    "word": "nosocomial",
    "pos": "adjective",
    "definition": "Originating or taking place in a hospital; used especially of infections acquired during a hospital stay that were not present at the time of admission.",
    "example": "The rise in nosocomial infections prompted the hospital to implement strict new sanitation protocols across all wards.",
    "roots": {
      "origin": "Greek nosokomeion meaning 'hospital', from nosos 'disease' + komein 'to tend'",
      "parts": [
        "nosos → disease",
        "komein → to tend, care for"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌnoʊ.zəˈkoʊ.mi.əl/"
  },
  {
    "word": "apophasis",
    "pos": "noun",
    "definition": "A rhetorical device in which a speaker emphasizes something by claiming not to mention it, or draws attention to something by explicitly denying it. Also called paralipsis.",
    "example": "The politician used apophasis masterfully when he said, 'I won't even bring up my opponent's past ethical violations.'",
    "roots": {
      "origin": "Greek apophasis from apophanai 'to deny', from apo- 'away' + phanai 'to speak'",
      "parts": [
        "apo → away from",
        "phanai → to speak"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈpɒf.ə.sɪs/"
  },
  {
    "word": "catachresis",
    "pos": "noun",
    "definition": "The use of a word in a way that is not correct or not intended by its original definition; an extreme or strained metaphor. Sometimes used deliberately for rhetorical effect.",
    "example": "Calling a table's 'legs' is a classic catachresis, borrowing a body-part term for a piece of furniture.",
    "roots": {
      "origin": "Greek katakhresis from katakhresthai 'to misuse', from kata- 'against' + khresthai 'to use'",
      "parts": [
        "kata → against, wrongly",
        "khresthai → to use"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌkæt.əˈkriː.sɪs/"
  },
  {
    "word": "tautology",
    "pos": "noun",
    "definition": "The saying of the same thing twice in different words, generally considered to be a fault of style; also, in logic, a statement that is true by necessity or by virtue of its logical form alone.",
    "example": "The phrase 'free gift' is a tautology — a gift, by definition, is always free.",
    "roots": {
      "origin": "Greek tautologia from tauto 'the same' + logos 'word'",
      "parts": [
        "tauto → the same",
        "logos → word, reason"
      ]
    },
    "tier": 2,
    "pronunciation": "/tɔːˈtɒl.ə.dʒi/"
  },
  {
    "word": "aporia",
    "pos": "noun",
    "definition": "An irresolvable internal contradiction or logical disjunction in a text, argument, or theory; in philosophy, a state of puzzlement or doubt arising from equally valid but contradictory conclusions.",
    "example": "The philosopher left the lecture in a state of aporia, unable to reconcile the two equally compelling arguments he had just encountered.",
    "roots": {
      "origin": "Greek aporia from aporos 'impassable', from a- 'without' + poros 'passage'",
      "parts": [
        "a → without",
        "poros → passage, way through"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈpɔːr.i.ə/"
  },
  {
    "word": "kenosis",
    "pos": "noun",
    "definition": "In Christian theology, the self-emptying of one's own will and becoming entirely receptive to God's will; more broadly, any deliberate act of self-emptying or self-renunciation.",
    "example": "The monk described his daily meditation as a practice of kenosis — letting go of ego until only presence remained.",
    "roots": {
      "origin": "Greek kenosis from kenoun 'to empty', from kenos 'empty'",
      "parts": [
        "kenos → empty",
        "-osis → process or condition"
      ]
    },
    "tier": 2,
    "pronunciation": "/kɪˈnoʊ.sɪs/"
  },
  {
    "word": "apocatastasis",
    "pos": "noun",
    "definition": "The theological doctrine that all souls will ultimately be reconciled to God; more broadly, the restoration of a thing to its original or pristine state.",
    "example": "The heretical preacher taught apocatastasis — that even the devil himself would eventually be saved.",
    "roots": {
      "origin": "Greek apokatastasis from apokathistanai 'to restore', from apo- + kata- + histanai 'to set'",
      "parts": [
        "apo → away, completely",
        "kata → down, according to",
        "histanai → to stand, set"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.ə.kəˈtæs.tə.sɪs/"
  },
  {
    "word": "pejorative",
    "pos": "adjective",
    "definition": "Expressing contempt or disapproval; having a disparaging or derogatory quality. Often used in linguistics to describe words whose meanings have worsened over time.",
    "example": "The term was originally neutral, but centuries of misuse had rendered it thoroughly pejorative by the modern era.",
    "roots": {
      "origin": "Latin pejorare 'to make worse', from pejor 'worse'",
      "parts": [
        "pejor → worse",
        "-ative → tending to"
      ]
    },
    "tier": 2,
    "pronunciation": "/pɪˈdʒɒr.ə.tɪv/"
  },
  {
    "word": "enchiridion",
    "pos": "noun",
    "definition": "A handbook or manual; a concise reference work intended to be held in the hand and consulted frequently. Used notably by Epictetus and Erasmus.",
    "example": "She kept a small enchiridion of stoic maxims on her desk, consulting it whenever a difficult decision loomed.",
    "roots": {
      "origin": "Greek enkheiridion from en 'in' + kheir 'hand' + -idion diminutive suffix",
      "parts": [
        "en → in",
        "kheir → hand",
        "-idion → small thing"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛn.kɪˈrɪd.i.ɒn/"
  },
  {
    "word": "prolepsis",
    "pos": "noun",
    "definition": "The anticipation and answering of possible objections in rhetorical argument; also, a figure of speech in which a future event is referred to as though already accomplished.",
    "example": "The lawyer used prolepsis effectively, dismantling the opposing counsel's likely objections before they could be raised.",
    "roots": {
      "origin": "Greek prolepsis from prolambanein 'to anticipate', from pro- 'before' + lambanein 'to take'",
      "parts": [
        "pro → before",
        "lambanein → to take, seize"
      ]
    },
    "tier": 2,
    "pronunciation": "/proʊˈlɛp.sɪs/"
  },
  {
    "word": "syllepsis",
    "pos": "noun",
    "definition": "A figure of speech in which a word is applied to two others in different senses, or to two others of which it grammatically suits only one. Creates a clever, often humorous effect.",
    "example": "Dickens used syllepsis in 'She arrived in a flood of tears and a sedan chair' — 'arrived in' applying literally and figuratively at once.",
    "roots": {
      "origin": "Greek syllepsis from syllambanein 'to take together', from syn- 'together' + lambanein 'to take'",
      "parts": [
        "syn → together",
        "lambanein → to take"
      ]
    },
    "tier": 2,
    "pronunciation": "/sɪˈlɛp.sɪs/"
  },
  {
    "word": "zeugma",
    "pos": "noun",
    "definition": "A figure of speech in which a word, especially a verb or adjective, applies to more than one noun, blending together grammatically or logically different ideas.",
    "example": "The headline 'Man Loses Wife, Wallet, and Will to Live' employs zeugma for its wry comedic effect.",
    "roots": {
      "origin": "Greek zeugma from zeugnynai 'to yoke', from zeugos 'yoke'",
      "parts": [
        "zeugos → yoke, pair"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈzjuːɡ.mə/"
  },
  {
    "word": "anaphora",
    "pos": "noun",
    "definition": "The repetition of a word or phrase at the beginning of successive clauses, sentences, or verses for rhetorical or poetic effect. One of the most common and powerful rhetorical devices.",
    "example": "Churchill's wartime speech employed anaphora — 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.'",
    "roots": {
      "origin": "Greek anaphora from anapherin 'to carry back', from ana- 'again' + pherin 'to carry'",
      "parts": [
        "ana → back, again",
        "pherin → to carry, bear"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈnæf.ər.ə/"
  },
  {
    "word": "epistrophe",
    "pos": "noun",
    "definition": "The repetition of a word or phrase at the end of successive clauses or sentences; the counterpart to anaphora. Creates a memorable, emphatic conclusion to each unit.",
    "example": "Lincoln's 'government of the people, by the people, for the people' is a celebrated example of epistrophe.",
    "roots": {
      "origin": "Greek epistrophe from epistrephein 'to turn about', from epi- 'upon' + strephein 'to turn'",
      "parts": [
        "epi → upon, at",
        "strephein → to turn"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˈpɪs.trə.fi/"
  },
  {
    "word": "aposiopesis",
    "pos": "noun",
    "definition": "A rhetorical device in which the speaker suddenly breaks off and leaves a sentence unfinished, the meaning being completed by the listener's imagination or evident from context.",
    "example": "His threat trailed into aposiopesis — 'If you do that again, I swear to God I will—' — which was somehow more frightening than any complete sentence.",
    "roots": {
      "origin": "Greek aposiopesis from aposiopan 'to be silent', from apo- 'away' + siopan 'to be silent'",
      "parts": [
        "apo → away, completely",
        "siopan → to be silent"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.ə.saɪ.əˈpiː.sɪs/"
  },
  {
    "word": "hendiadys",
    "pos": "noun",
    "definition": "A figure of speech in which a single idea is expressed by two words connected with 'and' rather than by a noun modified by an adjective. Common in Latin poetry and the King James Bible.",
    "example": "'Nice and warm' is a hendiadys for 'nicely warm' — the adverb has been converted into a coordinate noun.",
    "roots": {
      "origin": "Greek hen dia dyoin meaning 'one through two'",
      "parts": [
        "hen → one",
        "dia → through, by means of",
        "dyoin → of two"
      ]
    },
    "tier": 2,
    "pronunciation": "/hɛnˈdaɪ.ə.dɪs/"
  },
  {
    "word": "parataxis",
    "pos": "noun",
    "definition": "The placing of clauses or phrases one after another without coordinating or subordinating connectives; a style that juxtaposes without explanation. Contrasted with hypotaxis.",
    "example": "Hemingway's minimalist prose relied heavily on parataxis: 'He walked in. She left. The door closed.'",
    "roots": {
      "origin": "Greek parataxis from paratassein 'to place side by side', from para- 'beside' + tassein 'to arrange'",
      "parts": [
        "para → beside, alongside",
        "tassein → to arrange, order"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpær.əˈtæk.sɪs/"
  },
  {
    "word": "hypotaxis",
    "pos": "noun",
    "definition": "The subordination of one clause to another through the use of conjunctions, relative pronouns, or other connective devices; a complex, nested sentence style. Contrasted with parataxis.",
    "example": "Henry James's hypotaxis — his layers upon layers of subordinate clauses — could make a single sentence last a full paragraph.",
    "roots": {
      "origin": "Greek hypotaxis from hypotassein 'to arrange under', from hypo- 'under' + tassein 'to arrange'",
      "parts": [
        "hypo → under, beneath",
        "tassein → to arrange, order"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌhaɪ.pəˈtæk.sɪs/"
  },
  {
    "word": "synecdoche",
    "pos": "noun",
    "definition": "A figure of speech in which a part is made to represent the whole or vice versa, as when 'hand' means 'worker' or 'the law' means a police officer.",
    "example": "When the captain called out 'All hands on deck!', he was using synecdoche — 'hands' standing for the entire crew.",
    "roots": {
      "origin": "Greek synekdokhe from synekdekhesthai 'to take up together', from syn- + ek- + dekhesthai 'to receive'",
      "parts": [
        "syn → together",
        "ek → out of",
        "dekhesthai → to take, receive"
      ]
    },
    "tier": 2,
    "pronunciation": "/sɪˈnɛk.də.ki/"
  },
  {
    "word": "periphrasis",
    "pos": "noun",
    "definition": "The use of indirect and circumlocutory speech or writing; a roundabout way of expressing something that could be stated more directly.",
    "example": "Instead of saying 'he died,' the obituary employed a kind of periphrasis, calling it 'a departure from this mortal coil.'",
    "roots": {
      "origin": "Greek periphrasis from periphrazein 'to express periphrastically', from peri- 'around' + phrazein 'to speak'",
      "parts": [
        "peri → around, about",
        "phrazein → to speak, declare"
      ]
    },
    "tier": 2,
    "pronunciation": "/pəˈrɪf.rə.sɪs/"
  },
  {
    "word": "enantiosis",
    "pos": "noun",
    "definition": "A rhetorical figure in which praise or blame is expressed ironically through its opposite; agreement through apparent disagreement or vice versa.",
    "example": "Her review deployed enantiosis beautifully: 'The film is spectacularly dull — an achievement in tedium unmatched by anything I have seen this decade.'",
    "roots": {
      "origin": "Greek enantiosis from enantios 'opposite', from en- 'in' + antios 'set against'",
      "parts": [
        "en → in",
        "antios → opposite, set against"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˌnæn.tiˈoʊ.sɪs/"
  },
  {
    "word": "paronomasia",
    "pos": "noun",
    "definition": "A play on words; a pun, especially one that exploits the similarity in sound between words with different meanings. A cornerstone of wordplay in rhetoric.",
    "example": "The poet's paronomasia — weaving 'mourning' and 'morning' through the elegy — gave the work its haunting double meaning.",
    "roots": {
      "origin": "Greek paronomasia from paronomazein 'to call with a slight change of name', from para- 'beside' + onomazein 'to name'",
      "parts": [
        "para → beside, near",
        "onoma → name"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpær.ə.nəˈmeɪ.zi.ə/"
  },
  {
    "word": "ekphrasis",
    "pos": "noun",
    "definition": "A vivid, often detailed description of a visual work of art; more broadly, any highly detailed literary description that attempts to bring a visual image before the mind's eye.",
    "example": "Keats's 'Ode on a Grecian Urn' is perhaps the most celebrated ekphrasis in the English language, a poem meditating on the nature of a painted vase.",
    "roots": {
      "origin": "Greek ekphrasis from ekphrazein 'to proclaim', from ek- 'out' + phrazein 'to speak'",
      "parts": [
        "ek → out, fully",
        "phrazein → to speak, tell"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɛk.frə.sɪs/"
  },
  {
    "word": "diegesis",
    "pos": "noun",
    "definition": "The telling of a story from a narrator's point of view rather than through direct dramatic representation; the narrative world within which a story's events occur.",
    "example": "The film's diegesis was disrupted when the character looked directly at the camera and acknowledged the audience's presence.",
    "roots": {
      "origin": "Greek diegesis from diegeisthai 'to narrate', from dia- 'through' + hegeisthai 'to lead'",
      "parts": [
        "dia → through",
        "hegeisthai → to lead, guide"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌdaɪ.əˈdʒiː.sɪs/"
  },
  {
    "word": "proleptic",
    "pos": "adjective",
    "definition": "Relating to or involving prolepsis; anticipatory; dealing with or regarding future events as already done or existing.",
    "example": "The novel's opening sentence was proleptic, describing the protagonist's funeral before a single event of his life had been narrated.",
    "roots": {
      "origin": "Greek proleptikos from prolambanein 'to anticipate', from pro- 'before' + lambanein 'to take'",
      "parts": [
        "pro → before",
        "lambanein → to take, grasp"
      ]
    },
    "tier": 2,
    "pronunciation": "/proʊˈlɛp.tɪk/"
  },
  {
    "word": "stochastic",
    "pos": "adjective",
    "definition": "Randomly determined; having a random probability distribution or pattern that may be analyzed statistically but not predicted precisely.",
    "example": "The virus's mutation rate was essentially stochastic — statisticians could model its spread, but no specific outbreak could be foreseen.",
    "roots": {
      "origin": "Greek stokhastikos from stokhazesthai 'to aim at a target', from stokhos 'target'",
      "parts": [
        "stokhos → target, aim",
        "-tic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/stəˈkæs.tɪk/"
  },
  {
    "word": "semiotic",
    "pos": "adjective",
    "definition": "Relating to signs and symbols and their use or interpretation; of or relating to semiotics, the study of meaning-making and symbolic communication.",
    "example": "The professor's semiotic analysis of the advertisement revealed layers of cultural coding invisible to the casual viewer.",
    "roots": {
      "origin": "Greek semeiotikos from semeion 'sign', from sema 'mark, signal'",
      "parts": [
        "sema → sign, mark, signal",
        "-tic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌsiː.miˈɒt.ɪk/"
  },
  {
    "word": "dialectic",
    "pos": "noun",
    "definition": "The art of investigating or discussing the truth of opinions; inquiry into metaphysical contradictions and their solutions; Hegel's method of thesis, antithesis, and synthesis.",
    "example": "The seminar evolved into a genuine dialectic, with each student's challenge forcing the others to refine and deepen their positions.",
    "roots": {
      "origin": "Greek dialektike from dialegesthai 'to discourse', from dia- 'through' + legein 'to speak'",
      "parts": [
        "dia → through, between",
        "legein → to speak, reason"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌdaɪ.əˈlɛk.tɪk/"
  },
  {
    "word": "oneiric",
    "pos": "adjective",
    "definition": "Relating to dreams or dreaming; having the quality of a dream; dreamlike in nature or atmosphere.",
    "example": "The film's oneiric imagery — melting clocks, impossible staircases — made it impossible to locate in any coherent reality.",
    "roots": {
      "origin": "Greek oneiros meaning 'dream'",
      "parts": [
        "oneiros → dream",
        "-ic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/oʊˈnaɪr.ɪk/"
  },
  {
    "word": "chthonic",
    "pos": "adjective",
    "definition": "Relating to or inhabiting the underworld; of or relating to the earth, especially as the abode of the dead in ancient Greek religion.",
    "example": "The novel's chthonic imagery — caves, roots, buried things — suggested a world governed by forces older than human civilization.",
    "roots": {
      "origin": "Greek khthonios from khthon 'earth, ground'",
      "parts": [
        "khthon → earth, the underworld",
        "-ic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈθɒn.ɪk/"
  },
  {
    "word": "apotropaic",
    "pos": "adjective",
    "definition": "Having the power to ward off evil or bad luck; relating to rituals, symbols, or objects designed to avert or deflect misfortune.",
    "example": "The carved faces above the church door were apotropaic — grotesque enough, medieval builders believed, to frighten away malevolent spirits.",
    "roots": {
      "origin": "Greek apotropaios from apotrepein 'to turn away', from apo- 'away' + trepein 'to turn'",
      "parts": [
        "apo → away from",
        "trepein → to turn"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.ə.trəˈpeɪ.ɪk/"
  },
  {
    "word": "eidetic",
    "pos": "adjective",
    "definition": "Relating to or denoting mental images having unusual vividness and detail, as if actually visible; pertaining to photographic memory. Also used in phenomenology to describe essential structural features.",
    "example": "Her eidetic memory allowed her to recall entire pages of text years after a single reading.",
    "roots": {
      "origin": "Greek eidetikos from eidos 'form, shape, image'",
      "parts": [
        "eidos → form, image, appearance",
        "-tic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/aɪˈdɛt.ɪk/"
  },
  {
    "word": "hermeneutics",
    "pos": "noun",
    "definition": "The branch of knowledge concerned with the theory and methodology of interpretation, especially of biblical texts or literary works. More broadly, any theory of interpretation.",
    "example": "The scholar's hermeneutics approached the ancient text not as a fixed document but as a living conversation with each new reader.",
    "roots": {
      "origin": "Greek hermeneutike from hermeneuein 'to interpret', possibly from Hermes, the divine messenger",
      "parts": [
        "Hermes → the messenger god",
        "-eutikos → skilled in, pertaining to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌhɜːr.məˈnjuː.tɪks/"
  },
  {
    "word": "teleology",
    "pos": "noun",
    "definition": "The explanation of phenomena by the purpose they serve rather than by prior causes; the doctrine that final causes, design, or purpose exist in nature.",
    "example": "Evolutionary biologists deliberately avoid teleology — a cheetah did not develop speed 'in order to' catch prey; it simply survived because it was fast.",
    "roots": {
      "origin": "Greek telos 'end, purpose' + logos 'word, study'",
      "parts": [
        "telos → end, goal, purpose",
        "logos → word, study, reason"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌtɛl.iˈɒl.ə.dʒi/"
  },
  {
    "word": "ontology",
    "pos": "noun",
    "definition": "The branch of metaphysics dealing with the nature of being, existence, or reality; the set of concepts and categories in a subject area or domain showing their properties and relations.",
    "example": "The question of whether numbers truly exist is fundamentally an ontological one — what kind of being do abstract objects have?",
    "roots": {
      "origin": "Greek ontos (genitive of on 'being') + logos 'study'",
      "parts": [
        "on/ontos → being, existence",
        "logos → word, study"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɒnˈtɒl.ə.dʒi/"
  },
  {
    "word": "epistemology",
    "pos": "noun",
    "definition": "The branch of philosophy concerned with the theory of knowledge, especially with regard to its methods, validity, scope, and the distinction between justified belief and opinion.",
    "example": "Her epistemology was deeply empirical — she refused to accept any claim that could not ultimately be traced back to sensory evidence.",
    "roots": {
      "origin": "Greek episteme 'knowledge' + logos 'study'",
      "parts": [
        "episteme → knowledge, understanding",
        "logos → word, study"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˌpɪs.tɪˈmɒl.ə.dʒi/"
  },
  {
    "word": "apophatic",
    "pos": "adjective",
    "definition": "Relating to an approach to theology or other forms of understanding that asserts that nothing can be positively stated about God or ultimate reality, only what it is not.",
    "example": "The mystic's apophatic theology could only say what God was not — not limited, not finite, not knowable — rather than making any positive claims.",
    "roots": {
      "origin": "Greek apophatikos from apophasis 'denial', from apophanai 'to deny'",
      "parts": [
        "apo → away from",
        "phanai → to speak, say"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.əˈfæt.ɪk/"
  },
  {
    "word": "cathexis",
    "pos": "noun",
    "definition": "The concentration of mental energy on one particular person, idea, or object, especially to a degree that gives rise to an unconscious attachment; in Freudian theory, the investment of emotional energy in an object.",
    "example": "Her cathexis to the childhood home was so intense that she could not sell it even decades after her parents had died.",
    "roots": {
      "origin": "Greek kathexis 'retention', from katekhein 'to hold fast', from kata- 'down' + ekhein 'to hold'",
      "parts": [
        "kata → down, thoroughly",
        "ekhein → to hold, have"
      ]
    },
    "tier": 2,
    "pronunciation": "/kəˈθɛk.sɪs/"
  },
  {
    "word": "abreaction",
    "pos": "noun",
    "definition": "The expression and consequent release of a previously repressed emotion, achieved through reliving the experience that caused it; a psychoanalytic term for emotional catharsis.",
    "example": "The therapy session led to an unexpected abreaction — decades of suppressed grief surfacing all at once in a torrent of weeping.",
    "roots": {
      "origin": "Translation of German Abreagierung, from ab- 'away' + reagieren 'to react'",
      "parts": [
        "ab → away, off",
        "reagieren → to react"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæb.riˈæk.ʃən/"
  },
  {
    "word": "thanatopsis",
    "pos": "noun",
    "definition": "A view or contemplation of death; meditation on the nature and meaning of mortality. Made famous as the title of a William Cullen Bryant poem.",
    "example": "The diagnosis prompted a quiet thanatopsis — not terror, but a long, honest reckoning with how she wanted to spend the years remaining.",
    "roots": {
      "origin": "Greek thanatos 'death' + opsis 'view, sight'",
      "parts": [
        "thanatos → death",
        "opsis → view, sight, appearance"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌθæn.əˈtɒp.sɪs/"
  },
  {
    "word": "eschatology",
    "pos": "noun",
    "definition": "The part of theology concerned with death, judgment, and the final destiny of the soul and humankind; more broadly, any theory concerning the ultimate end of the world or humanity.",
    "example": "The cult's eschatology was precisely dated: the world would end on a Tuesday, and the faithful would be transported to another plane of existence.",
    "roots": {
      "origin": "Greek eskhatos 'last' + logos 'study'",
      "parts": [
        "eskhatos → last, furthest",
        "logos → word, study"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛs.kəˈtɒl.ə.dʒi/"
  },
  {
    "word": "haecceity",
    "pos": "noun",
    "definition": "The quality that makes a thing the specific individual thing it is; the 'thisness' of a thing as opposed to its general qualities. A concept in medieval philosophy from Duns Scotus.",
    "example": "The philosopher argued that twins might share every physical trait yet possess different haecceities — each simply is what it is, irreducibly.",
    "roots": {
      "origin": "Medieval Latin haecceitas from Latin haec 'this' (feminine)",
      "parts": [
        "haec → this (feminine form)",
        "-itas → quality, state of"
      ]
    },
    "tier": 2,
    "pronunciation": "/hɛkˈsiː.ɪ.ti/"
  },
  {
    "word": "quiddity",
    "pos": "noun",
    "definition": "The inherent nature or essence of a person or thing; what makes something the kind of thing it is. Also used informally for a trifling point or petty distinction.",
    "example": "The artist spent decades trying to paint not the surface of an apple but its quiddity — the apple-ness that makes it distinct from every other object.",
    "roots": {
      "origin": "Medieval Latin quidditas from Latin quid 'what'",
      "parts": [
        "quid → what",
        "-itas → quality, state of being"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈkwɪd.ɪ.ti/"
  },
  {
    "word": "apodosis",
    "pos": "noun",
    "definition": "The main clause of a conditional sentence — the 'then' clause — as opposed to the protasis or 'if' clause. A term from grammar and rhetoric.",
    "example": "In the sentence 'If it rains, we will cancel the picnic,' the phrase 'we will cancel the picnic' is the apodosis.",
    "roots": {
      "origin": "Greek apodosis from apodidonai 'to give back', from apo- 'back' + didonai 'to give'",
      "parts": [
        "apo → back, away",
        "didonai → to give"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈpɒd.ə.sɪs/"
  },
  {
    "word": "phronesis",
    "pos": "noun",
    "definition": "Practical wisdom; the capacity for sound judgment in relation to human conduct and affairs. One of Aristotle's cardinal intellectual virtues, contrasted with theoretical wisdom (sophia).",
    "example": "The seasoned judge had phronesis that no law school could teach — an intuitive feel for what was just that transcended any particular rule.",
    "roots": {
      "origin": "Greek phronesis from phronein 'to think', from phren 'mind, heart'",
      "parts": [
        "phren → mind, heart, diaphragm",
        "-esis → process, action"
      ]
    },
    "tier": 2,
    "pronunciation": "/frɒˈniː.sɪs/"
  },
  {
    "word": "eudaimonia",
    "pos": "noun",
    "definition": "Human flourishing or prosperity; the condition of a good spirit; the highest human good in Aristotelian ethics, often translated as 'happiness' but more accurately meaning a life well-lived.",
    "example": "She had achieved the trappings of success but not eudaimonia — wealth and status without the sense of living in accordance with her deepest nature.",
    "roots": {
      "origin": "Greek eudaimonia from eudaimon 'happy', from eu 'well' + daimon 'spirit'",
      "parts": [
        "eu → well, good",
        "daimon → spirit, divine power"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌjuː.daɪˈmoʊ.ni.ə/"
  },
  {
    "word": "ataraxia",
    "pos": "noun",
    "definition": "A state of freedom from emotional disturbance and anxiety; tranquility; the Epicurean and Stoic ideal of a serene, untroubled mind.",
    "example": "The monk had cultivated ataraxia through decades of practice — not an absence of feeling, but freedom from being controlled by it.",
    "roots": {
      "origin": "Greek ataraxia from ataraktos 'not disturbed', from a- 'not' + taraktos 'disturbed'",
      "parts": [
        "a → not, without",
        "taraktos → disturbed, troubled"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæt.əˈræk.si.ə/"
  },
  {
    "word": "apatheia",
    "pos": "noun",
    "definition": "In Stoic philosophy, freedom from passion and disturbing emotions; equanimity achieved through rational self-mastery. Importantly not the same as modern 'apathy.'",
    "example": "The Stoic did not aim for numbness but for apatheia — the ability to witness joy and grief without being enslaved by either.",
    "roots": {
      "origin": "Greek apatheia from apathes 'without feeling', from a- 'without' + pathos 'suffering, feeling'",
      "parts": [
        "a → without",
        "pathos → suffering, feeling, emotion"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.əˈθiː.ə/"
  },
  {
    "word": "acedia",
    "pos": "noun",
    "definition": "Spiritual or mental sloth; apathy and listlessness, especially as one of the seven deadly sins; a state of torpid indifference toward one's duties or spiritual life.",
    "example": "The medieval monks called it acedia — the noontime demon — that particular flavor of torpor that made the psalms feel meaningless and prayer an unbearable chore.",
    "roots": {
      "origin": "Greek akedia from a- 'not' + kedos 'care, concern'",
      "parts": [
        "a → not, without",
        "kedos → care, grief, concern"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈsiː.di.ə/"
  },
  {
    "word": "phantasmagoria",
    "pos": "noun",
    "definition": "A sequence of real or imaginary images like those seen in a dream; an optical display using a magic lantern; a constantly shifting, complex scene.",
    "example": "The fever turned the hospital room into a phantasmagoria — faces morphing into animals, walls breathing, clocks melting at the edges.",
    "roots": {
      "origin": "French phantasmagorie, from Greek phantasma 'phantom' + agora 'assembly, gathering'",
      "parts": [
        "phantasma → phantom, image",
        "agora → assembly, place of gathering"
      ]
    },
    "tier": 2,
    "pronunciation": "/fænˌtæz.məˈɡɔːr.i.ə/"
  },
  {
    "word": "pareidolia",
    "pos": "noun",
    "definition": "The tendency to perceive a specific, often meaningful image in a random or ambiguous visual pattern, such as seeing faces in clouds or the Virgin Mary in toast.",
    "example": "The scientist explained pareidolia as an evolved feature, not a bug — our ancestors who saw faces in shadows survived more often than those who didn't.",
    "roots": {
      "origin": "Greek para 'beside, beyond' + eidolon 'image, form'",
      "parts": [
        "para → beside, beyond, wrong",
        "eidolon → image, form, phantom"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpær.aɪˈdoʊ.li.ə/"
  },
  {
    "word": "interoception",
    "pos": "noun",
    "definition": "The sense of the internal state of the body, including heartbeat, breathing, hunger, thirst, and pain — the physiological basis of subjective feelings.",
    "example": "Poor interoception — an inability to read one's own bodily signals — has been linked to difficulties in emotional regulation and decision-making.",
    "roots": {
      "origin": "Latin interior 'inner' + recipere 'to receive' + -tion",
      "parts": [
        "interior → inner, internal",
        "recipere → to receive",
        "-tion → action, process"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪn.tər.oʊˈsɛp.ʃən/"
  },
  {
    "word": "allostasis",
    "pos": "noun",
    "definition": "The process of achieving stability through physiological or behavioral change; the way the body adapts to stress by anticipating demands and adjusting set points.",
    "example": "Chronic poverty requires a kind of cognitive allostasis — the brain learning to maintain function under conditions of constant threat and scarcity.",
    "roots": {
      "origin": "Greek allos 'other, different' + stasis 'standing, stability'",
      "parts": [
        "allos → other, different",
        "stasis → standing, stability, balance"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæl.əˈsteɪ.sɪs/"
  },
  {
    "word": "dysphoria",
    "pos": "noun",
    "definition": "A profound state of unease or dissatisfaction; a state of anxiety, discomfort, and restlessness. The opposite of euphoria.",
    "example": "The medication lifted her depression but left a lingering dysphoria — not sadness exactly, but a diffuse sense that something was fundamentally wrong.",
    "roots": {
      "origin": "Greek dysphoria from dys- 'bad, difficult' + phora 'bearing, carrying'",
      "parts": [
        "dys → bad, difficult, abnormal",
        "phora → bearing, carrying"
      ]
    },
    "tier": 2,
    "pronunciation": "/dɪsˈfɔːr.i.ə/"
  },
  {
    "word": "anhedonia",
    "pos": "noun",
    "definition": "The inability to feel pleasure in normally pleasurable activities; a core symptom of depression and several other mental health conditions.",
    "example": "The cruellest part of his depression was the anhedonia — music he had loved since childhood now produced nothing, not even sadness.",
    "roots": {
      "origin": "Greek an- 'without' + hedone 'pleasure'",
      "parts": [
        "an → without, lacking",
        "hedone → pleasure, delight"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.hɪˈdoʊ.ni.ə/"
  },
  {
    "word": "prosopagnosia",
    "pos": "noun",
    "definition": "A neurological disorder characterized by the inability to recognize faces, even of close friends or family; also called face blindness.",
    "example": "Her prosopagnosia meant she identified colleagues by their voices and gaits — she had never once recognized a face she had not consciously memorized.",
    "roots": {
      "origin": "Greek prosopon 'face' + agnosis 'not knowing', from a- 'not' + gnosis 'knowledge'",
      "parts": [
        "prosopon → face",
        "a → not, without",
        "gnosis → knowledge, recognition"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌprɒs.ə.pæɡˈnoʊ.zi.ə/"
  },
  {
    "word": "anosognosia",
    "pos": "noun",
    "definition": "A deficit of self-awareness; the inability of a person to recognize their own disability or neurological deficit, caused by neurological damage rather than psychological denial.",
    "example": "His anosognosia meant he was genuinely unaware of the paralysis — he would attempt to use his left arm and be puzzled by its failure to respond.",
    "roots": {
      "origin": "Greek a- 'without' + nosos 'disease' + gnosis 'knowledge'",
      "parts": [
        "a → without",
        "nosos → disease",
        "gnosis → knowledge, awareness"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˌnoʊ.sɒɡˈnoʊ.zi.ə/"
  },
  {
    "word": "confabulation",
    "pos": "noun",
    "definition": "The fabrication of imaginary experiences as compensation for loss of memory, without any intent to deceive; a symptom of certain brain disorders where gaps in memory are unconsciously filled with invented plausible content.",
    "example": "The patient's confabulation was so seamless and plausible that family members initially assumed he was lying, not recognizing it as a neurological symptom.",
    "roots": {
      "origin": "Latin confabulari 'to chat together', from con- 'together' + fabulari 'to talk'",
      "parts": [
        "con → together, with",
        "fabula → story, talk",
        "-tion → action, process"
      ]
    },
    "tier": 2,
    "pronunciation": "/kənˌfæb.jʊˈleɪ.ʃən/"
  },
  {
    "word": "alexia",
    "pos": "noun",
    "definition": "Loss of the ability to read, caused by brain damage; an acquired reading disorder distinguished from dyslexia, which is developmental in origin.",
    "example": "After the stroke, his alexia left him staring helplessly at text he had formerly devoured — the letters were visible but meaningless as hieroglyphics.",
    "roots": {
      "origin": "Greek a- 'without' + lexis 'word, speech', from legein 'to read, speak'",
      "parts": [
        "a → without, lacking",
        "lexis → word, speech"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈlɛk.si.ə/"
  },
  {
    "word": "apraxia",
    "pos": "noun",
    "definition": "The inability to perform purposeful skilled movements despite having the desire and physical capacity to do so, caused by damage to the brain.",
    "example": "His apraxia was selective and strange — he could play piano when he didn't think about it, but any conscious attempt to move his fingers failed completely.",
    "roots": {
      "origin": "Greek a- 'not' + praxis 'action, practice', from prassein 'to do'",
      "parts": [
        "a → not, without",
        "praxis → action, doing, practice"
      ]
    },
    "tier": 2,
    "pronunciation": "/eɪˈpræk.si.ə/"
  },
  {
    "word": "agnosia",
    "pos": "noun",
    "definition": "Inability to interpret sensations and hence to recognize things, typically resulting from brain damage; the failure to recognize objects, people, sounds, or smells despite intact sensory function.",
    "example": "Visual agnosia left him able to describe an apple's color and shape in perfect detail but unable to name or recognize what he was looking at.",
    "roots": {
      "origin": "Greek a- 'not' + gnosis 'knowledge'",
      "parts": [
        "a → not, without",
        "gnosis → knowledge, recognition"
      ]
    },
    "tier": 2,
    "pronunciation": "/æɡˈnoʊ.zi.ə/"
  },
  {
    "word": "palinopsia",
    "pos": "noun",
    "definition": "A visual disturbance in which images persist or recur after the stimulus has been removed; trailing images or after-images that linger in the visual field.",
    "example": "A rare drug reaction left her with weeks of palinopsia — every bright window left a glowing ghost that hung in her vision for minutes afterward.",
    "roots": {
      "origin": "Greek palin 'again, back' + opsis 'vision, sight'",
      "parts": [
        "palin → again, back",
        "opsis → vision, sight"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpæl.ɪˈnɒp.si.ə/"
  },
  {
    "word": "hypermnesia",
    "pos": "noun",
    "definition": "Unusually vivid or precise memory; the enhanced recall of some or all experiences from one's past, sometimes associated with hypnosis or extreme stress.",
    "example": "The trauma seemed to trigger hypermnesia rather than amnesia — she could not stop reliving every detail of the accident with hallucinatory clarity.",
    "roots": {
      "origin": "Greek hyper 'over, beyond' + mnesia 'memory', from mnasthai 'to remember'",
      "parts": [
        "hyper → over, beyond, excessive",
        "mnesia → memory"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌhaɪ.pɜːrˈniː.zi.ə/"
  },
  {
    "word": "paresthesia",
    "pos": "noun",
    "definition": "An abnormal sensation such as tingling, tickling, pricking, numbness, or burning of a person's skin with no apparent long-term physical effect; often called 'pins and needles.'",
    "example": "The paresthesia in her hands — that persistent tingling — was the first symptom that led her neurologist to investigate further.",
    "roots": {
      "origin": "Greek para 'beside, abnormal' + aisthesis 'sensation'",
      "parts": [
        "para → beside, beyond, abnormal",
        "aisthesis → sensation, feeling"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpær.ɪsˈθiː.zi.ə/"
  },
  {
    "word": "anesthesia",
    "pos": "noun",
    "definition": "Insensibility to pain, especially as artificially induced by the administration of gases or drugs before surgical operations; loss of sensation in a body part.",
    "example": "The discovery of ether anesthesia in the 1840s transformed surgery from a torture endured into a procedure survived.",
    "roots": {
      "origin": "Greek anaisthesia from an- 'without' + aisthesis 'sensation'",
      "parts": [
        "an → without",
        "aisthesis → sensation, feeling"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.ɪsˈθiː.zi.ə/"
  },
  {
    "word": "somatosensory",
    "pos": "adjective",
    "definition": "Relating to the perception of sensory stimuli from the skin, muscles, and internal organs; of or relating to the system that processes touch, temperature, pain, and body position.",
    "example": "The somatosensory cortex was mapped in extraordinary detail, revealing how much neural real estate is devoted to the hands and lips.",
    "roots": {
      "origin": "Greek soma 'body' + Latin sensorius 'relating to sense'",
      "parts": [
        "soma → body",
        "sensorius → pertaining to sense"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌsoʊ.mə.toʊˈsɛn.sər.i/"
  },
  {
    "word": "hysteresis",
    "pos": "noun",
    "definition": "The phenomenon in which the value of a physical property lags behind changes in the effect causing it; the dependence of a system's output on its past history as well as its present state.",
    "example": "Economic hysteresis explains why recessions cause lasting damage — unemployment spells erode skills, and the recovery never fully reabsorbs those workers.",
    "roots": {
      "origin": "Greek hysteresis from hysteros 'coming behind, later'",
      "parts": [
        "hysteros → later, coming after",
        "-sis → process, condition"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌhɪs.təˈriː.sɪs/"
  },
  {
    "word": "apoptosis",
    "pos": "noun",
    "definition": "Programmed cell death; the process by which cells deliberately terminate themselves in a controlled way, essential for normal development and the immune response.",
    "example": "Cancer often involves a failure of apoptosis — cells that should kill themselves instead continue to proliferate without restraint.",
    "roots": {
      "origin": "Greek apoptosis from apo- 'away' + ptosis 'falling', from piptein 'to fall'",
      "parts": [
        "apo → away from",
        "ptosis → falling"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.əpˈtoʊ.sɪs/"
  },
  {
    "word": "morphogenesis",
    "pos": "noun",
    "definition": "The origin and development of morphological characteristics; the biological processes that cause an organism to develop its shape.",
    "example": "Alan Turing's final papers explored morphogenesis — how a simple chemical gradient could produce the complex patterns of spots on a leopard's coat.",
    "roots": {
      "origin": "Greek morphe 'form, shape' + genesis 'origin, creation'",
      "parts": [
        "morphe → form, shape",
        "genesis → origin, creation, birth"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌmɔːr.fəˈdʒɛn.ɪ.sɪs/"
  },
  {
    "word": "trophic",
    "pos": "adjective",
    "definition": "Relating to feeding and nutrition; in ecology, pertaining to the position an organism occupies in a food chain or web.",
    "example": "Wolves' reintroduction into Yellowstone triggered a trophic cascade, reshaping the entire ecosystem from apex predator down to river vegetation.",
    "roots": {
      "origin": "Greek trophikos from trophe 'nourishment', from trephein 'to nourish'",
      "parts": [
        "trophe → nourishment, food",
        "-ic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtrɒf.ɪk/"
  },
  {
    "word": "syntropy",
    "pos": "noun",
    "definition": "A tendency toward increasing order and complexity; the opposite of entropy; used in systems theory and some biological frameworks to describe self-organizing processes.",
    "example": "Life itself might be understood as syntropy in action — matter organizing itself into ever more complex, improbable structures.",
    "roots": {
      "origin": "Greek syn 'together' + trope 'turning, transformation'",
      "parts": [
        "syn → together, with",
        "trope → turn, transformation"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsɪn.trə.pi/"
  },
  {
    "word": "heterodox",
    "pos": "adjective",
    "definition": "Not conforming to accepted or orthodox standards or beliefs; holding views that deviate from what is generally or officially accepted.",
    "example": "His heterodox views on monetary policy got him laughed out of conferences in the 1990s and celebrated in textbooks a decade later.",
    "roots": {
      "origin": "Greek heterodoxos from heteros 'other, different' + doxa 'opinion'",
      "parts": [
        "heteros → other, different",
        "doxa → opinion, belief, glory"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈhɛt.ər.ə.dɒks/"
  },
  {
    "word": "veridical",
    "pos": "adjective",
    "definition": "Truthful; coinciding with reality; in psychology, referring to perceptions or dreams that accurately represent what actually happened or exists.",
    "example": "The witness insisted her memory was veridical, but research has since shown that even confident recollections can be entirely confabulated.",
    "roots": {
      "origin": "Latin veridicus from verus 'true' + dicere 'to say'",
      "parts": [
        "verus → true",
        "dicere → to say, speak"
      ]
    },
    "tier": 2,
    "pronunciation": "/vɪˈrɪd.ɪ.kəl/"
  },
  {
    "word": "probative",
    "pos": "adjective",
    "definition": "Serving to prove or demonstrate something; having the quality of proof or evidence; furnishing evidence or proof of something.",
    "example": "The judge ruled that the testimony was highly probative — direct eyewitness evidence from an unimpeachable source.",
    "roots": {
      "origin": "Latin probativus from probare 'to prove', from probus 'good, honest'",
      "parts": [
        "probare → to test, prove",
        "-ative → tending to, relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈproʊ.bə.tɪv/"
  },
  {
    "word": "apodeictic",
    "pos": "adjective",
    "definition": "Clearly established or beyond dispute; expressing or of the nature of necessary truth that cannot be denied without contradiction. A variant of apodictic.",
    "example": "Mathematics offers apodeictic certainty of a kind the natural sciences can never achieve — a proven theorem remains true regardless of future discoveries.",
    "roots": {
      "origin": "Greek apodeiktikos from apodeiknynai 'to demonstrate', from apo- 'fully' + deiknynai 'to show'",
      "parts": [
        "apo → completely, fully",
        "deiknynai → to show, demonstrate"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæp.əˈdaɪk.tɪk/"
  },
  {
    "word": "incunabula",
    "pos": "noun",
    "definition": "Books printed before 1501; the earliest stages or first traces of something; the earliest printed books, particularly those produced during the infancy of printing.",
    "example": "The library's collection of incunabula included a Gutenberg Bible, still pristine after five centuries behind glass.",
    "roots": {
      "origin": "Latin incunabula 'cradle, birthplace', from in- 'in' + cunabula 'cradle'",
      "parts": [
        "in → in",
        "cunae → cradle",
        "-bula → place of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪŋ.kjʊˈnæb.jʊ.lə/"
  },
  {
    "word": "marginalia",
    "pos": "noun",
    "definition": "Notes written in the margins of a book or manuscript; annotations added in the blank spaces surrounding a text.",
    "example": "The scholar was thrilled to discover that the marginalia in this copy were in Darwin's own hand — a private conversation with the text.",
    "roots": {
      "origin": "Latin marginalis 'of the margin', from margo, marginis 'edge, border'",
      "parts": [
        "margo → edge, border, margin",
        "-alia → plural neuter suffix"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌmɑːr.dʒɪˈneɪ.li.ə/"
  },
  {
    "word": "codex",
    "pos": "noun",
    "definition": "An ancient manuscript text in book form; the ancient manuscript book that replaced the scroll; a collection of laws or standards.",
    "example": "The discovery of the codex in the desert cave rewrote scholars' understanding of early Christian communities.",
    "roots": {
      "origin": "Latin codex, caudex 'trunk of a tree, block of wood' (wooden writing tablets were laced together to form a codex)",
      "parts": [
        "caudex → trunk, wooden tablet"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈkoʊ.dɛks/"
  },
  {
    "word": "exegesis",
    "pos": "noun",
    "definition": "Critical explanation or interpretation of a text, especially scripture or other authoritative work; the art of drawing out the meaning of a text.",
    "example": "Her exegesis of the poem revealed layers of political allegory that generations of readers had entirely overlooked.",
    "roots": {
      "origin": "Greek exegesis from exegeisthai 'to interpret', from ex- 'out' + hegeisthai 'to lead'",
      "parts": [
        "ex → out, fully",
        "hegeisthai → to lead, guide"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛk.sɪˈdʒiː.sɪs/"
  },
  {
    "word": "isagoge",
    "pos": "noun",
    "definition": "An introduction to a subject of study, especially an introduction to the study of theology or scripture; a prefatory discourse or treatise.",
    "example": "Before tackling the primary texts, students were required to work through the professor's isagoge — a comprehensive orientation to the discipline's methods.",
    "roots": {
      "origin": "Greek eisagoge 'introduction', from eisagein 'to lead in', from eis 'into' + agein 'to lead'",
      "parts": [
        "eis → into",
        "agein → to lead, drive"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪs.əˈɡoʊ.dʒi/"
  },
  {
    "word": "threnody",
    "pos": "noun",
    "definition": "A lament or song of mourning for the dead; a poem or piece of music written as a memorial for someone who has died.",
    "example": "The composer wrote the string quartet as a threnody for his daughter — forty minutes of music that somehow contained an entire grief.",
    "roots": {
      "origin": "Greek threnodia from threnos 'wailing' + oide 'song'",
      "parts": [
        "threnos → wailing, lamentation",
        "oide → song, ode"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈθrɛn.ə.di/"
  },
  {
    "word": "epithalamium",
    "pos": "noun",
    "definition": "A song or poem celebrating a marriage or written to honor a bride and bridegroom on their wedding day. A classical genre tracing back to Sappho.",
    "example": "Spenser's 'Epithalamion,' written for his own wedding, remains the most celebrated epithalamium in the English tradition.",
    "roots": {
      "origin": "Greek epithalamion from epi 'upon' + thalamos 'bridal chamber'",
      "parts": [
        "epi → upon, at",
        "thalamos → inner chamber, bridal room"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛp.ɪ.θəˈleɪ.mi.əm/"
  },
  {
    "word": "encomium",
    "pos": "noun",
    "definition": "A speech or piece of writing that praises someone or something enthusiastically; formal or high-flown praise.",
    "example": "The retiring professor's encomium at the banquet lasted forty-five minutes and referenced seventeen ancient languages.",
    "roots": {
      "origin": "Greek enkamion 'song of praise', from en 'in' + komos 'festive procession'",
      "parts": [
        "en → in",
        "komos → festive procession, revel"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɛnˈkoʊ.mi.əm/"
  },
  {
    "word": "panegyric",
    "pos": "noun",
    "definition": "A public speech or published text in praise of someone or something; extravagant and unreserved praise.",
    "example": "The biography was less a work of history than a panegyric — the author was clearly so in awe of his subject that criticism was impossible.",
    "roots": {
      "origin": "Greek panegyrikos from panegyris 'public assembly', from pan 'all' + agyris 'assembly'",
      "parts": [
        "pan → all",
        "agyris → assembly, gathering"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpæn.ɪˈdʒɪr.ɪk/"
  },
  {
    "word": "dithyramb",
    "pos": "noun",
    "definition": "A wild, irregular poem or piece of writing, especially one in praise of something; historically, a passionate choric hymn to the Greek god Dionysus.",
    "example": "His review was less a critical assessment than a dithyramb — an ecstatic celebration that forgot to mention whether the food was actually good.",
    "roots": {
      "origin": "Greek dithyrambos, a choral hymn to Dionysus, of uncertain further etymology",
      "parts": [
        "dithyrambos → hymn to Dionysus (perhaps related to a name for the god)"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈdɪθ.ɪ.ræm/"
  },
  {
    "word": "prosody",
    "pos": "noun",
    "definition": "The patterns of rhythm and sound used in poetry; the study of versification, including meter, stress, and intonation patterns in language.",
    "example": "Her ear for prosody was so finely tuned that she could identify a poem's metrical flaws before she could consciously articulate what she was hearing.",
    "roots": {
      "origin": "Greek prosodia 'tone accent, song sung to music', from pros 'to, toward' + oide 'song'",
      "parts": [
        "pros → toward, in addition to",
        "oide → song, ode"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈprɒs.ə.di/"
  },
  {
    "word": "tmemic",
    "pos": "adjective",
    "definition": "Of or relating to a meme or unit of cultural transmission; of or relating to the theoretical unit of cultural evolution proposed by Richard Dawkins.",
    "example": "The researcher studied how certain tmemic ideas spread through populations with a virality that seemed independent of their truth value.",
    "roots": {
      "origin": "Derived from meme, coined by Richard Dawkins from Greek mimeme 'something imitated', with t- prefix by analogy with gene/tmesis",
      "parts": [
        "mimeme → something imitated",
        "mimnesthai → to imitate"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtiː.mɪk/"
  },
  {
    "word": "sememe",
    "pos": "noun",
    "definition": "The meaning of a morpheme; the smallest unit of meaning in semantics; a unit that is the semantic equivalent of a phoneme in phonology.",
    "example": "Linguists analyzing the word 'unhappiness' identify multiple sememes — negation, an emotional state, and nominalization — packed into a single word.",
    "roots": {
      "origin": "Greek sema 'sign, signal' + -eme (abstract unit suffix, as in phoneme)",
      "parts": [
        "sema → sign, mark",
        "-eme → minimal unit of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsiː.miːm/"
  },
  {
    "word": "morpheme",
    "pos": "noun",
    "definition": "A meaningful morphological unit of a language that cannot be further divided without losing meaning; the smallest grammatical unit of a language.",
    "example": "The word 'unlikely' contains three morphemes: 'un-' (negation), 'like' (the root), and '-ly' (adverbial suffix).",
    "roots": {
      "origin": "Greek morphe 'form, shape' + -eme (abstract unit suffix)",
      "parts": [
        "morphe → form, shape",
        "-eme → minimal unit of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈmɔːr.fiːm/"
  },
  {
    "word": "lexeme",
    "pos": "noun",
    "definition": "The fundamental unit of the lexicon of a language; an abstract unit of lexical meaning underlying a set of related word forms.",
    "example": "The lexeme WALK includes all its forms — walk, walks, walked, walking — considered as a single vocabulary item.",
    "roots": {
      "origin": "Greek lexikon 'of words' + -eme (abstract unit suffix)",
      "parts": [
        "lexikon → of words, from legein 'to speak'",
        "-eme → minimal unit of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈlɛk.siːm/"
  },
  {
    "word": "gloss",
    "pos": "noun",
    "definition": "A word inserted between lines or in the margin as an explanation of an unusual or difficult word in a text; a superficial or deceptively attractive appearance.",
    "example": "Medieval scribes added gloss after gloss to the margins until the commentary threatened to overwhelm the original sacred text.",
    "roots": {
      "origin": "Greek glossa 'tongue, language, obscure word requiring explanation'",
      "parts": [
        "glossa → tongue, language, obscure term"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɡlɒs/"
  },
  {
    "word": "hapax legomenon",
    "pos": "noun",
    "definition": "A word or form of which only one instance of use is recorded; a word or expression that appears only once in the surviving literary or textual record of a language.",
    "example": "The translator's nightmare was that pivotal verb — a hapax legomenon for which no parallel usage existed to guide interpretation.",
    "roots": {
      "origin": "Greek hapax legomenon meaning 'said only once', from hapax 'once' + legomenon 'being said'",
      "parts": [
        "hapax → once, only once",
        "legomenon → being said, (from legein 'to say')"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈheɪ.pæks lɪˈɡɒm.ɪ.nɒn/"
  },
  {
    "word": "polysemy",
    "pos": "noun",
    "definition": "The coexistence of many possible meanings for a word or phrase; the capacity of a sign to have multiple meanings.",
    "example": "The rich polysemy of the word 'bank' — financial institution, riverbank, to tilt an aircraft — reflects its tangled etymological history.",
    "roots": {
      "origin": "Greek polysemos 'having many meanings', from poly 'many' + sema 'sign, meaning'",
      "parts": [
        "poly → many",
        "sema → sign, meaning, mark"
      ]
    },
    "tier": 2,
    "pronunciation": "/pɒˈlɪs.ɪ.mi/"
  },
  {
    "word": "deixis",
    "pos": "noun",
    "definition": "The function of words and phrases that can only be understood in context, especially in relation to the speaker and their location; words like 'this,' 'here,' and 'now' are deictic.",
    "example": "The instruction 'put it there' is full of deixis — 'it' and 'there' only make sense if you know what the speaker is referring to in the moment.",
    "roots": {
      "origin": "Greek deixis 'reference, demonstration', from deiknynai 'to show'",
      "parts": [
        "deiknynai → to show, point out"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈdaɪk.sɪs/"
  },
  {
    "word": "calque",
    "pos": "noun",
    "definition": "A loan translation — a word or phrase borrowed from another language by literal, word-for-word or root-for-root translation. Also called a loan translation.",
    "example": "'Skyscraper,' when translated into German as Wolkenkratzer (cloud-scraper), is a calque — the concept borrowed but the words translated.",
    "roots": {
      "origin": "French calque 'tracing, copy', from calquer 'to trace', from Italian calcare 'to press, tread'",
      "parts": [
        "calcare → to press down, trace",
        "from Latin calx → heel"
      ]
    },
    "tier": 2,
    "pronunciation": "/kælk/"
  },
  {
    "word": "lagniappe",
    "pos": "noun",
    "definition": "Something given as a bonus or extra gift; a small gift given to a customer by a merchant at the time of purchase; an unexpected benefit.",
    "example": "The baker always tucked a small almond cookie into the bag — a lagniappe that kept her customers coming back more reliably than any advertisement.",
    "roots": {
      "origin": "Louisiana French, from American Spanish la ñapa 'the gift', from Quechua yapa 'something added'",
      "parts": [
        "la → the",
        "ñapa/yapa → additional gift, something extra"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈlæn.jæp/"
  },
  {
    "word": "schadenfreude",
    "pos": "noun",
    "definition": "Pleasure derived from another person's misfortune; satisfaction or delight at someone else's trouble, failure, or humiliation.",
    "example": "She was ashamed of the schadenfreude she felt watching her former boss stumble through his poorly prepared presentation.",
    "roots": {
      "origin": "German Schaden 'damage, harm' + Freude 'joy, pleasure'",
      "parts": [
        "Schaden → damage, harm",
        "Freude → joy, delight"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈʃɑː.dən.frɔɪ.də/"
  },
  {
    "word": "weltanschauung",
    "pos": "noun",
    "definition": "A comprehensive conception or image of the universe and of humanity's relation to it; a worldview or philosophy of life.",
    "example": "The colony's founders shared a weltanschauung that made self-sufficiency not just practical necessity but a moral and spiritual imperative.",
    "roots": {
      "origin": "German Welt 'world' + Anschauung 'view, perception, contemplation'",
      "parts": [
        "Welt → world",
        "anschauen → to look at, perceive"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈvɛlt.ɑːn.ʃaʊ.ʊŋ/"
  },
  {
    "word": "saudade",
    "pos": "noun",
    "definition": "A deep emotional state of nostalgic or profound melancholic longing for an absent something or someone that one loves; a Portuguese term for a bittersweet longing for things past.",
    "example": "Walking through the old neighborhood filled him with saudade — not sadness exactly, but an ache for a version of life that no longer existed.",
    "roots": {
      "origin": "Portuguese saudade from Latin solitas 'loneliness', from solus 'alone'",
      "parts": [
        "solus → alone, solitary",
        "-itas → quality, state"
      ]
    },
    "tier": 2,
    "pronunciation": "/saʊˈdɑː.də/"
  },
  {
    "word": "torschlusspanik",
    "pos": "noun",
    "definition": "The fear, often as one gets older, that time is running out and that opportunities are closing; literally 'gate-closing panic' in German.",
    "example": "Her torschlusspanik at thirty-five drove her to quit her stable job and write the novel she had been planning for a decade.",
    "roots": {
      "origin": "German Tor 'gate' + Schluss 'closing' + Panik 'panic'",
      "parts": [
        "Tor → gate, door",
        "Schluss → closing, end",
        "Panik → panic, fear"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɔːr.ʃlʊs.pæn.ɪk/"
  },
  {
    "word": "wabi-sabi",
    "pos": "noun",
    "definition": "A Japanese aesthetic concept centered on the acceptance of transience and imperfection; the art of finding beauty in impermanence, incompleteness, and asymmetry.",
    "example": "The deliberately chipped glaze on the tea bowl was not an accident but an expression of wabi-sabi — perfection found precisely in the flaw.",
    "roots": {
      "origin": "Japanese wabi (simplicity, understated elegance) + sabi (rustic patina, beauty that comes with age and use)",
      "parts": [
        "wabi → solitary, simple, rustic beauty",
        "sabi → the patina of age and use"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌwɑː.biˈsɑː.bi/"
  },
  {
    "word": "mono no aware",
    "pos": "noun",
    "definition": "A Japanese term for the bittersweet awareness of impermanence; a gentle sadness at the passing of things, combined with a deeper appreciation of their transient beauty.",
    "example": "The cherry blossoms are beautiful precisely because they fall — this is mono no aware, the pathos of things.",
    "roots": {
      "origin": "Japanese mono 'things' + no (possessive particle) + aware 'pathos, sensitivity, deep feeling'",
      "parts": [
        "mono → thing, object",
        "no → possessive particle",
        "aware → pathos, emotion, sensitivity"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌmoʊ.noʊ noʊ əˈwɑː.reɪ/"
  },
  {
    "word": "meraki",
    "pos": "noun",
    "definition": "A Greek word for doing something with soul, creativity, or love; putting a piece of yourself into what you are doing; the essence left in work done with care.",
    "example": "You could taste the meraki in her cooking — every dish reflected a person who genuinely cared whether the food brought pleasure.",
    "roots": {
      "origin": "Greek meraki, possibly from Turkish merak 'curiosity, passion, desire to do something'",
      "parts": [
        "merak → passion, desire, obsessive interest (Turkish origin)"
      ]
    },
    "tier": 2,
    "pronunciation": "/mɛˈrɑː.ki/"
  },
  {
    "word": "kairos",
    "pos": "noun",
    "definition": "The right, critical, or opportune moment; in ancient Greek, the quality of time as the right season for action, as opposed to chronos, quantitative time.",
    "example": "The general waited for kairos — not courage but timing, the moment when attacking would be irresistible.",
    "roots": {
      "origin": "Greek kairos 'right time, due measure, proportion'",
      "parts": [
        "kairos → the opportune moment, the right time"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈkaɪ.rɒs/"
  },
  {
    "word": "nemesis",
    "pos": "noun",
    "definition": "The inescapable or implacable agent of someone's downfall; punishment inflicted by a higher power; in Greek mythology, the goddess of retribution.",
    "example": "Bureaucratic paperwork was the businessman's nemesis — he could negotiate multimillion-dollar deals but could not properly file his own taxes.",
    "roots": {
      "origin": "Greek Nemesis, the goddess of retributive justice, from nemein 'to give what is due'",
      "parts": [
        "nemein → to deal out, distribute, give what is due"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈnɛm.ɪ.sɪs/"
  },
  {
    "word": "cathartic",
    "pos": "adjective",
    "definition": "Providing psychological relief through the open expression of strong emotion; relating to catharsis.",
    "example": "The long conversation was cathartic — everything she had been holding in for months came out, and she felt lighter for having said it.",
    "roots": {
      "origin": "Greek kathartikos from kathairein 'to purify', from katharos 'pure'",
      "parts": [
        "katharos → pure, clean",
        "-tic → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/kəˈθɑːr.tɪk/"
  },
  {
    "word": "anacolutha",
    "pos": "noun",
    "definition": "A rhetorical figure in which a speaker switches unexpectedly from one grammatical structure to another in the middle of a sentence, often reflecting interrupted thought.",
    "example": "His speech was full of anacolutha — sentences that began one way and veered off into something else entirely before completing — which paradoxically made him seem more authentic.",
    "roots": {
      "origin": "Greek anakoluthos 'not following', from an- 'not' + akolouthos 'following'",
      "parts": [
        "an → not",
        "akolouthos → following, consistent"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.ə.kəˈluː.θə/"
  },
  {
    "word": "pleonasm",
    "pos": "noun",
    "definition": "The use of more words than are necessary to convey meaning, either as a fault of style or deliberately for emphasis; redundancy of expression.",
    "example": "'Free gift' and 'added bonus' are pleonasms — the additional word adds no information because the meaning is already contained in the first.",
    "roots": {
      "origin": "Greek pleonasmos from pleonazein 'to be excessive', from pleon 'more'",
      "parts": [
        "pleon → more, greater",
        "-asmos → process, condition"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpli.ə.næz.əm/"
  },
  {
    "word": "meiosis",
    "pos": "noun",
    "definition": "A figure of speech in which something is described as less than it is; deliberate understatement used for emphasis or rhetorical effect. Also a biological term for cell division.",
    "example": "Calling the Battle of the Somme 'a bit of an unfortunate miscalculation' would be an extreme meiosis — understatement bordering on the obscene.",
    "roots": {
      "origin": "Greek meiosis 'lessening', from meioun 'to lessen', from meion 'less'",
      "parts": [
        "meion → less, smaller",
        "-osis → process, condition"
      ]
    },
    "tier": 2,
    "pronunciation": "/maɪˈoʊ.sɪs/"
  },
  {
    "word": "auxesis",
    "pos": "noun",
    "definition": "A figure of speech in which a word of greater weight is substituted for one of less, or in which ideas are arranged in ascending order of intensity; amplification or intensification.",
    "example": "The preacher employed auxesis masterfully, beginning with 'inconvenience,' building through 'suffering' and 'anguish' to a climax of 'annihilation.'",
    "roots": {
      "origin": "Greek auxesis from auxein 'to increase, grow'",
      "parts": [
        "auxein → to increase, to grow",
        "-sis → process, action"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɔkˈsi.sɪs/"
  },
  {
    "word": "peripety",
    "pos": "noun",
    "definition": "A sudden reversal of fortune or change in circumstances, especially in drama or fiction; a dramatic turning point or moment of reversal in a narrative.",
    "example": "The discovery of the forged letter was the peripety upon which the entire novel turned — everything that followed was consequence.",
    "roots": {
      "origin": "Greek peripeteia from peripiptein 'to fall around or into', from peri- 'around' + piptein 'to fall'",
      "parts": [
        "peri → around, about",
        "piptein → to fall"
      ]
    },
    "tier": 2,
    "pronunciation": "/pəˈrɪp.ɪ.ti/"
  },
  {
    "word": "hamartia",
    "pos": "noun",
    "definition": "The fatal flaw or error of judgment in the protagonist of a Greek tragedy that leads to their downfall; more broadly, any tragic flaw of character.",
    "example": "Othello's hamartia was not jealousy itself but his profound need to trust — the very quality that made him noble made him catastrophically vulnerable to Iago.",
    "roots": {
      "origin": "Greek hamartia 'error, failure', from hamartanein 'to miss the mark, err'",
      "parts": [
        "hamartanein → to err, to miss the mark"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌhæm.ɑrˈti.ə/"
  },
  {
    "word": "anagnorisis",
    "pos": "noun",
    "definition": "The critical moment of recognition or discovery in a drama, particularly when a character realizes the true identity of someone or the true nature of their own situation.",
    "example": "Oedipus's anagnorisis — the moment he understood who he truly was — is the most devastating recognition scene in all of Western drama.",
    "roots": {
      "origin": "Greek anagnorisis 'recognition', from anagnorizein 'to recognize', from ana- 'again' + gnorizein 'to make known'",
      "parts": [
        "ana → again, back",
        "gnorizein → to make known, recognize"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.əɡˈnɔr.ɪ.sɪs/"
  },
  {
    "word": "enargeia",
    "pos": "noun",
    "definition": "Vivid, energetic description that brings a scene or event before the mind's eye with great clarity; a quality of writing that makes the reader feel they are witnessing events directly.",
    "example": "The war correspondent achieved extraordinary enargeia — readers could smell the smoke and feel the ground shake.",
    "roots": {
      "origin": "Greek enargeia from enargos 'visible, vivid', from en- 'in' + argos 'bright, gleaming'",
      "parts": [
        "en → in",
        "argos → bright, shining, clear"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛn.ɑrˈdʒi.ə/"
  },
  {
    "word": "epideictic",
    "pos": "adjective",
    "definition": "Of or pertaining to rhetoric that is for display or demonstration rather than deliberation or judgment; relating to speeches of praise or blame delivered on ceremonial occasions.",
    "example": "The graduation commencement address is a quintessentially epideictic form — its purpose is not persuasion but the ceremonial affirmation of shared values.",
    "roots": {
      "origin": "Greek epideiktikos from epideiknynai 'to display', from epi- 'upon, for' + deiknynai 'to show'",
      "parts": [
        "epi → upon, for",
        "deiknynai → to show, display"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛp.ɪˈdaɪk.tɪk/"
  },
  {
    "word": "forensic",
    "pos": "adjective",
    "definition": "Relating to or denoting the application of scientific methods and techniques to the investigation of crime; relating to courts of law or to public debate and argument.",
    "example": "His forensic style of argument — systematic, evidential, relentless — was ill-suited to dinner parties but devastatingly effective in courtrooms.",
    "roots": {
      "origin": "Latin forensis 'of the forum or public discussion', from forum 'public place, marketplace'",
      "parts": [
        "forum → public place, marketplace",
        "-ensis → of, belonging to"
      ]
    },
    "tier": 2,
    "pronunciation": "/fəˈrɛn.zɪk/"
  },
  {
    "word": "suasion",
    "pos": "noun",
    "definition": "Persuasion as opposed to force or coercion; the act of persuading someone through argument, reasoning, or appeal.",
    "example": "The diplomat preferred suasion over sanction — patient negotiation rather than economic pressure.",
    "roots": {
      "origin": "Latin suasio from suadere 'to advise, recommend, persuade'",
      "parts": [
        "suadere → to advise, urge, persuade",
        "-ion → action, process"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsweɪ.ʒən/"
  },
  {
    "word": "sophrosyne",
    "pos": "noun",
    "definition": "An ancient Greek virtue of moderation, temperance, and self-control; the ideal balance between excess and deficiency; soundness of mind combined with self-restraint.",
    "example": "The Delphic maxim 'nothing in excess' was an exhortation to sophrosyne — the discipline of living within human limits.",
    "roots": {
      "origin": "Greek sophrosyne from sophron 'of sound mind', from sophos 'wise' + phren 'mind'",
      "parts": [
        "sophos → wise, skillful",
        "phren → mind, heart, diaphragm"
      ]
    },
    "tier": 2,
    "pronunciation": "/sɒˈfrɒs.ɪ.ni/"
  },
  {
    "word": "thumos",
    "pos": "noun",
    "definition": "In ancient Greek philosophy, the spirited part of the soul concerned with passion, pride, and the desire for recognition; the seat of courage, anger, and honor.",
    "example": "Plato's tripartite soul — reason, thumos, and appetite — mapped a psychology that modern neuroscience is only beginning to rediscover.",
    "roots": {
      "origin": "Greek thumos 'soul, spirit, passion', related to thuein 'to rush, rage'",
      "parts": [
        "thuein → to rush, to rage, to offer sacrifice"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈθu.mɒs/"
  },
  {
    "word": "miasma",
    "pos": "noun",
    "definition": "A harmful or oppressive atmosphere; an unpleasant or unhealthy smell or vapor; historically, the supposed atmospheric pollution once thought to cause disease.",
    "example": "A miasma of resentment had settled over the office after the layoffs — everyone still employed felt guilty, and everyone let go felt betrayed.",
    "roots": {
      "origin": "Greek miasma 'pollution, stain', from miainein 'to pollute'",
      "parts": [
        "miainein → to stain, pollute, defile"
      ]
    },
    "tier": 2,
    "pronunciation": "/maɪˈæz.mə/"
  },
  {
    "word": "ichor",
    "pos": "noun",
    "definition": "In Greek mythology, the fluid that flows in the veins of the gods instead of blood; poetically, any ethereal fluid; in medicine, a thin watery discharge from a wound.",
    "example": "The poet described moonlight as ichor, the blood of dying gods dripping onto a dark world.",
    "roots": {
      "origin": "Greek ikhor, the word for the ethereal fluid in the veins of the Olympian gods",
      "parts": [
        "ikhor → the divine fluid (of uncertain further etymology)"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈaɪ.kɔr/"
  },
  {
    "word": "nectar",
    "pos": "noun",
    "definition": "The drink of the Greek gods; any delicious drink; the sweet fluid produced by plants and collected by bees; something especially sweet or delicious.",
    "example": "After eight hours in the summer sun, a glass of cold water was nectar — the most perfect thing he had ever tasted.",
    "roots": {
      "origin": "Greek nektar, the drink of the gods, perhaps from nek- 'death' + -tar 'overcoming' (i.e., that which overcomes death)",
      "parts": [
        "nek → death (cf. nekros)",
        "-tar → overcoming, carrying across"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈnɛk.tər/"
  },
  {
    "word": "ambrosia",
    "pos": "noun",
    "definition": "The food or drink of the Greek and Roman gods, reputed to confer immortality; something extremely pleasing to taste or smell; a dessert of oranges and coconut.",
    "example": "After a week of trail rations, even powdered eggs tasted like ambrosia.",
    "roots": {
      "origin": "Greek ambrosia from ambrotos 'immortal', from a- 'not' + brotos 'mortal' (from mrotos, related to Latin mors 'death')",
      "parts": [
        "a → not, without",
        "brotos → mortal, subject to death"
      ]
    },
    "tier": 2,
    "pronunciation": "/æmˈbroʊ.ʒə/"
  },
  {
    "word": "palimony",
    "pos": "noun",
    "definition": "Alimony claimed by or for a partner in an unmarried relationship after the breakdown of that relationship; financial support sought from a former cohabiting partner.",
    "example": "After a decade together, she sought palimony in the absence of any formal marriage — arguing that their arrangement had functionally been one.",
    "roots": {
      "origin": "Blend of pal + alimony — coined during the 1970s Marvin v. Marvin case",
      "parts": [
        "pal → friend, companion",
        "alimony → spousal support (from Latin alimonia 'sustenance')"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpæl.ɪ.moʊ.ni/"
  },
  {
    "word": "logodaedaly",
    "pos": "noun",
    "definition": "Cunning or inventive use of words; skill in the clever or artful manipulation of language.",
    "example": "Her logodaedaly was extraordinary — she could construct a pun, an anagram, and an acrostic from the same set of words in minutes.",
    "roots": {
      "origin": "Greek logos 'word' + Daedalus, the mythological craftsman renowned for cunning skill",
      "parts": [
        "logos → word",
        "Daidalos → Daedalus, the mythical inventor and craftsman"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌlɒɡ.oʊˈdɛd.ə.li/"
  },
  {
    "word": "philippic",
    "pos": "noun",
    "definition": "A bitter verbal attack or denunciation; a speech or piece of writing full of bitter condemnation; named after Demosthenes' speeches against Philip of Macedon.",
    "example": "His resignation letter was less a professional courtesy than a philippic — twelve pages of furious indictment of the entire board.",
    "roots": {
      "origin": "Greek philippikos, from Philippos (Philip), against whom Demosthenes delivered his famous orations",
      "parts": [
        "Philippos → Philip of Macedon (phil 'loving' + hippos 'horse')"
      ]
    },
    "tier": 2,
    "pronunciation": "/fɪˈlɪp.ɪk/"
  },
  {
    "word": "jeremiad",
    "pos": "noun",
    "definition": "A long, mournful complaint or lamentation; a prolonged literary work of complaint about society or its immorality, named after the biblical prophet Jeremiah.",
    "example": "His annual letter to the editor had become a ritual jeremiad against modernity, smartphones, and the decline of handwritten correspondence.",
    "roots": {
      "origin": "From Jeremiah, the Hebrew prophet whose lamentations gave the Book of Lamentations its character; French jérémiade",
      "parts": [
        "Jeremiah → the biblical prophet known for his lamenting prophecies"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌdʒɛr.ɪˈmaɪ.æd/"
  },
  {
    "word": "polemic",
    "pos": "noun",
    "definition": "A strong verbal or written attack on or refutation of the opinions or principles of another; a controversial argument, especially one refuting or attacking a specific opinion or doctrine.",
    "example": "The pamphlet was a devastating polemic — not a balanced argument but a relentless prosecution of a single thesis.",
    "roots": {
      "origin": "Greek polemikos 'warlike', from polemos 'war'",
      "parts": [
        "polemos → war, battle",
        "-ic → relating to, of the nature of"
      ]
    },
    "tier": 2,
    "pronunciation": "/pəˈlɛm.ɪk/"
  },
  {
    "word": "diatribe",
    "pos": "noun",
    "definition": "A forceful and bitter verbal attack against someone or something; a prolonged discourse of bitter, abusive criticism.",
    "example": "The professor's lecture quickly devolved into a diatribe against the publishing industry that left students unsure whether to take notes.",
    "roots": {
      "origin": "Greek diatribe 'pastime, lecture', from diatribein 'to wear away time', from dia- 'through' + tribein 'to rub'",
      "parts": [
        "dia → through, away",
        "tribein → to rub, wear away"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈdaɪ.ə.traɪb/"
  },
  {
    "word": "luculent",
    "pos": "adjective",
    "definition": "Clear in thought or expression; easily understood; brightly lit. A rare but precise word for clarity of mind or prose.",
    "example": "Her luculent explanation of quantum entanglement finally made the concept accessible to students who had struggled with it for weeks.",
    "roots": {
      "origin": "Latin luculentus from lux, lucis 'light'",
      "parts": [
        "lux/lucis → light",
        "-entus/-ulent → full of, abounding in"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈlu.kjʊ.lənt/"
  },
  {
    "word": "mordant",
    "pos": "adjective",
    "definition": "Sharp or biting, especially in wit or satire; incisively critical; in chemistry and dyeing, a substance that fixes dyes in or on a material.",
    "example": "His mordant commentary on corporate culture was far funnier than the self-congratulatory advertising it mercilessly dissected.",
    "roots": {
      "origin": "French mordant 'biting', present participle of mordre 'to bite', from Latin mordere",
      "parts": [
        "mordere → to bite, sting"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈmɔr.dənt/"
  },
  {
    "word": "trenchant",
    "pos": "adjective",
    "definition": "Vigorous or incisive in expression or style; sharp or pointed in analysis or criticism; (of a weapon or tool) having a sharp edge.",
    "example": "The trenchant two-sentence review — 'This book should not be read. It should be confiscated.' — ended the author's decade of hype.",
    "roots": {
      "origin": "Old French trenchant 'cutting', present participle of trenchier 'to cut', from Vulgar Latin trincare",
      "parts": [
        "trenchier/trincare → to cut, slice"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtrɛn.tʃənt/"
  },
  {
    "word": "torpor",
    "pos": "noun",
    "definition": "A state of physical or mental inactivity; lethargy; in zoology, a state of decreased physiological activity in an animal, usually by a reduced body temperature.",
    "example": "The long winter had induced a spiritual torpor — she went through the motions of daily life without feeling anything was quite real.",
    "roots": {
      "origin": "Latin torpor from torpere 'to be numb or stiff'",
      "parts": [
        "torpere → to be numb, stiff, sluggish"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɔr.pər/"
  },
  {
    "word": "somnolent",
    "pos": "adjective",
    "definition": "Sleepy; drowsy; causing or tending to cause drowsiness; characterized by sleepiness.",
    "example": "The afternoon lecture in the overheated room produced a somnolent audience — heads nodding in waves that passed across the auditorium.",
    "roots": {
      "origin": "Latin somnolentus from somnus 'sleep'",
      "parts": [
        "somnus → sleep",
        "-olentus → full of, abounding in"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsɒm.nə.lənt/"
  },
  {
    "word": "abstemious",
    "pos": "adjective",
    "definition": "Not self-indulgent, especially when eating and drinking; moderate and disciplined in consumption; sparing in diet.",
    "example": "His abstemious lifestyle — no alcohol, no red meat, eight hours of sleep — struck his colleagues as either admirable or deeply suspicious.",
    "roots": {
      "origin": "Latin abstemius from abs- 'from' + temetum 'strong drink'",
      "parts": [
        "abs → away from, without",
        "temetum → strong drink, intoxicating liquor"
      ]
    },
    "tier": 2,
    "pronunciation": "/æbˈsti.mi.əs/"
  },
  {
    "word": "temperate",
    "pos": "adjective",
    "definition": "Showing moderation and self-restraint; relating to a climate or region with mild temperatures; moderate in behavior or expression.",
    "example": "His public statements were always temperate, even when the accusations were extreme — a deliberate strategy that made him appear the more credible party.",
    "roots": {
      "origin": "Latin temperatus from temperare 'to restrain, moderate', from tempus 'time, season'",
      "parts": [
        "temperare → to mix in due proportion, restrain",
        "tempus → time, season"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɛm.pər.ɪt/"
  },
  {
    "word": "intemperate",
    "pos": "adjective",
    "definition": "Having or showing a lack of self-control; immoderate; given to excessive indulgence, especially in alcohol.",
    "example": "His intemperate remarks at the press conference — unplanned, angry, revealing — undid six months of careful public relations management.",
    "roots": {
      "origin": "Latin intemperatus from in- 'not' + temperatus 'moderate'",
      "parts": [
        "in → not",
        "temperatus → moderate, restrained"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪnˈtɛm.pər.ɪt/"
  },
  {
    "word": "venial",
    "pos": "adjective",
    "definition": "In Christian theology, denoting a sin that is not regarded as depriving the soul of divine grace; (of a fault or offense) slight and pardonable.",
    "example": "Forgetting to call his mother on her birthday was venial; forgetting her birthday entirely two years in a row was something harder to excuse.",
    "roots": {
      "origin": "Latin venialis 'pardonable', from venia 'indulgence, forgiveness'",
      "parts": [
        "venia → grace, forgiveness, pardon",
        "-alis → of, relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈvi.ni.əl/"
  },
  {
    "word": "invidious",
    "pos": "adjective",
    "definition": "Likely to arouse or incur resentment or anger in others; making unfair distinctions; characterized by envy or jealousy.",
    "example": "Any comparison between the two authors was invidious — they worked in entirely different traditions and could not meaningfully be ranked.",
    "roots": {
      "origin": "Latin invidiosus from invidia 'envy, ill will', from invidere 'to look upon with envy'",
      "parts": [
        "in → upon, at",
        "videre → to see",
        "-iosus → full of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪnˈvɪd.i.əs/"
  },
  {
    "word": "garrulous",
    "pos": "adjective",
    "definition": "Excessively talkative, especially on trivial matters; given to excessive and rambling talk.",
    "example": "The garrulous cab driver covered his entire life history, two failed marriages, and his views on cryptocurrency before they reached the airport.",
    "roots": {
      "origin": "Latin garrulus from garrire 'to chatter, prattle'",
      "parts": [
        "garrire → to chatter, babble, prattle",
        "-ulus → having the quality of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɡær.ʊ.ləs/"
  },
  {
    "word": "bathetic",
    "pos": "adjective",
    "definition": "Producing an effect of anticlimax by an abrupt transition from the exalted to the commonplace; disappointingly shallow or trite after something elevated.",
    "example": "The speech climaxed with a stirring call to action and then ended, bathetically, with instructions for parking validation.",
    "roots": {
      "origin": "Greek bathys 'deep' — bathos was Pope's satirical term for an absurd descent from the sublime to the ridiculous",
      "parts": [
        "bathys → deep",
        "-etic → relating to, of the nature of"
      ]
    },
    "tier": 2,
    "pronunciation": "/bəˈθɛt.ɪk/"
  },
  {
    "word": "mawkish",
    "pos": "adjective",
    "definition": "Sentimental in a feeble or sickly way; excessively and objectionably sentimental or emotional; having a faintly sickening flavor.",
    "example": "The advertisement was mawkish beyond endurance — slow-motion shots of children's faces, a swelling violin, and absolutely no information about the product.",
    "roots": {
      "origin": "From obsolete mawk 'maggot', from Old Norse maðkr; 'mawkish' originally meant 'nauseating'",
      "parts": [
        "mawk → maggot (Old Norse maðkr)",
        "-ish → somewhat, having the quality of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈmɔ.kɪʃ/"
  },
  {
    "word": "nocturnal",
    "pos": "adjective",
    "definition": "Done, occurring, or active at night; relating to the night or nighttime conditions; associated with or suggesting the night.",
    "example": "His nocturnal habits — sleeping until noon, writing until 4 a.m. — were perfectly adapted to solitude and terrible for any relationship.",
    "roots": {
      "origin": "Latin nocturnalis from nox, noctis 'night'",
      "parts": [
        "nox/noctis → night",
        "-alis → of, pertaining to"
      ]
    },
    "tier": 2,
    "pronunciation": "/nɒkˈtɜr.nəl/"
  },
  {
    "word": "suzerainty",
    "pos": "noun",
    "definition": "A situation in which a region or people is controlled by another nation but retains some degree of internal autonomy. The authority or dominion of a suzerain.",
    "example": "The small principality existed under the suzerainty of the empire, paying tribute but managing its own internal affairs.",
    "roots": {
      "origin": "French 'suzeraineté', from 'suzerain' meaning overlord, from Old French 'sus' (above)",
      "parts": [
        "sus → above",
        "-erain → suffix of domination (as in 'sovereign')"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsu.zər.ən.ti/"
  },
  {
    "word": "qualia",
    "pos": "noun",
    "definition": "The subjective, conscious experiences of perception — the felt quality of sensations, such as the redness of red or the painfulness of pain.",
    "example": "Philosophers debate whether a colorblind person who learns all the physics of color perception still lacks the qualia of seeing red.",
    "roots": {
      "origin": "Latin 'qualia', plural of 'quale', meaning 'of what sort', from 'qualis'",
      "parts": [
        "qualis → of what sort",
        "-ia → plural neuter suffix"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈkwɑ.li.ə/"
  },
  {
    "word": "praxis",
    "pos": "noun",
    "definition": "The practical application or exercise of a branch of learning, as opposed to the theory of it; habitual practice or action.",
    "example": "The activist argued that radical praxis — not mere theorizing — was the only path to genuine social change.",
    "roots": {
      "origin": "Greek 'praxis', meaning action or practice, from 'prassein' meaning to do",
      "parts": [
        "prassein → to do, to act"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpræk.sɪs/"
  },
  {
    "word": "sfumato",
    "pos": "noun",
    "definition": "A painting technique that softens the transition between colors and tones to produce an atmospheric haze, notably used by Leonardo da Vinci.",
    "example": "The mysterious smile of the Mona Lisa owes its enigmatic quality largely to Leonardo's mastery of sfumato.",
    "roots": {
      "origin": "Italian 'sfumato', past participle of 'sfumare' meaning to evaporate or tone down",
      "parts": [
        "s- → away",
        "fumare → to smoke, to fume"
      ]
    },
    "tier": 2,
    "pronunciation": "/sfuˈmɑ.toʊ/"
  },
  {
    "word": "chiaroscuro",
    "pos": "noun",
    "definition": "The treatment of light and shadow in drawing and painting to create the illusion of three-dimensional depth and volume.",
    "example": "Caravaggio's dramatic chiaroscuro gave his biblical scenes an almost theatrical intensity.",
    "roots": {
      "origin": "Italian, from 'chiaro' (clear, light) and 'scuro' (dark, obscure)",
      "parts": [
        "chiaro → clear, bright",
        "scuro → dark, obscure"
      ]
    },
    "tier": 2,
    "pronunciation": "/ki.ˌɑr.əˈskjʊər.oʊ/"
  },
  {
    "word": "tenebrism",
    "pos": "noun",
    "definition": "A style of painting characterized by predominantly dark tones and shadows with a concentrated area of bright light.",
    "example": "The artist's use of tenebrism made the single candle in the painting appear to be the only light source in all the world.",
    "roots": {
      "origin": "From Latin 'tenebrae' meaning darkness or shadows",
      "parts": [
        "tenebrae → darkness, shadows",
        "-ism → style or practice"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɛn.ɪ.brɪz.əm/"
  },
  {
    "word": "impasto",
    "pos": "noun",
    "definition": "A painting technique in which paint is laid on thickly, so that brush or palette-knife marks are clearly visible on the canvas.",
    "example": "Van Gogh's swirling impasto gave his skies a physical, almost sculptural energy.",
    "roots": {
      "origin": "Italian 'impasto', from 'impastare' meaning to mix into a paste",
      "parts": [
        "in- → into",
        "pasta → paste, dough"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪmˈpæs.toʊ/"
  },
  {
    "word": "scintilla",
    "pos": "noun",
    "definition": "A tiny trace or spark of a specified quality or feeling; in law, the smallest amount of evidence.",
    "example": "There was not a scintilla of evidence linking the defendant to the scene of the crime.",
    "roots": {
      "origin": "Latin 'scintilla' meaning spark",
      "parts": [
        "scintilla → spark, glimmer"
      ]
    },
    "tier": 2,
    "pronunciation": "/sɪnˈtɪl.ə/"
  },
  {
    "word": "nacreous",
    "pos": "adjective",
    "definition": "Having the iridescent luster of mother-of-pearl; resembling nacre in its shimmering, layered quality.",
    "example": "The nacreous clouds at high altitude shimmered with pastel colors rarely seen in ordinary skies.",
    "roots": {
      "origin": "From 'nacre' (mother-of-pearl), from French 'nacre', origin uncertain, possibly Arabic 'naqqara'",
      "parts": [
        "nacre → mother-of-pearl",
        "-ous → having the quality of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈneɪ.kri.əs/"
  },
  {
    "word": "caesura",
    "pos": "noun",
    "definition": "A pause or break in a line of poetry, usually near the middle; more broadly, any significant pause or interruption.",
    "example": "The poet placed the caesura mid-line to mirror the character's sudden hesitation before confession.",
    "roots": {
      "origin": "Latin 'caesura', from 'caedere' meaning to cut",
      "parts": [
        "caedere → to cut, to strike down",
        "-ura → result or act of"
      ]
    },
    "tier": 2,
    "pronunciation": "/sɪˈzjʊər.ə/"
  },
  {
    "word": "ostinato",
    "pos": "noun",
    "definition": "A continually repeated musical phrase or rhythm that persists throughout a composition, providing structural repetition.",
    "example": "The driving ostinato in the bass gave the minimalist piece its hypnotic forward momentum.",
    "roots": {
      "origin": "Italian 'ostinato' meaning obstinate or persistent, from Latin 'obstinatus'",
      "parts": [
        "obstinare → to persist, to persist firmly"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɒs.tɪˈnɑ.toʊ/"
  },
  {
    "word": "tessitura",
    "pos": "noun",
    "definition": "The range within which most notes of a vocal or instrumental part fall; the part of the range most comfortable for a voice or instrument.",
    "example": "The role was written in a high tessitura that exhausted most tenors by the second act.",
    "roots": {
      "origin": "Italian 'tessitura' meaning texture or weave, from 'tessere' meaning to weave",
      "parts": [
        "tessere → to weave",
        "-ura → quality or result"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌtɛs.ɪˈtʊər.ə/"
  },
  {
    "word": "rubato",
    "pos": "noun",
    "definition": "The temporary disregarding of strict tempo to allow an expressive quickening or slackening of the rhythm in music.",
    "example": "The pianist applied generous rubato to the nocturne's melody, letting the phrases breathe and linger.",
    "roots": {
      "origin": "Italian 'rubato', past participle of 'rubare' meaning to steal",
      "parts": [
        "rubare → to steal, to rob (i.e., time stolen from strict tempo)"
      ]
    },
    "tier": 2,
    "pronunciation": "/ruˈbɑ.toʊ/"
  },
  {
    "word": "contrapuntal",
    "pos": "adjective",
    "definition": "Of or relating to counterpoint — the technique of combining two or more melodic lines that are harmonically interdependent yet independent in rhythm and contour.",
    "example": "The fugue's contrapuntal writing made it sound as though several independent voices were having a conversation.",
    "roots": {
      "origin": "From 'counterpoint', Medieval Latin 'contrapunctus', meaning note set against note",
      "parts": [
        "contra → against",
        "punctus → point, note"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌkɒn.trəˈpʌn.təl/"
  },
  {
    "word": "telos",
    "pos": "noun",
    "definition": "The ultimate end, purpose, or goal toward which something aims; in Aristotelian philosophy, the final cause.",
    "example": "Whether a life of contemplation or civic virtue constituted the proper telos of a human being was a central debate among ancient Greeks.",
    "roots": {
      "origin": "Greek 'telos' meaning end, completion, or purpose",
      "parts": [
        "telos → end, goal, completion"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɛl.ɒs/"
  },
  {
    "word": "antinomy",
    "pos": "noun",
    "definition": "A contradiction between two apparently reasonable principles or conclusions; a fundamental paradox in philosophy or law.",
    "example": "Kant identified the antinomy of free will and determinism as one of pure reason's unsolvable conflicts.",
    "roots": {
      "origin": "Greek 'antinomia', from 'anti' (against) + 'nomos' (law)",
      "parts": [
        "anti- → against",
        "nomos → law, rule"
      ]
    },
    "tier": 2,
    "pronunciation": "/ænˈtɪn.ə.mi/"
  },
  {
    "word": "epiphenomenon",
    "pos": "noun",
    "definition": "A secondary phenomenon that occurs alongside or in parallel to a primary phenomenon but does not causally influence it.",
    "example": "Some philosophers argue that consciousness is merely an epiphenomenon of neural activity — present but causally inert.",
    "roots": {
      "origin": "Greek 'epi' (upon, in addition) + 'phainomenon' (appearance, thing appearing)",
      "parts": [
        "epi- → upon, in addition to",
        "phainomenon → appearance, what appears"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛp.ɪ.fɪˈnɒm.ɪ.nɒn/"
  },
  {
    "word": "noumenon",
    "pos": "noun",
    "definition": "In Kantian philosophy, a thing as it is in itself, independently of and unknowable through sense perception — the 'thing-in-itself'.",
    "example": "Kant insisted that while we can study phenomena — appearances — the noumenon always remains beyond our grasp.",
    "roots": {
      "origin": "Greek 'nooumenon', neuter present participle of 'noein' meaning to perceive by thought",
      "parts": [
        "noein → to perceive by mind",
        "-menon → passive participial suffix"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈnaʊ.mɪ.nɒn/"
  },
  {
    "word": "conatus",
    "pos": "noun",
    "definition": "In Spinozian philosophy, the inherent tendency of a thing to continue to exist and enhance its power of existence; striving or effort.",
    "example": "Spinoza argued that conatus — the striving to persist in being — was the essential drive underlying all natural things.",
    "roots": {
      "origin": "Latin 'conatus', from 'conari' meaning to try, to endeavor",
      "parts": [
        "conari → to attempt, to strive"
      ]
    },
    "tier": 2,
    "pronunciation": "/koʊˈneɪ.təs/"
  },
  {
    "word": "involution",
    "pos": "noun",
    "definition": "A process of turning inward or complicating; in biology, the reduction in size of an organ; in mathematics, a function that is its own inverse.",
    "example": "After childbirth, uterine involution — the organ returning to its pre-pregnancy size — typically takes about six weeks.",
    "roots": {
      "origin": "Latin 'involutio', from 'involvere' meaning to roll into or enwrap",
      "parts": [
        "in- → into",
        "volvere → to roll"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪn.vəˈlu.ʃən/"
  },
  {
    "word": "filigree",
    "pos": "noun",
    "definition": "Delicate ornamental work of fine wire, typically of gold or silver, formed into intricate patterns; by extension, any ornate, delicate design.",
    "example": "The antique brooch was crafted with silver filigree so fine it seemed spun from frost.",
    "roots": {
      "origin": "French 'filigrane', from Italian 'filigrana', from Latin 'filum' (thread) + 'granum' (grain)",
      "parts": [
        "filum → thread",
        "granum → grain, seed"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈfɪl.ɪ.ɡri/"
  },
  {
    "word": "corbel",
    "pos": "noun",
    "definition": "A structural piece of stone, wood, or metal projecting from a wall to support weight above it.",
    "example": "The medieval mason carved grotesque faces into the corbels that supported the great hall's timber roof.",
    "roots": {
      "origin": "Old French 'corbel', diminutive of 'corp' meaning crow, from Latin 'corvus' (the projecting shape resembled a crow's beak)",
      "parts": [
        "corvus → crow, raven"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈkɔr.bəl/"
  },
  {
    "word": "fenestration",
    "pos": "noun",
    "definition": "The arrangement, proportioning, and design of windows and other exterior openings in a building.",
    "example": "The architect's fenestration scheme filled the north facade with tall, narrow windows that flooded the studios with diffused light.",
    "roots": {
      "origin": "Latin 'fenestra' meaning window",
      "parts": [
        "fenestra → window, opening",
        "-ation → process or result of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌfɛn.ɪˈstreɪ.ʃən/"
  },
  {
    "word": "clerestory",
    "pos": "noun",
    "definition": "The upper part of a building's wall, containing windows that admit light to the interior above the roof of a lower aisle.",
    "example": "Light poured through the Gothic cathedral's clerestory, turning the nave into a luminous vertical space.",
    "roots": {
      "origin": "Medieval English, from 'clear' + 'story' (a level of a building); the clear or lighted level",
      "parts": [
        "clear → transparent, light-admitting",
        "story → level of a building"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈklɪər.stɔr.i/"
  },
  {
    "word": "entasis",
    "pos": "noun",
    "definition": "A slight convex curve given to a classical column to correct the optical illusion of concavity that would appear if the sides were straight.",
    "example": "Greek architects introduced entasis so subtly that visitors rarely notice it, yet its absence would make the columns look hollow.",
    "roots": {
      "origin": "Greek 'entasis', from 'enteinein' meaning to stretch tight",
      "parts": [
        "en- → in, within",
        "teinein → to stretch"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɛn.tə.sɪs/"
  },
  {
    "word": "rustication",
    "pos": "noun",
    "definition": "An architectural treatment in which the face of masonry blocks is deliberately roughened or deeply grooved to create a bold, textured appearance.",
    "example": "The palace's ground floor featured heavy rustication that gave the building a fortress-like solidity at its base.",
    "roots": {
      "origin": "Latin 'rusticatio', from 'rusticari' meaning to live in the country; later applied to rough stone work",
      "parts": [
        "rusticus → rural, rough, unpolished",
        "-ation → act or process"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌrʌs.tɪˈkeɪ.ʃən/"
  },
  {
    "word": "spandrel",
    "pos": "noun",
    "definition": "The roughly triangular space between one side of an arch and the surrounding rectangular frame or between two adjacent arches.",
    "example": "The Victorian railway station decorated its spandrels with cast-iron foliage and allegorical figures.",
    "roots": {
      "origin": "Anglo-French 'spaundre', from Old French 'espandre' meaning to spread out",
      "parts": [
        "espandre → to expand, spread"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈspæn.drəl/"
  },
  {
    "word": "quoin",
    "pos": "noun",
    "definition": "An external angle of a wall or building; also, one of the large cornerstones used to reinforce or decorate such an angle.",
    "example": "The red-brick building used pale limestone quoins at its corners, creating a striking visual contrast.",
    "roots": {
      "origin": "Variant of 'coin', from Old French 'coin' meaning corner or wedge, from Latin 'cuneus' (wedge)",
      "parts": [
        "cuneus → wedge, corner"
      ]
    },
    "tier": 2,
    "pronunciation": "/kɔɪn/"
  },
  {
    "word": "voussoir",
    "pos": "noun",
    "definition": "Each of the wedge-shaped or tapered stones forming an arch, with the central voussoir called the keystone.",
    "example": "The stonemason fitted each voussoir precisely, knowing that the arch could not stand until the keystone was set.",
    "roots": {
      "origin": "French 'voussoir', from Old French 'voussor', from 'volsoir', related to Latin 'volvere' meaning to roll or turn",
      "parts": [
        "volvere → to roll, to turn (describing the curve of an arch)"
      ]
    },
    "tier": 2,
    "pronunciation": "/vuˈswɑr/"
  },
  {
    "word": "crenellation",
    "pos": "noun",
    "definition": "A parapet with regular gaps (merlons and crenels) along the top of a wall or tower, originally for defensive purposes.",
    "example": "Royal permission was required to add crenellation to one's home — a visible statement of fortified status.",
    "roots": {
      "origin": "From 'crenel', from Old French 'crenel' meaning a notch, from Latin 'crena' (notch)",
      "parts": [
        "crena → notch, groove",
        "-ation → process or feature"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌkrɛn.əˈleɪ.ʃən/"
  },
  {
    "word": "champleve",
    "pos": "noun",
    "definition": "An enameling technique in which cells are cut or etched into a metal base and filled with enamel paste, which is then fired and polished.",
    "example": "The medieval reliquary was decorated with champleve panels depicting scenes from the saint's martyrdom.",
    "roots": {
      "origin": "French 'champlevé', meaning 'raised field', from 'champ' (field) + 'levé' (raised)",
      "parts": [
        "champ → field",
        "levé → raised, lifted"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌʃɑm.pləˈveɪ/"
  },
  {
    "word": "grout",
    "pos": "verb",
    "definition": "To fill or finish the joints between tiles or stones with a thin mortar or similar material.",
    "example": "She spent an afternoon grouting the new bathroom tiles, pressing the mixture firmly into every joint.",
    "roots": {
      "origin": "From 'grout' (coarse meal, dregs), Old English 'grut' meaning grain, coarse particles",
      "parts": [
        "grut → coarse meal, sediment"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɡraʊt/"
  },
  {
    "word": "priming",
    "pos": "noun",
    "definition": "In psychology, the implicit memory effect in which exposure to one stimulus influences the response to a later stimulus.",
    "example": "After being shown words related to aging, participants walked out of the experiment measurably more slowly — a classic priming effect.",
    "roots": {
      "origin": "From 'prime', Latin 'primus' meaning first, with the sense of preparing or activating in advance",
      "parts": [
        "primus → first",
        "-ing → action or process"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpraɪ.mɪŋ/"
  },
  {
    "word": "affect",
    "pos": "noun",
    "definition": "In psychology and psychiatry, the external expression of emotional feeling or mood, as observed by others.",
    "example": "The clinician noted the patient's blunted affect — a flattened emotional expression that matched neither his words nor his situation.",
    "roots": {
      "origin": "Latin 'affectus', past participle of 'afficere' meaning to influence or act upon",
      "parts": [
        "ad- → to, toward",
        "facere → to do, to make"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈæf.ɛkt/"
  },
  {
    "word": "hypervigilance",
    "pos": "noun",
    "definition": "An enhanced state of sensory sensitivity accompanied by an exaggerated intensity of behaviors whose purpose is to detect threats, common in PTSD.",
    "example": "Years after the war, his hypervigilance meant he sat only with his back to the wall and startled at every door slam.",
    "roots": {
      "origin": "Greek 'hyper' (over, beyond) + Latin 'vigilantia' (watchfulness), from 'vigilare' (to keep watch)",
      "parts": [
        "hyper- → over, excessive",
        "vigilare → to watch, to stay awake"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌhaɪ.pərˈvɪdʒ.ɪ.ləns/"
  },
  {
    "word": "deracinate",
    "pos": "verb",
    "definition": "To uproot or displace a person or people from their native land or cultural environment.",
    "example": "Colonial policies systematically deracinated indigenous children by removing them from their families and suppressing their languages.",
    "roots": {
      "origin": "French 'déraciner', from 'de-' (from) + 'racine' (root), from Latin 'radix'",
      "parts": [
        "de- → from, away",
        "radix → root"
      ]
    },
    "tier": 2,
    "pronunciation": "/dɪˈræs.ɪ.neɪt/"
  },
  {
    "word": "atavism",
    "pos": "noun",
    "definition": "The reappearance in an individual of characteristics not found in parents or recent ancestors but present in more remote ancestors; a throwback.",
    "example": "The snake occasionally born with vestigial legs is an atavism, a brief reappearance of a trait lost millions of years ago.",
    "roots": {
      "origin": "Latin 'atavus' meaning ancestor, great-great-great-grandfather",
      "parts": [
        "atavus → ancestor, forefather",
        "-ism → condition or phenomenon"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈæt.ə.vɪz.əm/"
  },
  {
    "word": "sympatric",
    "pos": "adjective",
    "definition": "Relating to or describing organisms or populations occupying the same geographical area without interbreeding.",
    "example": "Two species of finch on the island were sympatric yet ecologically distinct enough that they rarely competed for the same food.",
    "roots": {
      "origin": "Greek 'syn' (together) + 'patria' (native land, country), coined in biogeography",
      "parts": [
        "syn- → together, same",
        "patria → fatherland, homeland"
      ]
    },
    "tier": 2,
    "pronunciation": "/sɪmˈpæt.rɪk/"
  },
  {
    "word": "etiolate",
    "pos": "verb",
    "definition": "To cause a plant to become pale and weak through lack of light; figuratively, to make something feeble or insubstantial.",
    "example": "Years of institutional politics had etiolated what was once a bold research agenda into cautious, incremental work.",
    "roots": {
      "origin": "French 'étioler', probably from Norman 'étieuler' meaning to grow into haulm (plant stalks)",
      "parts": [
        "éteuler → to sprout, to grow long and pale"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈi.ti.ə.leɪt/"
  },
  {
    "word": "tropism",
    "pos": "noun",
    "definition": "The directional growth or movement of a plant or organism in response to an external stimulus; figuratively, an involuntary attraction or tendency.",
    "example": "His tropism toward melancholy was so reliable that friends joked any good news would eventually find its way to a sad conclusion.",
    "roots": {
      "origin": "Greek 'tropos' meaning turn or direction, from 'trepein' meaning to turn",
      "parts": [
        "trepein → to turn",
        "-ism → process or condition"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtroʊ.pɪz.əm/"
  },
  {
    "word": "dehiscence",
    "pos": "noun",
    "definition": "The splitting open of an organ or structure along natural or surgically created lines to release its contents; in botany, the bursting open of seed pods.",
    "example": "The witch hazel pod's dramatic dehiscence can launch seeds several meters away from the parent plant.",
    "roots": {
      "origin": "Latin 'dehiscere' meaning to split open, from 'de-' (away) + 'hiscere' (to gape, to open)",
      "parts": [
        "de- → apart, away",
        "hiscere → to gape, to yawn open"
      ]
    },
    "tier": 2,
    "pronunciation": "/dɪˈhɪs.əns/"
  },
  {
    "word": "viviparous",
    "pos": "adjective",
    "definition": "Bearing live young that have developed inside the body of the parent, rather than hatching from eggs; also describing plants that germinate while still on the parent plant.",
    "example": "Unlike most reptiles, the viviparous lizard gives birth to live young rather than laying eggs — a rare adaptation for colder climates.",
    "roots": {
      "origin": "Latin 'viviparus', from 'vivus' (alive) + 'parere' (to produce)",
      "parts": [
        "vivus → alive, living",
        "parere → to give birth, to produce"
      ]
    },
    "tier": 2,
    "pronunciation": "/vɪˈvɪp.ər.əs/"
  },
  {
    "word": "marcescence",
    "pos": "noun",
    "definition": "The condition in which withered plant structures such as leaves or petals remain attached to the plant instead of falling off.",
    "example": "Oaks display marcescence through winter, their dead brown leaves clinging stubbornly until new growth pushes them off in spring.",
    "roots": {
      "origin": "Latin 'marcescens', present participle of 'marcescere' meaning to wither, to decay",
      "parts": [
        "marcere → to wither, to be feeble",
        "-escence → process of becoming"
      ]
    },
    "tier": 2,
    "pronunciation": "/mɑrˈsɛs.əns/"
  },
  {
    "word": "iridescent",
    "pos": "adjective",
    "definition": "Showing luminous colors that seem to change when seen from different angles, as a result of light interference.",
    "example": "The hummingbird's throat patch was iridescent — appearing deep purple one moment and electric green the next.",
    "roots": {
      "origin": "Latin 'iris' (rainbow, from Greek 'iris') + '-escent' (becoming, showing a gradual process)",
      "parts": [
        "iris → rainbow",
        "-escent → showing, having the quality of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪr.ɪˈdɛs.ənt/"
  },
  {
    "word": "fulgurant",
    "pos": "adjective",
    "definition": "Flashing like lightning; dazzlingly bright or sudden.",
    "example": "A fulgurant career that soared to fame within a year left the musician unprepared for the equally swift collapse.",
    "roots": {
      "origin": "Latin 'fulgurans', from 'fulgurare' meaning to flash with lightning, from 'fulgur' (lightning)",
      "parts": [
        "fulgur → lightning, flash",
        "-ant → characterized by"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈfʌl.ɡjʊ.rənt/"
  },
  {
    "word": "murky",
    "pos": "adjective",
    "definition": "Dark and gloomy, especially due to thick mist or fog; figuratively, unclear or difficult to understand, often with a suggestion of something hidden or disreputable.",
    "example": "The murky details of the financial arrangement made investors deeply uneasy, though nothing could be proven outright.",
    "roots": {
      "origin": "Middle English 'mirke', from Old Norse 'myrkr' meaning darkness",
      "parts": [
        "myrkr → darkness, gloom"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈmɜr.ki/"
  },
  {
    "word": "irradiate",
    "pos": "verb",
    "definition": "To illuminate or brighten with light; to expose to radiation; figuratively, to make radiant or joyful.",
    "example": "A smile so genuine irradiated her face that the room seemed to warm.",
    "roots": {
      "origin": "Latin 'irradiare', from 'in-' (upon) + 'radiare' (to shine, to beam)",
      "parts": [
        "in- → upon, into",
        "radius → ray, beam",
        "-are → infinitive verb suffix"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˈreɪ.di.eɪt/"
  },
  {
    "word": "hirsutal",
    "pos": "adjective",
    "definition": "Of or relating to hair; covered in hair — a technical variant of 'hirsute' used in botanical and zoological contexts.",
    "example": "The hirsutal stem of the plant helped it retain moisture in the arid climate by slowing airflow across the surface.",
    "roots": {
      "origin": "Latin 'hirsutus' meaning rough, shaggy, or hairy",
      "parts": [
        "hirsutus → hairy, bristly, rough"
      ]
    },
    "tier": 2,
    "pronunciation": "/hɜrˈsju.təl/"
  },
  {
    "word": "velvet",
    "pos": "adjective",
    "definition": "Having the soft, smooth, dense texture of velvet; used figuratively to describe voices, surfaces, or movements of exceptional smoothness.",
    "example": "The cellist's velvet tone in the lower register made the audience lean collectively forward.",
    "roots": {
      "origin": "Old French 'veluette', from Latin 'villus' meaning tuft of hair, shaggy hair",
      "parts": [
        "villus → tuft of hair",
        "-et → diminutive suffix"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈvɛl.vɪt/"
  },
  {
    "word": "coriaceous",
    "pos": "adjective",
    "definition": "Having the texture or appearance of leather; tough, thick, and somewhat flexible.",
    "example": "The plant's coriaceous leaves were an adaptation against moisture loss in the dry season.",
    "roots": {
      "origin": "Latin 'coriaceus', from 'corium' meaning leather, hide",
      "parts": [
        "corium → leather, hide, skin",
        "-aceus → of the nature of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌkɔr.iˈeɪ.ʃəs/"
  },
  {
    "word": "glabrous",
    "pos": "adjective",
    "definition": "Smooth and without hair; having a smooth, bare surface, as opposed to hirsute or pubescent.",
    "example": "Botanists noted the glabrous underside of the leaf as a key feature distinguishing it from a nearly identical species.",
    "roots": {
      "origin": "Latin 'glaber' meaning smooth, bald, hairless",
      "parts": [
        "glaber → smooth, hairless",
        "-ous → having the quality of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɡleɪ.brəs/"
  },
  {
    "word": "reticulate",
    "pos": "adjective",
    "definition": "Resembling or having the form of a net; constructed or arranged in a network pattern.",
    "example": "The leaf's reticulate venation — fine veins crossing in an intricate network — helped researchers classify it.",
    "roots": {
      "origin": "Latin 'reticulatus', from 'reticulum' meaning little net, from 'rete' (net)",
      "parts": [
        "rete → net",
        "-culum → diminutive",
        "-atus → having the form of"
      ]
    },
    "tier": 2,
    "pronunciation": "/rɪˈtɪk.jʊ.lɪt/"
  },
  {
    "word": "striated",
    "pos": "adjective",
    "definition": "Marked with fine grooves, stripes, or ridges running parallel to each other; streaked.",
    "example": "The striated pattern of the rock face told the geologist it had been carved by a moving glacier.",
    "roots": {
      "origin": "Latin 'striatus', from 'stria' meaning groove or ridge",
      "parts": [
        "stria → groove, furrow, stripe",
        "-atus → having the form of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈstraɪ.eɪ.tɪd/"
  },
  {
    "word": "scabrous",
    "pos": "adjective",
    "definition": "Having a rough, harsh texture; in figurative use, dealing with scandalous or salacious subjects; contentious or thorny.",
    "example": "He navigated the scabrous politics of the department with surprising grace, never making enemies unnecessarily.",
    "roots": {
      "origin": "Latin 'scabrosus', from 'scaber' meaning rough or mangy",
      "parts": [
        "scaber → rough, scurfy",
        "-osus → full of, characterized by"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈskeɪ.brəs/"
  },
  {
    "word": "granular",
    "pos": "adjective",
    "definition": "Consisting of or appearing to consist of small grains; at the level of fine, detailed particulars.",
    "example": "The report was excellent at the granular level, filled with data, but failed to offer a meaningful overarching argument.",
    "roots": {
      "origin": "Latin 'granularis', from 'granulum' meaning small grain, diminutive of 'granum'",
      "parts": [
        "granum → grain, seed",
        "-ulum → diminutive",
        "-ar → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɡræn.jʊ.lər/"
  },
  {
    "word": "patinaed",
    "pos": "adjective",
    "definition": "Covered with a patina — a film or coating acquired through age and use, typically valued for its aesthetic quality.",
    "example": "The patinaed copper dome of the library had turned a deep verdigris that the architects refused to restore.",
    "roots": {
      "origin": "From 'patina', Italian/Latin 'patina' meaning shallow dish; the sense of surface coating came from the film on old bronzes",
      "parts": [
        "patina → shallow dish, later: surface coating"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpæt.ɪ.nɪd/"
  },
  {
    "word": "verdigris",
    "pos": "noun",
    "definition": "A bright green or bluish-green crystalline compound formed on copper, brass, or bronze by atmospheric oxidation.",
    "example": "Over centuries the bronze statue had acquired a thick coat of verdigris that historians debated whether to remove.",
    "roots": {
      "origin": "Old French 'verte gris' meaning green of Greece, from 'vert' (green) + 'de' (of) + 'Gris' (Greece)",
      "parts": [
        "vert → green",
        "de → of",
        "Grèce → Greece"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈvɜr.dɪ.ɡrɪs/"
  },
  {
    "word": "kokumi",
    "pos": "noun",
    "definition": "A taste sensation described as richness, heartiness, or mouthfulness — a depth of flavor distinct from umami that enhances other taste sensations.",
    "example": "Aged cheeses and long-cooked sauces often develop kokumi, a quality that makes the palate register a lingering complexity.",
    "roots": {
      "origin": "Japanese 'kokumi', from 'koku' (richness, depth) + 'mi' (taste)",
      "parts": [
        "koku → richness, depth",
        "mi → taste, flavor"
      ]
    },
    "tier": 2,
    "pronunciation": "/koʊˈku.mi/"
  },
  {
    "word": "maillard",
    "pos": "noun",
    "definition": "The Maillard reaction — a chemical process between amino acids and reducing sugars that gives browned food its distinctive flavor when cooked at high heat.",
    "example": "A properly seared steak owes its crust's complex flavor entirely to the Maillard reaction occurring above 140 degrees Celsius.",
    "roots": {
      "origin": "Named after French chemist Louis-Camille Maillard, who described the reaction in 1912",
      "parts": []
    },
    "tier": 2,
    "pronunciation": "/maɪˈɑrd/"
  },
  {
    "word": "terroir",
    "pos": "noun",
    "definition": "The complete natural environment — including soil, topography, and climate — in which a particular wine, food, or agricultural product is produced, and which gives it its distinctive character.",
    "example": "Wine enthusiasts argue that terroir makes the same grape variety taste entirely different when grown ten miles apart.",
    "roots": {
      "origin": "French 'terroir', from Old French 'terrouer', from Latin 'terra' meaning earth, land",
      "parts": [
        "terra → earth, land",
        "-oir → place or domain of"
      ]
    },
    "tier": 2,
    "pronunciation": "/tɛˈrwɑr/"
  },
  {
    "word": "mouthfeel",
    "pos": "noun",
    "definition": "The physical sensations produced by food or drink in the mouth, including texture, viscosity, temperature, and how it coats the palate.",
    "example": "The winemaker fermented on skins to add tannin, deliberately trading fruitiness for a drier, more grippy mouthfeel.",
    "roots": {
      "origin": "Compound of 'mouth' and 'feel'; a technical food science and wine tasting term",
      "parts": [
        "mouth → oral cavity",
        "feel → sensation, tactile perception"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈmaʊθ.fil/"
  },
  {
    "word": "acidulate",
    "pos": "verb",
    "definition": "To make slightly acid or sour; to add a small amount of acid to a food or liquid to sharpen its flavor.",
    "example": "The chef acidulated the cream with a few drops of lemon juice before folding it into the potato salad.",
    "roots": {
      "origin": "Latin 'acidulus' meaning slightly sour, diminutive of 'acidus' (sour)",
      "parts": [
        "acidus → sour, sharp",
        "-ulus → diminutive",
        "-ate → to make"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈsɪd.jʊ.leɪt/"
  },
  {
    "word": "escabeche",
    "pos": "noun",
    "definition": "A dish of fish, meat, or vegetables that has been marinated or pickled in an acidic sauce of vinegar, oil, and spices after cooking.",
    "example": "She served escabeche of mackerel as a first course, the fish brightened by vinegar and studded with capers.",
    "roots": {
      "origin": "Spanish 'escabeche', possibly from Arabic 'iskabaj' (a vinegar-based sauce) or Persian 'sikbaj'",
      "parts": [
        "sikbaj → a dish cooked with vinegar"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛs.kəˈbeɪ.tʃeɪ/"
  },
  {
    "word": "gastrique",
    "pos": "noun",
    "definition": "A caramelized sugar deglazed with vinegar, used as a sweet-sour base for sauces in classical French cuisine.",
    "example": "The duck breast was finished with a gastrique of raspberry vinegar and honey that cut through the richness of the skin.",
    "roots": {
      "origin": "French 'gastrique', meaning gastric or relating to the stomach, from Greek 'gaster' (stomach)",
      "parts": [
        "gaster → stomach, belly",
        "-ique → relating to"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɡæˈstrik/"
  },
  {
    "word": "deglaze",
    "pos": "verb",
    "definition": "To add liquid to a hot pan after sautéing or roasting, dissolving the caramelized food residues into a sauce.",
    "example": "Once the shallots were golden, she deglazed the pan with white wine, scraping up the fond from the bottom.",
    "roots": {
      "origin": "French 'déglacer', from 'de-' (from) + 'glacer' (to glaze, to freeze), meaning to remove the glaze",
      "parts": [
        "de- → removal from",
        "glacer → to glaze, to cover with a gloss"
      ]
    },
    "tier": 2,
    "pronunciation": "/diˈɡleɪz/"
  },
  {
    "word": "brunoise",
    "pos": "noun",
    "definition": "A culinary knife cut in which food is diced into very small, uniform cubes of about three millimeters per side.",
    "example": "The sauce's base was a fine brunoise of carrot, celery, and onion that had melted entirely into the liquid.",
    "roots": {
      "origin": "French culinary term, origin uncertain; may relate to 'brun' (brown), suggesting a preparation associated with browning",
      "parts": [
        "brun → brown"
      ]
    },
    "tier": 2,
    "pronunciation": "/bruˈnwɑz/"
  },
  {
    "word": "rancio",
    "pos": "adjective",
    "definition": "Describing a particular nutty, oxidative, slightly rancid flavor found in aged wines, spirits, and cheeses that is deliberately cultivated and considered desirable.",
    "example": "The old Armagnac had developed a rancio character — a complex, lingering quality that younger spirits simply could not replicate.",
    "roots": {
      "origin": "Spanish and French 'rancio', from Latin 'rancidus' meaning rank or stale",
      "parts": [
        "rancidus → rancid, rank, stale"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈrɑn.si.oʊ/"
  },
  {
    "word": "prescind",
    "pos": "verb",
    "definition": "To mentally separate or detach one thing from another; to leave aside or abstract from when considering a matter.",
    "example": "To evaluate the policy fairly, she had to prescind from her personal feelings about the politician who proposed it.",
    "roots": {
      "origin": "Latin 'praescindere', from 'prae-' (before) + 'scindere' (to cut)",
      "parts": [
        "prae- → before",
        "scindere → to cut, to split"
      ]
    },
    "tier": 2,
    "pronunciation": "/prɪˈsɪnd/"
  },
  {
    "word": "anadiplosis",
    "pos": "noun",
    "definition": "A rhetorical device in which the last word or phrase of one sentence, clause, or line is repeated at the beginning of the next.",
    "example": "The speech used anadiplosis to build momentum: 'We fight for justice. Justice demands courage. Courage demands sacrifice.'",
    "roots": {
      "origin": "Greek 'anadiplosis', from 'ana-' (again) + 'diploun' (to double), from 'diploos' (double)",
      "parts": [
        "ana- → again, back",
        "diploos → double"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.ə.dɪˈploʊ.sɪs/"
  },
  {
    "word": "anacrusis",
    "pos": "noun",
    "definition": "In music, one or more unstressed notes before the first stressed note of a phrase; in poetry, an unstressed syllable at the beginning of a line before the regular meter begins.",
    "example": "The familiar opening notes of 'Happy Birthday' form an anacrusis — two upbeat notes before the first strong beat.",
    "roots": {
      "origin": "Greek 'anakrousis', from 'ana-' (up) + 'krouein' (to strike)",
      "parts": [
        "ana- → up",
        "krouein → to strike, to beat"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.əˈkru.sɪs/"
  },
  {
    "word": "lemniscate",
    "pos": "noun",
    "definition": "A figure-eight-shaped curve or symbol, especially the infinity symbol (∞); in mathematics, the lemniscate of Bernoulli.",
    "example": "The choreographer staged the duet so that the dancers traced a continuous lemniscate across the stage, never stopping.",
    "roots": {
      "origin": "Latin 'lemniscatus' meaning adorned with ribbons, from 'lemniscus' (hanging ribbon)",
      "parts": [
        "lemniscus → ribbon (from Greek 'lemniskos')"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈlɛm.nɪ.skɪt/"
  },
  {
    "word": "catena",
    "pos": "noun",
    "definition": "A chain or connected series; in biblical scholarship, a commentary consisting of a chain of extracts from other authors.",
    "example": "The theologian compiled a catena of patristic commentary on the passage, letting the church fathers speak for themselves.",
    "roots": {
      "origin": "Latin 'catena' meaning chain",
      "parts": [
        "catena → chain, link"
      ]
    },
    "tier": 2,
    "pronunciation": "/kəˈti.nə/"
  },
  {
    "word": "nexus",
    "pos": "noun",
    "definition": "A connection or series of connections linking two or more things; a central or focal point.",
    "example": "The city became the nexus of the global trade route, drawing merchants from every known civilization.",
    "roots": {
      "origin": "Latin 'nexus', from 'nectere' meaning to bind, to connect",
      "parts": [
        "nectere → to bind, to tie"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈnɛk.səs/"
  },
  {
    "word": "divaricate",
    "pos": "verb",
    "definition": "To stretch apart or spread widely; to diverge or fork into branches.",
    "example": "The river divaricated into dozens of shallow channels as it approached the flat plain of its delta.",
    "roots": {
      "origin": "Latin 'divaricare', from 'di-' (apart) + 'varicare' (to straddle)",
      "parts": [
        "di- → apart, in different directions",
        "varus → bent apart, bow-legged"
      ]
    },
    "tier": 2,
    "pronunciation": "/daɪˈvær.ɪ.keɪt/"
  },
  {
    "word": "anfractuous",
    "pos": "adjective",
    "definition": "Full of twists and turns; sinuous and winding; by extension, indirect or convoluted in reasoning.",
    "example": "The path through the canyon was anfractuous, doubling back on itself so many times that newcomers routinely got lost.",
    "roots": {
      "origin": "Latin 'anfractuosus', from 'anfractus' meaning a winding, from 'ambi-' (around) + 'fractus' (broken)",
      "parts": [
        "ambi- → around",
        "frangere → to break, to bend"
      ]
    },
    "tier": 2,
    "pronunciation": "/ænˈfræk.tʃu.əs/"
  },
  {
    "word": "tortuous",
    "pos": "adjective",
    "definition": "Full of twists, turns, and bends; not direct or straightforward, either physically or in reasoning.",
    "example": "The legislation had followed a tortuous path through committee revisions, floor amendments, and procedural votes.",
    "roots": {
      "origin": "Latin 'tortuosus', from 'tortus' meaning twisted, from 'torquere' (to twist)",
      "parts": [
        "torquere → to twist, to wring",
        "-osus → full of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɔr.tʃu.əs/"
  },
  {
    "word": "intercalate",
    "pos": "verb",
    "definition": "To insert something into an existing sequence, text, or structure; in chemistry, to insert atoms or molecules between layers of a crystal lattice.",
    "example": "The scribe had intercalated several later glosses into the original text, making source-critical work extremely difficult.",
    "roots": {
      "origin": "Latin 'intercalare', from 'inter-' (between) + 'calare' (to proclaim, to insert a day)",
      "parts": [
        "inter- → between",
        "calare → to announce, to call"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪnˈtɜr.kə.leɪt/"
  },
  {
    "word": "interpolate",
    "pos": "verb",
    "definition": "To insert new material into a text or sequence, especially spuriously; in mathematics, to estimate values between known data points.",
    "example": "Medieval copyists sometimes interpolated their own theological opinions into the texts they were supposed to be faithfully transcribing.",
    "roots": {
      "origin": "Latin 'interpolare', from 'inter-' (between) + 'polire' (to polish, to alter)",
      "parts": [
        "inter- → between",
        "polire → to polish, to alter"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪnˈtɜr.pə.leɪt/"
  },
  {
    "word": "adumbrate",
    "pos": "verb",
    "definition": "To outline or sketch something roughly; to indicate faintly or foreshadow; to overshadow or obscure.",
    "example": "The composer adumbrated the main theme in the opening bars before stating it fully in the fourth movement.",
    "roots": {
      "origin": "Latin 'adumbrare', from 'ad-' (to) + 'umbra' (shadow)",
      "parts": [
        "ad- → to, toward",
        "umbra → shadow"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈæd.əm.breɪt/"
  },
  {
    "word": "defalcation",
    "pos": "noun",
    "definition": "The embezzlement or misappropriation of funds by a person entrusted with them; the amount embezzled.",
    "example": "The auditors discovered years of systematic defalcation hidden beneath a maze of shell accounts and false invoices.",
    "roots": {
      "origin": "Medieval Latin 'defalcatio', from 'defalcare' meaning to cut off, from 'de-' (down) + 'falx' (sickle)",
      "parts": [
        "de- → from, down",
        "falx → sickle, blade"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌdi.fælˈkeɪ.ʃən/"
  },
  {
    "word": "estoppel",
    "pos": "noun",
    "definition": "A legal principle by which a party is prevented from asserting a claim or argument that is contrary to a position it previously took, especially when another party relied on that position to their detriment.",
    "example": "The developer's prior assurances to residents invoked estoppel — the court held the company to its word.",
    "roots": {
      "origin": "Old French 'estoupail' meaning plug or bung, from 'estouper' meaning to stop up",
      "parts": [
        "estouper → to stop up, to plug"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˈstɒp.əl/"
  },
  {
    "word": "tortfeasor",
    "pos": "noun",
    "definition": "A person who commits a tort — a civil wrong causing harm or injury to another — and is therefore liable to a legal claim.",
    "example": "In the negligence suit, the plaintiff's attorney argued that all three defendants were concurrent tortfeasors equally responsible for the harm.",
    "roots": {
      "origin": "Anglo-French 'tortfesour', from 'tort' (wrong) + 'fesour' (doer), from Old French 'faire' (to do)",
      "parts": [
        "tort → wrong, harm",
        "fesour → doer, one who acts"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈtɔrt.fi.zər/"
  },
  {
    "word": "mens rea",
    "pos": "noun",
    "definition": "The mental element, or guilty mind, required for a criminal act — the intention or knowledge of wrongdoing that must accompany the prohibited act.",
    "example": "The defense argued there could be no conviction without mens rea: the defendant had acted without any awareness that the substance was illegal.",
    "roots": {
      "origin": "Latin 'mens rea', meaning guilty mind, from 'mens' (mind) + 'rea' (guilty, feminine of 'reus')",
      "parts": [
        "mens → mind",
        "rea → guilty"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌmɛnz ˈri.ə/"
  },
  {
    "word": "amicus curiae",
    "pos": "noun",
    "definition": "A person or organization not party to a case who offers information, expertise, or argument relevant to an issue before the court.",
    "example": "Dozens of civil liberties organizations filed amicus curiae briefs urging the court to rule in favor of the defendant.",
    "roots": {
      "origin": "Latin 'amicus curiae', meaning friend of the court, from 'amicus' (friend) + 'curia' (court)",
      "parts": [
        "amicus → friend",
        "curiae → of the court"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˌmaɪ.kəs ˈkjʊər.i.i/"
  },
  {
    "word": "spoliation",
    "pos": "noun",
    "definition": "The destruction, alteration, or withholding of evidence relevant to legal proceedings; also, the act of plundering or despoiling.",
    "example": "The company faced sanctions for spoliation after it emerged that emails had been deleted during the discovery period.",
    "roots": {
      "origin": "Latin 'spoliatio', from 'spoliare' meaning to strip, to plunder",
      "parts": [
        "spolium → spoils, plunder",
        "-ation → act or process of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌspoʊ.liˈeɪ.ʃən/"
  },
  {
    "word": "subrogation",
    "pos": "noun",
    "definition": "The legal substitution of one party for another with respect to a claim or right; specifically, when an insurer assumes the rights of an insured after paying a claim.",
    "example": "After paying the fire damage claim, the insurer pursued subrogation against the faulty appliance manufacturer.",
    "roots": {
      "origin": "Latin 'subrogatio', from 'subrogare' meaning to substitute, from 'sub-' (under) + 'rogare' (to ask, to propose)",
      "parts": [
        "sub- → under, in place of",
        "rogare → to ask, to propose"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌsʌb.rəˈɡeɪ.ʃən/"
  },
  {
    "word": "interregnum",
    "pos": "noun",
    "definition": "A period when normal government is suspended or when a throne is vacant between the reign of one sovereign and the next; any period of discontinuity.",
    "example": "During the interregnum, the council struggled to maintain order without the legal authority that only a crowned monarch could confer.",
    "roots": {
      "origin": "Latin 'interregnum', from 'inter-' (between) + 'regnum' (reign, rule)",
      "parts": [
        "inter- → between",
        "regnum → reign, kingdom"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪn.tərˈrɛɡ.nəm/"
  },
  {
    "word": "attainder",
    "pos": "noun",
    "definition": "Historically, the forfeiture of civil rights and property upon a death sentence for treason or felony; the concept was used to condemn people by legislative act without trial.",
    "example": "Bills of attainder — condemned by name without trial — were explicitly prohibited by the United States Constitution.",
    "roots": {
      "origin": "Anglo-French 'attaindre', from Old French 'ataindre' meaning to convict, to touch",
      "parts": [
        "ataindre → to reach, to touch, to convict"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈteɪn.dər/"
  },
  {
    "word": "lèse-majesté",
    "pos": "noun",
    "definition": "The crime of violating the dignity of a sovereign or the offense of betraying or showing disrespect to a ruler or ruling body; also used informally for impudent behavior toward a superior.",
    "example": "Criticizing the king in verse was punishable as lèse-majesté in many European courts of the eighteenth century.",
    "roots": {
      "origin": "French 'lèse-majesté', from Latin 'laesa maiestas' meaning injured majesty",
      "parts": [
        "laesa → injured, harmed",
        "maiestas → greatness, dignity of authority"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌleɪz ˈmæd.ʒɪ.steɪ/"
  },
  {
    "word": "regicide",
    "pos": "noun",
    "definition": "The action of killing a king; a person who kills a king.",
    "example": "The trial of Charles I shocked Europe not just as regicide but as the formal judicial killing of a monarch by his own subjects.",
    "roots": {
      "origin": "Latin 'rex' (king) + '-cide' from 'caedere' (to kill)",
      "parts": [
        "rex/regis → king",
        "-cida → killer of"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈrɛdʒ.ɪ.saɪd/"
  },
  {
    "word": "interdict",
    "pos": "noun",
    "definition": "An authoritative prohibition; in the Catholic Church, an ecclesiastical censure excluding a person or district from participation in most sacraments.",
    "example": "Pope Innocent III placed England under an interdict, silencing all church bells and closing the churches until King John submitted.",
    "roots": {
      "origin": "Latin 'interdictum', from 'interdicere' meaning to forbid, from 'inter-' (between) + 'dicere' (to say)",
      "parts": [
        "inter- → between",
        "dicere → to say, to speak"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɪn.tər.dɪkt/"
  },
  {
    "word": "antinomian",
    "pos": "adjective",
    "definition": "Relating to the view that Christians are freed from observing any moral law by virtue of their faith and the gift of grace; by extension, opposed to established law or rules.",
    "example": "His antinomian theology disturbed the congregation: if grace superseded all law, what prevented moral license?",
    "roots": {
      "origin": "Greek 'anti-' (against) + 'nomos' (law)",
      "parts": [
        "anti- → against",
        "nomos → law"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌæn.tɪˈnoʊ.mi.ən/"
  },
  {
    "word": "peregrine",
    "pos": "adjective",
    "definition": "Coming from abroad; foreign; also, travelling or migratory — as in the peregrine falcon, famous for long-distance migration.",
    "example": "The scholar had a peregrine quality about him, as though he had arrived from elsewhere and would soon depart again.",
    "roots": {
      "origin": "Latin 'peregrinus' meaning foreign, from 'per' (through) + 'ager' (field, land)",
      "parts": [
        "per- → through",
        "ager → field, country, land"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpɛr.ɪ.ɡrɪn/"
  },
  {
    "word": "lucubration",
    "pos": "noun",
    "definition": "Study or writing done by lamplight; painstaking intellectual effort, often late at night; sometimes used ironically for pedantic or overly labored writing.",
    "example": "The footnotes showed evidence of long lucubration — every claim supported with sources that only someone awake at 3am would have found.",
    "roots": {
      "origin": "Latin 'lucubratio', from 'lucubrare' meaning to work by lamplight, from 'lux/lucis' (light)",
      "parts": [
        "lux → light",
        "lucubrare → to work by lamplight"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌlu.kjʊˈbreɪ.ʃən/"
  },
  {
    "word": "noctilucent",
    "pos": "adjective",
    "definition": "Luminous at night; describing clouds composed of ice crystals at very high altitude that glow after sunset when illuminated by the sun below the horizon.",
    "example": "Observers in northern latitudes sometimes see noctilucent clouds in midsummer — ghostly blue-white wisps far above the stratosphere.",
    "roots": {
      "origin": "Latin 'nox/noctis' (night) + 'lucens' (shining), from 'lucere' (to shine)",
      "parts": [
        "nox/noctis → night",
        "lucere → to shine, to give light"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌnɒk.tɪˈlu.sənt/"
  },
  {
    "word": "sidereal",
    "pos": "adjective",
    "definition": "Of or with respect to the distant stars rather than the sun; measured relative to the fixed star background.",
    "example": "The sidereal day — measured against a distant star — is four minutes shorter than the solar day we mark on clocks.",
    "roots": {
      "origin": "Latin 'sidereus', from 'sidus/sideris' meaning star or constellation",
      "parts": [
        "sidus → star, constellation"
      ]
    },
    "tier": 2,
    "pronunciation": "/saɪˈdɪər.i.əl/"
  },
  {
    "word": "parallax",
    "pos": "noun",
    "definition": "The apparent displacement or difference in the position of an object when viewed from different positions; used in astronomy to measure the distance of nearby stars.",
    "example": "Astronomers use stellar parallax — the slight shift in a star's apparent position as Earth orbits the sun — to calculate its distance.",
    "roots": {
      "origin": "Greek 'parallaxis', from 'parallassein' meaning to alternate, from 'para-' (beside) + 'allassein' (to change)",
      "parts": [
        "para- → beside",
        "allassein → to change, to alter"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpær.ə.læks/"
  },
  {
    "word": "apogee",
    "pos": "noun",
    "definition": "The point in an orbit at which an object is farthest from the Earth; figuratively, the highest point of a career or achievement.",
    "example": "The composer reached his creative apogee in the late symphonies, after which his output slowed but never diminished in quality.",
    "roots": {
      "origin": "Greek 'apogaion', from 'apo-' (away from) + 'ge' (earth)",
      "parts": [
        "apo- → away from",
        "ge → earth"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈæp.ə.dʒi/"
  },
  {
    "word": "syzygy",
    "pos": "noun",
    "definition": "The conjunction or opposition of two celestial bodies, especially when three bodies (e.g., Earth, Moon, Sun) are aligned; more broadly, a pair of connected or corresponding things.",
    "example": "Tides are strongest during syzygy, when the Earth, Moon, and Sun pull in alignment.",
    "roots": {
      "origin": "Greek 'syzygia', from 'syn-' (together) + 'zygon' (yoke)",
      "parts": [
        "syn- → together, with",
        "zygon → yoke, pair"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsɪz.ɪ.dʒi/"
  },
  {
    "word": "effulgent",
    "pos": "adjective",
    "definition": "Radiant; shining brilliantly; figuratively, intellectually or morally resplendent.",
    "example": "The effulgent morning light turned the dew-covered field into a field of scattered diamonds.",
    "roots": {
      "origin": "Latin 'effulgens', from 'effulgere' meaning to shine forth, from 'ex-' (out) + 'fulgere' (to shine)",
      "parts": [
        "ex- → out, forth",
        "fulgere → to flash, to shine"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˈfʌl.dʒənt/"
  },
  {
    "word": "scintillant",
    "pos": "adjective",
    "definition": "Emitting sparks; sparkling; brilliantly clever or witty.",
    "example": "Her scintillant conversation ranged from astrophysics to the semiotics of fashion without ever losing its clarity.",
    "roots": {
      "origin": "Latin 'scintillans', from 'scintillare' meaning to sparkle, from 'scintilla' (spark)",
      "parts": [
        "scintilla → spark",
        "-ans → present participle suffix"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsɪn.tɪ.lənt/"
  },
  {
    "word": "phosphorescence",
    "pos": "noun",
    "definition": "The emission of light without heat or combustion, especially the continued glow of a substance after exposure to excitation radiation has ceased.",
    "example": "The children stirred the warm ocean water and watched in awe as their hands trailed ribbons of phosphorescence.",
    "roots": {
      "origin": "Greek 'phosphoros' (light-bearing) + '-escence' (process of becoming); from 'phos' (light) + 'phoros' (bearing)",
      "parts": [
        "phos → light",
        "phoros → bearing, carrying",
        "-escence → process, gradual emergence"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌfɒs.fəˈrɛs.əns/"
  },
  {
    "word": "fuliginous",
    "pos": "adjective",
    "definition": "Sooty; having the color or consistency of soot; dark and gloomy.",
    "example": "The old industrial city still wore a fuliginous pallor from a century of coal burning that no amount of renovation could entirely erase.",
    "roots": {
      "origin": "Latin 'fuliginosus', from 'fuligo' meaning soot",
      "parts": [
        "fuligo → soot, sooty matter",
        "-osus → full of"
      ]
    },
    "tier": 2,
    "pronunciation": "/fjuˈlɪdʒ.ɪ.nəs/"
  },
  {
    "word": "pyrrhic",
    "pos": "adjective",
    "definition": "Of a victory, won at too great a cost to be of practical use; derived from the costly victories of Pyrrhus of Epirus.",
    "example": "Winning the lawsuit was a pyrrhic victory — the legal fees exceeded the damages awarded.",
    "roots": {
      "origin": "Named after Pyrrhus, King of Epirus (319–272 BC), whose victories against Rome cost him devastating losses",
      "parts": []
    },
    "tier": 2,
    "pronunciation": "/ˈpɪr.ɪk/"
  },
  {
    "word": "Sisyphean",
    "pos": "adjective",
    "definition": "Referring to a task that is endless, laborious, and ultimately futile, like the punishment of Sisyphus in Greek mythology.",
    "example": "Maintaining perfect inbox-zero felt Sisyphean — for every message she answered, three more arrived.",
    "roots": {
      "origin": "From Sisyphus, the king in Greek mythology condemned to roll a boulder uphill for eternity",
      "parts": []
    },
    "tier": 2,
    "pronunciation": "/ˌsɪs.ɪˈfi.ən/"
  },
  {
    "word": "Promethean",
    "pos": "adjective",
    "definition": "Boldly creative, defiantly original, or presumptuously transgressive in the manner of Prometheus, who stole fire from the gods.",
    "example": "The novel's Promethean ambition — to retell all of human history in one book — was admirable even when it fell short.",
    "roots": {
      "origin": "From Prometheus, the Titan in Greek mythology who gave fire to humanity and was punished eternally by Zeus",
      "parts": []
    },
    "tier": 2,
    "pronunciation": "/prəˈmi.θi.ən/"
  },
  {
    "word": "procrustean",
    "pos": "adjective",
    "definition": "Enforcing conformity to a standard without regard to individual variation; ruthlessly forcing things into a predetermined framework.",
    "example": "The curriculum's procrustean structure left no room for teachers to respond to the actual interests and abilities of their students.",
    "roots": {
      "origin": "From Procrustes, the giant in Greek mythology who made travelers fit his bed by stretching or cutting them",
      "parts": []
    },
    "tier": 2,
    "pronunciation": "/proʊˈkrʌs.ti.ən/"
  },
  {
    "word": "effluence",
    "pos": "noun",
    "definition": "A flowing out; an emanation, especially of light, scent, or spiritual quality.",
    "example": "The shrine seemed to radiate an effluence that pilgrims described variously as warmth, light, or inexplicable peace.",
    "roots": {
      "origin": "Latin 'effluere', from 'ex-' (out) + 'fluere' (to flow)",
      "parts": [
        "ex- → out",
        "fluere → to flow"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈɛf.lu.əns/"
  },
  {
    "word": "talismanic",
    "pos": "adjective",
    "definition": "Having the qualities of a talisman; believed to have magical protective or luck-bringing properties.",
    "example": "The old jersey had a talismanic significance for the team — they'd won the championship wearing it and refused to change.",
    "roots": {
      "origin": "From 'talisman', via French and Spanish, from Arabic 'tilasm', from Greek 'telesma' meaning completion or religious rite",
      "parts": [
        "telesma → consecrated object, completion"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌtæl.ɪzˈmæn.ɪk/"
  },
  {
    "word": "thaumaturgist",
    "pos": "noun",
    "definition": "A person who works wonders or miracles; a magician or wonder-worker.",
    "example": "Medieval accounts treated the saint as a thaumaturgist, crediting him with dozens of miraculous healings and impossible feats.",
    "roots": {
      "origin": "Greek 'thaumatourgos', from 'thauma' (wonder, miracle) + 'ergon' (work)",
      "parts": [
        "thauma → wonder, marvel",
        "ergon → work, deed"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈθɔ.mə.tɜr.dʒɪst/"
  },
  {
    "word": "epicedium",
    "pos": "noun",
    "definition": "A funeral song or ode performed at a burial; a dirge.",
    "example": "The choir performed the composer's epicedium at the graveside, its modal harmonies sounding ancient and inevitable.",
    "roots": {
      "origin": "Latin 'epicedium', from Greek 'epikedeion', from 'epi-' (upon, at) + 'kedos' (care, grief, funeral rites)",
      "parts": [
        "epi- → at, upon",
        "kedos → grief, funeral rites"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɛp.ɪˈsi.di.əm/"
  },
  {
    "word": "parabasis",
    "pos": "noun",
    "definition": "In ancient Greek comedy, a section in which the chorus breaks from the narrative to address the audience directly on behalf of the playwright.",
    "example": "Aristophanes used the parabasis as his sharpest weapon, turning from plot to pointed attacks on Athenian politicians.",
    "roots": {
      "origin": "Greek 'parabasis', from 'parabainein' meaning to go beside or step forward",
      "parts": [
        "para- → beside, forward",
        "bainein → to go, to step"
      ]
    },
    "tier": 2,
    "pronunciation": "/pəˈræb.ə.sɪs/"
  },
  {
    "word": "mimesis",
    "pos": "noun",
    "definition": "The imitation or representation of the real world in art; in biology, the resemblance of an organism to another or to its environment for protection or advantage.",
    "example": "Plato distrusted mimesis, fearing that poetry's imitation of the world produced only a copy of a copy, twice removed from truth.",
    "roots": {
      "origin": "Greek 'mimesis', from 'mimeisthai' meaning to imitate, from 'mimos' (actor, mime)",
      "parts": [
        "mimos → mime, imitator",
        "-esis → process or action"
      ]
    },
    "tier": 2,
    "pronunciation": "/mɪˈmi.sɪs/"
  },
  {
    "word": "patina",
    "pos": "noun",
    "definition": "A green or brown film on a bronze or similar surface produced by oxidation over time; a sheen or polish acquired through long use or association.",
    "example": "The garden furniture had acquired a beautiful patina over decades of summers that no amount of sanding could replicate.",
    "roots": {
      "origin": "Latin 'patina' meaning shallow dish; the sense of surface film came from the tarnish seen on old bronze dishes",
      "parts": [
        "patina → shallow dish, pan"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈpæt.ɪ.nə/"
  },
  {
    "word": "provenance",
    "pos": "noun",
    "definition": "The place of origin or earliest known history of something; in art, the chronological record of ownership and custody of a work.",
    "example": "The gallery could not establish the painting's provenance before 1940, which made its Nazi-era history deeply suspect.",
    "roots": {
      "origin": "French 'provenance', from 'provenir' meaning to come forth, from Latin 'provenire'",
      "parts": [
        "pro- → forth",
        "venire → to come"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈprɒv.ə.nəns/"
  },
  {
    "word": "palimpsestic",
    "pos": "adjective",
    "definition": "Of or resembling a palimpsest — something altered, reused, or having new meaning overlaid on what came before while traces of the earlier version remain.",
    "example": "The city was palimpsestic: Roman foundations beneath medieval walls, behind baroque facades, topped with modernist glass.",
    "roots": {
      "origin": "From 'palimpsest', Greek 'palimpsestos', from 'palin' (again) + 'psestos' (scraped smooth)",
      "parts": [
        "palin → again",
        "psestos → scraped smooth, rubbed clean"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌpæl.ɪmpˈsɛs.tɪk/"
  },
  {
    "word": "stele",
    "pos": "noun",
    "definition": "An upright stone slab or pillar bearing an inscription or carving, used as a monument in ancient Greece and other cultures.",
    "example": "The archaeologists unearthed a stele from the third millennium BCE bearing a cuneiform account of a forgotten battle.",
    "roots": {
      "origin": "Greek 'stele' meaning standing stone, pillar",
      "parts": [
        "stele → upright stone, pillar"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈsti.li/"
  },
  {
    "word": "epigraphy",
    "pos": "noun",
    "definition": "The study and interpretation of ancient inscriptions on stone, metal, clay, or other durable surfaces.",
    "example": "Through epigraphy, historians reconstructed the hierarchy of the temple from the carved dedications left on its walls.",
    "roots": {
      "origin": "Greek 'epi' (upon) + 'graphein' (to write) + '-y' (study of)",
      "parts": [
        "epi- → upon",
        "graphein → to write",
        "-y → study or practice"
      ]
    },
    "tier": 2,
    "pronunciation": "/ɪˈpɪɡ.rə.fi/"
  },
  {
    "word": "apocrypha",
    "pos": "noun",
    "definition": "Texts of uncertain or dubious authorship or authority; specifically, books of the Bible accepted by some Christian traditions but not part of the Hebrew canon.",
    "example": "The Gospel of Thomas remained in the apocrypha — not scripture but too significant and too early to be wholly ignored.",
    "roots": {
      "origin": "Greek 'apokryphos' meaning hidden away, from 'apo-' (away) + 'kryptein' (to hide)",
      "parts": [
        "apo- → away",
        "kryptein → to hide"
      ]
    },
    "tier": 2,
    "pronunciation": "/əˈpɒk.rɪ.fə/"
  },
  {
    "word": "facsimile",
    "pos": "noun",
    "definition": "An exact copy or reproduction of a document, book, or other material, especially one made by photographic or digital means.",
    "example": "The facsimile edition of the Gutenberg Bible allowed scholars worldwide to study it without risking the fragile original.",
    "roots": {
      "origin": "Latin 'fac simile' meaning make similar, from 'facere' (to make) + 'simile' (similar, like)",
      "parts": [
        "facere → to make",
        "similis → like, similar"
      ]
    },
    "tier": 2,
    "pronunciation": "/fækˈsɪm.ɪ.li/"
  },
  {
    "word": "recto",
    "pos": "noun",
    "definition": "The right-hand page of an open book, or the front of a loose document; always given an odd page number.",
    "example": "The illumination appeared on the recto; the verso was left plain to preserve the painting from contact with facing text.",
    "roots": {
      "origin": "Latin 'recto' meaning on the right side, ablative of 'rectus' (right, straight)",
      "parts": [
        "rectus → right, straight"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈrɛk.toʊ/"
  },
  {
    "word": "interlocutor",
    "pos": "noun",
    "definition": "A person who takes part in a dialogue or conversation; the person one is speaking with.",
    "example": "She had the rare gift of making every interlocutor feel as though they were the most interesting person she had ever met.",
    "roots": {
      "origin": "Latin 'interlocutor', from 'interloqui' meaning to speak between, from 'inter-' (between) + 'loqui' (to speak)",
      "parts": [
        "inter- → between",
        "loqui → to speak"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌɪn.tərˈlɒk.jʊ.tər/"
  },
  {
    "word": "disquisition",
    "pos": "noun",
    "definition": "A long or elaborate essay or discussion on a particular subject.",
    "example": "What began as a brief explanation of his views on taxation became a two-hour disquisition on the history of fiscal philosophy.",
    "roots": {
      "origin": "Latin 'disquisitio', from 'disquirere' meaning to investigate thoroughly, from 'dis-' (apart) + 'quaerere' (to seek)",
      "parts": [
        "dis- → apart, in different directions",
        "quaerere → to seek, to ask"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˌdɪs.kwɪˈzɪʃ.ən/"
  },
  {
    "word": "festschrift",
    "pos": "noun",
    "definition": "A volume of academic writings by colleagues and former students presented to a scholar as a mark of honor and respect, typically on their retirement.",
    "example": "The festschrift compiled in her honor ran to eight hundred pages and contributions from scholars on five continents.",
    "roots": {
      "origin": "German 'Festschrift', from 'Fest' (celebration, festival) + 'Schrift' (writing)",
      "parts": [
        "Fest → celebration",
        "Schrift → writing, script"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈfɛst.ʃrɪft/"
  },
  {
    "word": "Zeitgeist",
    "pos": "noun",
    "definition": "The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time.",
    "example": "The novel so perfectly captured the Zeitgeist that reading it decades later felt like stepping through a time capsule.",
    "roots": {
      "origin": "German 'Zeitgeist', from 'Zeit' (time) + 'Geist' (spirit)",
      "parts": [
        "Zeit → time",
        "Geist → spirit, mind"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈzaɪt.ɡaɪst/"
  },
  {
    "word": "fernweh",
    "pos": "noun",
    "definition": "A longing for distant places; the ache to travel far away — the opposite of homesickness.",
    "example": "Every spring the fernweh became unbearable, and she would spend evenings studying maps of countries she had no plan to visit.",
    "roots": {
      "origin": "German 'Fernweh', from 'fern' (far, distant) + 'Weh' (pain, ache)",
      "parts": [
        "fern → far, distant",
        "Weh → pain, ache, woe"
      ]
    },
    "tier": 2,
    "pronunciation": "/ˈfɛrn.veɪ/"
  },
  {
    "word": "vellichor",
    "pos": "noun",
    "definition": "The strange wistfulness of used bookshops, as if each volume contains a phantom of every reader who has ever opened it.",
    "example": "He lost an hour to vellichor, running his fingers along rows of cracked spines.",
    "roots": {
      "origin": "Coined by John Koenig in 'The Dictionary of Obscure Sorrows.' Blends 'vellum' (parchment) with a melancholic suffix evoking old things."
    },
    "tier": 3,
    "pronunciation": "/ˈvɛl.ɪ.kɔːr/"
  },
  {
    "word": "ophryons",
    "pos": "noun",
    "definition": "The space between the eyebrows, just above the root of the nose.",
    "example": "The ancient portrait was notable for the single painted line across the ophryons where the brows once met.",
    "roots": {
      "origin": "Greek 'ophrys' (eyebrow). Used in anatomy to denote the midpoint between the brow ridges.",
      "parts": [
        "ophrys → eyebrow"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɒf.ri.ɒnz/"
  },
  {
    "word": "philtrum",
    "pos": "noun",
    "definition": "The vertical groove running from the base of the nose to the center of the upper lip.",
    "example": "The sculptor gave the marble face an unusually deep philtrum, lending it an air of classical beauty.",
    "roots": {
      "origin": "Greek 'philtron' (love charm), from 'philein' (to love). Ancient Greeks considered this groove a particularly erogenous spot.",
      "parts": [
        "philein → to love",
        "philtron → love charm"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈfɪl.trəm/"
  },
  {
    "word": "glabella",
    "pos": "noun",
    "definition": "The smooth, flat area of bone between the eyebrows, just above the nose.",
    "example": "The headache centered on her glabella, that tight point between her furrowed brows.",
    "roots": {
      "origin": "Latin 'glabellus' (smooth, hairless), diminutive of 'glaber' (bald, smooth).",
      "parts": [
        "glaber → smooth, hairless"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɡləˈbɛl.ə/"
  },
  {
    "word": "hallux",
    "pos": "noun",
    "definition": "The big toe; in tetrapods more generally, the innermost digit of the hind foot.",
    "example": "He stubbed his hallux on the doorframe so hard he saw stars.",
    "roots": {
      "origin": "Latin 'hallux' or 'allex' (the big toe), possibly related to Greek 'halos' (threshing floor), referencing the broad, flat shape.",
      "parts": [
        "hallux → big toe"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈhæl.əks/"
  },
  {
    "word": "natiform",
    "pos": "adjective",
    "definition": "Resembling or shaped like buttocks.",
    "example": "The geologist pointed to the natiform boulders with a barely suppressed grin.",
    "roots": {
      "origin": "Latin 'nates' (buttocks) + 'forma' (shape, form).",
      "parts": [
        "nates → buttocks",
        "forma → shape"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈneɪ.tɪ.fɔːrm/"
  },
  {
    "word": "gnathion",
    "pos": "noun",
    "definition": "The lowest point of the chin; the most inferior point of the mandibular symphysis.",
    "example": "He rested his gnathion on his fist, staring out the rain-blurred window.",
    "roots": {
      "origin": "Greek 'gnathos' (jaw). Used in cephalometry and anthropometry.",
      "parts": [
        "gnathos → jaw"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈneɪ.θi.ɒn/"
  },
  {
    "word": "tines",
    "pos": "noun",
    "definition": "The individual prongs of a fork, comb, or antler.",
    "example": "She straightened a bent tine on her grandmother's silver fork before setting the table.",
    "roots": {
      "origin": "Old English 'tind' (prong, spike), related to Old Norse 'tindr' (spike, point of a fork).",
      "parts": [
        "tind → prong, spike"
      ]
    },
    "tier": 3,
    "pronunciation": "/taɪnz/"
  },
  {
    "word": "hilt",
    "pos": "noun",
    "definition": "The handle of a sword, dagger, or knife, including the guard and grip.",
    "example": "She wrapped her hand around the hilt and found the sword lighter than she had expected.",
    "roots": {
      "origin": "Old English 'hilt' (handle of a sword or dagger), from Proto-Germanic '*heltijaz,' related to Old Norse 'hjalt' (hilt).",
      "parts": [
        "hilt → handle, grip of a weapon"
      ]
    },
    "tier": 3,
    "pronunciation": "/hɪlt/"
  },
  {
    "word": "peen",
    "pos": "noun",
    "definition": "The head of a hammer opposite the striking face, often rounded or wedge-shaped.",
    "example": "He flipped the hammer and used the peen to work the metal into a finer edge.",
    "roots": {
      "origin": "Possibly from Scandinavian — Norwegian 'pæna' (to beat thin). Related to Old French 'pane' (head of a hammer)."
    },
    "tier": 3,
    "pronunciation": "/piːn/"
  },
  {
    "word": "tang",
    "pos": "noun",
    "definition": "The projecting prong or spike on a blade or tool that extends into the handle to secure it.",
    "example": "The old chef's knife had a full tang running the entire length of the wooden handle.",
    "roots": {
      "origin": "Old Norse 'tangi' (point, spike), related to 'tange' (point of land).",
      "parts": [
        "tangi → point, spike"
      ]
    },
    "tier": 3,
    "pronunciation": "/tæŋ/"
  },
  {
    "word": "gimbal",
    "pos": "noun",
    "definition": "A pivoted support system that allows an object to rotate freely on a single axis, keeping instruments level regardless of the motion of their support.",
    "example": "The ship's compass was mounted in a gimbal so it remained steady despite the rolling sea.",
    "roots": {
      "origin": "Variant of 'gemel' (twin, double), from Old French 'gemeaux,' from Latin 'gemellus' (twin).",
      "parts": [
        "gemellus → twin"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɡɪm.bəl/"
  },
  {
    "word": "bight",
    "pos": "noun",
    "definition": "A curve or recess in a coastline, river, or other geographical feature; also, a loop in a rope.",
    "example": "The fishing boats sheltered in the bight, protected from the open ocean's swell.",
    "roots": {
      "origin": "Old English 'byht' (bend, corner), from 'bugan' (to bow, bend).",
      "parts": [
        "bugan → to bend, bow"
      ]
    },
    "tier": 3,
    "pronunciation": "/baɪt/"
  },
  {
    "word": "ogee",
    "pos": "noun",
    "definition": "An S-shaped molding or curve, used extensively in Gothic architecture and decorative arts.",
    "example": "The cathedral's window frames were trimmed with elegant ogee arches that drew the eye upward.",
    "roots": {
      "origin": "From 'ogive,' Middle French 'augive' or 'ogive' (a diagonal rib of a vault), of uncertain origin; possibly from Old French 'auge' (trough)."
    },
    "tier": 3,
    "pronunciation": "/ˈoʊ.dʒiː/"
  },
  {
    "word": "lunula",
    "pos": "noun",
    "definition": "The pale, crescent-shaped area at the base of a fingernail or toenail.",
    "example": "She noticed, idly, that the lunula on her thumbnail was more prominent than on the others.",
    "roots": {
      "origin": "Latin 'lunula' (little moon), diminutive of 'luna' (moon).",
      "parts": [
        "luna → moon",
        "-ula → diminutive suffix"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈluː.njʊ.lə/"
  },
  {
    "word": "purlicue",
    "pos": "noun",
    "definition": "The space between the extended thumb and index finger; sometimes also the curl at the end of a flourish in handwriting.",
    "example": "She measured the ribbon against her purlicue to get a rough estimate of the length.",
    "roots": {
      "origin": "Scottish and dialectal English; possibly from 'purle' (to ripple, curl) + 'cue' (a queue or tail)."
    },
    "tier": 3,
    "pronunciation": "/ˈpɜːr.lɪ.kjuː/"
  },
  {
    "word": "canthus",
    "pos": "noun",
    "definition": "Either of the two corners of the eye where the upper and lower eyelids meet.",
    "example": "A tear gathered at the inner canthus and slowly traced down her cheek.",
    "roots": {
      "origin": "Latin 'canthus,' from Greek 'kanthos' (corner of the eye).",
      "parts": [
        "kanthos → corner of the eye"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkæn.θəs/"
  },
  {
    "word": "tragus",
    "pos": "noun",
    "definition": "The small, pointed eminence of cartilage at the front of the outer ear, just in front of the ear canal.",
    "example": "He pressed his tragus against his ear to muffle the noise from the street.",
    "roots": {
      "origin": "Latin 'tragus,' from Greek 'tragos' (goat) — named for the tuft of hair that sometimes grows on it, resembling a goat's beard.",
      "parts": [
        "tragos → goat"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtreɪ.ɡəs/"
  },
  {
    "word": "columella",
    "pos": "noun",
    "definition": "The fleshy lower end of the nasal septum that separates the two nostrils.",
    "example": "The piercer carefully marked the columella before placing the septum jewelry.",
    "roots": {
      "origin": "Latin 'columella' (small column), diminutive of 'columna' (column).",
      "parts": [
        "columna → column",
        "-ella → diminutive suffix"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌkɒl.jʊˈmɛl.ə/"
  },
  {
    "word": "kerf",
    "pos": "noun",
    "definition": "The slit or notch made by a saw or other cutting tool as it passes through material.",
    "example": "He measured the kerf left by the blade to account for it in his woodworking calculations.",
    "roots": {
      "origin": "Old English 'cyrf' (a cutting, stroke), from 'ceorfan' (to cut).",
      "parts": [
        "ceorfan → to cut"
      ]
    },
    "tier": 3,
    "pronunciation": "/kɜːrf/"
  },
  {
    "word": "selvedge",
    "pos": "noun",
    "definition": "The tightly woven edge of a piece of fabric that prevents it from unraveling.",
    "example": "She cut just inside the selvedge, keeping the patterned cloth from fraying.",
    "roots": {
      "origin": "From 'self' + 'edge' — the fabric's own finished edge. A calque of Flemish 'selfegge' or Dutch 'zelfkant'.",
      "parts": [
        "self → own",
        "edge → border"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsɛl.vɪdʒ/"
  },
  {
    "word": "grommet",
    "pos": "noun",
    "definition": "A small metal or plastic eyelet set in a hole in a thin material to strengthen or protect it.",
    "example": "The canvas sail had rows of brass grommets along its edge for threading the rigging line.",
    "roots": {
      "origin": "From Old French 'gromette' (curb of a bridle), from 'gourmer' (to curb). The nautical sense expanded to mean any reinforcing ring."
    },
    "tier": 3,
    "pronunciation": "/ˈɡrɒm.ɪt/"
  },
  {
    "word": "pawl",
    "pos": "noun",
    "definition": "A pivoting catch that engages with the teeth of a ratchet wheel to allow motion in one direction only.",
    "example": "The pawl clicked satisfyingly as he wound the fishing reel, preventing it from slipping back.",
    "roots": {
      "origin": "Possibly from Dutch 'pal' (bolt, fastener), or from Low German. Related to Latin 'palus' (stake)."
    },
    "tier": 3,
    "pronunciation": "/pɔːl/"
  },
  {
    "word": "interrobang",
    "pos": "noun",
    "definition": "A punctuation mark (‽) that combines a question mark and an exclamation point, used to express excited disbelief.",
    "example": "He wanted to end his message with an interrobang — 'You ate the whole thing‽' — but wasn't sure his phone could render it.",
    "roots": {
      "origin": "Coined by American typographer Martin Speckter in 1962. 'Interrogatio' (Latin for question) + 'bang' (printer's slang for exclamation mark).",
      "parts": [
        "interrogatio → question",
        "bang → exclamation mark (printers' slang)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪnˈtɛr.ə.bæŋ/"
  },
  {
    "word": "diastema",
    "pos": "noun",
    "definition": "A gap or space between two teeth, especially the upper front teeth.",
    "example": "Her diastema gave her smile a distinctive character that she had long since stopped feeling self-conscious about.",
    "roots": {
      "origin": "Greek 'diastema' (interval, space), from 'diastanai' (to stand apart).",
      "parts": [
        "dia → through, apart",
        "histanai → to stand"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌdaɪ.əˈstiː.mə/"
  },
  {
    "word": "collywobbles",
    "pos": "noun",
    "definition": "Stomach pain or queasiness caused by anxiety or nervousness; butterflies in the stomach.",
    "example": "Even after years of performing, she still got the collywobbles before stepping onto the stage.",
    "roots": {
      "origin": "19th-century British slang, probably a fanciful alteration of 'colic' + 'wobble,' influenced by 'wobble' (to feel unsteady).",
      "parts": [
        "colic → stomach pain",
        "wobble → to shake unsteadily"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkɒl.i.wɒb.əlz/"
  },
  {
    "word": "borborygmus",
    "pos": "noun",
    "definition": "The rumbling or gurgling noise made by the movement of fluid and gas in the intestines.",
    "example": "The lecture hall was so quiet that his borborygmus seemed to echo off the walls.",
    "roots": {
      "origin": "Greek 'borborygmos,' from 'borboryzein' (to rumble) — an onomatopoeic formation.",
      "parts": [
        "borboryzein → to rumble (onomatopoeic)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌbɔːr.bəˈrɪɡ.məs/"
  },
  {
    "word": "aphelion",
    "pos": "noun",
    "definition": "The point in a planet's orbit at which it is farthest from the sun.",
    "example": "Earth reaches aphelion in early July, a fact counterintuitively timed with the Northern Hemisphere's summer.",
    "roots": {
      "origin": "Greek 'apo' (away from) + 'helios' (sun).",
      "parts": [
        "apo → away from",
        "helios → sun"
      ]
    },
    "tier": 3,
    "pronunciation": "/æˈfiː.li.ən/"
  },
  {
    "word": "libration",
    "pos": "noun",
    "definition": "The apparent oscillation of the Moon that allows observers on Earth to see slightly more than half its surface over time.",
    "example": "Through careful observation of libration, early astronomers mapped almost 59 percent of the lunar surface.",
    "roots": {
      "origin": "Latin 'libratio' (a balancing, a swinging), from 'librare' (to balance, weigh).",
      "parts": [
        "libra → balance, scales",
        "librare → to balance"
      ]
    },
    "tier": 3,
    "pronunciation": "/laɪˈbreɪ.ʃən/"
  },
  {
    "word": "dysania",
    "pos": "noun",
    "definition": "The state of having a difficult time getting out of bed in the morning, beyond mere tiredness.",
    "example": "Every Monday brought on a fresh wave of dysania; she lay motionless staring at the alarm.",
    "roots": {
      "origin": "Greek 'dys' (bad, difficult) + 'ana' (up) — a coined medical-sounding term describing the difficulty of rising.",
      "parts": [
        "dys → bad, difficult",
        "ana → up, upward"
      ]
    },
    "tier": 3,
    "pronunciation": "/dɪˈzeɪ.ni.ə/"
  },
  {
    "word": "clinophilia",
    "pos": "noun",
    "definition": "An excessive love of, or desire to stay in, bed.",
    "example": "His clinophilia was legendary; on weekends he regarded leaving the mattress as a moral failure.",
    "roots": {
      "origin": "Greek 'kline' (bed, couch) + 'philia' (love, attraction).",
      "parts": [
        "kline → bed, couch",
        "philia → love"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌklaɪ.nəˈfɪl.i.ə/"
  },
  {
    "word": "somniloquy",
    "pos": "noun",
    "definition": "The act of talking in one's sleep.",
    "example": "Her roommate recorded her somniloquy; the results were three minutes of anxious monologue about spreadsheets.",
    "roots": {
      "origin": "Latin 'somnus' (sleep) + 'loqui' (to speak).",
      "parts": [
        "somnus → sleep",
        "loqui → to speak"
      ]
    },
    "tier": 3,
    "pronunciation": "/sɒmˈnɪl.ə.kwi/"
  },
  {
    "word": "hypnagogia",
    "pos": "noun",
    "definition": "The transitional state between wakefulness and sleep, often accompanied by hallucinations, vivid imagery, or the sensation of falling.",
    "example": "In hypnagogia, she heard her name called in voices she couldn't place, and saw geometric patterns bloom and dissolve.",
    "roots": {
      "origin": "Greek 'hypnos' (sleep) + 'agogos' (leading, guiding) — the state that leads into sleep.",
      "parts": [
        "hypnos → sleep",
        "agogos → leading"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌhɪp.nəˈɡoʊ.dʒi.ə/"
  },
  {
    "word": "soporific",
    "pos": "adjective",
    "definition": "Tending to induce sleep; drowsiness-producing.",
    "example": "The professor's soporific lecture voice had half the auditorium nodding within twenty minutes.",
    "roots": {
      "origin": "Latin 'sopor' (deep sleep) + 'facere' (to make).",
      "parts": [
        "sopor → deep sleep",
        "facere → to make"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌsoʊ.pəˈrɪf.ɪk/"
  },
  {
    "word": "oscitancy",
    "pos": "noun",
    "definition": "The state of being drowsy and inattentive; also the act of yawning.",
    "example": "The afternoon meeting was plagued by oscitancy; half the team was yawning into their notebooks.",
    "roots": {
      "origin": "Latin 'oscitantia,' from 'oscitare' (to yawn, gape), from 'os' (mouth) + 'citare' (to move, agitate).",
      "parts": [
        "os → mouth",
        "citare → to move, agitate"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɒs.ɪ.tən.si/"
  },
  {
    "word": "pandiculation",
    "pos": "noun",
    "definition": "The act of stretching and yawning simultaneously, especially upon waking.",
    "example": "She rose with a full-body pandiculation, arms wide, eyes squeezed shut, a sound escaping her that surprised even herself.",
    "roots": {
      "origin": "Latin 'pandiculari' (to stretch oneself), from 'pandere' (to spread, extend).",
      "parts": [
        "pandere → to spread, extend"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌpæn.dɪk.jʊˈleɪ.ʃən/"
  },
  {
    "word": "errhine",
    "pos": "adjective",
    "definition": "Causing or promoting nasal discharge; of a substance that, when inhaled, induces sneezing.",
    "example": "The old apothecary recommended an errhine powder of ground pepper to clear the sinuses.",
    "roots": {
      "origin": "Greek 'en' (in) + 'rhis, rhinos' (nose) — that which works within the nose.",
      "parts": [
        "en → in",
        "rhis → nose"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɛr.aɪn/"
  },
  {
    "word": "sternutate",
    "pos": "verb",
    "definition": "To sneeze.",
    "example": "He sternutated so violently during the silent exam that several people jumped in their seats.",
    "roots": {
      "origin": "Latin 'sternutare' (to sneeze repeatedly), frequentative of 'sternuere' (to sneeze).",
      "parts": [
        "sternuere → to sneeze"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈstɜːr.njʊ.teɪt/"
  },
  {
    "word": "singultus",
    "pos": "noun",
    "definition": "The medical term for a hiccup; an involuntary spasmodic contraction of the diaphragm.",
    "example": "The physicians charted it solemnly as 'persistent singultus,' which the patient found absurdly dignified.",
    "roots": {
      "origin": "Latin 'singultus' (a sob, hiccup), related to 'singultire' (to hiccup, sob).",
      "parts": [
        "singultire → to hiccup, to sob"
      ]
    },
    "tier": 3,
    "pronunciation": "/sɪŋˈɡʌl.təs/"
  },
  {
    "word": "eructation",
    "pos": "noun",
    "definition": "The act of belching; the release of gas from the stomach through the mouth.",
    "example": "He attributed the volcanic eructation to the carbonated water rather than to his own excess.",
    "roots": {
      "origin": "Latin 'eructatio,' from 'eructare' (to belch), from 'e-' (out) + 'ructare' (to belch).",
      "parts": [
        "e → out",
        "ructare → to belch"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɪr.ʌkˈteɪ.ʃən/"
  },
  {
    "word": "borning",
    "pos": "noun",
    "definition": "Archaic term for a birthing room; the room in a house set aside for childbirth and infant care.",
    "example": "The oldest corner of the farmhouse had served as the borning room for four generations.",
    "roots": {
      "origin": "From 'born' (Middle English 'boren'), past participle of 'bear' (to give birth). New England dialectal usage, 17th–19th century."
    },
    "tier": 3,
    "pronunciation": "/ˈbɔːr.nɪŋ/"
  },
  {
    "word": "gelid",
    "pos": "adjective",
    "definition": "Icy cold; extremely cold.",
    "example": "The gelid water of the mountain lake took her breath away the moment she stepped in.",
    "roots": {
      "origin": "Latin 'gelidus' (icy, frosty), from 'gelu' (frost, ice).",
      "parts": [
        "gelu → frost, ice"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdʒɛl.ɪd/"
  },
  {
    "word": "canicular",
    "pos": "adjective",
    "definition": "Relating to the Dog Star (Sirius) or the period of hottest summer weather (the 'dog days').",
    "example": "August's canicular heat bent the air above the asphalt into visible waves.",
    "roots": {
      "origin": "Latin 'canicularis,' from 'canicula' (little dog, Dog Star), diminutive of 'canis' (dog). The 'dog days' were named for Sirius's rise.",
      "parts": [
        "canis → dog",
        "-cula → diminutive suffix"
      ]
    },
    "tier": 3,
    "pronunciation": "/kəˈnɪk.jʊ.lər/"
  },
  {
    "word": "pluviophile",
    "pos": "noun",
    "definition": "A person who loves rain; someone who finds peace and happiness in rainy weather.",
    "example": "The confirmed pluviophile had moved to the Pacific Northwest with great intention and zero regret.",
    "roots": {
      "origin": "Latin 'pluvia' (rain) + Greek 'philos' (loving, fond of).",
      "parts": [
        "pluvia → rain",
        "philos → loving"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpluː.vi.ə.faɪl/"
  },
  {
    "word": "umbraphile",
    "pos": "noun",
    "definition": "A person who is passionate about solar eclipses and travels to witness them in totality.",
    "example": "The umbraphile had crossed three continents and spent her savings chasing the path of totality.",
    "roots": {
      "origin": "Latin 'umbra' (shadow, shade) + Greek 'philos' (loving).",
      "parts": [
        "umbra → shadow",
        "philos → loving"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈʌm.brə.faɪl/"
  },
  {
    "word": "dendrophile",
    "pos": "noun",
    "definition": "A person who loves trees and forests.",
    "example": "Every walk with him turned into a guided tour; he was an incorrigible dendrophile who knew each tree by name.",
    "roots": {
      "origin": "Greek 'dendron' (tree) + 'philos' (loving).",
      "parts": [
        "dendron → tree",
        "philos → loving"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdɛn.drə.faɪl/"
  },
  {
    "word": "sitophobia",
    "pos": "noun",
    "definition": "An abnormal aversion to food or to eating.",
    "example": "The trauma had left her with a sitophobia so severe she needed months of careful therapeutic work to recover.",
    "roots": {
      "origin": "Greek 'sitos' (food, grain) + 'phobia' (fear).",
      "parts": [
        "sitos → food, grain",
        "phobia → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌsaɪ.təˈfoʊ.bi.ə/"
  },
  {
    "word": "pogonophile",
    "pos": "noun",
    "definition": "A person who loves or is strongly attracted to beards.",
    "example": "She admitted, without apology, to being a committed pogonophile.",
    "roots": {
      "origin": "Greek 'pogon' (beard) + 'philos' (loving).",
      "parts": [
        "pogon → beard",
        "philos → loving"
      ]
    },
    "tier": 3,
    "pronunciation": "/pəˈɡɒn.ə.faɪl/"
  },
  {
    "word": "pogonotrophy",
    "pos": "noun",
    "definition": "The cultivation or growing of a beard.",
    "example": "He embarked on a month of pogonotrophy, curious to see what sort of beard nature had assigned him.",
    "roots": {
      "origin": "Greek 'pogon' (beard) + 'trophē' (nourishment, cultivation).",
      "parts": [
        "pogon → beard",
        "trophē → nourishment, cultivation"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌpɒɡ.əˈnɒt.rə.fi/"
  },
  {
    "word": "alopecia",
    "pos": "noun",
    "definition": "Partial or complete absence of hair from areas of the body where it normally grows; pathological baldness.",
    "example": "Her alopecia had claimed her eyebrows first, so she had become an expert at drawing them back on.",
    "roots": {
      "origin": "Latin 'alopecia,' from Greek 'alopekia' (mange in foxes, baldness), from 'alopex' (fox) — foxes were thought to develop mange that caused hair loss.",
      "parts": [
        "alopex → fox"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌæl.əˈpiː.ʃə/"
  },
  {
    "word": "lanate",
    "pos": "adjective",
    "definition": "Covered with or having the appearance of wool; woolly.",
    "example": "The lanate leaves of the mullein plant felt like felt between her fingers.",
    "roots": {
      "origin": "Latin 'lanatus' (woolly), from 'lana' (wool).",
      "parts": [
        "lana → wool"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈleɪ.neɪt/"
  },
  {
    "word": "velutinous",
    "pos": "adjective",
    "definition": "Having a surface like velvet; covered with soft, dense, velvety hairs.",
    "example": "The velutinous petals of the flower seemed almost artificial in their softness.",
    "roots": {
      "origin": "From 'velvet,' from Medieval Latin 'vellutum,' from Italian 'velluto,' from Latin 'villus' (shaggy hair).",
      "parts": [
        "villus → shaggy hair"
      ]
    },
    "tier": 3,
    "pronunciation": "/vəˈluː.tɪ.nəs/"
  },
  {
    "word": "tomentose",
    "pos": "adjective",
    "definition": "Covered with dense, matted, woolly hairs.",
    "example": "The tomentose undersides of the sage leaves were silvery-white and soft as cotton.",
    "roots": {
      "origin": "Latin 'tomentosus,' from 'tomentum' (cushion stuffing, wool).",
      "parts": [
        "tomentum → stuffing, wool"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtoʊ.mən.toʊs/"
  },
  {
    "word": "rugose",
    "pos": "adjective",
    "definition": "Wrinkled, corrugated, or ridged; having a surface covered with folds or wrinkles.",
    "example": "The rugose bark of the old walnut tree looked like a topographic map of a mountain range.",
    "roots": {
      "origin": "Latin 'rugosus' (wrinkled), from 'ruga' (wrinkle, crease).",
      "parts": [
        "ruga → wrinkle, crease"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈruː.ɡoʊs/"
  },
  {
    "word": "susurrate",
    "pos": "verb",
    "definition": "To make a soft whispering or rustling sound; to murmur or whisper.",
    "example": "The reeds susurrated in the evening breeze, filling the silence with something that felt like speech.",
    "roots": {
      "origin": "Latin 'susurrare' (to whisper, murmur), an onomatopoeic formation.",
      "parts": [
        "susurrare → to whisper (onomatopoeic)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsuː.sə.reɪt/"
  },
  {
    "word": "sibilate",
    "pos": "verb",
    "definition": "To make or utter with a hissing sound; to pronounce with a hiss.",
    "example": "She leaned close and sibilated the password so sharply that it sounded like steam escaping.",
    "roots": {
      "origin": "Latin 'sibilare' (to hiss, whistle), an onomatopoeic word.",
      "parts": [
        "sibilare → to hiss (onomatopoeic)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsɪb.ɪ.leɪt/"
  },
  {
    "word": "ululate",
    "pos": "verb",
    "definition": "To howl or wail as an expression of strong emotion, especially in grief or joy; to make a high, wavering cry.",
    "example": "The women ululated at the wedding celebration, their voices cutting joyfully through the music.",
    "roots": {
      "origin": "Latin 'ululare' (to howl, shriek), an onomatopoeic word mimicking the sound.",
      "parts": [
        "ululare → to howl (onomatopoeic)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈʌl.jʊ.leɪt/"
  },
  {
    "word": "cachinnate",
    "pos": "verb",
    "definition": "To laugh loudly, immoderately, or convulsively.",
    "example": "He cachinnated until he had to grip the table, tears streaming, the joke having broken something loose in him.",
    "roots": {
      "origin": "Latin 'cachinnare' (to laugh loudly), an onomatopoeic formation.",
      "parts": [
        "cachinnare → to laugh loudly (onomatopoeic)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkæk.ɪ.neɪt/"
  },
  {
    "word": "nidificate",
    "pos": "verb",
    "definition": "To build or make a nest.",
    "example": "The wrens had nidificated inside an old boot on the porch, and no one had the heart to disturb them.",
    "roots": {
      "origin": "Latin 'nidificare' (to build a nest), from 'nidus' (nest) + 'facere' (to make).",
      "parts": [
        "nidus → nest",
        "facere → to make"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈnɪd.ɪ.fɪ.keɪt/"
  },
  {
    "word": "ovivorous",
    "pos": "adjective",
    "definition": "Feeding on eggs; egg-eating.",
    "example": "The ovivorous snake had learned to roll the eggs to a stone and crack them open.",
    "roots": {
      "origin": "Latin 'ovum' (egg) + 'vorare' (to devour).",
      "parts": [
        "ovum → egg",
        "vorare → to devour"
      ]
    },
    "tier": 3,
    "pronunciation": "/oʊˈvɪv.ər.əs/"
  },
  {
    "word": "granivorous",
    "pos": "adjective",
    "definition": "Feeding on grain or seeds.",
    "example": "The granivorous sparrows ignored the insects entirely, preferring to scrabble for seeds beneath the feeder.",
    "roots": {
      "origin": "Latin 'granum' (grain, seed) + 'vorare' (to devour).",
      "parts": [
        "granum → grain, seed",
        "vorare → to devour"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɡrəˈnɪv.ər.əs/"
  },
  {
    "word": "vermivorous",
    "pos": "adjective",
    "definition": "Feeding on worms.",
    "example": "After rain, the vermivorous robins worked the lawn with surgical efficiency.",
    "roots": {
      "origin": "Latin 'vermis' (worm) + 'vorare' (to devour).",
      "parts": [
        "vermis → worm",
        "vorare → to devour"
      ]
    },
    "tier": 3,
    "pronunciation": "/vɜːrˈmɪv.ər.əs/"
  },
  {
    "word": "piscivorous",
    "pos": "adjective",
    "definition": "Feeding on fish; fish-eating.",
    "example": "The piscivorous herons stood motionless at the river's edge for hours, waiting with inhuman patience.",
    "roots": {
      "origin": "Latin 'piscis' (fish) + 'vorare' (to devour).",
      "parts": [
        "piscis → fish",
        "vorare → to devour"
      ]
    },
    "tier": 3,
    "pronunciation": "/pɪˈsɪv.ər.əs/"
  },
  {
    "word": "noctivagant",
    "pos": "adjective",
    "definition": "Roaming or wandering in the night.",
    "example": "He was a noctivagant by nature, finding the city more legible at 2 a.m. than at noon.",
    "roots": {
      "origin": "Latin 'nox, noctis' (night) + 'vagans,' present participle of 'vagari' (to wander, roam).",
      "parts": [
        "nox → night",
        "vagari → to wander, roam"
      ]
    },
    "tier": 3,
    "pronunciation": "/nɒkˈtɪv.ə.ɡənt/"
  },
  {
    "word": "solivagant",
    "pos": "adjective",
    "definition": "Wandering alone; inclined to roam in solitude.",
    "example": "A solivagant by temperament, she preferred mountain trails to any social occasion.",
    "roots": {
      "origin": "Latin 'solus' (alone) + 'vagans,' present participle of 'vagari' (to wander).",
      "parts": [
        "solus → alone",
        "vagari → to wander"
      ]
    },
    "tier": 3,
    "pronunciation": "/soʊˈlɪv.ə.ɡənt/"
  },
  {
    "word": "peregrinate",
    "pos": "verb",
    "definition": "To travel or wander from place to place; to traverse or roam through.",
    "example": "She had peregrinated through seventeen countries before settling, briefly, in a village she never planned to visit.",
    "roots": {
      "origin": "Latin 'peregrinare' (to travel abroad), from 'peregrinus' (foreign, from abroad).",
      "parts": [
        "per → through",
        "ager → field, land",
        "peregre → abroad"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɛr.ɪ.ɡrɪ.neɪt/"
  },
  {
    "word": "eloin",
    "pos": "verb",
    "definition": "To carry away or remove to a distance; to remove oneself from a jurisdiction or the reach of authority.",
    "example": "The debtor had eloined himself to a remote island, placing an ocean between himself and his creditors.",
    "roots": {
      "origin": "Old French 'esloignier' (to remove afar), from 'es-' (out) + 'loin' (far), from Latin 'longe' (far).",
      "parts": [
        "longe → far, distant"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˈlɔɪn/"
  },
  {
    "word": "maunder",
    "pos": "verb",
    "definition": "To talk in a rambling, incoherent, or aimless way; to move or act in a dreamy or idle manner.",
    "example": "He maundered on about his garden for twenty minutes while she tried to steer the conversation.",
    "roots": {
      "origin": "Perhaps related to 'meander,' from the Meander River in Turkey, known for its winding course; or from 'mander' (to beg)."
    },
    "tier": 3,
    "pronunciation": "/ˈmɔːn.dər/"
  },
  {
    "word": "brabble",
    "pos": "verb",
    "definition": "To quarrel noisily about trivial matters; to wrangle over trifles.",
    "example": "They brabbled over whose turn it was to do the dishes until someone finally just did them.",
    "roots": {
      "origin": "Dutch 'brabbelen' (to jabber, stammer), from a Germanic root imitating confused, noisy speech.",
      "parts": [
        "brabbelen → to jabber, prattle"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈbræb.əl/"
  },
  {
    "word": "foofaraw",
    "pos": "noun",
    "definition": "Excessive or trivial fuss; a lot of commotion or agitation over something minor.",
    "example": "The whole foofaraw about the committee's seating arrangement consumed two full meetings.",
    "roots": {
      "origin": "American English, possibly from Spanish 'fanfarrón' (braggart, show-off) or from French 'fanfreluche' (trifle, bauble)."
    },
    "tier": 3,
    "pronunciation": "/ˈfuː.fə.rɔː/"
  },
  {
    "word": "kerfuffle",
    "pos": "noun",
    "definition": "A commotion or fuss, especially one caused by conflicting views.",
    "example": "There was quite a kerfuffle at the town meeting when someone proposed removing the town tree.",
    "roots": {
      "origin": "Scottish 'curfuffle' (disorder, agitation), from 'cur-' (wrong, twisted) + 'fuffle' (to disarrange). Entered mainstream British English in the 20th century."
    },
    "tier": 3,
    "pronunciation": "/kərˈfʌf.əl/"
  },
  {
    "word": "scutter",
    "pos": "verb",
    "definition": "To move with a quick, scurrying motion; to scuttle.",
    "example": "The mouse scuttered behind the baseboard the moment the kitchen light came on.",
    "roots": {
      "origin": "Dialectal variant of 'scuttle,' probably from Low German 'schuddern' (to shudder, shake), influenced by 'scatter.'"
    },
    "tier": 3,
    "pronunciation": "/ˈskʌt.ər/"
  },
  {
    "word": "scurry",
    "pos": "verb",
    "definition": "To move with hurried, short steps; to scamper.",
    "example": "The children scurried away from the yard before the adults noticed the broken window.",
    "roots": {
      "origin": "Shortening of 'hurry-scurry,' a reduplication of 'hurry.' Also related to dialectal 'skirr' (to move rapidly with a whirring sound)."
    },
    "tier": 3,
    "pronunciation": "/ˈskɜːr.i/"
  },
  {
    "word": "quop",
    "pos": "verb",
    "definition": "To throb or pulsate, as a wound or healing bruise.",
    "example": "His stubbed toe quopped painfully all through the night.",
    "roots": {
      "origin": "Old English dialectal; a direct, expressive formation for the sensation of rhythmic throbbing pain."
    },
    "tier": 3,
    "pronunciation": "/kwɒp/"
  },
  {
    "word": "snudge",
    "pos": "verb",
    "definition": "To sit quietly and do nothing; to be secretly miserly.",
    "example": "He spent the rainy Sunday entirely snudging under a blanket, making no plans and keeping no promises.",
    "roots": {
      "origin": "16th-century English dialectal word, possibly related to 'snug' (comfortable, sheltered). Used in early modern English texts."
    },
    "tier": 3,
    "pronunciation": "/snʌdʒ/"
  },
  {
    "word": "twattle",
    "pos": "verb",
    "definition": "To talk idly or foolishly; to chatter about nothing.",
    "example": "She twattled on about celebrity gossip for so long that he quietly finished his whole drink.",
    "roots": {
      "origin": "16th-century English; probably a variant of 'tattle' (to gossip, chatter), influenced by 'twit.'"
    },
    "tier": 3,
    "pronunciation": "/ˈtwɒt.əl/"
  },
  {
    "word": "pingle",
    "pos": "verb",
    "definition": "To eat with little appetite; to pick at food without enthusiasm.",
    "example": "She pingled at her dinner, moving pasta from one side of the plate to the other.",
    "roots": {
      "origin": "Northern English and Scottish dialect, possibly related to 'prig' (to trifle) or 'pinch.'"
    },
    "tier": 3,
    "pronunciation": "/ˈpɪŋ.ɡəl/"
  },
  {
    "word": "cark",
    "pos": "verb",
    "definition": "To worry or be anxious; to trouble or burden with worry.",
    "example": "She carked all weekend over the email she'd sent, replaying it obsessively.",
    "roots": {
      "origin": "From Old Norman French 'carquier' (to load, burden), from Latin 'carricare' (to load a cart).",
      "parts": [
        "carricare → to load, burden"
      ]
    },
    "tier": 3,
    "pronunciation": "/kɑːrk/"
  },
  {
    "word": "frabble",
    "pos": "verb",
    "definition": "To quarrel; to engage in minor conflict or petty dispute.",
    "example": "The siblings frabbled over the television remote every evening with operatic dedication.",
    "roots": {
      "origin": "18th-century dialectal English; related to 'brabble' and 'squabble,' all denoting petty argument."
    },
    "tier": 3,
    "pronunciation": "/ˈfræb.əl/"
  },
  {
    "word": "groke",
    "pos": "verb",
    "definition": "To gaze fixedly at someone who is eating, in hopes of being given some of the food.",
    "example": "The dog groke at every forkful with such intensity that she eventually surrendered half her sandwich.",
    "roots": {
      "origin": "Scottish dialectal word; of uncertain origin, possibly onomatopoeic of a longing whimper."
    },
    "tier": 3,
    "pronunciation": "/ɡroʊk/"
  },
  {
    "word": "rawgabbit",
    "pos": "adjective",
    "definition": "Confident about a subject of which one is actually ignorant; speaking with false authority.",
    "example": "He was rawgabbit about wine, delivering confident tasting notes that were completely invented.",
    "roots": {
      "origin": "Scottish dialectal term, origin uncertain. Possibly related to 'raw' (inexperienced) + 'gabbit' (one who gabbles or speaks freely)."
    },
    "tier": 3,
    "pronunciation": "/ˈrɔː.ɡæb.ɪt/"
  },
  {
    "word": "brontide",
    "pos": "noun",
    "definition": "A low, muffled sound like distant thunder heard in some hilly or mountainous regions, of uncertain seismic origin.",
    "example": "The locals attributed the brontide to the mountain breathing, though geologists suspected micro-seismic activity.",
    "roots": {
      "origin": "Greek 'bronte' (thunder) + '-ide' (resembling). Coined in the 19th century for unexplained booming sounds from the earth.",
      "parts": [
        "bronte → thunder"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈbrɒn.taɪd/"
  },
  {
    "word": "thalassophile",
    "pos": "noun",
    "definition": "A person who loves the sea.",
    "example": "The thalassophile had taken a job at the coast purely so she could hear the ocean every morning.",
    "roots": {
      "origin": "Greek 'thalassa' (sea) + 'philos' (loving).",
      "parts": [
        "thalassa → sea",
        "philos → loving"
      ]
    },
    "tier": 3,
    "pronunciation": "/θəˈlæs.ə.faɪl/"
  },
  {
    "word": "thalassophobia",
    "pos": "noun",
    "definition": "An intense and persistent fear of the sea, especially of deep or dark ocean water.",
    "example": "Her thalassophobia made snorkeling impossible; she couldn't look down into the blue without freezing.",
    "roots": {
      "origin": "Greek 'thalassa' (sea) + 'phobos' (fear).",
      "parts": [
        "thalassa → sea",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/θəˌlæs.əˈfoʊ.bi.ə/"
  },
  {
    "word": "nyctophilia",
    "pos": "noun",
    "definition": "A strong preference for, or love of, darkness or the night.",
    "example": "Her nyctophilia was practical as well as aesthetic — she simply thought better after midnight.",
    "roots": {
      "origin": "Greek 'nyx, nyktos' (night) + 'philia' (love, attraction).",
      "parts": [
        "nyx → night",
        "philia → love"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌnɪk.təˈfɪl.i.ə/"
  },
  {
    "word": "eosophobia",
    "pos": "noun",
    "definition": "A fear of the dawn or of daylight.",
    "example": "After months of night shifts, he developed a mild eosophobia — something about the morning felt accusatory.",
    "roots": {
      "origin": "Greek 'eos' (dawn) + 'phobos' (fear). 'Eos' was the goddess of the dawn in Greek mythology.",
      "parts": [
        "eos → dawn",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌiː.ə.səˈfoʊ.bi.ə/"
  },
  {
    "word": "selachophobia",
    "pos": "noun",
    "definition": "An extreme or irrational fear of sharks.",
    "example": "His selachophobia made swimming in even a clean backyard pool somewhat nerve-wracking.",
    "roots": {
      "origin": "Greek 'selachos' (shark, literally 'a cartilaginous fish') + 'phobos' (fear).",
      "parts": [
        "selachos → shark",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/səˌlæk.əˈfoʊ.bi.ə/"
  },
  {
    "word": "pogonophobia",
    "pos": "noun",
    "definition": "A fear or strong dislike of beards.",
    "example": "Her pogonophobia made Victorian portraits somewhat distressing viewing.",
    "roots": {
      "origin": "Greek 'pogon' (beard) + 'phobos' (fear).",
      "parts": [
        "pogon → beard",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/pəˌɡɒn.əˈfoʊ.bi.ə/"
  },
  {
    "word": "gymnophobia",
    "pos": "noun",
    "definition": "An abnormal fear of nudity, whether of oneself or others.",
    "example": "His gymnophobia made every doctor's visit an exercise in managing deep, irrational dread.",
    "roots": {
      "origin": "Greek 'gymnos' (naked, bare) + 'phobos' (fear).",
      "parts": [
        "gymnos → naked",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌdʒɪm.nəˈfoʊ.bi.ə/"
  },
  {
    "word": "eroteme",
    "pos": "noun",
    "definition": "A question mark; the punctuation symbol (?) used to indicate a direct question.",
    "example": "He closed every text message with an eroteme, even when stating things he was perfectly certain of.",
    "roots": {
      "origin": "Greek 'erotema' (question), from 'erotaein' (to question, ask).",
      "parts": [
        "erotaein → to ask, question"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɛr.ə.tiːm/"
  },
  {
    "word": "solidus",
    "pos": "noun",
    "definition": "The oblique stroke (/) used in writing and printing, sometimes called a slash or virgule.",
    "example": "She used a solidus between the options to keep the sentence compact: 'and/or.'",
    "roots": {
      "origin": "Latin 'solidus' (solid gold coin) — the stroke was used as a currency mark in medieval manuscripts.",
      "parts": [
        "solidus → solid, firm; also a gold coin"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsɒl.ɪ.dəs/"
  },
  {
    "word": "pilcrow",
    "pos": "noun",
    "definition": "The paragraph symbol (¶), used as a mark to indicate the beginning of a new paragraph.",
    "example": "She noticed a pilcrow in the manuscript margin where the typesetter had inserted a paragraph break.",
    "roots": {
      "origin": "Corrupted from Old French 'pelagraphe,' a mangling of 'paragraph.' The sign itself evolved from a 'C' for 'capitulum' (chapter)."
    },
    "tier": 3,
    "pronunciation": "/ˈpɪl.kroʊ/"
  },
  {
    "word": "manicule",
    "pos": "noun",
    "definition": "A typographic symbol (☞) shaped like a pointing hand, used in medieval and early modern manuscripts to draw attention to important text.",
    "example": "The monk had drawn a tiny manicule in the margin wherever he wanted to flag an important passage.",
    "roots": {
      "origin": "Latin 'manicula' (little hand), diminutive of 'manus' (hand).",
      "parts": [
        "manus → hand",
        "-cula → diminutive suffix"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈmæn.ɪ.kjuːl/"
  },
  {
    "word": "diple",
    "pos": "noun",
    "definition": "A marginal mark (>) used in early manuscripts to indicate a notable passage or a quotation from scripture.",
    "example": "Scholars could trace the scribe's interests by following the diple marks scattered through the margins.",
    "roots": {
      "origin": "Greek 'diple' (double, fold), from 'diploos' (double) — the mark consists of two strokes.",
      "parts": [
        "diploos → double"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdɪp.li/"
  },
  {
    "word": "anastomosis",
    "pos": "noun",
    "definition": "A cross-connection between adjacent channels, tubes, or vessels; in medicine, the surgical joining of two tubular structures.",
    "example": "The surgeon performed an anastomosis to reconnect the severed intestinal segments.",
    "roots": {
      "origin": "Greek 'anastomosis' (an opening), from 'anastomoun' (to furnish with a mouth), from 'stoma' (mouth).",
      "parts": [
        "ana → up, again",
        "stoma → mouth, opening"
      ]
    },
    "tier": 3,
    "pronunciation": "/əˌnæs.təˈmoʊ.sɪs/"
  },
  {
    "word": "arborescent",
    "pos": "adjective",
    "definition": "Resembling or having characteristics of a tree; branching like a tree.",
    "example": "The lightning left an arborescent pattern burned into the grass — a frozen tree of pure energy.",
    "roots": {
      "origin": "Latin 'arborescens,' present participle of 'arborescere' (to become a tree), from 'arbor' (tree).",
      "parts": [
        "arbor → tree"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɑːr.bəˈrɛs.ənt/"
  },
  {
    "word": "dendritic",
    "pos": "adjective",
    "definition": "Having a branched form resembling a tree; relating to dendrites in neurons.",
    "example": "The frost spread in dendritic patterns across the window, growing from a single crystal outward.",
    "roots": {
      "origin": "Greek 'dendrites' (of a tree), from 'dendron' (tree).",
      "parts": [
        "dendron → tree"
      ]
    },
    "tier": 3,
    "pronunciation": "/dɛnˈdrɪt.ɪk/"
  },
  {
    "word": "lacunose",
    "pos": "adjective",
    "definition": "Full of gaps, pits, or lacunae; having a pitted or hollow surface.",
    "example": "The lacunose surface of the moon photographed through the telescope showed centuries of impact craters.",
    "roots": {
      "origin": "Latin 'lacunosus' (full of holes, pits), from 'lacuna' (hole, gap, pool).",
      "parts": [
        "lacuna → hole, gap, pool"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈlæk.jʊ.noʊs/"
  },
  {
    "word": "fulvous",
    "pos": "adjective",
    "definition": "Tawny or reddish-yellow in color; having the color of a lion's mane.",
    "example": "The autumn hills were fulvous in the late light, the grasses bleached to gold and rust.",
    "roots": {
      "origin": "Latin 'fulvus' (tawny, yellow-brown), of uncertain further origin; related to 'flavus' (golden, yellow).",
      "parts": [
        "fulvus → tawny, golden-brown"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈfʌl.vəs/"
  },
  {
    "word": "xanthic",
    "pos": "adjective",
    "definition": "Of a yellow or yellowish color.",
    "example": "The xanthic haze of the setting sun turned the white buildings honey-gold.",
    "roots": {
      "origin": "Greek 'xanthos' (yellow, golden-haired).",
      "parts": [
        "xanthos → yellow, golden"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈzæn.θɪk/"
  },
  {
    "word": "glaucous",
    "pos": "adjective",
    "definition": "Of a dull grayish-green or blue-green color; having a powdery bloom like a plum or a grape.",
    "example": "The cactus was a gorgeous glaucous green, each spine edged in silver.",
    "roots": {
      "origin": "Latin 'glaucus,' from Greek 'glaukos' (gleaming, silvery-blue, gray).",
      "parts": [
        "glaukos → gleaming, gray-green"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɡlɔː.kəs/"
  },
  {
    "word": "caesious",
    "pos": "adjective",
    "definition": "Of a pale grayish-blue or lavender color, like that of a pigeon's plumage.",
    "example": "The caesious sky at dusk had that particular softness that photographers call 'blue hour.'",
    "roots": {
      "origin": "Latin 'caesius' (blue-gray), used in classical Latin to describe the color of eyes and sky.",
      "parts": [
        "caesius → blue-gray, sky-colored"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsiː.zi.əs/"
  },
  {
    "word": "puce",
    "pos": "noun",
    "definition": "A dark reddish-brown or purplish-brown color, like a flea.",
    "example": "She chose a puce velvet for the chair, a color so ugly it had circled all the way back to interesting.",
    "roots": {
      "origin": "French 'puce' (flea), from Latin 'pulex, pulicis' (flea) — named for the color of a flea.",
      "parts": [
        "pulex → flea"
      ]
    },
    "tier": 3,
    "pronunciation": "/pjuːs/"
  },
  {
    "word": "taupe",
    "pos": "noun",
    "definition": "A dark brownish-gray color, named after the European mole.",
    "example": "The walls were painted a sophisticated taupe, the kind of color that requires a paint chip to name but everyone recognizes.",
    "roots": {
      "origin": "French 'taupe' (mole, the animal), from Latin 'talpa' (mole).",
      "parts": [
        "talpa → mole (the animal)"
      ]
    },
    "tier": 3,
    "pronunciation": "/toʊp/"
  },
  {
    "word": "gamboge",
    "pos": "noun",
    "definition": "A strong, vivid yellow pigment and dye derived from a tropical tree resin; the color of this pigment.",
    "example": "The monk's robe was an intense gamboge that seemed to glow even in shade.",
    "roots": {
      "origin": "From 'Gamboge,' a former name for Cambodia, where the resin was originally sourced.",
      "parts": [
        "Gamboge → Cambodia (historical name)"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɡæmˈboʊdʒ/"
  },
  {
    "word": "woad",
    "pos": "noun",
    "definition": "A blue dye made from a plant of the mustard family, historically used by ancient Britons to dye their skin.",
    "example": "Julius Caesar wrote that the ancient Britons painted themselves with woad, staining their bodies a vivid blue.",
    "roots": {
      "origin": "Old English 'wad,' from a Germanic root; related to Old High German 'weit,' Dutch 'wede.' All refer to the plant Isatis tinctoria."
    },
    "tier": 3,
    "pronunciation": "/woʊd/"
  },
  {
    "word": "murrey",
    "pos": "noun",
    "definition": "A dark reddish-purple color used in heraldry, similar to mulberry.",
    "example": "The knight's shield was quartered in murrey and gold, colors from his mother's family line.",
    "roots": {
      "origin": "Old French 'moré' (mulberry-colored), from Medieval Latin 'moratus,' from 'morum' (mulberry).",
      "parts": [
        "morum → mulberry"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈmɜːr.i/"
  },
  {
    "word": "amaranthine",
    "pos": "adjective",
    "definition": "Of a deep purplish-red color; also, lasting forever, unfading — like the legendary amaranth flower.",
    "example": "She wore a long amaranthine dress that seemed to absorb the light around it.",
    "roots": {
      "origin": "Greek 'amarantos' (unfading), from 'a-' (not) + 'marainein' (to wither). The amaranth was a mythical flower that never faded.",
      "parts": [
        "a → not, without",
        "marainein → to wither, fade"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌæm.əˈræn.θɪn/"
  },
  {
    "word": "porphyry",
    "pos": "noun",
    "definition": "A hard igneous rock containing large crystals of feldspar in a fine-grained matrix, used since antiquity as a luxury decorative stone.",
    "example": "The emperor's sarcophagus was carved from deep red porphyry, the exclusive imperial stone of Rome.",
    "roots": {
      "origin": "Greek 'porphyrites' (purple-stone), from 'porphyra' (purple dye, the Murex shell). The stone was prized for its deep reddish-purple color.",
      "parts": [
        "porphyra → purple"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɔːr.fɪ.ri/"
  },
  {
    "word": "electrum",
    "pos": "noun",
    "definition": "A natural or artificial alloy of gold and silver, with a pale yellow color; also the ancient Greek word for amber.",
    "example": "The ancient coins were struck in electrum, an alloy that defied simple assay.",
    "roots": {
      "origin": "Latin 'electrum,' from Greek 'elektron' (amber; alloy of gold and silver). The Greek word also gave us 'electricity,' from amber's static properties.",
      "parts": [
        "elektron → amber; gold-silver alloy"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˈlɛk.trəm/"
  },
  {
    "word": "byssus",
    "pos": "noun",
    "definition": "The fine silky threads by which mussels and other bivalves attach themselves to rocks; also, a fine linen of antiquity.",
    "example": "The mussel clung to the rock with its byssus, a bundle of threads stronger than steel by weight.",
    "roots": {
      "origin": "Greek 'byssos' (fine flax, fine linen), from Hebrew 'buts' (fine linen). The molluscan threads resembled the texture of fine linen.",
      "parts": [
        "byssos → fine linen, fine flax"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈbɪs.əs/"
  },
  {
    "word": "nugacious",
    "pos": "adjective",
    "definition": "Trivial, trifling, or of little importance.",
    "example": "She dismissed his objections as nugacious and proceeded with her plan.",
    "roots": {
      "origin": "Latin 'nugax' (trifling, trivial), from 'nugae' (trifles, jokes, nonsense).",
      "parts": [
        "nugae → trifles, nonsense"
      ]
    },
    "tier": 3,
    "pronunciation": "/njuːˈɡeɪ.ʃəs/"
  },
  {
    "word": "quondam",
    "pos": "adjective",
    "definition": "That was formerly; former.",
    "example": "He introduced her to his quondam partner, a woman who had shared his studio for a decade before their falling-out.",
    "roots": {
      "origin": "Latin 'quondam' (at one time, formerly), from 'quom' (when) + '-dam' (an emphatic suffix).",
      "parts": [
        "quom → when, at which time"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkwɒn.dæm/"
  },
  {
    "word": "nidus",
    "pos": "noun",
    "definition": "A place where something originates, develops, or is fostered; a nest or breeding place, especially of bacteria.",
    "example": "The crowded market was a nidus for rumor, every stall generating new versions of the story.",
    "roots": {
      "origin": "Latin 'nidus' (nest), from the same root as 'nestle,' 'nest.'",
      "parts": [
        "nidus → nest"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈnaɪ.dəs/"
  },
  {
    "word": "velitation",
    "pos": "noun",
    "definition": "A minor dispute or skirmish; a slight argument or conflict.",
    "example": "What began as a velitation over parking expanded into a full neighborhood feud lasting years.",
    "roots": {
      "origin": "Latin 'velitatio' (skirmishing), from 'velites' (light-armed skirmishers) — the lowest class of Roman infantry.",
      "parts": [
        "velites → light skirmishers"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌvɛl.ɪˈteɪ.ʃən/"
  },
  {
    "word": "ruction",
    "pos": "noun",
    "definition": "A disturbance, quarrel, or noisy commotion.",
    "example": "There was quite a ruction in the back of the theater when someone's phone went off during the final act.",
    "roots": {
      "origin": "Irish-English, possibly a shortening of 'insurrection' or an alteration of 'rumpus.' In widespread use by the 19th century."
    },
    "tier": 3,
    "pronunciation": "/ˈrʌk.ʃən/"
  },
  {
    "word": "rannygazoo",
    "pos": "noun",
    "definition": "Nonsense; deceitful behavior or shenanigans.",
    "example": "He saw through the rannygazoo of the scheme immediately and walked out before they could pitch it.",
    "roots": {
      "origin": "American English slang of uncertain origin, early 20th century. Possibly from Irish-American dialect."
    },
    "tier": 3,
    "pronunciation": "/ˌræn.iˈɡæ.zuː/"
  },
  {
    "word": "flibbertigibbet",
    "pos": "noun",
    "definition": "A frivolous, flighty, or excessively talkative person.",
    "example": "She adored her aunt, even if the woman was an irredeemable flibbertigibbet who never stayed on topic.",
    "roots": {
      "origin": "Late Middle English; a fanciful coinage imitating rapid, careless speech. Used by Shakespeare in 'King Lear' as the name of a devil."
    },
    "tier": 3,
    "pronunciation": "/ˈflɪb.ər.ti.dʒɪb.ɪt/"
  },
  {
    "word": "mumpsimus",
    "pos": "noun",
    "definition": "A stubborn person who insists on an error or traditional custom even after it has been proven wrong.",
    "example": "He was a thoroughgoing mumpsimus about the apostrophe rules he'd learned in 1975 and had no intention of updating.",
    "roots": {
      "origin": "From a story of an illiterate English priest who misread 'quod in ore sumpsimus' as 'quod in ore mumpsimus' in the Latin Mass and refused to be corrected."
    },
    "tier": 3,
    "pronunciation": "/ˈmʌmp.sɪ.məs/"
  },
  {
    "word": "mome",
    "pos": "noun",
    "definition": "A blockhead; a stupid, dull person; a fool.",
    "example": "He called him a mome for leaving the lights on every single night that winter.",
    "roots": {
      "origin": "16th-century English, of uncertain origin; possibly from Old French 'momon' (a grimace) or related to 'mum' (silent, dumb). Used by Shakespeare in 'The Comedy of Errors.'"
    },
    "tier": 3,
    "pronunciation": "/moʊm/"
  },
  {
    "word": "fussock",
    "pos": "noun",
    "definition": "A large, fat, or lazy person; a slothful and untidy woman.",
    "example": "The innkeeper called him a fussock and showed him the door with considerable efficiency.",
    "roots": {
      "origin": "17th-century English dialect, possibly from 'fuss' (to fidget, to be nervously busy) or from a Low German cognate."
    },
    "tier": 3,
    "pronunciation": "/ˈfʌs.ək/"
  },
  {
    "word": "lollygag",
    "pos": "verb",
    "definition": "To spend time in an aimless or idle way; to dawdle or dally.",
    "example": "Stop lollygagging by the fountain and help carry the groceries inside.",
    "roots": {
      "origin": "19th-century American slang of unknown origin; possibly related to 'loll' (to laze about) + a whimsical suffix."
    },
    "tier": 3,
    "pronunciation": "/ˈlɒl.i.ɡæɡ/"
  },
  {
    "word": "taradiddle",
    "pos": "noun",
    "definition": "A small lie; a petty untruth; also, pretentious nonsense.",
    "example": "His excuse was an obvious taradiddle, and everyone at the table knew it.",
    "roots": {
      "origin": "18th-century British slang; a fanciful formation, possibly from 'diddle' (to cheat, swindle) with an elaborating prefix."
    },
    "tier": 3,
    "pronunciation": "/ˈtær.ə.dɪd.əl/"
  },
  {
    "word": "blatherskite",
    "pos": "noun",
    "definition": "A person who talks at great length without making much sense; a person who talks rubbish.",
    "example": "The blatherskite at the microphone consumed twenty minutes of the public comment period to say absolutely nothing.",
    "roots": {
      "origin": "Scottish 'blether' (to talk nonsense) + 'skite' (a contemptible person). Popularized during the American Revolution through a satirical song.",
      "parts": [
        "blether → to talk nonsense",
        "skite → a despicable person"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈblæð.ər.skaɪt/"
  },
  {
    "word": "flapdoodle",
    "pos": "noun",
    "definition": "Nonsense; rubbish; absurd or foolish talk.",
    "example": "She dismissed his entire argument as flapdoodle and left the room without further discussion.",
    "roots": {
      "origin": "19th-century American English; a colorful expression of uncertain etymology. First recorded around 1833."
    },
    "tier": 3,
    "pronunciation": "/ˈflæp.duː.dəl/"
  },
  {
    "word": "scobberlotcher",
    "pos": "noun",
    "definition": "A person who avoids hard work; an idle layabout who does as little as possible.",
    "example": "His colleagues regarded him as a scobberlotcher of the highest order — forever present, never productive.",
    "roots": {
      "origin": "19th-century British slang; possibly derived from dialect words for scraping or loafing, with an elaborated suffix."
    },
    "tier": 3,
    "pronunciation": "/ˈskɒb.ər.lɒtʃ.ər/"
  },
  {
    "word": "slugabed",
    "pos": "noun",
    "definition": "A person who stays in bed late out of laziness.",
    "example": "Her mother called her a slugabed; she preferred the term 'committed horizontal thinker.'",
    "roots": {
      "origin": "From 'slug' (to be slow and lazy) + 'abed' (in bed). Used by Shakespeare in Romeo and Juliet.",
      "parts": [
        "slug → slow, lazy person",
        "abed → in bed"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈslʌɡ.ə.bɛd/"
  },
  {
    "word": "maffick",
    "pos": "verb",
    "definition": "To celebrate with extravagant public demonstrations; to rejoice boisterously.",
    "example": "The city mafficked for two days straight after the championship, strangers hugging in the streets.",
    "roots": {
      "origin": "Back-formation from 'Mafeking,' a town in South Africa. When the siege of Mafeking was lifted in 1900, London celebrated so uproariously the word became a verb."
    },
    "tier": 3,
    "pronunciation": "/ˈmæf.ɪk/"
  },
  {
    "word": "bowdlerize",
    "pos": "verb",
    "definition": "To remove or alter parts of a text considered vulgar or offensive; to expurgate.",
    "example": "The school edition had been so thoroughly bowdlerized that the play's entire moral tension was gone.",
    "roots": {
      "origin": "Eponymous: from Thomas Bowdler (1754–1825), who published a sanitized 'Family Shakespeare' removing passages he deemed unsuitable for women and children."
    },
    "tier": 3,
    "pronunciation": "/ˈboʊd.lər.aɪz/"
  },
  {
    "word": "borborygmophilia",
    "pos": "noun",
    "definition": "A love of, or fascination with, the sound of a rumbling stomach.",
    "example": "Her borborygmophilia led her to record the sound effects of her own stomach for a sound design project.",
    "roots": {
      "origin": "Greek 'borborygmos' (stomach rumble) + 'philia' (love). A very modern coinage built from classical roots.",
      "parts": [
        "borborygmos → stomach rumble",
        "philia → love"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌbɔːr.bə.rɪɡˌmoʊˈfɪl.i.ə/"
  },
  {
    "word": "crurophilia",
    "pos": "noun",
    "definition": "An attraction to or fascination with legs.",
    "example": "He attributed his lifelong crurophilia to summers spent watching track meets as a child.",
    "roots": {
      "origin": "Latin 'crus, cruris' (leg, shin) + Greek 'philia' (love).",
      "parts": [
        "crus → leg, shin",
        "philia → love"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌkrʊər.əˈfɪl.i.ə/"
  },
  {
    "word": "ptyalism",
    "pos": "noun",
    "definition": "Excessive flow of saliva; hypersalivation, which can be a symptom of various conditions.",
    "example": "The medication listed ptyalism as a rare side effect, which she noted was an extremely unpleasant word for an extremely unpleasant symptom.",
    "roots": {
      "origin": "Greek 'ptyalon' (saliva), from 'ptyein' (to spit).",
      "parts": [
        "ptyalon → saliva",
        "ptyein → to spit"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtaɪ.ə.lɪz.əm/"
  },
  {
    "word": "onychophagia",
    "pos": "noun",
    "definition": "The habitual biting of one's own fingernails.",
    "example": "Onychophagia had left her nails bitten so low they ached at the slightest pressure.",
    "roots": {
      "origin": "Greek 'onyx, onychos' (nail, claw) + 'phagein' (to eat).",
      "parts": [
        "onyx → nail, claw",
        "phagein → to eat"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɒn.ɪ.kəˈfeɪ.dʒi.ə/"
  },
  {
    "word": "trichotillomania",
    "pos": "noun",
    "definition": "A compulsive urge to pull out one's own hair, including scalp hair, eyelashes, and eyebrows.",
    "example": "Trichotillomania had been her response to stress for years before she finally connected it to anxiety.",
    "roots": {
      "origin": "Greek 'trikhos' (hair, genitive of 'thrix') + 'tillein' (to pluck) + 'mania' (madness, obsession).",
      "parts": [
        "thrix → hair",
        "tillein → to pluck, pull",
        "mania → obsession"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌtrɪk.ə.tɪl.əˈmeɪ.ni.ə/"
  },
  {
    "word": "dermatographia",
    "pos": "noun",
    "definition": "A condition in which light pressure on the skin causes temporary raised welts, allowing one to 'write' on the skin.",
    "example": "She had dermatographia so pronounced she could trace her name on her forearm with a fingernail and watch it appear.",
    "roots": {
      "origin": "Greek 'derma' (skin) + 'graphein' (to write).",
      "parts": [
        "derma → skin",
        "graphein → to write"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌdɜr.mə.toʊˈɡræf.i.ə/"
  },
  {
    "word": "misocainea",
    "pos": "noun",
    "definition": "A hatred of new ideas or things; resistance to innovation.",
    "example": "His misocainea was legendary in the office — every process, no matter how outdated, was defended to the last.",
    "roots": {
      "origin": "Greek 'miso-' (hating) + 'kainos' (new, recent).",
      "parts": [
        "miso → hating",
        "kainos → new, recent"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌmɪs.oʊˈkeɪ.ni.ə/"
  },
  {
    "word": "neophilia",
    "pos": "noun",
    "definition": "A love of, or strong enthusiasm for, new things, ideas, or experiences.",
    "example": "Her neophilia made her a perfect early adopter — she had tried every app before anyone knew it existed.",
    "roots": {
      "origin": "Greek 'neos' (new) + 'philia' (love).",
      "parts": [
        "neos → new",
        "philia → love"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌni.oʊˈfɪl.i.ə/"
  },
  {
    "word": "autophobia",
    "pos": "noun",
    "definition": "The fear of being alone or isolated; also, the morbid fear of oneself.",
    "example": "His autophobia drove him to fill every silence with noise and every hour with company.",
    "roots": {
      "origin": "Greek 'auto-' (self) + 'phobos' (fear).",
      "parts": [
        "auto → self",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɔ.toʊˈfoʊ.bi.ə/"
  },
  {
    "word": "phasmophobia",
    "pos": "noun",
    "definition": "An intense fear of ghosts, phantoms, or supernatural apparitions.",
    "example": "Phasmophobia made her refuse to watch horror films, turn on every light before entering a room, and never watch ghost-hunting shows.",
    "roots": {
      "origin": "Greek 'phasma' (apparition, ghost, vision) + 'phobos' (fear).",
      "parts": [
        "phasma → apparition, ghost",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌfæz.moʊˈfoʊ.bi.ə/"
  },
  {
    "word": "epistemophilia",
    "pos": "noun",
    "definition": "An excessive love of knowledge; a powerful drive to learn and acquire information.",
    "example": "Her epistemophilia made her a formidable conversationalist and a catastrophically poor sleeper.",
    "roots": {
      "origin": "Greek 'episteme' (knowledge, understanding) + 'philia' (love).",
      "parts": [
        "episteme → knowledge",
        "philia → love"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˌpɪs.tə.moʊˈfɪl.i.ə/"
  },
  {
    "word": "toska",
    "pos": "noun",
    "definition": "A Russian concept of an intense longing with nothing to long for; a deep spiritual anguish often without a specific cause.",
    "example": "On gray winter afternoons, she would sit by the window in something Nabokov might have called toska — not sadness exactly, but a formless ache.",
    "roots": {
      "origin": "Russian 'тоска' (toska) — an untranslatable concept of existential longing. Vladimir Nabokov called it 'at its deepest and most painful, a mental turmoil.'"
    },
    "tier": 3,
    "pronunciation": "/ˈtɔs.kə/"
  },
  {
    "word": "weltschmerz",
    "pos": "noun",
    "definition": "A state of world-weariness; sadness and anguish caused by comparing the world as it is to how it should be.",
    "example": "After a long scroll through the news, he closed his laptop in deep weltschmerz and went for a walk.",
    "roots": {
      "origin": "German 'Weltschmerz' — 'Welt' (world) + 'Schmerz' (pain, grief). Coined by German author Jean Paul in 1827.",
      "parts": [
        "Welt → world",
        "Schmerz → pain, grief"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈvɛlt.ʃmɛrts/"
  },
  {
    "word": "dépaysement",
    "pos": "noun",
    "definition": "The disorientation felt when in a foreign country; the unsettling feeling of being out of one's usual environment.",
    "example": "The dépaysement was total: different language on every sign, different food, different light.",
    "roots": {
      "origin": "French 'dépaysement,' from 'dépayser' (to remove from one's country), from 'de-' (away) + 'pays' (country, homeland).",
      "parts": [
        "de → away from",
        "pays → country, homeland"
      ]
    },
    "tier": 3,
    "pronunciation": "/deɪˌpeɪ.zəˈmɑ̃/"
  },
  {
    "word": "lacrimoso",
    "pos": "adjective",
    "definition": "Tearful or mournful; used as a musical direction meaning 'in a sorrowful, weeping style.'",
    "example": "The final movement was marked lacrimoso, and the cellist played it with devastating restraint.",
    "roots": {
      "origin": "Italian 'lacrimoso,' from Latin 'lacrimosus' (tearful, weeping), from 'lacrima' (tear).",
      "parts": [
        "lacrima → tear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌlæk.rɪˈmoʊ.soʊ/"
  },
  {
    "word": "bravura",
    "pos": "noun",
    "definition": "Great technical skill and brilliance shown in a performance or activity; daring and flamboyant artistry.",
    "example": "The pianist played the final cadenza with sheer bravura that brought the audience to its feet.",
    "roots": {
      "origin": "Italian 'bravura' (skill, bravery), from 'bravo' (brave, bold), from Medieval Latin 'bravus' (bold).",
      "parts": [
        "bravo → bold, brave"
      ]
    },
    "tier": 3,
    "pronunciation": "/brəˈvjʊr.ə/"
  },
  {
    "word": "sforzando",
    "pos": "adverb",
    "definition": "A musical direction indicating that a note or chord is to be played with sudden strong emphasis.",
    "example": "The sforzando in the third bar made every listener jolt in their seat.",
    "roots": {
      "origin": "Italian 'sforzando,' gerund of 'sforzare' (to force, strain), from 's-' (intensive prefix) + 'forza' (force), from Latin 'fortia'.",
      "parts": [
        "forza → force, strength"
      ]
    },
    "tier": 3,
    "pronunciation": "/sfɔrˈtsɑn.doʊ/"
  },
  {
    "word": "leitmotif",
    "pos": "noun",
    "definition": "A recurring theme in a musical or literary composition, associated with a particular person, idea, or situation.",
    "example": "The three-note leitmotif returned every time the villain appeared, working subliminally on the audience.",
    "roots": {
      "origin": "German 'Leitmotiv' — 'leit-' (leading, guiding), from 'leiten' (to lead) + 'Motiv' (motif, theme).",
      "parts": [
        "leiten → to lead, guide",
        "Motiv → theme, motif"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈlaɪt.moʊˌtif/"
  },
  {
    "word": "spoonerism",
    "pos": "noun",
    "definition": "A verbal error in which a speaker accidentally transposes the initial sounds of two or more words, often producing an amusing result.",
    "example": "He asked for 'a blushing crow' instead of 'a crushing blow,' then laughed helplessly at his own spoonerism.",
    "roots": {
      "origin": "Eponymous: named after Reverend William Archibald Spooner (1844–1930), Warden of New College Oxford, who was famous for making such mistakes."
    },
    "tier": 3,
    "pronunciation": "/ˈspu.nər.ɪz.əm/"
  },
  {
    "word": "malapropism",
    "pos": "noun",
    "definition": "The mistaken use of a word in place of a similar-sounding one, often with unintentionally amusing results.",
    "example": "She suffered from incorrigible malapropism, once describing the film as 'a real tour de farce.'",
    "roots": {
      "origin": "From Mrs. Malaprop, a character in Sheridan's 1775 play 'The Rivals,' known for misusing words. From French 'mal à propos' (inappropriate, out of place).",
      "parts": [
        "mal → bad, wrong",
        "à propos → to the purpose, appropriate"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈmæl.ə.prɒp.ɪz.əm/"
  },
  {
    "word": "eggcorn",
    "pos": "noun",
    "definition": "A word or phrase resulting from a mishearing or misinterpretation of another, where the substitution makes a certain sense, such as 'eggcorn' for 'acorn.'",
    "example": "She had always written 'chester drawers' and was stunned to learn it was an eggcorn for 'chest of drawers.'",
    "roots": {
      "origin": "Coined in 2003 by linguist Geoffrey Pullum after linguist Mark Liberman documented someone writing 'eggcorn' for 'acorn' — which does, after all, resemble a tiny egg."
    },
    "tier": 3,
    "pronunciation": "/ˈɛɡ.kɔrn/"
  },
  {
    "word": "acnestis",
    "pos": "noun",
    "definition": "The area of an animal's back (or a person's back) that cannot be reached to scratch.",
    "example": "There is a specific anguish to the acnestis — that strip between the shoulder blades that the hand cannot reach.",
    "roots": {
      "origin": "Greek 'aknestis' or 'achnestos' — possibly from 'a-' (not) + 'knaein' (to scratch), literally 'that which cannot be scratched.'",
      "parts": [
        "a → not",
        "knaein → to scratch"
      ]
    },
    "tier": 3,
    "pronunciation": "/ækˈnɛs.tɪs/"
  },
  {
    "word": "dactylion",
    "pos": "noun",
    "definition": "The tip of the middle finger.",
    "example": "The violin teacher told her to measure the string length from the dactylion of her index finger.",
    "roots": {
      "origin": "Greek 'daktylos' (finger, toe; also the metrical foot of one long and two short syllables).",
      "parts": [
        "daktylos → finger"
      ]
    },
    "tier": 3,
    "pronunciation": "/dækˈtɪl.i.ɒn/"
  },
  {
    "word": "nuchiform",
    "pos": "adjective",
    "definition": "Shaped like or relating to the nape of the neck.",
    "example": "He had a nuchiform tattoo that curled up from the collar of his shirt.",
    "roots": {
      "origin": "From 'nucha,' the Medieval Latin term for the nape of the neck (from Arabic 'nukha,' spinal marrow), + Latin 'forma' (shape).",
      "parts": [
        "nucha → nape of the neck",
        "forma → shape, form"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈnju.kɪ.fɔrm/"
  },
  {
    "word": "emarginate",
    "pos": "adjective",
    "definition": "Having a notch at the tip or margin, especially of a leaf or wing.",
    "example": "The botanist noted that the emarginate leaf tips were a key identifying feature of this particular species.",
    "roots": {
      "origin": "Latin 'emarginatus,' from 'e-' (out of) + 'margo, marginis' (edge, border, margin).",
      "parts": [
        "e → out of",
        "margo → edge, margin, border"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˈmɑr.dʒɪ.nɪt/"
  },
  {
    "word": "rodomontade",
    "pos": "noun",
    "definition": "Boastful or inflated talk or behavior; vain bragging.",
    "example": "His speech dissolved into rodomontade within three paragraphs, and the room lost interest.",
    "roots": {
      "origin": "From 'Rodomonte,' the boastful Saracen king in Ariosto's 'Orlando Furioso' (1516), whose name became synonymous with blustering pride."
    },
    "tier": 3,
    "pronunciation": "/ˌrɒd.ə.mɒnˈteɪd/"
  },
  {
    "word": "fanfaronade",
    "pos": "noun",
    "definition": "Swaggering or empty boasting; an arrogant show of bravado.",
    "example": "His fanfaronade before the match evaporated the moment he actually had to play.",
    "roots": {
      "origin": "French 'fanfaronnade,' from 'fanfaron' (braggart, boaster), from Spanish 'fanfarrón.' Ultimately of uncertain Arabic or onomatopoeic origin.",
      "parts": [
        "fanfarrón → braggart, blusterer"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌfæn.fær.əˈneɪd/"
  },
  {
    "word": "ergophobia",
    "pos": "noun",
    "definition": "An abnormal fear of, or aversion to, work.",
    "example": "Whether it was clinical ergophobia or just profound lack of motivation was, he felt, a distinction without a practical difference.",
    "roots": {
      "origin": "Greek 'ergon' (work) + 'phobos' (fear).",
      "parts": [
        "ergon → work",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɜr.ɡoʊˈfoʊ.bi.ə/"
  },
  {
    "word": "horripilation",
    "pos": "noun",
    "definition": "The standing on end of the hairs on the skin caused by cold, fear, or excitement; goosebumps.",
    "example": "The opening chord of the symphony produced immediate horripilation — every hair on her arm rose at once.",
    "roots": {
      "origin": "Latin 'horripilatio,' from 'horrere' (to bristle, tremble) + 'pilus' (hair).",
      "parts": [
        "horrere → to bristle, be horrified",
        "pilus → hair"
      ]
    },
    "tier": 3,
    "pronunciation": "/hɒˌrɪp.ɪˈleɪ.ʃən/"
  },
  {
    "word": "frisson",
    "pos": "noun",
    "definition": "A sudden, intense feeling of excitement or shiver of emotion, often pleasurable.",
    "example": "A frisson ran through the audience the moment the actor stepped into the light.",
    "roots": {
      "origin": "French 'frisson' (shiver, shudder), from Old French 'friçon,' from Latin 'frigere' (to be cold).",
      "parts": [
        "frigere → to be cold, to shiver"
      ]
    },
    "tier": 3,
    "pronunciation": "/friˈsɒn/"
  },
  {
    "word": "jouissance",
    "pos": "noun",
    "definition": "An overwhelming sense of pleasure, bliss, or enjoyment; in literary theory, a kind of excessive, transgressive pleasure that disrupts the subject.",
    "example": "She bit into the peach and felt something close to jouissance — too much, too ripe, too perfect to contain.",
    "roots": {
      "origin": "French 'jouissance' (pleasure, enjoyment), from 'jouir' (to enjoy), from Latin 'gaudere' (to rejoice).",
      "parts": [
        "gaudere → to rejoice, be glad"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈʒwi.sɑns/"
  },
  {
    "word": "pettifogging",
    "pos": "adjective",
    "definition": "Placing excessive emphasis on petty details; quibbling over trifles; practicing law in a mean or dishonest way.",
    "example": "The pettifogging argument about font size consumed the entire budget meeting.",
    "roots": {
      "origin": "From 'pettifogger' (a rascally lawyer), from 'petty' (small, trivial) + 'fogger' (possibly from the Fugger banking family, used as a byword for unscrupulous dealing).",
      "parts": [
        "petty → small, minor",
        "fogger → unscrupulous dealer"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɛt.i.fɒɡ.ɪŋ/"
  },
  {
    "word": "cacoepy",
    "pos": "noun",
    "definition": "Incorrect pronunciation of words.",
    "example": "His cacoepy — insisting on 'ek-cetera' for 'et cetera' — drove the linguist at the next desk silently mad.",
    "roots": {
      "origin": "Greek 'kakos' (bad, evil) + 'epos' (word, speech).",
      "parts": [
        "kakos → bad, evil",
        "epos → word, speech"
      ]
    },
    "tier": 3,
    "pronunciation": "/kæˈkoʊ.ə.pi/"
  },
  {
    "word": "presque vu",
    "pos": "noun",
    "definition": "The tip-of-the-tongue phenomenon; the frustrating sensation of almost but not quite being able to recall a word, name, or memory.",
    "example": "She spent three minutes in presque vu, the word hovering just behind her tongue, refusing to surface.",
    "roots": {
      "origin": "French 'presque vu' — literally 'almost seen.' Borrowed into psychological literature to describe the subjective experience of near-retrieval.",
      "parts": [
        "presque → almost",
        "vu → seen"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌprɛsk ˈvu/"
  },
  {
    "word": "opisthograph",
    "pos": "noun",
    "definition": "A manuscript or document written on both sides; an inscription found on the back of a tablet or monument.",
    "example": "The scroll was an opisthograph, text running across both surfaces, front and back.",
    "roots": {
      "origin": "Greek 'opisthen' (behind, at the back) + 'graphein' (to write).",
      "parts": [
        "opisthen → behind, at the back",
        "graphein → to write"
      ]
    },
    "tier": 3,
    "pronunciation": "/əˈpɪs.θə.ɡræf/"
  },
  {
    "word": "scriptio continua",
    "pos": "noun",
    "definition": "Ancient writing with no spaces between words or sentences, making the text a continuous stream of letters.",
    "example": "Reading ancient Greek required fluency with scriptio continua — a wall of letters the reader had to parse into meaning.",
    "roots": {
      "origin": "Latin 'scriptio' (a writing) + 'continua' (continuous, unbroken).",
      "parts": [
        "scriptio → a writing, inscription",
        "continua → continuous, unbroken"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈskrɪp.ti.oʊ kənˈtɪn.ju.ə/"
  },
  {
    "word": "errata",
    "pos": "noun",
    "definition": "A list of errors found in a printed work, with their corrections.",
    "example": "The errata slip tucked into the first edition was longer than the preface.",
    "roots": {
      "origin": "Latin 'errata,' plural of 'erratum' (error, mistake), from 'errare' (to wander, to err).",
      "parts": [
        "errare → to wander, to err, to be wrong"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˈrɑ.tə/"
  },
  {
    "word": "incunabulum",
    "pos": "noun",
    "definition": "A book printed before the year 1501, in the very earliest period of European printing.",
    "example": "The rare books room held a single incunabulum behind glass — a Gutenberg-era Bible still fragrant with age.",
    "roots": {
      "origin": "Latin 'incunabulum' (cradle, birthplace), from 'in' (in) + 'cunae' (cradle). Used metaphorically for 'the cradle of printing.'",
      "parts": [
        "in → in",
        "cunae → cradle"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɪŋ.kjʊˈnæb.jʊ.ləm/"
  },
  {
    "word": "serein",
    "pos": "noun",
    "definition": "Fine rain falling from a clear sky after sunset, often barely perceptible but enough to dampen the ground.",
    "example": "Walking home after the theater, she felt the serein on her arms — a ghost of weather with no clouds to explain it.",
    "roots": {
      "origin": "French 'serein' from Latin 'serenus' (clear, calm). The paradox of rain from a cloudless sky is embedded in the word itself.",
      "parts": [
        "serenus → clear, serene"
      ]
    },
    "tier": 3,
    "pronunciation": "/səˈrɛ̃/"
  },
  {
    "word": "cataglottism",
    "pos": "noun",
    "definition": "The practice of kissing with the tongue; a deep or passionate kiss.",
    "example": "The scene required nothing more than a brief cataglottism, but the director insisted on seventeen takes.",
    "roots": {
      "origin": "Greek 'kata' (down, thoroughly) + 'glotta' (tongue). A clinical-sounding term for something decidedly not clinical.",
      "parts": [
        "kata → down, thoroughly",
        "glotta → tongue"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌkæt.əˈɡlɒt.ɪz.əm/"
  },
  {
    "word": "graupel",
    "pos": "noun",
    "definition": "Soft, pellet-like balls of snow formed when supercooled water droplets freeze onto falling snowflakes, creating a pellet softer than hail.",
    "example": "The hike was interrupted not by snow or hail but by graupel — tiny white pellets that bounced off his jacket like styrofoam beads.",
    "roots": {
      "origin": "German 'Graupel' (sleet, soft hail), diminutive of 'Graupe' (hulled grain, pearl barley). Named for its resemblance to small grains.",
      "parts": [
        "Graupe → hulled grain, pearl barley"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɡraʊ.pəl/"
  },
  {
    "word": "mammatus",
    "pos": "noun",
    "definition": "Rare pouch-like cloud formations that hang beneath the base of a cumulonimbus cloud, indicating severe turbulence above.",
    "example": "The sky turned a sickly green and filled with mammatus — that unmistakable sign that the storm above was doing something extraordinary.",
    "roots": {
      "origin": "Latin 'mamma' (breast, udder). The name describes the rounded, drooping pouches that give these clouds their distinctive appearance.",
      "parts": [
        "mamma → breast, udder"
      ]
    },
    "tier": 3,
    "pronunciation": "/məˈmeɪ.təs/"
  },
  {
    "word": "frazil",
    "pos": "noun",
    "definition": "A collection of loose, randomly oriented ice crystals that form in supercooled turbulent water before freezing solidifies into a sheet.",
    "example": "The river's surface shimmered with frazil — that strange soupy state between water and ice that precedes a hard freeze.",
    "roots": {
      "origin": "French Canadian 'frasil' (cinder, snow floating in water), possibly from French 'fraise' (ruff, frill). The term entered English through Canadian usage.",
      "parts": [
        "frasil → cinder, ash"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈfreɪ.zɪl/"
  },
  {
    "word": "haboob",
    "pos": "noun",
    "definition": "A violent, suffocating sandstorm driven by strong winds, characteristic of arid regions such as the Sahara, Arabian Peninsula, and the American Southwest.",
    "example": "The haboob rolled across Phoenix like a brown wall a thousand feet high, swallowing the city in minutes.",
    "roots": {
      "origin": "Arabic 'habub' (blowing furiously), from 'habb' (to blow). The term was adopted from Arabic-speaking Sudan into English meteorology.",
      "parts": [
        "habub → blowing furiously"
      ]
    },
    "tier": 3,
    "pronunciation": "/həˈbuːb/"
  },
  {
    "word": "gelotophobia",
    "pos": "noun",
    "definition": "An intense, pathological fear of being laughed at or ridiculed, distinct from ordinary embarrassment in its severity and persistence.",
    "example": "His gelotophobia made social gatherings torturous — every burst of laughter from across the room felt directed at him.",
    "roots": {
      "origin": "Greek 'geloto' (laughter, from 'gelos') + 'phobos' (fear). Identified as a clinical construct by psychologist Michael Titze in the 1990s.",
      "parts": [
        "gelos → laughter",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌdʒɛl.ə.toʊˈfoʊ.bi.ə/"
  },
  {
    "word": "chorophobia",
    "pos": "noun",
    "definition": "An abnormal fear of dancing or of being required to dance.",
    "example": "His chorophobia was finally diagnosed when his therapist noted that he had missed three weddings, a quinceañera, and his own work holiday party.",
    "roots": {
      "origin": "Greek 'khoros' (dance, dancing ground — the same root as 'choreography') + 'phobos' (fear).",
      "parts": [
        "khoros → dance, chorus",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌkɔr.oʊˈfoʊ.bi.ə/"
  },
  {
    "word": "catoptrophobia",
    "pos": "noun",
    "definition": "A persistent, irrational fear of mirrors.",
    "example": "She covered every mirror in the apartment on moving day, a ritual the landlord had learned not to question given the prevalence of catoptrophobia.",
    "roots": {
      "origin": "Greek 'katoptron' (mirror, from 'kata' + 'optomai' — to see thoroughly) + 'phobos' (fear).",
      "parts": [
        "katoptron → mirror",
        "kata → down, thoroughly",
        "optomai → to see",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/kəˌtɒp.troʊˈfoʊ.bi.ə/"
  },
  {
    "word": "athazagoraphobia",
    "pos": "noun",
    "definition": "The fear of being ignored, forgotten, or replaced; an anxiety about becoming invisible or irrelevant to others.",
    "example": "She checked her messages compulsively — a textbook case of athazagoraphobia that her therapist traced back to a childhood of being overlooked.",
    "roots": {
      "origin": "From Greek 'athazagora' (to forget, be ignored) + 'phobos' (fear). A relatively modern coinage in psychological literature.",
      "parts": [
        "athazagora → to forget, ignore",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/əˌθæz.ə.ɡɔr.əˈfoʊ.bi.ə/"
  },
  {
    "word": "somniphobia",
    "pos": "noun",
    "definition": "An intense fear of falling asleep, often stemming from nightmares, fear of loss of control, or anxiety about death.",
    "example": "His somniphobia meant he fought sleep each night as though it were an enemy, arriving at dawn exhausted but triumphant.",
    "roots": {
      "origin": "Latin 'somnus' (sleep) + Greek 'phobos' (fear). A hybrid coinage combining Latin and Greek roots, common in medical terminology.",
      "parts": [
        "somnus → sleep",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌsɒm.nɪˈfoʊ.bi.ə/"
  },
  {
    "word": "trypophobia",
    "pos": "noun",
    "definition": "A strong aversion or disgust response triggered by clusters of small holes, bumps, or irregular patterns.",
    "example": "She couldn't look at a lotus seed pod without a visceral wave of trypophobia washing over her.",
    "roots": {
      "origin": "Greek 'trypa' (hole) + 'phobos' (fear/aversion). Coined informally around 2005 and widely discussed despite ongoing debate over its classification.",
      "parts": [
        "trypa → hole",
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌtrɪp.oʊˈfoʊ.bi.ə/"
  },
  {
    "word": "phobophobia",
    "pos": "noun",
    "definition": "The fear of having a phobia, or the fear of fear itself — an anxiety about experiencing anxiety.",
    "example": "His phobophobia had become self-fulfilling: the fear of developing a fear had become its own debilitating fear.",
    "roots": {
      "origin": "Greek 'phobos' (fear) + 'phobos' (fear) — the word is a reduplication of the same root, making it etymologically precise for once.",
      "parts": [
        "phobos → fear"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌfoʊ.boʊˈfoʊ.bi.ə/"
  },
  {
    "word": "cacchination",
    "pos": "noun",
    "definition": "Loud, immoderate, or uncontrolled laughter; raucous, prolonged laughing that is often seen as unseemly.",
    "example": "The eulogy was going fine until a poorly timed slip of the tongue triggered cacchination from the third row that spread through the whole chapel.",
    "roots": {
      "origin": "Latin 'cachinnatio' (immoderate laughter), from 'cachinnare' (to laugh loudly). The doubled 'cc' and 'nn' mimic the sound of boisterous laughter.",
      "parts": [
        "cachinnare → to laugh loudly, immoderately"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌkæk.ɪˈneɪ.ʃən/"
  },
  {
    "word": "risibility",
    "pos": "noun",
    "definition": "The capacity or tendency to laugh; the quality of being able to see the humorous side of things.",
    "example": "Years of working in an emergency room had honed her risibility into something sharp and necessary — a survival tool.",
    "roots": {
      "origin": "Latin 'risibilis' (laughable, able to laugh), from 'ridere' (to laugh). Philosophers once debated whether risibility was uniquely human.",
      "parts": [
        "ridere → to laugh",
        "risus → laughter"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌrɪz.ɪˈbɪl.ɪ.ti/"
  },
  {
    "word": "fleer",
    "pos": "verb",
    "definition": "To laugh mockingly or sneeringly at someone; to make faces of contempt or derision.",
    "example": "The courtiers fleered behind their hands as the new ambassador fumbled the formal greeting.",
    "roots": {
      "origin": "Scandinavian origin; compare Norwegian 'flire' (to snicker, giggle). Related to Old Norse 'flíra' (to grin). Entered Middle English as a term for contemptuous smirking.",
      "parts": [
        "flira → to grin, snicker"
      ]
    },
    "tier": 3,
    "pronunciation": "/flɪr/"
  },
  {
    "word": "quiritation",
    "pos": "noun",
    "definition": "The act of crying out for help; a loud lamentation or wailing appeal.",
    "example": "The neighbors mistook her quiritation for a domestic dispute; in fact, she had simply spotted a spider.",
    "roots": {
      "origin": "Latin 'quiritatio' (a crying out, wailing), from 'Quirites' (Roman citizens) — referring to the traditional Roman cry for help invoking one's rights as a citizen.",
      "parts": [
        "quiritare → to cry out, wail"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌkwɪr.ɪˈteɪ.ʃən/"
  },
  {
    "word": "eiron",
    "pos": "noun",
    "definition": "A self-deprecating character in comedy who plays dumb or pretends ignorance while actually being cunning; the opposite of a braggart.",
    "example": "Socrates was history's most celebrated eiron — feigning ignorance while dismantling the certainties of everyone he met.",
    "roots": {
      "origin": "Greek 'eiron' (a dissembler, one who says less than he thinks), from 'eirein' (to say). The root of 'irony' itself.",
      "parts": [
        "eirein → to say",
        "eiron → dissembler, self-deprecator"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈaɪ.rɒn/"
  },
  {
    "word": "plenilune",
    "pos": "noun",
    "definition": "The time of the full moon; the full moon itself.",
    "example": "They had agreed to meet at plenilune, when the garden would be bright enough to walk without lanterns.",
    "roots": {
      "origin": "Latin 'plenus' (full) + 'luna' (moon). A poetic and archaic term that survives mainly in literary contexts.",
      "parts": [
        "plenus → full",
        "luna → moon"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈplɛn.ɪ.luːn/"
  },
  {
    "word": "vespertine",
    "pos": "adjective",
    "definition": "Of, relating to, or occurring in the evening; active or blossoming in the evening hours.",
    "example": "The garden was planted with vespertine flowers that released their fragrance only after sunset.",
    "roots": {
      "origin": "Latin 'vespertinus' (of the evening), from 'vesper' (evening star, evening). Related to Greek 'hesperos' (evening star, Hesperus).",
      "parts": [
        "vesper → evening, evening star"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈvɛs.pər.tɪn/"
  },
  {
    "word": "noctiluca",
    "pos": "noun",
    "definition": "A bioluminescent marine organism that causes the sea to glow blue-green at night when disturbed.",
    "example": "Every wave that broke against the hull lit up with noctiluca, turning the dark ocean into a field of cold blue fire.",
    "roots": {
      "origin": "Latin 'nox/noctis' (night) + 'lux/lucis' (light). The literal meaning is 'night light' — an accurate description of these single-celled organisms.",
      "parts": [
        "nox → night",
        "lux → light"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌnɒk.tɪˈluː.kə/"
  },
  {
    "word": "matutinal",
    "pos": "adjective",
    "definition": "Of, relating to, or occurring in the morning; pertaining to the early hours of the day.",
    "example": "His matutinal run took him past the bakery just as the first loaves came out, a coincidence he had engineered carefully.",
    "roots": {
      "origin": "Latin 'matutinalis', from 'Matuta' (the Roman goddess of the dawn) + 'mane' (morning). Related to 'matins', the earliest of the canonical hours.",
      "parts": [
        "Matuta → goddess of dawn",
        "mane → morning"
      ]
    },
    "tier": 3,
    "pronunciation": "/məˈtjuː.tɪ.nəl/"
  },
  {
    "word": "hebdomadal",
    "pos": "adjective",
    "definition": "Occurring once a week; weekly.",
    "example": "The hebdomadal newsletter had run uninterrupted for forty-three years, a record that filled the editor with quiet pride.",
    "roots": {
      "origin": "Greek 'hebdomas' (a group of seven, a week), from 'hepta' (seven). The Hebdomadal Council is still the name of Oxford University's governing body.",
      "parts": [
        "hepta → seven",
        "hebdomas → group of seven, week"
      ]
    },
    "tier": 3,
    "pronunciation": "/hɛbˈdɒm.ə.dəl/"
  },
  {
    "word": "interlunar",
    "pos": "adjective",
    "definition": "Relating to the brief period between the old moon and the new moon when the moon is invisible in the sky.",
    "example": "Poets have long found the interlunar nights particularly suited to introspection — that moonless gap between one cycle and the next.",
    "roots": {
      "origin": "Latin 'inter' (between) + 'luna' (moon). Milton used 'interlunary' in Samson Agonistes. The concept refers to the moon's dark interval.",
      "parts": [
        "inter → between",
        "luna → moon"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɪn.tərˈluː.nər/"
  },
  {
    "word": "solstitial",
    "pos": "adjective",
    "definition": "Of or relating to a solstice; occurring at or near the time when the sun reaches its northernmost or southernmost point.",
    "example": "The ancient stones were aligned to capture the solstitial sunrise, framing the light precisely as it crept across the chamber floor.",
    "roots": {
      "origin": "Latin 'solstitium' (solstice), from 'sol' (sun) + 'sistere' (to stand still). The sun appears to halt its northward or southward drift at the solstice.",
      "parts": [
        "sol → sun",
        "sistere → to stand still"
      ]
    },
    "tier": 3,
    "pronunciation": "/sɒlˈstɪʃ.əl/"
  },
  {
    "word": "flong",
    "pos": "noun",
    "definition": "A papier-mâché mold made from a page of set type, used in the stereotype printing process to cast metal printing plates.",
    "example": "The old compositor had a shelf of flongs from famous front pages — impressions of history pressed into papier-mâché.",
    "roots": {
      "origin": "French 'flan' (a flat disc, mold). The flong was an intermediate step in stereotype printing that allowed type to be duplicated without resetting.",
      "parts": [
        "flan → mold, flat disc"
      ]
    },
    "tier": 3,
    "pronunciation": "/flɒŋ/"
  },
  {
    "word": "quire",
    "pos": "noun",
    "definition": "A set of four sheets of paper or parchment folded in half to make eight leaves; also, twenty-five sheets of paper.",
    "example": "The manuscript arrived in separate quires, stitched loosely together by a monk who had clearly run out of thread.",
    "roots": {
      "origin": "Old French 'quaier' (bundle of paper), from Latin 'quaternio' (a group of four), from 'quattuor' (four). The bookmaking unit.",
      "parts": [
        "quattuor → four",
        "quaternio → group of four"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkwaɪər/"
  },
  {
    "word": "bastard title",
    "pos": "noun",
    "definition": "A short title of a book printed on the recto page preceding the full title page, also called the half-title.",
    "example": "The bibliographer noted that the bastard title used a different typeface than the main title page, suggesting the sheets came from different print runs.",
    "roots": {
      "origin": "In bookmaking terminology, 'bastard' has long meant something irregular or abbreviated. The bastard title is a shortened, preliminary version of the true title.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/ˈbæs.tərd ˈtaɪ.təl/"
  },
  {
    "word": "catchword",
    "pos": "noun",
    "definition": "In early printing, the word printed at the bottom of a page that is the first word of the following page, used to help binders assemble pages correctly.",
    "example": "The forger betrayed himself through an anachronistic typeface; an expert noticed the catchword was in a font not yet invented in the manuscript's supposed year.",
    "roots": {
      "origin": "From 'catch' + 'word'. The term dates to early printing practice when sheets were assembled by hand and the catchword guided the binder's sequence.",
      "parts": [
        "catch → to catch, hold",
        "word → word"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkætʃ.wɜrd/"
  },
  {
    "word": "compositor",
    "pos": "noun",
    "definition": "A person who sets type, either by hand or machine, in traditional letterpress printing.",
    "example": "The compositor worked backwards and in mirror image, setting each letter by feel into the composing stick without looking up.",
    "roots": {
      "origin": "Latin 'compositor' (arranger, setter), from 'componere' (to put together). The same root gives us 'compose' and 'composition.'",
      "parts": [
        "componere → to put together",
        "com → together",
        "ponere → to place"
      ]
    },
    "tier": 3,
    "pronunciation": "/kəmˈpɒz.ɪ.tər/"
  },
  {
    "word": "duodecimo",
    "pos": "noun",
    "definition": "A book format in which each printed sheet is folded into twelve leaves, producing a small, portable book.",
    "example": "The pocket-sized duodecimo was the paperback of its era — cheap enough for common readers, small enough to conceal from disapproving parents.",
    "roots": {
      "origin": "Latin 'duodecimus' (twelfth), from 'duo' (two) + 'decem' (ten). The name describes how many times the sheet is folded.",
      "parts": [
        "duo → two",
        "decem → ten",
        "duodecimus → twelfth"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌduː.oʊˈdɛs.ɪ.moʊ/"
  },
  {
    "word": "justify",
    "pos": "verb",
    "definition": "In typography, to adjust the spacing within lines of text so that they align evenly with both the left and right margins.",
    "example": "The typesetter would justify each line by adjusting the spaces between words until both edges of the column ran perfectly straight.",
    "roots": {
      "origin": "Latin 'justificare' (to make right, show to be just), from 'justus' (just, straight) + 'facere' (to make). In typography, 'straight' and 'just' converge.",
      "parts": [
        "justus → straight, just",
        "facere → to make"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdʒʌs.tɪ.faɪ/"
  },
  {
    "word": "gutter",
    "pos": "noun",
    "definition": "In bookbinding and typography, the blank space between two facing pages at the inner margin where they meet the spine.",
    "example": "The designer warned that the illustration would lose detail in the gutter — that shadowy valley where the book's spine consumed half the image.",
    "roots": {
      "origin": "Old French 'goutiere' (water channel, gutter), from 'goute' (drop). The typographic gutter shares its name with the street gutter: both are channels that collect what runs to the edges.",
      "parts": [
        "goute → drop",
        "goutiere → channel, gutter"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɡʌt.ər/"
  },
  {
    "word": "binnacle",
    "pos": "noun",
    "definition": "A housing or case on a ship's deck that contains and protects the compass and its lighting.",
    "example": "The helmsman kept one eye on the binnacle and one on the horizon, a doubled attention born of decades at sea.",
    "roots": {
      "origin": "Portuguese 'bitacola' (binnacle), from Latin 'habitaculum' (dwelling place, small shelter). The binnacle is literally the compass's little house.",
      "parts": [
        "habitaculum → dwelling, small shelter",
        "habitare → to dwell"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈbɪn.ə.kəl/"
  },
  {
    "word": "kedge",
    "pos": "verb",
    "definition": "To move a boat by means of a small anchor dropped ahead of the vessel and then hauled in on the anchor line.",
    "example": "With no wind to fill the sails, the crew kedged the sloop through the narrows one anchor-length at a time.",
    "roots": {
      "origin": "Origin uncertain; possibly from Middle English 'caggen' (to tie, fasten). Nautical usage appears by the 15th century. A kedge anchor is a light anchor used for this purpose.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/kɛdʒ/"
  },
  {
    "word": "athwart",
    "pos": "adverb",
    "definition": "Across from side to side; transversely. In a nautical context, across the line of a ship's course.",
    "example": "A massive container ship sat athwart our path, and we had perhaps two minutes to decide whether to alter course.",
    "roots": {
      "origin": "Middle English 'athwert', from Old Norse 'þvert' (across), from 'þverr' (transverse). A word of purely Norse maritime heritage.",
      "parts": [
        "þverr → transverse, across"
      ]
    },
    "tier": 3,
    "pronunciation": "/əˈθwɔrt/"
  },
  {
    "word": "leeway",
    "pos": "noun",
    "definition": "The sideways drift of a ship caused by wind; more broadly, freedom of action or extra time beyond what is strictly required.",
    "example": "The project was two weeks ahead of schedule, which gave them some leeway to handle the compliance review without panic.",
    "roots": {
      "origin": "From 'lee' (shelter from the wind, the downwind side of a ship) + 'way' (movement, direction). The lee side is the side sheltered from the wind.",
      "parts": [
        "lee → sheltered side, downwind",
        "way → movement, direction"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈliː.weɪ/"
  },
  {
    "word": "scuttlebutt",
    "pos": "noun",
    "definition": "Informal gossip or rumor; originally, a cask of drinking water on a ship around which sailors would gather and talk.",
    "example": "The scuttlebutt in the break room was that the CEO would resign before the audit concluded.",
    "roots": {
      "origin": "'Scuttled butt' — a butt (barrel) with a hole (scuttled) cut in it for drinking water. Sailors gossiped around it much as office workers gossip around water coolers.",
      "parts": [
        "scuttle → to cut a hole in",
        "butt → barrel, cask"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈskʌt.əl.bʌt/"
  },
  {
    "word": "fathom",
    "pos": "verb",
    "definition": "To understand something fully after much thought; originally, to measure the depth of water with a sounding line.",
    "example": "She could not fathom why anyone would voluntarily spend three weeks on a ship with no Wi-Fi.",
    "roots": {
      "origin": "Old English 'fæthm' (outstretched arms, the span of two arms). A fathom (6 feet) is the span of two outstretched adult arms — used to measure rope and depth.",
      "parts": [
        "fæthm → outstretched arms, embrace"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈfæð.əm/"
  },
  {
    "word": "doldrums",
    "pos": "noun",
    "definition": "A state of inactivity, stagnation, or depression; originally, a region near the equator characterized by calms and light winds that could trap sailing ships.",
    "example": "The album's third track pulled the band out of the commercial doldrums they'd been stuck in for three years.",
    "roots": {
      "origin": "Early 19th century; possibly from 'dull' + '-drums' (a suffix suggesting a state, as in 'tantrum'). The nautical sense gave rise to the emotional metaphor.",
      "parts": [
        "dull → sluggish, inactive"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdoʊl.drəmz/"
  },
  {
    "word": "ceilidh",
    "pos": "noun",
    "definition": "A traditional Scottish or Irish social gathering featuring folk music, singing, and group dancing.",
    "example": "The village hall was transformed every Friday into a ceilidh, with reels and jigs that went until the candles burned low.",
    "roots": {
      "origin": "Scottish Gaelic 'cèilidh' (visit, social call), from Old Irish 'céilide' (visit, companion), ultimately from 'céile' (companion, spouse). Related to Welsh 'ceiliwad.'",
      "parts": [
        "céile → companion, partner"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkeɪ.li/"
  },
  {
    "word": "blether",
    "pos": "verb",
    "definition": "To talk at length without saying anything important; to chatter or prattle (chiefly Scottish and northern English).",
    "example": "He blethered on about property values for forty minutes before anyone could get a word in edgeways.",
    "roots": {
      "origin": "Old Norse 'blathra' (to talk nonsense), from 'bladhr' (nonsense, chatter). A characteristically Scottish word for self-important empty talk.",
      "parts": [
        "blathra → to talk nonsense",
        "bladhr → nonsense"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈblɛð.ər/"
  },
  {
    "word": "drouth",
    "pos": "noun",
    "definition": "A Scottish and dialectal form of 'drought'; also used figuratively for a great thirst, or a person who is chronically thirsty.",
    "example": "After the harvest, the farmers gathered at the inn with a drouth that no ordinary round could satisfy.",
    "roots": {
      "origin": "Old English 'drugath' (dryness, drought), from 'dreogan' (to suffer, endure). The Scottish form preserved the older ending that Standard English later replaced.",
      "parts": [
        "drugath → dryness",
        "dreogan → to suffer, endure"
      ]
    },
    "tier": 3,
    "pronunciation": "/draʊθ/"
  },
  {
    "word": "thole",
    "pos": "verb",
    "definition": "To endure, bear, or put up with (chiefly Scottish); to suffer something patiently.",
    "example": "She could thole the cold, the distance, and the solitude — but she could not thole the silence of a letter never sent.",
    "roots": {
      "origin": "Old English 'þolian' (to bear, endure), related to Gothic 'þulan' (to endure) and Old Norse 'þola'. A survival of Old English in Scottish dialects.",
      "parts": [
        "þolian → to bear, endure"
      ]
    },
    "tier": 3,
    "pronunciation": "/θoʊl/"
  },
  {
    "word": "scunner",
    "pos": "noun",
    "definition": "A strong feeling of disgust, loathing, or aversion (Scottish); also, something that causes such feeling.",
    "example": "The smell of the place gave him a scunner he carried in his nostrils for the rest of the afternoon.",
    "roots": {
      "origin": "Middle English 'skunner' (to shrink back with disgust), of uncertain origin, possibly Scandinavian. Widespread in Scottish English to denote visceral revulsion.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/ˈskʌn.ər/"
  },
  {
    "word": "braw",
    "pos": "adjective",
    "definition": "Fine, excellent, or splendid (Scottish); also used to describe a fine-looking person.",
    "example": "It was a braw morning — the kind of clear, cold, glittering day that made the Highlands look like a painting.",
    "roots": {
      "origin": "Scottish variant of 'brave' (fine, handsome), from Old French 'brave' (bold, fine), from Italian 'bravo'. In Scots, the English sense of 'bold' gave way to 'fine, excellent.'",
      "parts": [
        "brave → bold, fine, excellent"
      ]
    },
    "tier": 3,
    "pronunciation": "/brɔː/"
  },
  {
    "word": "cwtch",
    "pos": "noun",
    "definition": "A Welsh word for a small storage cupboard under stairs; also, a loving cuddle or safe, snug hideaway.",
    "example": "They had converted the cwtch under the stairs into a reading nook with a lamp, two cushions, and a small shelf.",
    "roots": {
      "origin": "Welsh 'cwtch', from Old French 'couche' (a bed, a lying-down place), ultimately from 'coucher' (to lie down). The word spans the practical and the tender.",
      "parts": [
        "coucher → to lie down",
        "couche → a bed, resting place"
      ]
    },
    "tier": 3,
    "pronunciation": "/kʊtʃ/"
  },
  {
    "word": "craic",
    "pos": "noun",
    "definition": "Irish English for fun, entertainment, lively conversation, or good times; the enjoyment of good company.",
    "example": "The pub was packed and loud, and the craic was, by general agreement, ninety — meaning absolutely excellent.",
    "roots": {
      "origin": "Irish 'craic', borrowed in the 20th century from Scots/Northern English 'crack' (lively conversation). The Irish spelling became the standard form in Irish English.",
      "parts": [
        "crack → lively talk, fun"
      ]
    },
    "tier": 3,
    "pronunciation": "/kræk/"
  },
  {
    "word": "shebeen",
    "pos": "noun",
    "definition": "An unlicensed establishment where alcohol is sold illegally; a rough drinking den (originally Irish, also used in South African English).",
    "example": "The whiskey at the shebeen was rough but cheap, and the conversation was better than anything served at the licensed inn across the road.",
    "roots": {
      "origin": "Irish 'sibín' (illicit whiskey, bad ale), possibly from 'séibe' (mugful). The word spread via Irish immigration to South African English, where it remains in use.",
      "parts": [
        "sibín → small mug, illicit drink"
      ]
    },
    "tier": 3,
    "pronunciation": "/ʃɪˈbiːn/"
  },
  {
    "word": "feculent",
    "pos": "adjective",
    "definition": "Full of fecal matter or other filthy sediment; foul and turbid.",
    "example": "The archaeologists worked around the feculent drainage trench with professional detachment, cataloguing what they found.",
    "roots": {
      "origin": "Latin 'faeculentus' (full of dregs, muddy), from 'faex/faecis' (dregs, sediment, excrement). Related to 'feces' and 'faecal.'",
      "parts": [
        "faex → dregs, sediment, filth"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈfɛk.jʊ.lənt/"
  },
  {
    "word": "fumet",
    "pos": "noun",
    "definition": "A rich, concentrated stock made by simmering fish bones and scraps, used as a base for sauces.",
    "example": "The bisque began with a fumet simmered for forty minutes — every fish bone in the kitchen pressed into service.",
    "roots": {
      "origin": "French 'fumet' (aroma, the smell of game), from 'fumer' (to smoke, to smell), from Latin 'fumare'. In culinary French, the term came to mean intensely flavored broth.",
      "parts": [
        "fumer → to smoke, to smell",
        "fumus → smoke, fume"
      ]
    },
    "tier": 3,
    "pronunciation": "/fjuːˈmɛt/"
  },
  {
    "word": "chiffonade",
    "pos": "noun",
    "definition": "A preparation method in which herbs or leafy vegetables are stacked, rolled tightly, and cut into thin ribbons.",
    "example": "She scattered a chiffonade of fresh basil over the soup — thin green ribbons that wilted just slightly in the steam.",
    "roots": {
      "origin": "French 'chiffonade', from 'chiffon' (rag, thin fabric), from 'chiffe' (flimsy cloth). The thin ribbons of cut herbs evoke thin strips of textile.",
      "parts": [
        "chiffon → thin fabric, rag",
        "chiffe → flimsy cloth"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌʃɪf.əˈnɑːd/"
  },
  {
    "word": "suet",
    "pos": "noun",
    "definition": "The hard white fat surrounding the kidneys and loins of cattle and sheep, used in pastry-making and traditional British puddings.",
    "example": "A proper steamed pudding required suet — that dense, waxy fat that gave the crust its characteristic richness and weight.",
    "roots": {
      "origin": "Anglo-French 'suet', from Old French 'seu' (tallow), from Latin 'sebum' (tallow, grease). The English word came via the French kitchen traditions of the Norman conquest.",
      "parts": [
        "sebum → tallow, grease"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈsuː.ɪt/"
  },
  {
    "word": "spatchcock",
    "pos": "verb",
    "definition": "To prepare a bird for grilling by removing the backbone and flattening it out before cooking.",
    "example": "He spatchcocked the chicken, pressed it flat under a cast-iron pan, and had it on the table in forty minutes.",
    "roots": {
      "origin": "18th-century Irish English; possibly from 'dispatch-cock' (to dispatch a cock quickly for cooking). Also used figuratively to mean inserting something hastily into a text.",
      "parts": [
        "dispatch → to deal with quickly",
        "cock → rooster, bird"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈspætʃ.kɒk/"
  },
  {
    "word": "mirepoix",
    "pos": "noun",
    "definition": "A mixture of diced onion, carrot, and celery used as a flavor base for stocks, sauces, and braises.",
    "example": "Every French sauce begins the same way: butter in the pan, then mirepoix, then time.",
    "roots": {
      "origin": "Named for the Duc de Lévis-Mirepoix, an 18th-century French marshal whose chef is said to have created the technique. The word is purely a proper name that became a culinary term.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/ˌmɪr.əˈpwɑː/"
  },
  {
    "word": "lardon",
    "pos": "noun",
    "definition": "A small strip or cube of fat or bacon used to lard meat before cooking, or added to salads and cooked dishes.",
    "example": "The frisée salad arrived topped with warm lardons that wilted the greens just enough to make everything glisten.",
    "roots": {
      "origin": "French 'lardon', from 'lard' (bacon, fat), from Latin 'lardum' (fat, lard). Related to 'larding' — the technique of inserting fat into lean meat to keep it moist.",
      "parts": [
        "lardum → fat, lard"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈlɑːr.dɒn/"
  },
  {
    "word": "squinch",
    "pos": "noun",
    "definition": "An architectural feature, such as a small arch or series of arches, filling the inner corner of a square tower to support a circular or octagonal dome above.",
    "example": "The transition from square nave to round dome was achieved through squinches — those invisible engineering solutions hidden in the corners above the congregation.",
    "roots": {
      "origin": "Variant of 'scunch' or 'sconcheon', from Old French 'escoinson' (interior corner of a wall opening). A term of purely architectural specificity.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/skwɪntʃ/"
  },
  {
    "word": "pilaster",
    "pos": "noun",
    "definition": "A rectangular column with a capital and base that is embedded in or projects slightly from a wall, providing the appearance of a load-bearing column without the structural function.",
    "example": "The ballroom walls were lined with pilasters painted to look like marble — architecture as theater, structure as decoration.",
    "roots": {
      "origin": "Italian 'pilastro', from Latin 'pila' (pillar, pier). The '-aster' suffix in Italian often implies something resembling but not fully being the original thing.",
      "parts": [
        "pila → pillar, pier"
      ]
    },
    "tier": 3,
    "pronunciation": "/pɪˈlæs.tər/"
  },
  {
    "word": "dentil",
    "pos": "noun",
    "definition": "One of a series of small, square, tooth-like projecting blocks forming a molding beneath a cornice in classical architecture.",
    "example": "The dentils beneath the cornice were so precisely cut that from the street they looked like actual teeth lining the building's jaw.",
    "roots": {
      "origin": "French 'dentille' (small tooth), from Latin 'dens/dentis' (tooth). The dental metaphor is architecturally precise — these projections do resemble small teeth.",
      "parts": [
        "dens → tooth",
        "dentis → of a tooth"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdɛn.tɪl/"
  },
  {
    "word": "transom",
    "pos": "noun",
    "definition": "A horizontal crossbar dividing a window or the space above a door from the window; also, the small window above a door.",
    "example": "Light entered through the transom even with the heavy door closed, a thin bright stripe crossing the dark hallway.",
    "roots": {
      "origin": "Latin 'transtrum' (a crossbeam, thwart of a boat), from 'trans' (across) + possibly 'sternere' (to lay). The transom is literally a beam laid across.",
      "parts": [
        "trans → across",
        "transtrum → crossbeam"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtræn.səm/"
  },
  {
    "word": "laitance",
    "pos": "noun",
    "definition": "A thin, weak layer of fine particles that rises to the surface of freshly laid concrete, formed by excess water and bleeding; it reduces the strength of the surface if not removed.",
    "example": "The contractor warned that laitance had formed overnight and would need to be abraded before the floor coating could be applied.",
    "roots": {
      "origin": "French 'laitance' (milt, fish milk), from 'lait' (milk), from Latin 'lac/lactis'. The milky surface residue on wet concrete resembles fish milt.",
      "parts": [
        "lac → milk",
        "lait → milk"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈleɪ.tɑːns/"
  },
  {
    "word": "sneck",
    "pos": "noun",
    "definition": "A latch or catch on a door or gate (chiefly Scottish and northern English); also, a small irregular piece of stone used to fill gaps in masonry.",
    "example": "She lifted the sneck and let the gate swing open into the yard, the old iron cold and smooth from a thousand hands.",
    "roots": {
      "origin": "Middle English 'sneck', of Scandinavian origin; compare Norwegian 'snekke' (latch). The dual meaning (latch and small stone) reflects the word's versatility in craft contexts.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/snɛk/"
  },
  {
    "word": "fipple",
    "pos": "noun",
    "definition": "A plug or block in the mouthpiece of a wind instrument (such as a recorder or tin whistle) that directs the player's breath across the edge of the sound hole to produce sound.",
    "example": "The old recorder's fipple had warped slightly, giving every note a breathy quality that the player chose to call 'character.'",
    "roots": {
      "origin": "Of uncertain origin; first appears in the 17th century in English. Possibly related to Low German or Dutch words for a peg or plug. The fipple is the device that makes a recorder a recorder.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/ˈfɪp.əl/"
  },
  {
    "word": "wattle",
    "pos": "noun",
    "definition": "A woven framework of rods and branches used in construction; also, the fleshy red or pink lobe hanging from the throat of a turkey or chicken.",
    "example": "The medieval cottage walls were made of wattle and daub — the woven twigs plastered over with a clay and straw mixture that outlasted stone.",
    "roots": {
      "origin": "Old English 'watul' (rod, twig, hurdle), of Germanic origin. Related to Old High German 'wadal' (hurdle). An ancient construction technique with a correspondingly ancient name.",
      "parts": [
        "watul → rod, twig, woven frame"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈwɒt.əl/"
  },
  {
    "word": "gormless",
    "pos": "adjective",
    "definition": "Lacking sense or initiative; stupid and vacuous (chiefly British English).",
    "example": "He stood in the kitchen with a gormless expression, staring at the oven as if it had appeared there by magic.",
    "roots": {
      "origin": "From dialectal 'gaum' (attention, heed, understanding), from Old Norse 'gaumr' (heed, attention) + '-less'. 'Gormless' literally means 'without heed or understanding.'",
      "parts": [
        "gaumr → heed, attention, care",
        "-less → without"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɡɔːrm.ləs/"
  },
  {
    "word": "fustilarian",
    "pos": "noun",
    "definition": "A fat, slovenly, low-ranking person; a term of contempt used in Shakespearean English.",
    "example": "Falstaff, recognizing the insult for what it was, returned it: 'You fustilarian! You rascally fustilarian!'",
    "roots": {
      "origin": "Shakespeare coined or adapted this word in Henry IV Part 2. From 'fust' (a mouldy smell) + '-ilarian' (a contemptuous suffix). Related to 'fusty.'",
      "parts": [
        "fust → musty, mouldy smell"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌfʌs.tɪˈlɛər.i.ən/"
  },
  {
    "word": "pillock",
    "pos": "noun",
    "definition": "A stupid or contemptible person (British English, mildly vulgar).",
    "example": "The reviewer called the politician a 'well-meaning pillock' — an insult so perfectly calibrated that it was almost a compliment.",
    "roots": {
      "origin": "16th-century English; originally a dialectal term for the penis, later softened to a general insult for a fool. Possibly from 'pill' (a ball) + diminutive '-ock'.",
      "parts": [
        "pill → ball",
        "-ock → diminutive suffix"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɪl.ək/"
  },
  {
    "word": "pettifogger",
    "pos": "noun",
    "definition": "A lawyer who deals in petty or trivial cases and uses unscrupulous methods; more broadly, someone who argues over trivial details.",
    "example": "Every contract negotiation was delayed by the same pettifogger on the other side, who found objections in punctuation.",
    "roots": {
      "origin": "'Petty' (small, minor) + 'fogger' (probably from the Fugger family, notorious German merchant-bankers associated with sharp practices). To 'fogger' was to huckster or peddle dishonestly.",
      "parts": [
        "petty → small, trivial",
        "fogger → huckster, sharp dealer"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɛt.i.fɒɡ.ər/"
  },
  {
    "word": "mooncalf",
    "pos": "noun",
    "definition": "A foolish, dreamy, or absent-minded person; a simpleton; historically, also a misshapen birth attributed to the influence of the moon.",
    "example": "He wandered through the market like a mooncalf, stopping to stare at everything and buying nothing.",
    "roots": {
      "origin": "Compound of 'moon' + 'calf' (young bovine, hence a simpleton). The moon's influence on birth was a common belief; a 'mooncalf' was originally a monstrous or failed birth.",
      "parts": [
        "moon → the moon",
        "calf → young bovine, simpleton"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈmuːn.kæf/"
  },
  {
    "word": "loblolly",
    "pos": "noun",
    "definition": "A thick gruel or porridge; also used for a medical assistant or surgeon's mate on a naval ship (who was associated with serving such gruel to the sick).",
    "example": "The ship's loblolly boy — barely fifteen and pressed into service — ladled out broth to the fever ward every morning.",
    "roots": {
      "origin": "'Lob' (to bubble, boil) + 'lolly' (broth, liquid). A reduplicative compound suggesting thick, slow-bubbling liquid. The nautical sense comes from the loblolly distributed to the sick.",
      "parts": [
        "lob → to bubble",
        "lolly → liquid, broth"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈlɒb.lɒl.i/"
  },
  {
    "word": "whiffler",
    "pos": "noun",
    "definition": "An official who cleared a path for a procession by waving a sword or staff; later, someone who constantly changes their opinions or arguments.",
    "example": "He accused his opponent of being a whiffler — someone who had held six positions on the same issue across a single campaign.",
    "roots": {
      "origin": "'Whiffle' (to veer, to shift direction, as in wind) + '-er'. The original whifflers swung weapons to clear crowds; the metaphorical sense follows from the evasive, shifting movement.",
      "parts": [
        "whiffle → to shift, veer, evade"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈwɪf.lər/"
  },
  {
    "word": "jobbernowl",
    "pos": "noun",
    "definition": "A blockhead; a person with a thick or heavy head and, by implication, little intelligence.",
    "example": "She whispered to her sister that the committee chair was an utter jobbernowl who had approved the budget without reading a line of it.",
    "roots": {
      "origin": "From 'jobber' (one who works by the job, a middleman of dubious reliability) + 'nowl' (dialectal for 'noll,' meaning the top of the head). Literally 'a jobberly head.'",
      "parts": [
        "nowl → top of the head, noll"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdʒɒb.ər.noʊl/"
  },
  {
    "word": "hobbledehoy",
    "pos": "noun",
    "definition": "An awkward, gawky youth who is neither a child nor fully a man; a clumsy adolescent.",
    "example": "At seventeen he was still a hobbledehoy — all elbows and uncertainty — but by twenty he had grown into his height.",
    "roots": {
      "origin": "Origin obscure; first appears in the 16th century. Possibly a rhyming compound based on 'hobble.' The word perfectly captures the stumbling ungainliness of adolescence.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/ˈhɒb.əl.dɪˌhɔɪ/"
  },
  {
    "word": "dandiprat",
    "pos": "noun",
    "definition": "A small, insignificant person; an urchin or half-penny. Also used as a term of mock affection for a child.",
    "example": "The old woman called every child in the village a dandiprat, which they all took as a term of endearment.",
    "roots": {
      "origin": "From 'dandy' (a small coin, halfpenny) + 'prat' (buttocks, a small thing). Originally referred to a small coin from the early 16th century, then to small or insignificant persons.",
      "parts": [
        "dandy → small coin",
        "prat → a small thing, buttocks"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdæn.dɪ.præt/"
  },
  {
    "word": "popinjay",
    "pos": "noun",
    "definition": "A vain, conceited, talkative person; originally, a parrot or a figure of a parrot used as a target in archery.",
    "example": "The critic dismissed him as a popinjay — all colorful opinions and borrowed plumage, with nothing original underneath.",
    "roots": {
      "origin": "Old French 'papegai' (parrot), from Spanish 'papagayo' or Arabic 'babbaghā'. The parrot's reputation for vain, repetitive talk made 'popinjay' a natural insult for a conceited chatterer.",
      "parts": [
        "papagayo → parrot",
        "babbaghā → parrot"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɒp.ɪn.dʒeɪ/"
  },
  {
    "word": "coxcomb",
    "pos": "noun",
    "definition": "A conceited, silly person; a fop. Originally, the cap worn by a professional court jester, resembling a rooster's comb.",
    "example": "He arrived at the meeting wearing a cravat so elaborate that even his allies exchanged glances — had the man become a coxcomb?",
    "roots": {
      "origin": "'Cock's comb' — the red fleshy crest on a rooster's head, which the fool's cap was designed to resemble. From 'cock' (rooster) + 'comb' (crest).",
      "parts": [
        "cock → rooster",
        "comb → crest, fleshy ridge"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkɒks.koʊm/"
  },
  {
    "word": "farouche",
    "pos": "adjective",
    "definition": "Sullen or shy due to living in isolated or unsophisticated conditions; wild and untamed in appearance or manner.",
    "example": "He was farouche at the literary party — hovering at the edge of the room with the wary eyes of someone unused to crowds.",
    "roots": {
      "origin": "French 'farouche' (wild, fierce, shy), from Old French 'forache', from Latin 'forasticus' (from outside, foreign), from 'foras' (outside). The one who comes from outside is presumed to be wild.",
      "parts": [
        "foras → outside, out of doors",
        "forasticus → from outside"
      ]
    },
    "tier": 3,
    "pronunciation": "/fəˈruːʃ/"
  },
  {
    "word": "frowst",
    "pos": "noun",
    "definition": "A warm, stuffy, and rather unpleasant atmosphere in a closed room; the state of being in such an atmosphere.",
    "example": "Opening the door of the study released a wall of frowst — decades of pipe smoke, old paper, and inadequate ventilation.",
    "roots": {
      "origin": "Possibly from 'frowzy' (musty, unpleasant-smelling), itself of uncertain origin. A distinctly British word for the particular staleness of overheated, unventilated spaces.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/fraʊst/"
  },
  {
    "word": "orts",
    "pos": "noun",
    "definition": "Scraps or remains of food left after a meal; leavings.",
    "example": "The dogs were given the orts from the banquet — enough for a feast of their own, given how little had been eaten.",
    "roots": {
      "origin": "Middle English 'ort' (leftover food), from Low German 'ort' (food remains, leavings). Compare Dutch 'ooreten' (food left over). The word is found in Shakespeare.",
      "parts": [
        "ort → food scrap, leaving"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɔːrts/"
  },
  {
    "word": "nutation",
    "pos": "noun",
    "definition": "A nodding motion; in astronomy, a periodic oscillation of Earth's axis. In botany, the circular, spiraling movement of a growing plant tip.",
    "example": "The tendril found its support through nutation — that slow, patient spiral of growth searching for something to grip.",
    "roots": {
      "origin": "Latin 'nutatio' (a nodding), from 'nutare' (to nod, to sway). The same root gives us 'innuendo' — a nodding toward a meaning.",
      "parts": [
        "nutare → to nod, to sway"
      ]
    },
    "tier": 3,
    "pronunciation": "/njuːˈteɪ.ʃən/"
  },
  {
    "word": "floccinaucinihilipilification",
    "pos": "noun",
    "definition": "The action or habit of estimating something as worthless.",
    "example": "His floccinaucinihilipilification of his own achievements frustrated everyone around him, who could see clearly what he refused to acknowledge.",
    "roots": {
      "origin": "An 18th-century Latin coinage assembled from four Latin adjectives meaning 'worthless': 'flocci' (of wool, a trifle) + 'nauci' (a trifle) + 'nihili' (nothing) + 'pili' (a hair, a trifle). First recorded use in 1741.",
      "parts": [
        "flocci → of little worth",
        "nauci → worthless",
        "nihili → nothing",
        "pili → a hair, trifle"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌflɒk.sɪˌnɔː.sɪˌnaɪ.ɪ.lɪˌpɪl.ɪ.fɪˈkeɪ.ʃən/"
  },
  {
    "word": "noctuary",
    "pos": "noun",
    "definition": "A record or account of the events, thoughts, or observations of the night; a night journal.",
    "example": "She kept a noctuary beside the bed — not a dream journal exactly, but a record of the thoughts that only came to her in darkness.",
    "roots": {
      "origin": "Modeled on 'diary' (Latin 'diarium', from 'dies', day), but using 'noctis' (of the night). A logical but rarely used coinage for the nighttime equivalent of a daily journal.",
      "parts": [
        "nox/noctis → night"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈnɒk.tʃu.ɛr.i/"
  },
  {
    "word": "tergiversate",
    "pos": "verb",
    "definition": "To make evasive or ambiguous statements; to change one's stance repeatedly; to be deliberately obscure.",
    "example": "The minister tergiversated for twenty minutes, managing to address the reporter's question without actually answering it.",
    "roots": {
      "origin": "Latin 'tergiversari' (to turn one's back, to evade), from 'tergum' (back) + 'versare' (to turn). To tergiversate is literally to turn your back on your previous position.",
      "parts": [
        "tergum → back",
        "versare → to turn"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtɜr.dʒɪ.vər.seɪt/"
  },
  {
    "word": "gewgaw",
    "pos": "noun",
    "definition": "A showy trifle; a gaudy bauble or ornament of little value.",
    "example": "The souvenir shop was packed with gewgaws — miniature towers, keychains, fridge magnets — every surface given over to cheerful uselessness.",
    "roots": {
      "origin": "Origin uncertain; possibly a reduplication of 'gaw' (to stare at), or from Old French 'jou-jou' (toy, plaything). The doubled syllable captures the trifling, repetitive nature of baubles.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/ˈɡjuː.ɡɔː/"
  },
  {
    "word": "tintinnabulation",
    "pos": "noun",
    "definition": "The ringing or tinkling sound of bells.",
    "example": "The cathedral's tintinnabulation on Sunday mornings carried three streets in every direction, summoning and disturbing in equal measure.",
    "roots": {
      "origin": "Latin 'tintinnabulum' (a bell, a small tinkling bell), from 'tinnire' (to ring, tinkle). The word was made famous by Edgar Allan Poe's poem 'The Bells' (1849).",
      "parts": [
        "tinnire → to ring, tinkle"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌtɪn.tɪˌnæb.jʊˈleɪ.ʃən/"
  },
  {
    "word": "pettifoggery",
    "pos": "noun",
    "definition": "The practice of quibbling over trivial details; legal chicanery or dishonest legal argument.",
    "example": "The mediation collapsed in pettifoggery — three hours spent arguing about the definition of 'reasonable' in a clause that barely mattered.",
    "roots": {
      "origin": "'Pettifogger' + '-y'. From 'petty' (small) + 'fogger' (a huckster). The abstract noun derived from pettifogger denotes the practice itself.",
      "parts": [
        "petty → small, trivial",
        "fogger → unscrupulous dealer"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpɛt.i.fɒɡ.ər.i/"
  },
  {
    "word": "dragoman",
    "pos": "noun",
    "definition": "A professional interpreter and guide, especially one working in the Middle East or Central Asia for diplomatic or commercial purposes.",
    "example": "The ambassador traveled nowhere without his dragoman, who could shift between Arabic, Turkish, and Persian within a single negotiation.",
    "roots": {
      "origin": "Turkish 'tercüman' (interpreter), from Arabic 'tarjumān' (interpreter), from Aramaic 'targmānā'. The word traveled west with trade and diplomacy.",
      "parts": [
        "tarjumān → interpreter, translator"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈdræɡ.ə.mən/"
  },
  {
    "word": "elision",
    "pos": "noun",
    "definition": "The omission of a sound or syllable when speaking; in poetry, the dropping of a vowel or syllable for metrical purposes.",
    "example": "The elision of 'do not' into 'don't' is so common that the full form now sounds formal or emphatic by contrast.",
    "roots": {
      "origin": "Latin 'elisio' (a striking out), from 'elidere' (to strike out, crush out), from 'ex' (out) + 'laedere' (to strike, injure). Literally striking a sound out of existence.",
      "parts": [
        "ex → out",
        "laedere → to strike, injure"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˈlɪʒ.ən/"
  },
  {
    "word": "telic",
    "pos": "adjective",
    "definition": "Directed toward a definite end or purpose; in linguistics, describing verbs or clauses that express actions with a natural endpoint.",
    "example": "The project was unusual in being explicitly telic — every activity pointed toward a specific, measurable, and terminal goal.",
    "roots": {
      "origin": "Greek 'telikos' (final, purposive), from 'telos' (end, goal). The same root gives us 'teleology' (the study of purpose in nature).",
      "parts": [
        "telos → end, goal, completion"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtɛl.ɪk/"
  },
  {
    "word": "heteroclite",
    "pos": "noun",
    "definition": "A person or thing that deviates from the ordinary rule or pattern; in grammar, a word that is irregular in its inflections.",
    "example": "The committee's most valuable member was its heteroclite — the person whose unusual background meant they never accepted assumptions others had stopped questioning.",
    "roots": {
      "origin": "Greek 'heteroklitos' (declining irregularly), from 'heteros' (other, different) + 'klinein' (to lean, to inflect). In grammar, a word that 'leans differently.'",
      "parts": [
        "heteros → other, different",
        "klinein → to lean, to inflect"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈhɛt.ər.ə.klaɪt/"
  },
  {
    "word": "megrims",
    "pos": "noun",
    "definition": "Low spirits; depression; a fit of the blues. Also an archaic term for migraine.",
    "example": "January had given her the megrims — that cold, motivationless fog she recognized from previous winters.",
    "roots": {
      "origin": "Old French 'migraine' (severe headache, later generalized to low spirits), from Medieval Latin 'hemicrania' (pain on one side of the head), from Greek 'hemi' (half) + 'kranion' (skull).",
      "parts": [
        "hemi → half",
        "kranion → skull"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈmiː.ɡrɪmz/"
  },
  {
    "word": "skullduggery",
    "pos": "noun",
    "definition": "Underhanded, deceitful, or dishonest behavior; trickery.",
    "example": "The audit revealed decades of financial skullduggery buried beneath layers of perfectly formatted spreadsheets.",
    "roots": {
      "origin": "Origin disputed; possibly from Scottish 'sculduddery' (obscenity, fornication), which shifted meaning. First appears in American English in the 1860s meaning dishonest practices.",
      "parts": []
    },
    "tier": 3,
    "pronunciation": "/skʌlˈdʌɡ.ər.i/"
  },
  {
    "word": "welter",
    "pos": "noun",
    "definition": "A confused, turbulent mass or state; a chaotic mixture of things.",
    "example": "The inbox was a welter of unanswered messages, meeting invitations, and newsletter subscriptions from fifteen years of optimistic sign-ups.",
    "roots": {
      "origin": "Middle Low German 'welteren' (to roll, toss about), related to Old English 'wieltan' (to roll). Related to 'wallow.' The word carries its chaotic meaning in its sound.",
      "parts": [
        "welteren → to roll, toss"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈwɛl.tər/"
  },
  {
    "word": "galimaufry",
    "pos": "noun",
    "definition": "A confused jumble or medley of things; originally, a hash or ragout made of leftover meats.",
    "example": "The exhibition was a galimaufry of works spanning six decades, united only by the artist's stubbornly consistent obsession with doorways.",
    "roots": {
      "origin": "French 'galimafrée' (a ragout of various meats), of uncertain origin; possibly from 'galer' (to make merry) + 'mafrer' (to gorge). A culinary chaos that became a general one.",
      "parts": [
        "galer → to make merry",
        "mafrer → to eat greedily"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɡæl.ɪˈmɔː.fri/"
  },
  {
    "word": "sternutation",
    "pos": "noun",
    "definition": "The act of sneezing; a sneeze.",
    "example": "He felt the sternutation building for thirty seconds before it arrived — spectacular in duration, embarrassing in a library.",
    "roots": {
      "origin": "Latin 'sternutatio' (a sneezing), from 'sternutare' (to sneeze), from 'sternuere' (to sneeze). A medically precise term for an action everyone does but few name formally.",
      "parts": [
        "sternuere → to sneeze"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌstɜr.njʊˈteɪ.ʃən/"
  },
  {
    "word": "deipnosophist",
    "pos": "noun",
    "definition": "A person who is skilled in the art of dinner table conversation; an expert at talk over food.",
    "example": "She sat next to the department chair, whose reputation as a deipnosophist was well earned — three courses disappeared while she barely noticed eating.",
    "roots": {
      "origin": "Greek 'deipnosophistai' — the title of a work by Athenaeus (c. 200 AD) depicting learned men at dinner. From 'deipnon' (dinner) + 'sophistes' (expert, wise man).",
      "parts": [
        "deipnon → dinner, meal",
        "sophistes → expert, wise man"
      ]
    },
    "tier": 3,
    "pronunciation": "/deɪpˈnɒs.ə.fɪst/"
  },
  {
    "word": "osculation",
    "pos": "noun",
    "definition": "The action of kissing; a kiss. In mathematics, the touching of two curves at a point where they have the same tangent.",
    "example": "The osculation in the final scene lasted precisely four seconds — the director had timed it with a stopwatch.",
    "roots": {
      "origin": "Latin 'osculatio' (a kissing), from 'osculari' (to kiss), from 'osculum' (little mouth, a kiss), diminutive of 'os' (mouth).",
      "parts": [
        "os → mouth",
        "osculum → little mouth, kiss"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌɒs.kjʊˈleɪ.ʃən/"
  },
  {
    "word": "tarantism",
    "pos": "noun",
    "definition": "An uncontrollable urge to dance, historically believed to result from the bite of a tarantula; a hysterical dancing mania that swept parts of medieval and early modern Italy.",
    "example": "The historian described the 15th-century tarantism outbreaks as a collective psychogenic response — mass hysteria expressed through music and movement.",
    "roots": {
      "origin": "From 'Taranto,' a city in southern Italy where the dancing mania was most commonly reported, supposedly caused by the local wolf spider ('tarantula' also takes its name from Taranto).",
      "parts": [
        "Taranto → city in southern Italy"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtær.ən.tɪz.əm/"
  },
  {
    "word": "quodlibet",
    "pos": "noun",
    "definition": "A topic proposed for philosophical or theological disputation; also, a musical composition combining several popular melodies simultaneously.",
    "example": "Bach's Goldberg Variations ends with a quodlibet — two folk songs woven together, a private joke hidden in plain sight.",
    "roots": {
      "origin": "Latin 'quodlibet' (what pleases, whatever you like), from 'quod' (what) + 'libet' (it pleases). The disputational quodlibet was literally 'whatever question you like to raise.'",
      "parts": [
        "quod → what",
        "libet → it pleases"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈkwɒd.lɪ.bɛt/"
  },
  {
    "word": "griffonage",
    "pos": "noun",
    "definition": "Careless handwriting; an illegible scrawl.",
    "example": "The prescription was pure griffonage — the pharmacist held it at three different angles before declaring herself unable to interpret it.",
    "roots": {
      "origin": "French 'griffonnage' (scrawl, scribble), from 'griffonner' (to scrawl), possibly from 'griffe' (claw). Writing that looks like it was made by claws.",
      "parts": [
        "griffe → claw",
        "griffonner → to scrawl, scratch"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈɡrɪf.ə.nɑːʒ/"
  },
  {
    "word": "sorites",
    "pos": "noun",
    "definition": "A logical paradox in which a series of individually plausible steps leads to an absurd conclusion; the 'heap paradox' (how many grains make a heap?).",
    "example": "The philosopher walked them through the sorites: one grain is not a heap, and adding one grain to a non-heap never makes a heap — so there is no heap.",
    "roots": {
      "origin": "Greek 'sorites' (heap argument), from 'soros' (heap). The paradox was formulated by the Megarian philosopher Eubulides, who also invented the Liar's Paradox.",
      "parts": [
        "soros → heap, pile"
      ]
    },
    "tier": 3,
    "pronunciation": "/səˈraɪ.tiːz/"
  },
  {
    "word": "yclept",
    "pos": "adjective",
    "definition": "Called or named; known by the name of (archaic past participle of 'clepe,' to call).",
    "example": "The tavern, yclept 'The Mermaid,' had hosted poets since the reign of Elizabeth and showed no signs of changing its ways.",
    "roots": {
      "origin": "Old English 'gecleopod' (called), past participle of 'clipian/cleopian' (to call, name). The 'y-' prefix is a Middle English survival of the Old English participial prefix 'ge-'.",
      "parts": [
        "ge- → past participial prefix",
        "cleopian → to call, to name"
      ]
    },
    "tier": 3,
    "pronunciation": "/ɪˈklɛpt/"
  },
  {
    "word": "discalced",
    "pos": "adjective",
    "definition": "Without shoes; barefoot. Used specifically of certain religious orders who go barefoot or wear sandals as a mark of poverty.",
    "example": "The discalced Carmelites had walked barefoot for five centuries, their practice of poverty worn visibly on their feet.",
    "roots": {
      "origin": "Latin 'discalceatus' (unshod), from 'dis-' (un-, removal) + 'calceus' (shoe), from 'calx/calcis' (heel). Literally 'un-shoed.'",
      "parts": [
        "dis- → removal, reversal",
        "calceus → shoe",
        "calx → heel"
      ]
    },
    "tier": 3,
    "pronunciation": "/dɪsˈkælst/"
  },
  {
    "word": "pullulate",
    "pos": "verb",
    "definition": "To breed or reproduce rapidly; to swarm or teem; to spring up or sprout abundantly.",
    "example": "After three days of rain, mushrooms began to pullulate across the lawn in rings so perfect they seemed deliberate.",
    "roots": {
      "origin": "Latin 'pullulare' (to put forth new growth, to sprout), from 'pullulus' (a young animal, a sprout), diminutive of 'pullus' (a young animal). Related to 'pullet.'",
      "parts": [
        "pullus → young animal, chick",
        "pullulus → small sprout"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈpʌl.jʊ.leɪt/"
  },
  {
    "word": "aleatoric",
    "pos": "adjective",
    "definition": "Depending on chance; involving random processes or elements, especially in music or art where elements are left to chance or performer discretion.",
    "example": "The composer wrote an aleatoric score — the musicians were given fragments and told to play them in any order they chose that evening.",
    "roots": {
      "origin": "Latin 'aleator' (a dice-player), from 'alea' (a die, chance). Julius Caesar's 'the die is cast' uses the same root.",
      "parts": [
        "alea → die, chance, risk"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌeɪ.li.əˈtɔr.ɪk/"
  },
  {
    "word": "nubilous",
    "pos": "adjective",
    "definition": "Cloudy, misty, or foggy; also, vague or obscure in thought or expression.",
    "example": "The explanation grew increasingly nubilous the further it ventured from the observable facts.",
    "roots": {
      "origin": "Latin 'nubilosus' (cloudy, overcast), from 'nubilus' (cloudy), from 'nubes' (cloud). The cloud metaphor applies equally well to weather and to unclear thinking.",
      "parts": [
        "nubes → cloud",
        "nubilus → cloudy, overcast"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈnjuː.bɪ.ləs/"
  },
  {
    "word": "nugipercilous",
    "pos": "adjective",
    "definition": "Gravely concerned with trivialities; solemnly preoccupied with trifles.",
    "example": "The committee's minutes were a masterwork of nugipercilous bureaucracy — three pages devoted to the correct font size for section headings.",
    "roots": {
      "origin": "Latin 'nugae' (trifles) + 'percilious' (from 'superciliosus', disdainful, eyebrow-raising). A rare but precise term for treating trivial things with unwarranted gravity.",
      "parts": [
        "nugae → trifles, nonsense",
        "supercilium → eyebrow, haughty manner"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌnjuː.dʒɪˈpɜr.sɪ.ləs/"
  },
  {
    "word": "scriptorium",
    "pos": "noun",
    "definition": "A room in a medieval monastery set aside for the copying, writing, and illuminating of manuscripts.",
    "example": "The scriptorium was always cold, even in summer — high windows let in light but no warmth, and the monks were not permitted to warm their hands near the parchment.",
    "roots": {
      "origin": "Medieval Latin 'scriptorium' (a writing room), from Latin 'scriptor' (writer), from 'scribere' (to write). The factory of pre-print literacy.",
      "parts": [
        "scribere → to write",
        "scriptor → writer"
      ]
    },
    "tier": 3,
    "pronunciation": "/skrɪpˈtɔr.i.əm/"
  },
  {
    "word": "paregoric",
    "pos": "noun",
    "definition": "A camphorated tincture of opium once used to soothe pain, especially in children; more broadly, anything that soothes or gives comfort.",
    "example": "The familiar music served as a paregoric — a comfort that dulled nothing but made everything slightly more bearable.",
    "roots": {
      "origin": "Greek 'paregorikos' (addressing, soothing), from 'paregoros' (consoling), from 'para' (beside) + 'agoreuein' (to speak). The soothing effect of someone speaking beside you.",
      "parts": [
        "para → beside",
        "agoreuein → to speak, address"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˌpær.ɪˈɡɔr.ɪk/"
  },
  {
    "word": "thalweg",
    "pos": "noun",
    "definition": "The line connecting the lowest points along the length of a river valley or ocean trench; in international law, the boundary between states that runs through the middle of a river.",
    "example": "The border dispute came down to the thalweg — whether the international boundary ran along the deepest channel or the geometric center of the river.",
    "roots": {
      "origin": "German 'Thal' (valley) + 'Weg' (way, path). Literally 'the way through the valley.' A term of physical geography that became vital in international boundary law.",
      "parts": [
        "Tal → valley",
        "Weg → way, path"
      ]
    },
    "tier": 3,
    "pronunciation": "/ˈtɑl.vɛɡ/"
  }
];

// Assessment words used to gauge vocabulary level
const ASSESSMENT_WORDS = [
  {
    "word": "ubiquitous",
    "pos": "adjective",
    "definition": "Present, appearing, or found everywhere.",
    "example": "Smartphones have become ubiquitous in modern life.",
    "roots": {
      "origin": "Latin 'ubique' — everywhere.",
      "parts": [
        "ubi → where",
        "-que → and, also"
      ]
    },
    "tier": 1,
    "assessment": true,
    "assessmentLevel": 1
  },
  {
    "word": "esoteric",
    "pos": "adjective",
    "definition": "Intended for or likely to be understood by only a small number of people with specialized knowledge.",
    "example": "The professor's lecture on quantum chromodynamics was esoteric even by physics standards.",
    "roots": {
      "origin": "Greek 'esoterikos' — belonging to an inner circle.",
      "parts": [
        "eso → within"
      ]
    },
    "tier": 1,
    "assessment": true,
    "assessmentLevel": 2
  },
  {
    "word": "truculent",
    "pos": "adjective",
    "definition": "Eager or quick to argue or fight; aggressively defiant.",
    "example": "The truculent customer demanded to speak to every manager in the building.",
    "roots": {
      "origin": "Latin 'truculentus' — fierce, savage.",
      "parts": [
        "trux → fierce, wild"
      ]
    },
    "tier": 1,
    "assessment": true,
    "assessmentLevel": 3,
    "pronunciation": "/ˈtrʌk.jʊ.lənt/"
  },
  {
    "word": "pusillanimous",
    "pos": "adjective",
    "definition": "Showing a lack of courage or determination; timid.",
    "example": "The pusillanimous committee refused to take a position on the controversy.",
    "roots": {
      "origin": "Latin 'pusillanimis'.",
      "parts": [
        "pusillus → very small",
        "animus → spirit, mind"
      ]
    },
    "tier": 2,
    "assessment": true,
    "assessmentLevel": 4,
    "pronunciation": "/ˌpju.sɪˈlæn.ɪ.məs/"
  },
  {
    "word": "defenestration",
    "pos": "noun",
    "definition": "The act of throwing someone or something out of a window.",
    "example": "The Defenestration of Prague in 1618 helped spark the Thirty Years' War.",
    "roots": {
      "origin": "Latin.",
      "parts": [
        "de → down from",
        "fenestra → window"
      ]
    },
    "tier": 2,
    "assessment": true,
    "assessmentLevel": 5,
    "pronunciation": "/dɪˌfɛn.ɪˈstreɪ.ʃən/"
  },
  {
    "word": "sesquipedalian",
    "pos": "adjective",
    "definition": "Characterized by long words; long-winded.",
    "example": "His sesquipedalian writing style made even simple ideas seem impenetrable.",
    "roots": {
      "origin": "Latin 'sesquipedalis' — literally 'a foot and a half long.'",
      "parts": [
        "sesqui → one and a half",
        "pes/pedis → foot"
      ]
    },
    "tier": 2,
    "assessment": true,
    "assessmentLevel": 6,
    "pronunciation": "/ˌsɛs.kwɪ.pɪˈdeɪ.li.ən/"
  },
  {
    "word": "callipygian",
    "pos": "adjective",
    "definition": "Having well-shaped buttocks.",
    "example": "The Venus Callipyge statue in Naples is the most famous callipygian figure in art history.",
    "roots": {
      "origin": "Greek 'kallipygos'.",
      "parts": [
        "kallos → beauty",
        "pyge → buttocks"
      ]
    },
    "tier": 3,
    "assessment": true,
    "assessmentLevel": 7,
    "pronunciation": "/ˌkæl.ɪˈpɪdʒ.i.ən/"
  },
  {
    "word": "tmesis",
    "pos": "noun",
    "definition": "The separation of parts of a compound word by an intervening word, used for emphasis.",
    "example": "'Abso-bloody-lutely' is a classic example of tmesis.",
    "roots": {
      "origin": "Greek 'tmesis' — a cutting.",
      "parts": [
        "temnein → to cut"
      ]
    },
    "tier": 3,
    "assessment": true,
    "assessmentLevel": 8,
    "pronunciation": "/təˈmi.sɪs/"
  }
];

// Learning words (main pool)
const LEARNING_WORDS = WORDS;

export { WORDS, ASSESSMENT_WORDS, LEARNING_WORDS };
