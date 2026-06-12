const CHAPTER_STYLES = {
  // 🔴 GYNÉCO / OBSTÉTRIQUE
  "Obstétrique/Gynécologie🤰": {
    badge: "background:#fecaca;color:#7f1d1d;border-color:#f87171;",
    border: "#dc2626",
    background: "#fef2f2"
  },
  "Obstétrique/Gynécologie 🌟": {
    badge: "background:#fda4af;color:#7f1d1d;border-color:#fb7185;",
    border: "#e11d48",
    background: "#fff1f2"
  },

  // 🔵 MALADIE
  "Maladie🤒": {
    badge: "background:#bfdbfe;color:#1e3a8a;border-color:#60a5fa;",
    border: "#2563eb",
    background: "#eff6ff"
  },
  "Maladie 🌟": {
    badge: "background:#93c5fd;color:#1e40af;border-color:#3b82f6;",
    border: "#1d4ed8",
    background: "#dbeafe"
  },

  // 🟢 TRAUMATIQUE
  "Trauma 🤕": {
    badge: "background:#bbf7d0;color:#065f46;border-color:#34d399;",
    border: "#059669",
    background: "#ecfdf5"
  },
  "🤕Traumatique 🌟": {
    badge: "background:#86efac;color:#065f46;border-color:#22c55e;",
    border: "#047857",
    background: "#dcfce7"
  },

  // 🟡 PÉDIATRIE
  "Pédiatrie👶": {
    badge: "background:#fef08a;color:#854d0e;border-color:#facc15;",
    border: "#ca8a04",
    background: "#fefce8"
  },
  "👶Pédiatrie 🌟": {
     badge: "background:#fef08a;color:#854d0e;border-color:#facc15;",
    border: "#ca8a04",
    background: "#fefce8"
  },

  // 🟣 NEURO (violet foncé → bien différent maintenant)
  "Neuro🧠": {
    badge: "background:#ddd6fe;color:#4c1d95;border-color:#a78bfa;",
    border: "#7c3aed",
    background: "#f5f3ff"
  },

  // 🌸 ANTALGIE (nouvelle couleur distincte)
  
"💉Antalgie": {
badge: "background:#99f6e4;color:#134e4a;border-color:#2dd4bf;",
  border: "#0d9488",
  background: "#ecfeff"
},

  // 🩶 INTERNE
  "Interne": {
    badge: "background:#e2e8f0;color:#334155;border-color:#cbd5f5;",
    border: "#64748b",
    background: "#f8fafc"
  },

  // 🔷 TECHNIQUE (plus violet → bleu-gris)
  "Autre": {
    badge: "background:#e0f2fe;color:#075985;border-color:#7dd3fc;",
    border: "#0284c7",
    background: "#f0f9ff"
  },


  "Autre 🌟": {
    badge: "background:#d1d5db;color:#1f2933;border-color:#9ca3af;",
    border: "#4b5563",
    background: "#f3f4f6"
  },

  "Particuliers/Autres 🌟": {
    badge: "background:#e5e7eb;color:#374151;border-color:#9ca3af;",
    border: "#6b7280",
    background: "#f9fafb"
  }
};
const VD_ALGOS = [
  { id: "acc_physio", ordre: 32, titre: "Accouchement physiologique", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/acc_physio.png", favori: false, notesPlaceholder: "Ex. matériel de naissance, points d’anticipation…" },
  { id: "acc_patho1", ordre: 33, titre: "Accouchement pathologique 1", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/acc_patho1.png", favori: false, notesPlaceholder: "Ex. points d’attention…" },
  { id: "acc_patho2", ordre: 34, titre: "Accouchement pathologique 2", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/acc_patho2.png", favori: false, notesPlaceholder: "Ex. points d’attention…" },
  { id: "eclampsie", ordre: 35, titre: "Pré-éclampsie / éclampsie", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/eclampsie.png", favori: false, notesPlaceholder: "Ex. Labetalol, MgSO4, conduite locale…" },
  { id: "pph", ordre: 36, titre: "🩸Hémorragie post-partum", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/pph.png", favori: false, notesPlaceholder: "Ex. points de surveillance…" },
  { id: "cordon", ordre: 37, titre: "🪢 Circulaire du cordon", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/cordon.png", favori: false, notesPlaceholder: "Ex. conduite locale…" },
  { id: "anaphylaxie", ordre: 10, titre: "Réaction anaphylactique 🥵", chapitre: "Maladie🤒", source: "VD", image: "images/anaphylaxie.png", favori: false, notesPlaceholder: "Ex. adrénaline, surveillance…" },
  { id: "antalgie", ordre: 1, titre: "Antalgie VD", chapitre: "💉Antalgie", source: "VD", image: "images/antalgie.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, précautions sujet âgé…" },
  { id: "acr_bls", ordre: 12, titre: "ACR adulte / BLS 🫀", chapitre: "Maladie🤒", source: "VD", image: "images/acr_bls.png", favori: false, notesPlaceholder: "Ex. checklist équipe, matériel, points de briefing…" },
  { id: "acr_als", ordre: 11, titre: "ACR adulte / ALS 🫀", chapitre: "Maladie🤒", source: "VD", image: "images/acr_als.png", favori: false, notesPlaceholder: "Ex. adrénaline, amiodarone, causes réversibles…" },
  { id: "acr_pedia", ordre: 25, titre: "ACR pédiatrique 🫀", chapitre: "Pédiatrie👶", source: "VD", image: "images/acr_pedia.png", favori: false, notesPlaceholder: "Ex. doses, matériel pédiatrique…" },
  { id: "nn", ordre: 26, titre: "🍼 Réanimation nouveau-né", chapitre: "Pédiatrie👶", source: "VD", image: "images/nn.png", favori: false, notesPlaceholder: "Ex. matériel, température, ventilation…" },
  { id: "brulures", ordre: 19, titre: "🥵 Brûlures 🌡️", chapitre: "Trauma 🤕", source: "VD", image: "images/brulures.png", favori: false, notesPlaceholder: "Ex. refroidissement, pansement, surveillance…" },
  { id: "conv_adulte", ordre: 20, titre: "😵‍💫 Convulsions adulte 🫨", chapitre: "Neuro🧠", source: "VD", image: "images/conv_adulte.png", favori: false, notesPlaceholder: "Ex. midazolam, clonazépam…" },
  { id: "conv_pedia", ordre: 27, titre: "😵‍💫 Convulsions pédiatriques 🌡️", chapitre: "Pédiatrie👶", source: "VD", image: "images/conv_ped_star.png", favori: false, notesPlaceholder: "Ex. glycémie, température, refroidissement…" },
  { id: "sca", ordre: 13, titre: "Douleurs thoraciques 🫀 (SCA)", chapitre: "Maladie🤒", source: "VD", image: "images/sca.png", favori: false, notesPlaceholder: "Ex. ECG 12 dérivations, ASA, nitrés…" },
  { id: "resp_adulte", ordre: 14, titre: "Détresse respiratoire adulte 🫁", chapitre: "Maladie🤒", source: "VD", image: "images/resp_adulte.png", favori: false, notesPlaceholder: "Ex. O2, salbutamol, CPAP…" },
  { id: "resp_pedia", ordre: 28, titre: "🫁 Détresse respiratoire 👶 pédiatrique", chapitre: "Pédiatrie👶", source: "VD", image: "images/resp_pedia.png", favori: false, notesPlaceholder: "Ex. nébulisation, respect position spontanée…" },
  { id: "choc", ordre: 15, titre: "État de choc", chapitre: "Maladie🤒", source: "VD", image: "images/choc.png", favori: false, notesPlaceholder: "Ex. RL, TA cible, TXA…" },
  { id: "coma", ordre: 16, titre: "😴 Trouble de la conscience adulte 😵‍💫", chapitre: "Maladie🤒", source: "VD", image: "images/coma.png", favori: false, notesPlaceholder: "Ex. glucose, naloxone, thiamine…" },
  { id: "avc", ordre: 21, titre: "😵 AVC", chapitre: "Neuro🧠", source: "VD", image: "images/avc.png", favori: true, notesPlaceholder: "Ex. anticoagulants, heure de début, proches à prévenir…" },
  { id: "io", ordre: 24, titre: "🦴 Voie intra-osseuse", chapitre: "Autre", source: "VD", image: "images/io.png", favori: false, notesPlaceholder: "Ex. indications, contre-indications, surveillance…" },
  { id: "avc_annexe", ordre: 22, titre: "😵 AVC Annexe", chapitre: "Neuro🧠", source: "VD", image: "images/avc_annexe.png", favori: false, notesPlaceholder: "Ex. Rankin, checklist filière…" }
 
];

const AUTRE = [
 
  
  { id: "labo", ordre: 21, titre: "Valeur Laboratoire 🧪", chapitre: "Autre", source: "Moi", image: "images/labo.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" },
  { id: "molecules", ordre: 22, titre: "💊 Molécules Antalgie", chapitre: "Autre", source: "STAR", image: "images/molecules.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" },
  { id: "toxidrome", ordre: 11, titre: "Toxidrome 💊", chapitre: "Neuro🧠", source: "Autre", image: "images/Toxidrome.png", favori: false, notesPlaceholder:"Ex. posologies terrain, antiémétique, poids…"},
  { id: "glasgow", ordre: 12, titre: "Glasgow 😵‍💫", chapitre: "Neuro🧠", source: "Autre", image: "images/GCS.png", favori: false, notesPlaceholder:"Ex. posologies terrain, antiémétique, poids…"},
  { id: "antalgie_sat", ordre: 1, titre: "Antalgie SAT", chapitre: "💉Antalgie", source: "SAT", image: "images/antalgie_sat.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" },
   { id: "antalgie_tcs", ordre: 2, titre: "Antalgie TCS", chapitre: "💉Antalgie", source: "TCS", image: "images/antalgie_tcs.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, précautions sujet âgé…" },
   { id: "antalgie_tcs_ped", ordre: 3, titre: "Antalgie TCS Ped 👶", chapitre: "💉Antalgie", source: "TCS", image: "images/antalgie_tcs_ped.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" },
  { id: "aeioutip", ordre: 24, titre: "AEIOU TIPS😴", chapitre: "Autre", source: "Moi", image: "images/AEIOUTIPS.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" },
  { id: "befast", ordre: 13, titre: "Be FAST 😵", chapitre: "Neuro🧠", source: "Moi", image: "images/Befast.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" },
  { id: "breathing", ordre: 23, titre: "Breathing 🫁", chapitre: "Autre", source: "Moi", image: "images/breathing.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" },
  { id: "pastel", ordre: 30, titre: "PASTEL 👶", chapitre: "Pédiatrie👶", source: "Moi", image: "images/pastel.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" },
  {id: "calcul_pedia",ordre: 40, titre: "💉 Calcul rapide pédiatrique",  chapitre: "Pédiatrie👶",  source: "Moi",  image: "images/calcul_pedia.png",  favori: false,  notesPlaceholder: ""},
];

const STAR_ALGOS = [
  // Maladie
  {
    id: "detresse_respiratoire_adulte",
    ordre: 1,
    titre: "🫁 Détresse respiratoire adulte",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/detresse_respiratoire_adulte.png",
    favori: false,
    notesPlaceholder: "Ex. O2, bronchodilatateurs, ventilation, surveillance…"
  },
  {
    id: "abstention_arret_reanimation",
    ordre: 2,
    titre: "🪦 Abstention/arrêt de réanimation ☠️",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/abstention_arret_reanimation.png",
    favori: false,
    notesPlaceholder: "Ex. critères, contexte, transmission, traçabilité…"
  },
  {
    id: "acr_adulte",
    ordre: 3,
    titre: "🫀 Arrêt cardiorespiratoire adulte",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/acr_adulte.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, défibrillation, adrénaline, causes réversibles…"
  },
  {
   id: "acr_shema",
    ordre: 4,
    titre: "🫀 Shema ALS",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/shema_ALS.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, défibrillation, adrénaline, causes réversibles…"
  },
  {
    id: "intra_osseuse",
    ordre: 5,
    titre: "🦴 Intra-osseuse",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/intra_osseuse.png",
    favori: false,
    notesPlaceholder: "Ex. indications, contre-indications, surveillance…"
  },
  {
    id: "douleur_thoracique_sca",
    ordre: 6,
    titre: "🫀 Douleur thoracique (SCA)",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/douleur_thoracique_sca.png",
    favori: false,
    notesPlaceholder: "Ex. ECG 12 dérivations, ASA, nitrés, surveillance…"
  },
  {
    id: "etat_de_choc",
    ordre: 7,
    titre: "🤒 Etat de choc",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/etat_de_choc.png",
    favori: false,
    notesPlaceholder: "Ex. remplissage, TA cible, TXA, surveillance…"
  },
  {
    id: "convulsion_adulte",
    ordre: 8,
    titre: "😵‍💫 Convulsion adulte 🫨",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/conv_adulte_star.png",
    favori: false,
    notesPlaceholder: "Ex. benzodiazépines, glycémie, durée de crise…"
  },
  {
    id: "trouble_conscience_adulte",
    ordre: 9,
    titre: "😵‍💫 Trouble de la conscience adulte 😴",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/trouble_conscience_adulte.png",
    favori: false,
    notesPlaceholder: "Ex. glucose, GCS, naloxone, surveillance…"
  },
  {
    id: "suspicion_avc",
    ordre: 10,
    titre: "🧠 Suspicion d’AVC 😵",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image:"images/suspicion_avc.png",
    favori: false,
    notesPlaceholder: "Ex. heure de début, anticoagulants, filière AVC…"
  },
   {
    id: "suspicion_avc_2",
    ordre: 10,
    titre: "🧠 Suspicion d’AVC_2",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/suspicion_avc_2.png",
    favori: false,
    notesPlaceholder: "Ex. heure de début, anticoagulants, filière AVC…"
  },
  {
    id: "reaction_anaphylactique",
    ordre: 12,
    titre: "🥵 Réaction anaphylactique",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/reaction_anaphylactique.png",
    favori: false,
    notesPlaceholder: "Ex. adrénaline, O2, remplissage, surveillance…"
  },
  {
    id: "amd_antalgie",
    ordre: 13,
    titre: "💉 Antalgie 💊",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/amd.png",
    favori: false,
    notesPlaceholder: "Ex. EVA/algoplus, posologies, contre-indications…"
  },

  // Traumatique
  {
    id: "brulures",
    ordre: 15,
    titre: "🥵 Brûlures 🌡️",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/brulures_STAR.png",
    favori: false,
    notesPlaceholder: "Ex. refroidissement, surface, pansement, surveillance…"
  },
   {
    id: "brulures _degre",
    ordre: 16,
    titre: "🥵 Brûlures Degré 🌡️",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/brulure.png",
    favori: false,
    notesPlaceholder: "Ex. refroidissement, surface, pansement, surveillance…"
  },
  {
    id: "exposition_fumees",
    ordre: 17,
    titre: "💨 Exposition aux fumées 💨",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/exposition_fumees.png",
    favori: false,
    notesPlaceholder: "Ex. O2, CO, contexte incendie, surveillance…"
  },
  {
    id: "immobilisation_rachis",
    ordre: 18,
    titre: "Immobilisation du rachis 🛹",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/immobilisation_rachis.png",
    favori: false,
    notesPlaceholder: "Ex. critères, extraction, collier, matelas…"
  },

  // Pédiatrie
  {
    id: "aide_memoire_pediatrique_parametres",
    ordre: 19,
    titre: "🍼 Aide-mémoire pédiatrique (paramètres)",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/aide_memoire_pediatrique_parametres.png",
    favori: false,
    notesPlaceholder: "Ex. constantes, poids estimé, tailles de matériel…"
  },
  {
    id: "detresse_respiratoire_pediatrique",
    ordre: 20,
    titre: "🫁 Détresse respiratoire pédiatrique 👶",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/detresse_respiratoire_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. O2, nébulisation, position spontanée, surveillance…"
  },
  {
    id: "acr_pediatrique",
    ordre: 21,
    titre: "🫀 Arrêt cardio-respiratoire pédiatrique",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/acr_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, doses, matériel pédiatrique…"
  },
    {
    id: "dilutions_acr_pediatrique",
    ordre: 22,
    titre: "🫀 Dilutions ACR pédiatrique",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/dilutions_acr_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, doses, matériel pédiatrique…"
  },
  {
    id: "soins_reanimation_nouveau_ne",
    ordre: 23,
    titre: "🍼 Soins et réanimation du nouveau-né",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/soins_reanimation_nouveau_ne.png",
    favori: false,
    notesPlaceholder: "Ex. température, ventilation, FC, matériel…"
  },
  {
    id: "convulsion_trouble_conscience_pediatrique",
    ordre: 24,
    titre: "😵‍💫 Convulsion et trouble de l’état de conscience pédiatrique 🌡️",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/convulsion_trouble_conscience_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. glycémie, température, causes, traitement…"
  },

  // Obstétrique / Gynécologie
  {
    id: "accouchement_physiologique",
    ordre: 25,
    titre: "Accouchement physiologique🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/accouchement_physiologique.png",
    favori: false,
    notesPlaceholder: "Ex. matériel, surveillance, délivrance, nouveau-né…"
  },
  {
    id: "accouchement_pathologique_1",
    ordre: 26,
    titre: "Accouchement pathologique 1🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/accouchement_pathologique_1.png",
    favori: false,
    notesPlaceholder: "Ex. points d’anticipation, complications, conduite…"
  },
  {
    id: "aide_memoire_dystocie_epaules",
    ordre: 27,
    titre: "Aide-mémoire Dystocie des épaules🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_dystocie_epaules.png",
    favori: false,
    notesPlaceholder: "Ex. manœuvres, chronologie, aide demandée…"
  },
  {
    id: "aide_memoire_Mc_Roberts",
    ordre: 28,
    titre: "Aide-mémoire MC Roberts🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_Mc_Roberts.png",
    favori: false,
    notesPlaceholder: "Ex. manœuvres, chronologie, aide demandée…"
  },
  {
    id: "aide_memoire_Menticoglu",
    ordre: 29,
    titre: "Aide-mémoire Menticoglu🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_Menticoglu.png",
    favori: false,
    notesPlaceholder: "Ex. manœuvres, chronologie, aide demandée…"
  },
  {
    id: "accouchement_pathologique_2",
    ordre: 30,
    titre: "Accouchement pathologique 2🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/accouchement_pathologique_2.png",
    favori: false,
    notesPlaceholder: "Ex. complications, surveillance materno-fœtale…"
  },
  {
    id: "aide_memoire_accouchement_siege",
    ordre: 31,
    titre: "Aide-mémoire Accouchement en siège🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_siege.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…"
  },
   {
    id: "aide_memoire_accouchement_Dos",
    ordre: 32,
    titre: "Aide-mémoire Accouchement, Dos🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_dos.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…"
  },
   {
    id: "aide_memoire_accouchement_jambes",
    ordre: 33,
    titre: "Aide-mémoire Accouchement, Jambes🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_jambes.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…"
  },
   {
    id: "aide_memoire_accouchement_bras",
    ordre: 34,
    titre: "Aide-mémoire Accouchement, Bras🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_bras.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…"
  },
   {
    id: "aide_memoire_accouchement_tete",
    ordre: 35,
    titre: "Aide-mémoire Accouchement, Tête🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_tete.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…"
  },
  {
    id: "circulaire_cordon",
    ordre: 36,
    titre: "🪢Circulaire du cordon🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/circulaire_cordon.png",
    favori: false,
    notesPlaceholder: "Ex. conduite locale, dégagement, surveillance…"
  },
  {
    id: "pre_eclampsie_eclampsie",
    ordre: 37,
    titre: "Pré-éclampsie/éclampsie🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/pre_eclampsie_eclampsie.png",
    favori: false,
    notesPlaceholder: "Ex. TA, MgSO4, signes de gravité, conduite…"
  },
  {
    id: "hemorragie_post_partum_primaire",
    ordre: 38,
    titre: "🩸 Hémorragie post-partum primaire🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/hemorragie_post_partum_primaire.png",
    favori: false,
    notesPlaceholder: "Ex. massage utérin, saignement, TXA, surveillance…"
  },

  // Particuliers / Autres
  {
    id: "aide_memoire_evenement_particulier_majeur_leader",
    ordre: 39,
    titre: "💥 Aide-mémoire évènement particulier/majeur Leader",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_evenement_particulier_majeur_leader.png",
    favori: false,
    notesPlaceholder: "Ex. rôle leader, coordination, sécurité, communication…"
  },
   {
    id: "aide_memoire_evenement_particulier_majeur",
    ordre: 40,
    titre: "💥 Aide-mémoire évènement particulier/majeur",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_evenement_particulier_majeur.png",
    favori: false,
    notesPlaceholder: "Ex. rôle leader, coordination, sécurité, communication…"
  },
  {
    id: "aide_memoire_evenement_particulier_majeur_pre_trieur",
    ordre: 41,
    titre: "💥 Aide-mémoire évènement particulier/majeur Pré-trieur",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_evenement_particulier_majeur_pre_trieur.png",
    favori: false,
    notesPlaceholder: "Ex. tri, flux, sécurité, priorisation…"
  },
   {
    id: "aide_memoire_SAP",
    ordre: 42,
    titre: "💥 Aide-mémoire SAP",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_sap.png",
    favori: false,
    notesPlaceholder: "Ex. tri, flux, sécurité, priorisation…"
  },
  {
    id: "aide_memoire_renfort_psycho_social",
    ordre: 43,
    titre: "Aide-mémoire renfort psycho-social",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_renfort_psycho_social.png",
    favori: false,
    notesPlaceholder: "Ex. ressources, critères, relais, accompagnement…"
  },
  {
    id: "aide_memoire_babyrescue",
    ordre: 44,
    titre: "👶 Aide-mémoire babyrescue 🚑",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_babyrescue.png",
    favori: false,
    notesPlaceholder: "Ex. matériel, procédure, points d’attention…"
  },
  {
    id: "aide_memoire_debriefing_etudiantes",
    ordre: 45,
    titre: "🎓 Aide-mémoire débriefing étudiant.es 🎓",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_debriefing_etudiantes.png",
    favori: false,
    notesPlaceholder: "Ex. points de débriefing, apprentissages, feedback…"
  }
];


const DEFAULT_MATERIAL = [
  { category: "💉 VVP", id: "venflon", label: "Venflon", checked: false, note: "" },
  { category: "💉 VVP", id: "veca", label: "Veca C", checked: false, note: "" },
  { category: "💉 VVP", id: "cofix", label: "Cofix", checked: false, note: "" },
  { category: "💉 VVP", id: "tubulure", label: "Tubulure", checked: false, note: "" },
  { category: "💉 VVP", id: "ringer", label: "Ringer", checked: false, note: "" },
  { category: "💉 VVP", id: "tampon_oh", label: "Tampon OH", checked: false, note: "" },

  { category: "💊 Médicaments", id: "fentanyl", label: "Fentanyl", checked: false, note: "" },
  { category: "💊 Médicaments", id: "morphine", label: "Morphine", checked: false, note: "" },
  { category: "💊 Médicaments", id: "aspirine", label: "Aspirine", checked: false, note: "" },
  { category: "💊 Médicaments", id: "paracetamol", label: "Paracétamol", checked: false, note: "" },
  { category: "💊 Médicaments", id: "adre", label: "Adrénaline", checked: false, note: "" },
  { category: "💊 Médicaments", id: "txa", label: "TXA", checked: false, note: "" },
  { category: "💊 Médicaments", id: "ondansetron", label: "Ondansetron", checked: false, note: "" },
  { category: "💊 Médicaments", id: "ketamine", label: "Kétamine", checked: false, note: "" },
  { category: "💊 Médicaments", id: "midazolam", label: "Midazolam", checked: false, note: "" },

  { category: "🫁 Oxygène", id: "lunette", label: "Lunette O₂", checked: false, note: ""  },
  { category: "🫁 Oxygène", id: "masque02", label: "Masque O₂", checked: false, note: ""  },
  { category: "🫁 Oxygène", id: "nebu", label: "Nébulisation", checked: false, note: ""  },

  { category: "🩹 Petit matériel", id: "compresse", label: "Compresse", checked: false, note: "" },
  { category: "🩹 Petit matériel", id: "aiguille", label: "Aiguille", checked: false, note: "" },
  { category: "🩹 Petit matériel", id: "bouchon", label: "Bouchons", checked: false, note: "" },
  { category: "🩹 Petit matériel", id: "seringue", label: "Seringue", checked: false, note: "" },
  { category: "🩹 Petit matériel", id: "embout_in", label: "Embout IN", checked: false, note: "" },

  { category: "📦 Divers", id: "reserve", label: "Réassort / fin de journée", checked: false, note: "" },
  { category: "📦 Divers", id: "eau", label: "Bouteille d'eau", checked: false, note: "" },
  { category: "📦 Divers", id: "sharpsafe", label: "Sharp Safe", checked: false, note: "" },
  { category: "📦 Divers", id: "moltex", label: "Moltex", checked: false, note: "" }
];


const state = {
  screen: "home",
  previousScreen: "home",
  detailSource: "vd",
  selectedId: null
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function applyTheme(screen) {
  document.body.classList.remove(
    "theme-vd",
    "theme-star",
    "theme-autre",
    "theme-materials"
  );

  if (screen === "vd" || (screen === "detail" && state.detailSource === "vd")) {
    document.body.classList.add("theme-vd");
  }

  if (screen === "star" || (screen === "detail" && state.detailSource === "star")) {
    document.body.classList.add("theme-star");
  }

  if (screen === "autre" || (screen === "detail" && state.detailSource === "autre")) {
    document.body.classList.add("theme-autre");
  }

  if (screen === "materials") {
    document.body.classList.add("theme-materials");
  }
}

function chapterStyle(chapter) {
  const clean = String(chapter).trim();
  return CHAPTER_STYLES[clean] || CHAPTER_STYLES["Interne"];
}


function getListBySource(source) {
  switch (source) {
    case "vd":
      return VD_ALGOS;
    case "star":
      return STAR_ALGOS;
    case "autre":
      return AUTRE;
    default:
      return [];
  }
}


function getAllAlgos() {
  return [
    ...VD_ALGOS.map(item => ({ ...item, sourceType: "vd" })),
    ...AUTRE.map(item => ({ ...item, sourceType: "autre" })),
    ...STAR_ALGOS.map(item => ({ ...item, sourceType: "star" }))
  ];
}

function getFavMap() {
  return readStorage("favorites-map", {});
}

function favKey(source, id) {
  return `${source}:${id}`;
}

function isFavorite(source, item) {
  const favs = getFavMap();
  const key = favKey(source, item.id);

  if (Object.prototype.hasOwnProperty.call(favs, key)) {
    return favs[key];
  }

  return !!item.favori;
}

function toggleFavorite(source, id) {
  const favs = getFavMap();
  const list = getListBySource(source);
  const item = list.find((x) => x.id === id);
 
  const key = favKey(source, id);
  const current = Object.prototype.hasOwnProperty.call(favs, key)
    ? favs[key]
    : !!item?.favori;

  favs[key] = !current;
  writeStorage("favorites-map", favs);

  // Rafraîchir l’accueil
  if (state.screen === "home") {
    const searchVal = document.getElementById("searchInput")?.value || "";
    if (searchVal.trim()) {
      runHomeSearch(searchVal);
    } else {
      renderHomeFavorites();
      clearHomeSearchResults();
    }
  }

  // Rafraîchir les listes
  if (state.screen === "vd") renderList("vd", "vdList");
  if (state.screen === "star") renderList("star", "starList");
  if (state.screen === "autre") renderList("autre", "autreList");
  if (state.screen === "detail") renderDetail();
}

function cardHTML(item, source) {
  const style = chapterStyle(item.chapitre);
  const favorite = isFavorite(source, item);

  return `
    <div class="algo-card" data-open-source="${source}" data-open-id="${item.id}" style="background:${style.background}; border:2px solid ${style.border};">
      <div class="algo-card-row">
        <div class="algo-card-left">
          <span class="badge" style="${style.badge}">${item.chapitre}</span>
          <div class="algo-title">${item.titre}</div>
        </div>
        <button class="favorite-btn ${favorite ? "active" : "inactive"}" data-fav-source="${source}" data-fav-id="${item.id}" type="button">
          ${favorite ? "⭐" : "☆"}
        </button>
      </div>
    </div>
  `;
}

function bindCardEvents(container) {
  if (!container) return;

  container.querySelectorAll("[data-open-id]").forEach((el) => {
    el.addEventListener("click", () => {
      openDetail(el.getAttribute("data-open-source"), el.getAttribute("data-open-id"));
    });
  });

  container.querySelectorAll("[data-fav-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(el.getAttribute("data-fav-source"), el.getAttribute("data-fav-id"));
    });
  });
}

function renderHomeFavorites() {
  const favoritesSection = document.getElementById("favoritesSection");
  if (!favoritesSection) return;

  const all = [
    ...VD_ALGOS.map((item) => ({ item, source: "vd" })),
     ...AUTRE.map((item) => ({ item, source: "autre" })),
    ...STAR_ALGOS.map((item) => ({ item, source: "star" }))
  ];

  const favorites = all
    .filter(({ item, source }) => isFavorite(source, item))
    .sort((a, b) => a.item.ordre - b.item.ordre);

  if (!favorites.length) {
    favoritesSection.innerHTML = `
      <div class="card">
        <p style="text-align:center;opacity:0.7;">Aucun favori ⭐</p>
      </div>
    `;
    return;
  }

  favoritesSection.innerHTML = `
    <div class="section-card">
      <p class="section-caption">⭐ Mes favoris</p>
      ${favorites.map(({ item, source }) => cardHTML(item, source)).join("")}
    </div>
  `;

  bindCardEvents(favoritesSection);
}

function renderList(source, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = getListBySource(source)
    .slice()
    .sort((a, b) => a.ordre - b.ordre);

  container.innerHTML = list.map((item) => cardHTML(item, source)).join("");
  bindCardEvents(container);
}

function clearHomeSearchResults() {
  const container = document.getElementById("homeVdList");
  if (container) {
    container.innerHTML = "";
  }
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function runHomeSearch(rawValue) {
  const search = normalizeText(rawValue.trim());
  const favoritesSection = document.getElementById("favoritesSection");
  const container = document.getElementById("homeVdList");

  if (!container || !favoritesSection) return;

  // Si vide : on montre les favoris et on vide les résultats
  if (!search) {
    favoritesSection.style.display = "";
    renderHomeFavorites();
    clearHomeSearchResults();
    return;
  }

  // Si recherche active : on masque les favoris
  favoritesSection.style.display = "none";

  const all = getAllAlgos();

  const filtered = all.filter((item) => {
    const notes = readStorage(`notes:${item.sourceType}:${item.id}`, "");
    return (
      normalizeText(item.titre).includes(search) ||
      normalizeText(item.chapitre).includes(search) ||
      normalizeText(item.source).includes(search) ||
      normalizeText(notes).includes(search)
    );
  });

  filtered.sort((a, b) => a.ordre - b.ordre);

  container.innerHTML = filtered.length
    ? `
      <div class="section-card">
        <p class="section-caption">🔎 Résultats</p>
        ${filtered.map((item) => cardHTML(item, item.sourceType)).join("")}
      </div>
    `
    : `<div class="card"><p style="text-align:center;opacity:0.7;">Aucun résultat 🔎</p></div>`;

  bindCardEvents(container);
}

function setupSearchHandler(e) {
  runHomeSearch(e.target.value);
}

function openDetail(source, id) {
  state.detailSource = source;
  state.selectedId = id;
  state.previousScreen = state.screen;
  showScreen("detail");
}

function renderDetail() {
  const list = getListBySource(state.detailSource);
  const item = list.find((x) => x.id === state.selectedId) || list[0];
  if (!item) return;
  const special = document.getElementById("specialContent");
 if (special) {
  special.innerHTML = "";
}


  const style = chapterStyle(item.chapitre);

  const title = document.getElementById("detailTitle");
  const badge = document.getElementById("detailBadge");
  const card = document.getElementById("detailCard");
  const img = document.getElementById("detailImage");
  const wrap = document.getElementById("detailImageWrap");
  const notes = document.getElementById("detailNotes");
  const favBtn = document.getElementById("detailFavoriteBtn");
  

  if (title) title.textContent = item.titre;

  if (badge) {
    badge.textContent = item.chapitre;
    badge.setAttribute("style", style.badge);
  }

  if (card) {
    card.style.background = style.background;
    card.style.border = `2px solid ${style.border}`;
  }

  if (img && wrap) {
    img.onload = () => wrap.classList.add("has-image");
    img.onerror = () => wrap.classList.remove("has-image");
    img.src = item.image;
  }
if (item.id === "calcul_pedia") {


  special.innerHTML = `
    <div class="med-card-inner">

      <input
        type="number"
        id="poidsPedia"
        class="input"
        placeholder="Poids en kg"
        step="0.1"
        min="0"
        oninput="calculPedia()"
      >

      <div id="resultatsPedia"></div>

    </div>
  `;

} else {

  document.getElementById("detailImageWrap").style.display = "";
  document.getElementById("detailNotes").style.display = "";
  special.innerHTML = "";
}
  if (notes) {
    const storeKey = `notes:${state.detailSource}:${item.id}`;
    notes.value = readStorage(storeKey, "");
    notes.placeholder = item.notesPlaceholder || "Ajoute ici tes notes…";
    notes.oninput = (e) => writeStorage(storeKey, e.target.value);
  }

  const isFav = isFavorite(state.detailSource, item);
  if (favBtn) {
    favBtn.textContent = isFav ? "⭐" : "☆";
    favBtn.classList.toggle("active", isFav);
    favBtn.classList.toggle("inactive", !isFav);
    favBtn.onclick = () => toggleFavorite(state.detailSource, item.id);
  }
}


function renderMaterials() {
  const materialsList = document.getElementById("materialsList");
  if (!materialsList) return;

  const materials = readStorage("materials-list", DEFAULT_MATERIAL);
  const freeText = localStorage.getItem("materials-free-text") || "";

// mémorise les catégories ouvertes
const openedCategories = new Set(
  [...document.querySelectorAll(".material-category[open]")]
    .map(el => el.dataset.category)
);

  const categories = {};

  materials.forEach((item, index) => {
    if (!categories[item.category]) {
      categories[item.category] = {
        items: [],
        checkedCount: 0
      };
    }

    categories[item.category].items.push({ ...item, index });

    if (item.checked) {
      categories[item.category].checkedCount++;
    }
  });

  materialsList.innerHTML =
    Object.entries(categories)
      .map(([category, data]) => `
        <details
  class="material-category" 
  data-category="${category}"
  ${openedCategories.has(category) ? "open" : ""}>
          <summary>${category}${data.checkedCount > 0 ? ` (${data.checkedCount})` : ""}</summary>

          ${data.items.map(item => `
            <div class="material-item">
              <div class="material-row">
                <input
                  type="checkbox"
                  data-check-index="${item.index}"
                  ${item.checked ? "checked" : ""}
                />

                <div style="flex:1;">
                  <div class="material-name">${escapeHtml(item.label)}</div>

                  <input
                    class="input"
                    type="text"
                    data-note-index="${item.index}"
                    value="${escapeHtml(item.note || "")}"
                    placeholder="Quantité, taille, numéro de lot…"
                  />
                </div>
              </div>
            </div>
          `).join("")}
        </details>
      `)
      .join("")
    +
    `
      <div class="card" style="margin-top:15px;">
        <div class="material-name">📝 Notes libres</div>

        <textarea
          id="materialsFreeText"
          class="input"
          rows="6"
          placeholder="Ajouter ici le matériel non listé..."
        >${escapeHtml(freeText)}</textarea>
      </div>
    `;


  // Sauvegarde des checkbox
  materialsList.querySelectorAll("[data-check-index]").forEach((el) => {
    el.addEventListener("change", (e) => {
      const idx = Number(e.target.dataset.checkIndex);
      const next = readStorage("materials-list", DEFAULT_MATERIAL);

      if (!next[idx]) return;

      next[idx].checked = e.target.checked;
      writeStorage("materials-list", next);

      // Pour mettre à jour le compteur de la catégorie
      renderMaterials();
    });
  });

  // Sauvegarde des notes par matériel
  materialsList.querySelectorAll("[data-note-index]").forEach((el) => {
    el.addEventListener("input", (e) => {
      const idx = Number(e.target.dataset.noteIndex);
      const next = readStorage("materials-list", DEFAULT_MATERIAL);

      if (!next[idx]) return;

      next[idx].note = e.target.value;
      writeStorage("materials-list", next);
    });
  });

  // Sauvegarde de la note libre
  const freeTextEl = document.getElementById("materialsFreeText");
  if (freeTextEl) {
    freeTextEl.addEventListener("input", (e) => {
      localStorage.setItem("materials-free-text", e.target.value);
    });
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}


function updateHeaderAndNav(screen) {
  const topbar = document.getElementById("topbar");
  const title = document.getElementById("mainTitle");

  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById(`screen-${screen}`)?.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((el) => el.classList.remove("active"));
  document.querySelector(`.nav-btn[data-screen="${screen}"]`)?.classList.add("active");

  // 🎯 Gestion des titres
  let pageTitle = "Algorithmes";

  switch (screen) {
    case "home":
      pageTitle = "Algorithmes";
      break;

    case "vd":
      pageTitle = "Algo VD";
      break;

    case "star":
      pageTitle = "Carnet de poche";
      break;

    case "autre":
      pageTitle = "Autre";
      break;

    case "materials":
      pageTitle = "Matériel";
      break;

    case "detail":
      // Cas spécial détail
      if (state.detailSource === "star") {
        pageTitle = "Carnet de poche";
      } else if (state.detailSource === "vd") {
        pageTitle = "Algo VD";
      } else if (state.detailSource === "autre") {
        pageTitle = "Autre";
      }
      break;
  }

  if (title) title.textContent = pageTitle;

  // 🎨 Mode STAR (couleur spéciale)
  if (screen === "star" || (screen === "detail" && state.detailSource === "star")) {
    topbar?.classList.add("star-mode");
  } else {
    topbar?.classList.remove("star-mode");
  }
}


function showScreen(screen) {
  state.screen = screen;
  applyTheme(screen);
  updateHeaderAndNav(screen);

  if (screen === "home") {
    const searchVal = document.getElementById("searchInput")?.value || "";

    if (searchVal.trim()) {
      runHomeSearch(searchVal);
    } else {
      const favoritesSection = document.getElementById("favoritesSection");
      if (favoritesSection) favoritesSection.style.display = "";
      renderHomeFavorites();
      clearHomeSearchResults();
    }
  }

  if (screen === "vd") renderList("vd", "vdList");
  if (screen === "star") renderList("star", "starList");
   if (screen === "autre") renderList("autre", "autreList");
  if (screen === "detail") renderDetail();
  if (screen === "materials") renderMaterials();
}

function setupEvents() {
  document.querySelectorAll("[data-screen]").forEach((el) => {
    el.addEventListener("click", () => {
      const screen = el.getAttribute("data-screen");
      showScreen(screen);
    });
  });

  document.getElementById("backBtn")?.addEventListener("click", () => {
    showScreen(state.previousScreen || "home");
  });

document.getElementById("resetMaterials")?.addEventListener("click", () => {
  // Reset du matériel
  writeStorage("materials-list", DEFAULT_MATERIAL);

  // ✅ Reset des notes libres
  localStorage.removeItem("materials-free-text");

  renderMaterials();
});

  document.getElementById("syncMaterials")?.addEventListener("click", () => {
    alert("Synchronisation à brancher plus tard.");
  });

  document.getElementById("searchInput")?.addEventListener("input", setupSearchHandler);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}
function calculPedia() {
  console.log("OK calcul déclenché");
}
  const poids = Number(document.getElementById("poidsPedia").value);
  const resultats = document.getElementById("resultatsPedia");

  if (!poids || poids <= 0) {
    resultats.innerHTML = "";
    return;
  }

  const amioDose = poids * 5;
  const amioMax = poids * 15;
  const amioVol = amioDose / 50;

  const adreDose = poids * 0.01;
  const adreVol = adreDose;

  const glucoseDose = poids * 0.4;
  const glucoseVol = glucoseDose / 0.2;

  const txaDose = poids * 15;
  const txaVol = txaDose / 100;

  const liquidesVol = poids * 20;

  const rivotrilDose = Math.min(poids * 0.01, 0.5);

  const chocDose1 = poids * 2;
  const chocDose2 = poids * 4;

  resultats.innerHTML = `
    <div class="med-result med-amio">
      🟦 Amiodarone<br>
      Dose : ${amioDose.toFixed(1)} mg<br>
      Volume : ${amioVol.toFixed(2)} ml<br>
      Max : ${amioMax.toFixed(1)} mg
    </div>

    <div class="med-result med-adre">
      🟥 Adrénaline<br>
      Dose : ${adreDose.toFixed(3)} mg<br>
      Volume : ${adreVol.toFixed(3)} ml
    </div>

    <div class="med-result med-glucose">
      🟨 Glucose<br>
      Dose : ${glucoseDose.toFixed(1)} g<br>
      Volume : ${glucoseVol.toFixed(0)} ml
    </div>

    <div class="med-result med-txa">
      🟩 TXA<br>
      Dose : ${txaDose.toFixed(0)} mg<br>
      Volume : ${txaVol.toFixed(2)} ml
    </div>

    <div class="med-result med-liquides">
      💧 Liquides<br>
      ${liquidesVol.toFixed(0)} ml
    </div>

    <div class="med-result med-rivotril">
      🟪 Rivotril<br>
      Dose : ${rivotrilDose.toFixed(2)} mg
    </div>

    <div class="med-result med-choc">
      ⚡ Choc<br>
      1er : ${chocDose1.toFixed(0)} J<br>
      2e : ${chocDose2.toFixed(0)} J
    </div>
  `;
}


function init() {
  if (!localStorage.getItem("materials-list")) {
    writeStorage("materials-list", DEFAULT_MATERIAL);
  }

  setupEvents();
  registerServiceWorker();

  showScreen("home");
}

document.addEventListener("DOMContentLoaded", init);


