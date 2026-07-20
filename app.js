/**
 * Algorithmes terrain
 * Développé par : Mélanie Weil
 * © 2026 – Tous droits réservés
 */

console.log("APP VERSION 20-07-2026 15h43");

// ⚠️ Gestion globale des erreurs
window.addEventListener("error", function(e) {

  console.error("Erreur détectée :", e);

  const role = localStorage.getItem("role") || "PUBLIC";

  if (role === "ADMIN") {

    alert(
      "Erreur JavaScript\n\n" +
      e.message +
      "\n\nLigne : " +
      e.lineno
    );

  } else {

    document.body.innerHTML = `
      <div style="
        padding:40px;
        text-align:center;
        font-family:sans-serif;
      ">
        <h2>⚠️ Une mise à jour est en cours.
Merci de réessayer dans quelques minutes ☺️.
</h2>

        <p>
          Une erreur est survenue.
        </p>

        <button onclick="location.reload()">
          🔄 Recharger
        </button>

      </div>
    `;
  }

});

const USER_ROLE = localStorage.getItem("role") || "PUBLIC";

const isAdmin = USER_ROLE === "ADMIN";
const isSTAR = USER_ROLE === "STAR";
const isSAT = USER_ROLE === "SAT";
const isTCS = USER_ROLE === "TCS";

let MODE = USER_ROLE;

let corfaTab = "algos";

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

  // 🟣 NEURO
  "Neuro🧠": {
    badge: "background:#ddd6fe;color:#4c1d95;border-color:#a78bfa;",
    border: "#7c3aed",
    background: "#f5f3ff"
  },

  // 🌸 ANTALGIE
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

  // 🔷 AUTRE
  "Autre": {
    badge: "background:#e0f2fe;color:#075985;border-color:#7dd3fc;",
    border: "#0284c7",
    background: "#f0f9ff"
  },

 
"💊 Médicament": {
  badge: "background:#c7d2fe;color:#312e81;border-color:#6366f1;",
  border: "#4f46e5",
  background: "#eef2ff"
},

  "Particuliers/Autres 🌟": {
    badge: "background:#e5e7eb;color:#374151;border-color:#9ca3af;",
    border: "#6b7280",
    background: "#f9fafb"
  },
  "Résumés": {
  badge: "background:#fbcfe8;color:#9d174d;border-color:#f472b6;",
  border: "#ec4899",
  background: "#fdf2f8"
}
};

const VD_ALGOS = [
  { id: "acc_physio", ordre: 32, titre: "Accouchement physiologique💪🏻", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", images: ["images/acc_physio.png","images/APGAR.png"], favori: false, notesPlaceholder: "Ex. matériel de naissance, points d’anticipation…", access: ["PUBLIC"]},
  { id: "acc_patho1", ordre: 33, titre: "Accouchement pathologique 1", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/acc_patho1.png", favori: false, notesPlaceholder: "Ex. points d’attention…", access: ["PUBLIC"] },
  { id: "acc_patho2", ordre: 34, titre: "Accouchement pathologique 2", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/acc_patho2.png", favori: false, notesPlaceholder: "Ex. points d’attention…", access: ["PUBLIC"] },
  { id: "eclampsie", ordre: 35, titre: "Pré-éclampsie / éclampsie", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/eclampsie.png", favori: false, notesPlaceholder: "Ex. Labetalol, MgSO4, conduite locale…" , access: ["PUBLIC"]},
  { id: "pph", ordre: 36, titre: "🩸Hémorragie post-partum", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/pph.png", favori: false, notesPlaceholder: "Ex. points de surveillance…" , access: ["PUBLIC"]},
  { id: "cordon", ordre: 37, titre: "🪢 Circulaire du cordon", chapitre: "Obstétrique/Gynécologie🤰", source: "VD", image: "images/cordon.png", favori: false, notesPlaceholder: "Ex. conduite locale…", access: ["PUBLIC"] },
  { id: "anaphylaxie", ordre: 9, titre: "Réaction anaphylactique 🥵", chapitre: "Maladie🤒", source: "VD", images: ["images/anaphylaxie.png","images/Anaphylactique.png"], favori: false, notesPlaceholder: "Ex. adrénaline, surveillance…" , access: ["PUBLIC"]},
  { id: "antalgie", ordre: 1, titre: "Antalgie VD", chapitre: "💉Antalgie", source: "VD", image: "images/antalgie.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, précautions sujet âgé…" , access: ["PUBLIC"]},
  { id: "acr_bls", ordre: 12, titre: "ACR adulte / BLS 🫀", chapitre: "Maladie🤒", source: "VD", image: "images/acr_bls.png",privateImages: ["images/ACR_CHAT.png"], favori: false, notesPlaceholder: "Ex. checklist équipe, matériel, points de briefing…", access: ["PUBLIC"] },
  { id: "acr_als", ordre: 11, titre: "ACR adulte / ALS 🫀", chapitre: "Maladie🤒", source: "VD", image: "images/acr_als.png",privateImages: ["images/ACR_CHAT.png"], favori: false, notesPlaceholder: "Ex. adrénaline, amiodarone, causes réversibles…" , access: ["PUBLIC"]},
  { id: "acr_stop", ordre: 10, titre: "☠️Arrêt de réanimation🪦", chapitre: "Maladie🤒", source: "VD", images: ["images/acr_arret.png"], favori: false, notesPlaceholder: "Ex. adrénaline, amiodarone, causes réversibles…" , access: ["PUBLIC"]},
  { id: "acr_pedia", ordre: 25, titre: "ACR pédiatrique 🫀", chapitre: "Pédiatrie👶", source: "VD", image: "images/acr_pedia.png", favori: false, notesPlaceholder: "Ex. doses, matériel pédiatrique…" , access: ["PUBLIC"]},
  { id: "nn", ordre: 26, titre: "🍼 Réanimation nouveau-né", chapitre: "Pédiatrie👶", source: "VD", image: "images/nn.png", favori: false, notesPlaceholder: "Ex. matériel, température, ventilation…" , access: ["PUBLIC"]},
  { id: "brulures", ordre: 19, titre: "🥵 Brûlures 🌡️", chapitre: "Trauma 🤕", source: "VD", image: "images/brulures.png", favori: false, notesPlaceholder: "Ex. refroidissement, pansement, surveillance…" , access: ["PUBLIC"]},
  { id: "conv_adulte", ordre: 20, titre: "😵‍💫 Convulsions adulte 🫨", chapitre: "Neuro🧠", source: "VD", image: "images/conv_adulte.png",privateImages: ["images/Convulsions_CHAT.png"], favori: false, notesPlaceholder: "Ex. midazolam, clonazépam…" , access: ["PUBLIC"]},
  { id: "conv_pedia", ordre: 27, titre: "😵‍💫 Convulsions pédiatriques 🌡️", chapitre: "Pédiatrie👶", source: "VD", image: "images/conv_ped_star.png", favori: false, notesPlaceholder: "Ex. glycémie, température, refroidissement…" , access: ["PUBLIC"]},
  { id: "sca", ordre: 13, titre: "Douleurs thoraciques 🫀 (SCA)", chapitre: "Maladie🤒", source: "VD", image: "images/sca.png", favori: false, notesPlaceholder: "Ex. ECG 12 dérivations, ASA, nitrés…", access: ["PUBLIC"] },
  { id: "resp_adulte", ordre: 14, titre: "Détresse respiratoire adulte 🫁", chapitre: "Maladie🤒", source: "VD", image: "images/resp_adulte.png", favori: false, notesPlaceholder: "Ex. O2, salbutamol, CPAP…" , access: ["PUBLIC"]},
  { id: "resp_pedia", ordre: 28, titre: "🫁 Détresse respiratoire 👶 pédiatrique", chapitre: "Pédiatrie👶", source: "VD", image: "images/resp_pedia.png", favori: false, notesPlaceholder: "Ex. nébulisation, respect position spontanée…" , access: ["PUBLIC"]},
  { id: "choc", ordre: 15, titre: "État de choc", chapitre: "Maladie🤒", source: "VD", images: ["images/choc.png","images/types_de_choc.png"],privateImages: ["images/Etat de choc_CHAT.png"], favori: false, notesPlaceholder: "Ex. RL, TA cible, TXA…" , access: ["PUBLIC"]},
  { id: "coma", ordre: 16, titre: "😴 Trouble de la conscience adulte 😵‍💫", chapitre: "Maladie🤒", source: "VD", image: "images/coma.png", favori: false, notesPlaceholder: "Ex. glucose, naloxone, thiamine…" , access: ["PUBLIC"]},
  { id: "avc", ordre: 21, titre: "😵 AVC", chapitre: "Neuro🧠", source: "VD", images: ["images/avc.png","images/avc_annexe.png"], favori: true, notesPlaceholder: "Ex. anticoagulants, heure de début, proches à prévenir…" , access: ["PUBLIC"]},
  { id: "io", ordre: 24, titre: "🦴 Voie intra-osseuse", chapitre: "Autre", source: "VD", image: "images/io.png", favori: false, notesPlaceholder: "Ex. indications, contre-indications, surveillance…" , access: ["PUBLIC"]}
];

const AUTRE = [
  { id: "labo", ordre: 21, titre: "Valeur Laboratoire 🧪", chapitre: "Autre", source: "Autre", image: "images/labo.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" , access: ["PUBLIC"]},
  { id: "molecules", ordre: 22, titre: "💊 Molécules Antalgie", chapitre: "Autre", source: "STAR", image: "images/molecules2.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" , access: ["PUBLIC"]},
  { id: "toxidrome", ordre: 11, titre: "Toxidrome 💊", chapitre: "Neuro🧠", source: "Autre", images: ["images/Toxidrome.png","images/Toxidrome_anticholinergique_2.png","images/Toxidrome_cholinergique.png","images/Toxidrome_opioide.png","images/Toxidrome_simpatomimetique.png","images/Toxidrome_hypnosedatif.png"], favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…", access: ["PUBLIC"] },
  { id: "glasgow", ordre: 12, titre: "Glasgow 😵‍💫", chapitre: "Neuro🧠", source: "Autre", images:["images/GCS.png","images/Glasgow.png"], favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…", access: ["PUBLIC"] },
  { id: "antalgie_sat", ordre: 3, titre: "Antalgie SAT", chapitre: "💉Antalgie", source: "SAT", image: "images/antalgie_sat.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" , access: ["SAT"]},
  { id: "antalgie_tcs", ordre: 4, titre: "Antalgie TCS", chapitre: "💉Antalgie", source: "TCS", images: ["images/antalgie_tcs.png","images/molecules2.png"], favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, précautions sujet âgé…", access: ["TCS"] },
  { id: "antalgie_tcs_ped", ordre: 5, titre: "Antalgie TCS Ped 👶", chapitre: "💉Antalgie", source: "TCS", image: "images/antalgie_tcs_ped.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…", access: ["TCS"] },
  { id: "aeioutip", ordre: 24, titre: "AEIOU TIPS😴", chapitre: "Autre", source: "Autre", image: "images/AEIOUTIPS.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" , access: ["PUBLIC"]},
  { id: "befast", ordre: 13, titre: "Be FAST 😵", chapitre: "Neuro🧠", source: "Autre", image: "images/Befast.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" , access: ["PUBLIC"]},
  { id: "breathing", ordre: 23, titre: "Breathing 🫁", chapitre: "Autre", source: "Autre", image: "images/breathing.png", favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…" , access: ["PUBLIC"]},
  { id: "calcul_pedia", ordre: 40, titre: "💉 Calcul rapide pédiatrique", chapitre: "Pédiatrie👶", source: "Autre", images: ["images/calcul_pedia.png","images/pastel.png"], favori: false, notesPlaceholder: "", access: ["PUBLIC"] },
  {id: "mes_resumes",ordre: 1,titre: "📚 Mes Révisions",chapitre: "Autre", source: "Moi", image: "images/mes_resumes.png", favori: false, notesPlaceholder: "", access: ["ADMIN"]},
   {id: "cartes_theorie",ordre: 2,titre: "📚 Cartes de théorie",chapitre: "Autre", source: "Autre", image: "images/cartes.png", favori: false, notesPlaceholder: "", access: ["PUBLIC"]}
 
];


// 🔐 Mode perso (stocké localement sur ton appareil)
const canSeeStar =
  USER_ROLE === "STAR" ||
  USER_ROLE === "ADMIN";

function hasAccess(roles = []) {

  if (USER_ROLE === "ADMIN") {return true;}


  if (roles.length === 0) {
    return true;
  }

  if (roles.includes("PUBLIC")) {
    return true;
  }

  return roles.includes(USER_ROLE);
}
const AUTRE_FILTERED = AUTRE.filter(
  item => hasAccess(item.access)
);

AUTRE.length = 0;
AUTRE.push(...AUTRE_FILTERED);


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
    notesPlaceholder: "Ex. O2, bronchodilatateurs, ventilation, surveillance…", access: ["STAR"]
  },
  {
    id: "abstention_arret_reanimation",
    ordre: 2,
    titre: "🪦 Abstention/arrêt de réanimation ☠️",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/abstention_arret_reanimation.png",
    favori: false,
    notesPlaceholder: "Ex. critères, contexte, transmission, traçabilité…", access: ["STAR"]
  },
  {
    id: "acr_adulte",
    ordre: 3,
    titre: "🫀 Arrêt cardiorespiratoire adulte",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/acr_adulte.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, défibrillation, adrénaline, causes réversibles…", access: ["STAR"]
  },
  {
    id: "acr_shema",
    ordre: 4,
    titre: "🫀 Shema ALS",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/shema_ALS.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, défibrillation, adrénaline, causes réversibles…", access: ["STAR"]
  },
  {
    id: "intra_osseuse",
    ordre: 5,
    titre: "🦴 Intra-osseuse",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/intra_osseuse.png",
    favori: false,
    notesPlaceholder: "Ex. indications, contre-indications, surveillance…", access: ["STAR"]
  },
  {
    id: "douleur_thoracique_sca",
    ordre: 6,
    titre: "🫀 Douleur thoracique (SCA)",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/douleur_thoracique_sca.png",
    favori: false,
    notesPlaceholder: "Ex. ECG 12 dérivations, ASA, nitrés, surveillance…", access: ["STAR"]
  },
  {
    id: "etat_de_choc",
    ordre: 7,
    titre: "🤒 Etat de choc",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/etat_de_choc.png",
    favori: false,
    notesPlaceholder: "Ex. remplissage, TA cible, TXA, surveillance…", access: ["STAR"]
  },
  {
    id: "convulsion_adulte",
    ordre: 8,
    titre: "😵‍💫 Convulsion adulte 🫨",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/conv_adulte_star.png",
    favori: false,
    notesPlaceholder: "Ex. benzodiazépines, glycémie, durée de crise…", access: ["STAR"]
  },
  {
    id: "trouble_conscience_adulte",
    ordre: 9,
    titre: "😵‍💫 Trouble de la conscience adulte 😴",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/trouble_conscience_adulte.png",
    favori: false,
    notesPlaceholder: "Ex. glucose, GCS, naloxone, surveillance…", access: ["STAR"]
  },
  {
    id: "suspicion_avc",
    ordre: 10,
    titre: "🧠 Suspicion d’AVC 😵",
    chapitre: "Maladie 🌟",
    source: "STAR",
    images: ["images/suspicion_avc.png","images/suspicion_avc_2.png"],
    favori: false,
    notesPlaceholder: "Ex. heure de début, anticoagulants, filière AVC…", access: ["STAR"]
  },

  {
    id: "reaction_anaphylactique",
    ordre: 12,
    titre: "🥵 Réaction anaphylactique",
    chapitre: "Maladie 🌟",
    source: "STAR",
    image: "images/reaction_anaphylactique.png",
    favori: false,
    notesPlaceholder: "Ex. adrénaline, O2, remplissage, surveillance…", access: ["STAR"]
  },
  {
    id: "amd_antalgie",
    ordre: 13,
    titre: "💉 Antalgie 💊",
    chapitre: "Maladie 🌟",
    source: "STAR",
    images: ["images/amd.png","images/molecules.png"],
    favori: false,
    notesPlaceholder: "Ex. EVA/algoplus, posologies, contre-indications…", access: ["STAR"]
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
    notesPlaceholder: "Ex. refroidissement, surface, pansement, surveillance…", access: ["STAR"]
  },
  {
    id: "brulures_degre",
    ordre: 16,
    titre: "🥵 Brûlures Degré 🌡️",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/brulure.png",
    favori: false,
    notesPlaceholder: "Ex. refroidissement, surface, pansement, surveillance…", access: ["STAR"]
  },
  {
    id: "exposition_fumees",
    ordre: 17,
    titre: "💨 Exposition aux fumées 💨",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/exposition_fumees.png",
    favori: false,
    notesPlaceholder: "Ex. O2, CO, contexte incendie, surveillance…", access: ["STAR"]
  },
  {
    id: "immobilisation_rachis",
    ordre: 18,
    titre: "Immobilisation du rachis 🛹",
    chapitre: "🤕Traumatique 🌟",
    source: "STAR",
    image: "images/immobilisation_rachis.png",
    favori: false,
    notesPlaceholder: "Ex. critères, extraction, collier, matelas…", access: ["STAR"]
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
    notesPlaceholder: "Ex. constantes, poids estimé, tailles de matériel…", access: ["STAR"]
  },
  {
    id: "detresse_respiratoire_pediatrique",
    ordre: 20,
    titre: "🫁 Détresse respiratoire pédiatrique 👶",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/detresse_respiratoire_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. O2, nébulisation, position spontanée, surveillance…", access: ["STAR"]
  },
  {
    id: "acr_pediatrique",
    ordre: 21,
    titre: "🫀 Arrêt cardio-respiratoire pédiatrique",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/acr_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, doses, matériel pédiatrique…", access: ["STAR"]
  },
  {
    id: "dilutions_acr_pediatrique",
    ordre: 22,
    titre: "🫀 Dilutions ACR pédiatrique",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/dilutions_acr_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. RCP, doses, matériel pédiatrique…", access: ["STAR"]
  },
  {
    id: "soins_reanimation_nouveau_ne",
    ordre: 23,
    titre: "🍼 Soins et réanimation du nouveau-né",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/soins_reanimation_nouveau_ne.png",
    favori: false,
    notesPlaceholder: "Ex. température, ventilation, FC, matériel…", access: ["STAR"]
  },
  {
    id: "convulsion_trouble_conscience_pediatrique",
    ordre: 24,
    titre: "😵‍💫 Convulsion et trouble de l’état de conscience pédiatrique 🌡️",
    chapitre: "👶Pédiatrie 🌟",
    source: "STAR",
    image: "images/convulsion_trouble_conscience_pediatrique.png",
    favori: false,
    notesPlaceholder: "Ex. glycémie, température, causes, traitement…", access: ["STAR"]
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
    notesPlaceholder: "Ex. matériel, surveillance, délivrance, nouveau-né…", access: ["STAR"]
  },
  {
    id: "accouchement_pathologique_1",
    ordre: 26,
    titre: "Accouchement pathologique 1🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/accouchement_pathologique_1.png",
    favori: false,
    notesPlaceholder: "Ex. points d’anticipation, complications, conduite…", access: ["STAR"]
  },
  {
    id: "aide_memoire_dystocie_epaules",
    ordre: 27,
    titre: "Aide-mémoire Dystocie des épaules🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_dystocie_epaules.png",
    favori: false,
    notesPlaceholder: "Ex. manœuvres, chronologie, aide demandée…", access: ["STAR"]
  },
  {
    id: "aide_memoire_Mc_Roberts",
    ordre: 28,
    titre: "Aide-mémoire MC Roberts🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_Mc_Roberts.png",
    favori: false,
    notesPlaceholder: "Ex. manœuvres, chronologie, aide demandée…", access: ["STAR"]
  },
  {
    id: "aide_memoire_Menticoglu",
    ordre: 29,
    titre: "Aide-mémoire Menticoglu🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_Menticoglu.png",
    favori: false,
    notesPlaceholder: "Ex. manœuvres, chronologie, aide demandée…", access: ["STAR"]
  },
  {
    id: "accouchement_pathologique_2",
    ordre: 30,
    titre: "Accouchement pathologique 2🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/accouchement_pathologique_2.png",
    favori: false,
    notesPlaceholder: "Ex. complications, surveillance materno-fœtale…", access: ["STAR"]
  },
  {
    id: "aide_memoire_accouchement_siege",
    ordre: 31,
    titre: "Aide-mémoire Accouchement en siège🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_siege.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…", access: ["STAR"]
  },
  {
    id: "aide_memoire_accouchement_Dos",
    ordre: 32,
    titre: "Aide-mémoire Accouchement, Dos🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_dos.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…", access: ["STAR"]
  },
  {
    id: "aide_memoire_accouchement_jambes",
    ordre: 33,
    titre: "Aide-mémoire Accouchement, Jambes🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_jambes.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…", access: ["STAR"]
  },
  {
    id: "aide_memoire_accouchement_bras",
    ordre: 34,
    titre: "Aide-mémoire Accouchement, Bras🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_bras.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…", access: ["STAR"]
  },
  {
    id: "aide_memoire_accouchement_tete",
    ordre: 35,
    titre: "Aide-mémoire Accouchement, Tête🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/aide_memoire_accouchement_tete.png",
    favori: false,
    notesPlaceholder: "Ex. conduite, manœuvres, anticipation, matériel…", access: ["STAR"]
  },
  {
    id: "circulaire_cordon",
    ordre: 36,
    titre: "🪢Circulaire du cordon🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/circulaire_cordon.png",
    favori: false,
    notesPlaceholder: "Ex. conduite locale, dégagement, surveillance…", access: ["STAR"]
  },
  {
    id: "pre_eclampsie_eclampsie",
    ordre: 37,
    titre: "Pré-éclampsie/éclampsie🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/pre_eclampsie_eclampsie.png",
    favori: false,
    notesPlaceholder: "Ex. TA, MgSO4, signes de gravité, conduite…", access: ["STAR"]
  },
  {
    id: "hemorragie_post_partum_primaire",
    ordre: 38,
    titre: "🩸 Hémorragie post-partum primaire🫃🏼",
    chapitre: "Obstétrique/Gynécologie 🌟",
    source: "STAR",
    image: "images/hemorragie_post_partum_primaire.png",
    favori: false,
    notesPlaceholder: "Ex. massage utérin, saignement, TXA, surveillance…", access: ["STAR"]
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
    notesPlaceholder: "Ex. rôle leader, coordination, sécurité, communication…", access: ["STAR"]
  },
  {
    id: "aide_memoire_evenement_particulier_majeur",
    ordre: 40,
    titre: "💥 Aide-mémoire évènement particulier/majeur",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_evenement_particulier_majeur.png",
    favori: false,
    notesPlaceholder: "Ex. rôle leader, coordination, sécurité, communication…", access: ["STAR"]
  },
  {
    id: "aide_memoire_evenement_particulier_majeur_pre_trieur",
    ordre: 41,
    titre: "💥 Aide-mémoire évènement particulier/majeur Pré-trieur",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_evenement_particulier_majeur_pre_trieur.png",
    favori: false,
    notesPlaceholder: "Ex. tri, flux, sécurité, priorisation…", access: ["STAR"]
  },
  {
    id: "aide_memoire_SAP",
    ordre: 42,
    titre: "💥 Aide-mémoire SAP",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_sap.png",
    favori: false,
    notesPlaceholder: "Ex. tri, flux, sécurité, priorisation…", access: ["STAR"]
  },
  {
    id: "aide_memoire_renfort_psycho_social",
    ordre: 43,
    titre: "Aide-mémoire renfort psycho-social",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_renfort_psycho_social.png",
    favori: false,
    notesPlaceholder: "Ex. ressources, critères, relais, accompagnement…", access: ["STAR"]
  },
  {
    id: "aide_memoire_babyrescue",
    ordre: 44,
    titre: "👶 Aide-mémoire babyrescue 🚑",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_babyrescue.png",
    favori: false,
    notesPlaceholder: "Ex. matériel, procédure, points d’attention…", access: ["STAR"]
  },
  {
    id: "aide_memoire_debriefing_etudiantes",
    ordre: 45,
    titre: "🎓 Aide-mémoire débriefing étudiant.es 🎓",
    chapitre: "Particuliers/Autres 🌟",
    source: "STAR",
    image: "images/aide_memoire_debriefing_etudiantes.png",
    favori: false,
    notesPlaceholder: "Ex. points de débriefing, apprentissages, feedback…", access: ["STAR"]
  }
];



const CORFA_ALGOS = [

  // 🔵 NON TRAUMATIQUE ADULTE
  { id: "corfa_airway", ordre: 10, titre: "Gestion voies aériennes / ventilation CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_airway.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_respiratoire", ordre: 11, titre: "Troubles respiratoires CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_respiratoire.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_acr_non_trau", ordre: 12, titre: "ACR non traumatique CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_acr_non_trau.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_retour_circu", ordre: 13, titre: "Retour circulation spontanée CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_retour_circu.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_thoracique", ordre: 14, titre: "Douleurs thoraciques CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_thoracique.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_rythme", ordre: 15, titre: "Troubles du rythme CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_rythme.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_choc", ordre: 16, titre: "État de choc non traumatique CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_choc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_anaphylaxie", ordre: 17, titre: "Réaction anaphylactique CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_anaphylaxie.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_conscience", ordre: 18, titre: "Troubles de la conscience CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_conscience.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_neuro", ordre: 19, titre: "Déficit neurologique focal CORFA CORFA", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_neuro.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_antalgie", ordre: 20, titre: "Antalgie non traumatique", chapitre: "Maladie🤒", source: "CORFA", image: "images/corfa_antalgie.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},

  // 🟢 TRAUMATIQUE ADULTE
  { id: "corfa_trau_airway", ordre: 21, titre: "Gestion voies aériennes traumatique CORFA", chapitre: "Trauma 🤕", source: "CORFA", images: ["images/corfa_airway.png"], favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_trau_thorax", ordre: 22, titre: "Traumatismes thoraciques CORFA", chapitre: "Trauma 🤕", source: "CORFA", images: ["images/corfa_trau_airway.png","images/Pneumothorax sous tension.png"], favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_acr_trau", ordre: 23, titre: "ACR traumatique CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_trau_thorax.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_rosc_trau", ordre: 24, titre: "ROSC traumatique CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_acr_trau.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_choc_trau", ordre: 25, titre: "Hémorragies et État de choc traumatique CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_choc_trau.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_tcc", ordre: 26, titre: "Traumatisme crânio-cérébral CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_tcc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_medullaire", ordre: 27, titre: "Traumatisme médullaire CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_medullaire.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_rachis", ordre: 28, titre: "Stabilisation du rachis CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_rachis.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_trau_antalgie", ordre: 29, titre: "Antalgie traumatique CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_trau_antalgie.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_acideeau", ordre: 30, titre: "Accident de plongée CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_plongee.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_brulure", ordre: 31, titre: "Brûlures CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_brulure.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_hypothermie", ordre: 32, titre: "Hypothermie CORFA", chapitre: "Trauma 🤕", source: "CORFA", image: "images/corfa_hypothermie.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},

  // 🟡 PÉDIATRIQUE
  { id: "corfa_ped_airway", ordre: 33, titre: "Airway pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_airway.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_ped_obstruction", ordre: 34, titre: "Obstruction corps étranger CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_obstruction.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_ped_resp", ordre: 35, titre: "Détresse respiratoire pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_resp.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_ped_acr", ordre: 36, titre: "ACR pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_acr.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
   { id: "corfa_ped_rosc", ordre: 37, titre: "ROSC pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_rosc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_choc", ordre: 38, titre: "Etat de choc NT/T pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_choc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_sept", ordre: 39, titre: "Etat septique pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_sept.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_anaphy", ordre: 40, titre: "Réaction anaphylactique pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_anaphy.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_conscience", ordre: 41, titre: "Trouble de la conscience CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_trble_consc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_antalgie_NT", ordre: 42, titre: "Antalgie NT pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_antalgie_nt.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_ped_trau", ordre: 43, titre: "Traumatisme thoracique pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_trau.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_ped_tcc", ordre: 44, titre: "Traumatisme crânio-cérébral pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_tcc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_médullaire", ordre: 45, titre: "Trauma médullaire pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_traum_med.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
{ id: "corfa_ped_antalgie_T", ordre: 46, titre: "Antalgie T pédiatrique CORFA", chapitre: "Pédiatrie👶", source: "CORFA", image: "images/corfa_ped_antalgie_t.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},


  // 🔴 OBSTETRIQUE
  { id: "corfa_acc", ordre: 47, titre: "Accouchement CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_acc.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_cordon", ordre: 48, titre: "Circulaire du cordon CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_cordon.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_acc_patho1", ordre: 49, titre: "Accouchement pathologique 1 CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_acc_patho1.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_acc_patho2", ordre: 50, titre: "Accouchement pathologique 2 Siège CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_acc_patho2.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_eclampsie", ordre: 51, titre: "Pré-éclampsie / éclampsie CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_eclampsie.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_réa_nn", ordre: 52, titre: "Soins et réanimation du nouveau-né CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_rea_nn.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_pph", ordre: 53, titre: "Hémorragie post-partum CORFA", chapitre: "Obstétrique/Gynécologie🤰", source: "CORFA", image: "images/corfa_pph.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},

  // ⚪ AUTRES
  { id: "corfa_nv", ordre: 54, titre: "Nausées et vomissements CORFA", chapitre: "Autre", source: "CORFA", image: "images/corfa_nv.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_arret", ordre: 55, titre: "Arrêt de réanimation CORFA", chapitre: "Autre", source: "CORFA", image: "images/corfa_arret.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_orientation", ordre: 56, titre: "Orientation extra-hospitalière CORFA", chapitre: "Autre", source: "CORFA", image: "images/corfa_orientation.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
   { id: "corfa_orientation", ordre: 57, titre: "Orientation extra-hospitalière Check-list CORFA", chapitre: "Autre", source: "CORFA", image: "images/corfa_orientation_cl.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]},
  { id: "corfa_agitation", ordre: 58, titre: "État d’agitation CORFA", chapitre: "Autre", source: "CORFA", image: "images/corfa_agitation.png", favori: false, notesPlaceholder: "" , access: ["PUBLIC"]}

];

const CORFA_PHARMA = [

  // 🔰 INTRO / GÉNÉRALITÉS
  
  { id: "general_analgesiques", ordre: 2, titre: "Généralités analgésiques", chapitre: "Interne", source: "CORFA", images: ["images/corfa_analgesie1.png","images/corfa_analgesie2.png"], favori: false , access: ["PUBLIC"]},
  { id: "general_bzd", ordre: 3, titre: "Généralités benzodiazépines", chapitre: "Interne", source: "CORFA", images: ["images/corfa_bzd1.png","images/corfa_bzd2.png","images/corfa_bzd3.png","images/corfa_bzd4.png"], favori: false , access: ["PUBLIC"]},
  { id: "serotoninergique", ordre: 4, titre: "Syndrome sérotoninergique", chapitre: "Interne", source: "CORFA", images:[ "images/corfa_serotonine1.png","images/corfa_serotonine2.png"], favori: false , access: ["PUBLIC"]},
  { id: "qt_long", ordre: 5, titre: "Syndrome QT long", chapitre: "Interne", source: "CORFA", images: ["images/corfa_qt1.png","images/corfa_qt2.png"], favori: false , access: ["PUBLIC"]},

  // 💊 MÉDICAMENTS
  { id: "aas", ordre: 17, titre: "AAS", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_aas1.png","images/corfa_aas2.png","images/corfa_aas3.png","images/corfa_aas4.png"], favori: false , access: ["PUBLIC"]},
  { id: "txa", ordre: 21, titre: "TXA", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_txa1.png","images/corfa_txa2.png","images/corfa_txa3.png"], favori: false , access: ["PUBLIC"]},
  { id: "adenosine", ordre: 25, titre: "Adénosine", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_adenosine1.png","images/corfa_adenosine2.png","images/corfa_adenosine3.png","images/corfa_adenosine4.png"], favori: false , access: ["PUBLIC"]},
  { id: "adrenaline", ordre: 29, titre: "Adrénaline", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_adrenaline1.png","images/corfa_adrenaline2.png","images/corfa_adrenaline3.png","images/corfa_adrenaline4.png"], favori: false , access: ["PUBLIC"]},
  { id: "amiodarone", ordre: 34, titre: "Amiodarone", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_amiodarone1.png","images/corfa_amiodarone2.png","images/corfa_amiodarone3.png","images/corfa_amiodarone4.png"], favori: false , access: ["PUBLIC"]},
  { id: "atropine", ordre: 38, titre: "Atropine", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_atropine1.png","images/corfa_atropine2.png","images/corfa_atropine3.png","images/corfa_atropine4.png"], favori: false , access: ["PUBLIC"]},
  { id: "scopolamine", ordre: 43, titre: "Butylscopolamine", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_butylscopolamine1.png","images/corfa_butylscopolamine2.png","images/corfa_butylscopolamine3.png"], favori: false , access: ["PUBLIC"]},
  { id: "ceftriaxone", ordre: 46, titre: "Ceftriaxone", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_ceftriaxone1.png","images/corfa_ceftriaxone2.png"], favori: false , access: ["PUBLIC"]},
  { id: "clemastine", ordre: 49, titre: "Clémastine", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_clemastine1.png","images/corfa_clemastine2.png"], favori: false , access: ["PUBLIC"]},
  { id: "clonazepam", ordre: 52, titre: "Clonazépam", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_clonazepam1.png","images/corfa_clonazepam2.png","images/corfa_clonazepam3.png"], favori: false , access: ["PUBLIC"]},
  { id: "clopidogrel", ordre: 55, titre: "Clopidogrel", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_clopidogrel1.png","images/corfa_clopidogrel2.png"], favori: false , access: ["PUBLIC"]},
  { id: "diazepam", ordre: 58, titre: "Diazépam", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_diazepam1.png","images/corfa_diazepam2.png","images/corfa_diazepam3.png"], favori: false , access: ["PUBLIC"]},
  { id: "dimetindene", ordre: 62, titre: "Dimétindène", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_dimetindene1.png","images/corfa_dimetindene2.png"], favori: false , access: ["PUBLIC"]},
  { id: "droperidol", ordre: 65, titre: "Dropéridol", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_droperidol1.png","images/corfa_droperidol2.png","images/corfa_droperidol3.png","images/corfa_droperidol4.png"], favori: false , access: ["PUBLIC"]},
  { id: "ephedrine", ordre: 70, titre: "Éphédrine", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_ephedrine1.png","images/corfa_ephedrine2.png","images/corfa_ephedrine3.png"], favori: false, access: ["PUBLIC"] },
  { id: "esomeprazole", ordre: 73, titre: "Esoméprazole", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_esomeprazole1.png","images/corfa_esomeprazole2.png"], favori: false , access: ["PUBLIC"]},
  { id: "etomidate", ordre: 76, titre: "Etomidate", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_etomidate1.png","images/corfa_etomidate2.png"], favori: false, access: ["PUBLIC"] },
  { id: "fentanyl", ordre: 79, titre: "Fentanyl", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_fentanyl1.png","images/corfa_fentanyl2.png","images/corfa_fentanyl3.png","images/corfa_fentanyl4.png",], favori: false , access: ["PUBLIC"]},
  { id: "flumazenil", ordre: 84, titre: "Flumazénil", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_flumazenil.png", favori: false , access: ["PUBLIC"]},
  { id: "furosemide", ordre: 87, titre: "Furosémide", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_furosemide.png", favori: false, access: ["PUBLIC"] },
  { id: "glucagon", ordre: 90, titre: "Glucagon", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_glucagon.png", favori: false , access: ["PUBLIC"]},
  { id: "glucose", ordre: 94, titre: "Glucose", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_glucose.png", favori: false , access: ["PUBLIC"]},
  { id: "haloperidol", ordre: 97, titre: "Halopéridol", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_haloperidol.png", favori: false , access: ["PUBLIC"]},
  { id: "heparine", ordre: 100, titre: "Héparine", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_heparine.png", favori: false , access: ["PUBLIC"]},
  { id: "ketamine", ordre: 103, titre: "Kétamine", chapitre: "💊 Médicament", source: "CORFA", images: ["images/corfa_ketamine1.png","images/corfa_ketamine2.png","images/corfa_ketamine3.png","images/corfa_ketamine4.png","images/corfa_ketamine5.png","images/corfa_ketamine6.png","images/corfa_ketamine7.png"], favori: false , access: ["PUBLIC"]},
  { id: "ketorolac", ordre: 110, titre: "Kétorolac", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_ketorolac.png", favori: false, access: ["PUBLIC"] },
  { id: "labetalol", ordre: 114, titre: "Labétalol", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_labetalol.png", favori: false , access: ["PUBLIC"]},
  { id: "lidocaine", ordre: 118, titre: "Lidocaïne", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_lidocaine.png", favori: false, access: ["PUBLIC"] },
  { id: "lorazepam", ordre: 122, titre: "Lorazépam", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_lorazepam.png", favori: false, access: ["PUBLIC"] },
  { id: "meopa", ordre: 126, titre: "MEOPA", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_meopa.png", favori: false , access: ["PUBLIC"]},
  { id: "methoxy", ordre: 130, titre: "Méthoxyflurane", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_methoxy.png", favori: false , access: ["PUBLIC"]},
  { id: "methylpred", ordre: 134, titre: "Méthylprednisolone", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_methylpred.png", favori: false , access: ["PUBLIC"]},
  { id: "midazolam", ordre: 138, titre: "Midazolam", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_midazolam.png", favori: false, access: ["PUBLIC"] },
  { id: "morphine", ordre: 143, titre: "Morphine", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_morphine.png", favori: false, access: ["PUBLIC"] },
  { id: "naloxone", ordre: 147, titre: "Naloxone", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_naloxone.png", favori: false , access: ["PUBLIC"]},
  { id: "trinitrine", ordre: 151, titre: "Nitroglycérine", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_trinitrine.png", favori: false , access: ["PUBLIC"]},

  // 🔚 FIN
  { id: "noradrenaline", ordre: 156, titre: "Noradrénaline", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_noradrenaline.png", favori: false , access: ["PUBLIC"]},
  { id: "ocytocine", ordre: 161, titre: "Ocytocine", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_ocytocine.png", favori: false , access: ["PUBLIC"]},
  { id: "ondansetron", ordre: 164, titre: "Ondansétron", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_ondansetron.png", favori: false, access: ["PUBLIC"] },
  { id: "olanzapine", ordre: 168, titre: "Olanzapine", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_olanzapine.png", favori: false, access: ["PUBLIC"] },
  { id: "paracetamol", ordre: 171, titre: "Paracétamol", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_paracetamol.png", favori: false, access: ["PUBLIC"] },
  { id: "prasugrel", ordre: 177, titre: "Prasugrel", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_prasugrel.png", favori: false , access: ["PUBLIC"]},
  { id: "propofol", ordre: 181, titre: "Propofol", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_propofol.png", favori: false, access: ["PUBLIC"] },
  { id: "rocuronium", ordre: 184, titre: "Rocuronium", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_rocuronium.png", favori: false, access: ["PUBLIC"] },
  { id: "salbutamol", ordre: 187, titre: "Salbutamol", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_salbutamol.png", favori: false , access: ["PUBLIC"]},
  { id: "salbutamol_ipra", ordre: 191, titre: "Salbutamol + Ipratropium", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_nebu.png", favori: false , access: ["PUBLIC"]},
  { id: "mgso4", ordre: 194, titre: "Sulfate de Magnésium MgSO4", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_mgso4.png", favori: false , access: ["PUBLIC"]},
  { id: "suxamethonium", ordre: 198, titre: "Suxaméthonium", chapitre: "💊 Médicament", source: "CORFA", image: "images/corfa_suxa.png", favori: false, access: ["PUBLIC"] }

];


// ✅ Tableau combiné pour recherche + favoris
const CORFA = [
  ...CORFA_ALGOS,
  ...CORFA_PHARMA
];

const MES_RESUMES = [

  {id: "ecg_chat", ordre: 1, titre: "🫀 ECG", chapitre: "Résumés", source: "resume", image: "images/ECG_CHAT.png", favori: false , access: ["ADMIN"]},
  {id: "etat_de_choc", ordre: 2, titre: "Etat de choc", chapitre: "Résumés", source: "resume", image: "images/Etat de choc_CHAT.png", favori: false , access: ["ADMIN"]},
 {id: "oxygenation", ordre: 3, titre: "🫁 Oxygénation", chapitre: "Résumés", source: "resume", image: "images/O2_CHAT.png", favori: false , access: ["ADMIN"]},
   {id: "tcc", ordre: 4, titre: "🧠 TCC", chapitre: "Résumés", source: "resume", image: "images/TCC_CHAT.png", favori: false , access: ["ADMIN"]},
  {id: "acr", ordre: 5, titre: "⚰️ ACR", chapitre: "Résumés", source: "resume", image: "images/ACR_CHAT.png", favori: false , access: ["ADMIN"]},
  {id: "trauma_face", ordre: 6, titre: "👊🏻 Trauma Face", chapitre: "Résumés", source: "resume", image: "images/Trauma face_CHAT.png", favori: false , access: ["ADMIN"]},
  {id: "convulsions", ordre: 8, titre: "😵‍💫 Convulsions", chapitre: "Résumés", source: "resume", image: "images/Convulsions_CHAT.png", favori: false , access: ["ADMIN"]},
  {id: "douleur_abdo", ordre: 9, titre: "Douleurs Abdo", chapitre: "Résumés", source: "resume", image: "images/Douleurs abdo_CHAT.png", favori: false , access: ["ADMIN"]},
  {id: "trauma_abdo_pelvien", ordre: 7, titre: "Trauma Abdo-pelvien", chapitre: "Résumés", source: "resume", image: "images/Trauma abdo pelvien_CHAT.png", favori: false , access: ["ADMIN"]}
  
];
const CARTES_THEORIE = [

  {id: "bpco", ordre: 1, titre: "🫁 BPCO", chapitre: "Autre", source: "theorie", image: "images/BPCO.png", favori: false , access: ["PUBLIC"]},
  {id: "oap", ordre: 2, titre: "🫁 OAP 🫀", chapitre: "Autre", source: "theorie", image: "images/OAP.png", favori: false, access: ["PUBLIC"] },
  {id: "pneumonie", ordre: 3, titre: "🫁 Pneumonie", chapitre: "Autre", source: "theorie", image: "images/Pneumonie.png", favori: false , access: ["PUBLIC"]},
  {id: "diabete", ordre: 4, titre: "🩸🍭 Diabète", chapitre: "Autre", source: "theorie", image: "images/diabète.png", favori: false, access: ["PUBLIC"] },
  {id: "ic", ordre: 5, titre: "🫀Insuffisance cardiaque", chapitre: "Autre", source: "theorie", image: "images/Insuffisance cardique.png", favori: false, access: ["PUBLIC"] },
   {id: "ir", ordre: 6, titre: "Insuffisance rénale", chapitre: "Autre", source: "theorie", image: "images/Insuffisance rénale.png", favori: false, access: ["PUBLIC"] },
  {id: "ep", ordre: 7, titre: "🫁 Embolie pulmonaire", chapitre: "Autre", source: "theorie", image: "images/EP.png", favori: false, access: ["PUBLIC"] },
  {id: "avc", ordre: 8, titre: "🧠 AVC", chapitre: "Autre", source: "theorie", image: "images/AVC.png", favori: false, access: ["PUBLIC"] },
  {id: "convulsions", ordre: 9, titre: "🧠 Convulsions", chapitre: "Autre", source: "theorie", image: "images/Convuslions adulte.png", favori: false, access: ["PUBLIC"] },
  {id: "choc", ordre: 10, titre: "🫀 Etats de choc", chapitre: "Autre", source: "theorie", image: "images/Etat de choc.png", favori: false , access: ["PUBLIC"]},
  {id: "dissection", ordre: 11, titre: "🫀 Dissection aortique", chapitre: "Autre", source: "theorie", image: "images/Dissection aortique.png", favori: false, access: ["PUBLIC"] },
   { id: "ecg", ordre: 50, titre: "ECG 💘", chapitre: "Autre", source: "Autre", images: ["images/1.Introduction_ECG.png","images/2.Definition_ECG.png","images/7.Ondes_ECG.png","images/8.Intervalles_ECG.png","images/9.Segments_ECG.png","images/10.Principe_ECG.png","images/11.Papier_ECG.png"], favori: false, notesPlaceholder: "Ex. posologies terrain, antiémétique, poids…", access: ["PUBLIC"] }

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
  { category: "💊 Médicaments", id: "ondansetron", label: "Ondansétron", checked: false, note: "" },
  { category: "💊 Médicaments", id: "ketamine", label: "Kétamine", checked: false, note: "" },
  { category: "💊 Médicaments", id: "midazolam", label: "Midazolam", checked: false, note: "" },

  { category: "🫁 Oxygène", id: "lunette", label: "Lunette O₂", checked: false, note: "" },
  { category: "🫁 Oxygène", id: "masque02", label: "Masque O₂", checked: false, note: "" },
  { category: "🫁 Oxygène", id: "nebu", label: "Nébulisation", checked: false, note: "" },

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
function unlock() {

  const currentRole =
    localStorage.getItem("role") || "PUBLIC";

  if (currentRole !== "PUBLIC") {

    const confirmOff = confirm(
      "Déconnexion ?"
    );

    if (confirmOff) {
      localStorage.removeItem("role");
      location.reload();
    }

    return;
  }

  const code = prompt("Code ?");

  switch (code) {

    case "2019":
      localStorage.setItem("role", "ADMIN");
      break;

    case "STAR":
      localStorage.setItem("role", "STAR");
      break;

    case "TCS":
      localStorage.setItem("role", "TCS");
      break;

    case "SAT":
      localStorage.setItem("role", "SAT");
      break;

    default:
      return;
  }

  location.reload();
}
function setCorfaTab(tab) {
  corfaTab = tab;
  renderCORFA();
}

function updateModeUI() {

  const btnBottom = document.getElementById("modeBtn");
  const btnTop = document.getElementById("modeBtnTop");
 if (USER_ROLE === "ADMIN") {
   btnBottom.textContent = "⭐📖";
   btnBottom.setAttribute("data-screen", "admin-menu");
   
    btnTop.textContent = "⭐📖";
    btnTop.setAttribute("data-screen", "admin-menu");
   return;
 }
  const hasStarAccess =
    USER_ROLE === "STAR" ||
    USER_ROLE === "ADMIN";

  if (hasStarAccess) {

    if (btnBottom) {
      btnBottom.textContent = "STAR";
      btnBottom.setAttribute("data-screen", "star");
    }

    if (btnTop) {
      btnTop.textContent = "STAR";
      btnTop.setAttribute("data-screen", "star");
    }

  } else {

    if (btnBottom) {
      btnBottom.textContent = "CORFA";
      btnBottom.setAttribute("data-screen", "corfa");
    }

    if (btnTop) {
      btnTop.textContent = "CORFA";
      btnTop.setAttribute("data-screen", "corfa");
    }

  }

}
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

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function applyTheme(screen) {
  document.body.classList.remove(
    "theme-vd",
    "theme-star",
    "theme-autre",
    "theme-materials",
    "theme-corfa",
    "theme-corfa-algos",
    "theme-corfa-pharma"
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

  if (screen === "corfa" || (screen === "detail" && state.detailSource === "corfa")) {
    document.body.classList.add("theme-corfa");
  }

  if (screen === "corfa-algos" || (screen === "detail" && state.detailSource === "corfa-algos")) {
    document.body.classList.add("theme-corfa-algos");
  }

  if (screen === "corfa-pharma" || (screen === "detail" && state.detailSource === "corfa-pharma")) {
    document.body.classList.add("theme-corfa-pharma");
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
      return canSeeStar ? STAR_ALGOS : [];

    case "autre":
      return AUTRE;

case "resume":
  return MES_RESUMES;

      case "theorie":
  return CARTES_THEORIE;

    case "corfa":
      return CORFA;

    case "corfa-algos":
      return CORFA_ALGOS;

    case "corfa-pharma":
      return CORFA_PHARMA;

    default:
      return [];
  }
}

function getAllAlgos() {
  return [
    ...VD_ALGOS.map(item => ({ ...item, sourceType: "vd" })),
    ...AUTRE.map(item => ({ ...item, sourceType: "autre" })),
    ...CORFA_ALGOS.map(item => ({ ...item, sourceType: "corfa-algos" })),
    ...CORFA_PHARMA.map(item => ({ ...item, sourceType: "corfa-pharma" })),
    ...(canSeeStar ? STAR_ALGOS.map(item => ({ ...item, sourceType: "star" })) : [])
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
 const list = getListBySource(source)
  .filter(item => hasAccess(item.access))
  .sort((a,b)=>a.ordre-b.ordre);
  const item = list.find(x => x.id === id);

  const key = favKey(source, id);
  const current = Object.prototype.hasOwnProperty.call(favs, key)
    ? favs[key]
    : !!item?.favori;

  favs[key] = !current;
  writeStorage("favorites-map", favs);

  if (state.screen === "home") {
    const searchVal = document.getElementById("searchInput")?.value || "";

    if (searchVal.trim()) {
      runHomeSearch(searchVal);
    } else {
      renderHomeFavorites();
      renderHomeNotes();
      clearHomeSearchResults();
    }
  }

  if (state.screen === "vd") renderList("vd", "vdList");
  if (state.screen === "star") renderList("star", "starList");
  if (state.screen === "autre") renderList("autre", "autreList");
  if (state.screen === "corfa-algos") renderCorfaAlgos();
  if (state.screen === "corfa-pharma") renderCorfaPharma();
  if (state.screen === "detail") renderDetail();
}
function cardHTML(item, source) {
  const style = chapterStyle(item.chapitre);
  const favorite = isFavorite(source, item);

  return `
    <div class="algo-card" data-open-source="${source}" data-open-id="${item.id}" style="background:${style.background}; border:2px solid ${style.border};">
      <div class="algo-card-row">
        <div class="algo-card-left">
          <span class="badge" style="${style.badge}">${escapeHtml(item.chapitre || "Interne")}</span>
          <div class="algo-title">${escapeHtml(item.titre || "")}</div>
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

  container.querySelectorAll("[data-open-id]").forEach(el => {
    el.addEventListener("click", () => {
      openDetail(el.getAttribute("data-open-source"), el.getAttribute("data-open-id"));
    });
  });

  container.querySelectorAll("[data-fav-id]").forEach(el => {
    el.addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(el.getAttribute("data-fav-source"), el.getAttribute("data-fav-id"));
    });
  });
}

function renderResumes() {

  const container = document.getElementById("resumesList");

  if (!container) return;

  container.innerHTML = MES_RESUMES
    .map(item => cardHTML(item, "resume"))
    .join("");

  bindCardEvents(container);
}
function renderTheorie() {

  const container = document.getElementById("theorieList");

  if (!container) return;

  container.innerHTML = CARTES_THEORIE
    .map(item => cardHTML(item, "theorie"))
    .join("");

  bindCardEvents(container);
}
function renderHomeFavorites() {
  const favoritesSection = document.getElementById("favoritesSection");
  if (!favoritesSection) return;

  const all = [
    ...VD_ALGOS.map(item => ({ item, source: "vd" })),
    ...AUTRE.map(item => ({ item, source: "autre" })),
    ...CORFA_ALGOS.map(item => ({ item, source: "corfa-algos" })),
    ...CORFA_PHARMA.map(item => ({ item, source: "corfa-pharma" })),
    ...(canSeeStar ? STAR_ALGOS.map(item => ({ item, source: "star" })) : [])
  ];

  const favorites = all
    .filter(({ item, source }) => isFavorite(source, item))
    .sort((a, b) => (a.item.ordre || 0) - (b.item.ordre || 0));

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
function renderHomeNotes() {
  const container = document.getElementById("homeNotesSection");
  if (!container) return;

  const note = localStorage.getItem("home-free-note") || "";

  container.innerHTML = `
    <div class="section-card">
      <p class="section-caption">📝 Notes rapides</p>

      <textarea
        id="homeFreeNote"
        class="input"
        rows="6"
        placeholder="Écrire ici..."
      >${escapeHtml(note)}</textarea>
    </div>
  `;

  document.getElementById("homeFreeNote")?.addEventListener("input", e => {
    localStorage.setItem("home-free-note", e.target.value);
  });
}

function renderList(source, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = getListBySource(source)
    .slice()
    .sort((a, b) => a.ordre - b.ordre);

  container.innerHTML = list.map(item => cardHTML(item, source)).join("");
  bindCardEvents(container);
}

function renderCORFA() {
  const container = document.getElementById("corfaList");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <div class="actions-grid">
        <button class="btn btn-corfa-algos" id="corfaAlgosBtn" type="button">
          🧠 Algorithmes
        </button>

        <button class="btn btn-corfa-pharma" id="corfaPharmaBtn" type="button">
          💊 Pharmacologie
        </button>
      </div>
    </div>
  `;

  document.getElementById("corfaAlgosBtn")?.addEventListener("click", () => {
    showScreen("corfa-algos");
  });

  document.getElementById("corfaPharmaBtn")?.addEventListener("click", () => {
    showScreen("corfa-pharma");
  });
}
function renderCorfaAlgos() {
  const container = document.getElementById("corfaAlgosList");
  if (!container) return;

  container.innerHTML = CORFA_ALGOS
    .slice()
    .sort((a, b) => (a.ordre || 0) - (b.ordre || 0))
    .map(item => cardHTML(item, "corfa-algos"))
    .join("");

  bindCardEvents(container);
}

function renderCorfaPharma() {
  const container = document.getElementById("corfaPharmaList");
  if (!container) return;

  container.innerHTML = CORFA_PHARMA
    .slice()
    .sort((a, b) => (a.ordre || 0) - (b.ordre || 0))
    .map(item => cardHTML(item, "corfa-pharma"))
    .join("");

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

  const filtered = all.filter(item => {
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
        ${filtered.map(item => cardHTML(item, item.sourceType)).join("")}
      </div>
    `
    : `<div class="card"><p style="text-align:center;opacity:0.7;">Aucun résultat 🔎</p></div>`;

  bindCardEvents(container);
}

function setupSearchHandler(e) {
  runHomeSearch(e.target.value);
}

function openDetail(source, id) {
  
if (source === "autre" && id === "mes_resumes") {
    showScreen("resumes");
    return;
  }
  if (source === "autre" && id === "cartes_theorie") {
    showScreen("theorie");
    return;
  }

  state.detailSource = source;
  state.selectedId = id;
  state.previousScreen = state.screen;
  showScreen("detail");
}

function renderSpecialContent(item, special) {
  if (!special) return;

  special.innerHTML = "";

  // ✅ CALCUL PÉDIATRIQUE
  if (item.id === "calcul_pedia") {
    special.innerHTML = `
      <div class="card med-card">
        <h3>💉 Calcul rapide pédiatrique</h3>

        <div class="med-card-inner">
          <input
            type="number"
            id="poidsPedia"
            class="input"
            placeholder="Poids en kg"
            step="0.1"
            min="0"
          >

          <div id="resultatsPedia"></div>
        </div>
      </div>
    `;

    // 🔥 IMPORTANT : attacher l'événement ici
    const input = document.getElementById("poidsPedia");
    if (input) {
      input.addEventListener("input", calculPedia);
    }

    return;
  }

  // ✅ ANTALGIE (déjà OK)
  if (item.id === "antalgie_sat") {
    special.innerHTML = `
      <div class="card med-card">
        <h3>💉 Calculs Antalgie SAT</h3>

        <input
          type="number"
          id="poidsAntalgie"
          class="input"
          placeholder="Poids en kg"
          step="0.1"
          min="0"
        >

        <input
          type="number"
          id="ageAntalgie"
          class="input"
          placeholder="Âge (ans)"
          step="1"
          min="0"
        >

        <div id="resultatsAntalgie"></div>
      </div>
    `;

    document.getElementById("poidsAntalgie")?.addEventListener("input", calculAntalgie);
    document.getElementById("ageAntalgie")?.addEventListener("input", calculAntalgie);
  }
  if (special && item.id === "amd_antalgie") {
  special.innerHTML = `
    <div class="card med-card">
      <h3>💉 Calculs Antalgie STAR</h3>

      <input
        type="number"
        id="poidsAntalgieStar"
        class="input"
        placeholder="Poids en kg"
        step="0.1"
        min="0"
        oninput="calculAntalgieStar()"
      >

      <div id="resultatsAntalgieStar"></div>
    </div>
  `;
}
   if (special && item.id === "antalgie") {
  special.innerHTML = `
    <div class="card med-card">
      <h3>💉 Calculs Antalgie VD</h3>

      <input
        type="number"
        id="poidsAntalgieVD"
        class="input"
        placeholder="Poids en kg"
        step="0.1"
        min="0"
        oninput="calculAntalgieVD()"
      >

      <div id="resultatsAntalgieVD"></div>
    </div>
  `;
}
  if (special && item.id === "antalgie_tcs") {
  special.innerHTML = `
    <div class="card med-card">
      <h3>💉 Calculs Antalgie TCS</h3>

      <input
        type="number"
        id="poidsAntalgieTCS"
        class="input"
        placeholder="Poids en kg"
        step="0.1"
        min="0"
        oninput="calculAntalgieTCS()"
      >
      <input
          type="number"
          id="ageAntalgieTCS"
          class="input"
          placeholder="Âge (ans)"
          step="1"
          min="0"
          oninput="calculAntalgieTCS()"
        >

      <div id="resultatsAntalgieTCS"></div>
    </div>
  `;
}
}



function renderDetail() {
  const list = getListBySource(state.detailSource);
  const item = list.find(x => x.id === state.selectedId);

  if (!item) return;

  const special = document.getElementById("specialContent");
  renderSpecialContent(item, special);

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


if (wrap) {

  wrap.innerHTML = "";

  const images = item.images
    ? item.images
    : (item.image ? [item.image] : []);

  if (!images.length) {
    wrap.innerHTML = "<p style='text-align:center;'>Image non disponible</p>";
  } else {

    images.forEach(src => {
console.log(src);
      const im = document.createElement("img");

      im.src = src;
      im.alt = item.titre;
      im.style.width = "100%";
      im.style.display = "block";
      im.style.marginBottom = "10px";
      im.style.borderRadius = "8px";

      wrap.appendChild(im);

    });
if (
  hasAccess(["ADMIN"]) &&
  item.privateImages?.length
) {

  const separator = document.createElement("div");

  separator.innerHTML = `
    <h3 style="
      text-align:center;
      color:#ec4899;
      margin:20px 0 10px 0;
    ">
      🔒 Notes personnelles
    </h3>
  `;

  wrap.appendChild(separator);

  item.privateImages.forEach(src => {

    const im = document.createElement("img");

    im.src = src;
    im.alt = "Notes personnelles";
    im.style.width = "100%";
    im.style.display = "block";
    im.style.marginBottom = "10px";
    im.style.borderRadius = "8px";

    wrap.appendChild(im);
  });
}
    
  }
}


  if (notes) {
    const storeKey = `notes:${state.detailSource}:${item.id}`;
    notes.value = readStorage(storeKey, "");
    notes.placeholder = item.notesPlaceholder || "Ajoute ici tes notes…";
    notes.oninput = e => writeStorage(storeKey, e.target.value);
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
          ${openedCategories.has(category) ? "open" : ""}
        >
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
      .join("") +
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
  materialsList.querySelectorAll("[data-check-index]").forEach(el => {
    el.addEventListener("change", e => {
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
  materialsList.querySelectorAll("[data-note-index]").forEach(el => {
    el.addEventListener("input", e => {
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
    freeTextEl.addEventListener("input", e => {
      localStorage.setItem("materials-free-text", e.target.value);
    });
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function updateHeaderAndNav(screen) {
  const topbar = document.getElementById("topbar");
  const title = document.getElementById("mainTitle");

  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById(`screen-${screen}`)?.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));
// reset
document.querySelectorAll(".nav-btn")
  .forEach(el => el.classList.remove("active"));

// cas simples
document
  .querySelector(`.nav-btn[data-screen="${screen}"]`)
  ?.classList.add("active");

// STAR
if (screen === "star") {
  document.getElementById("modeBtn")
    ?.classList.add("active");
}

// CORFA
if (
  screen === "corfa" ||
  screen === "corfa-algos" ||
  screen === "corfa-pharma"
) {
  document.getElementById("modeBtn")
    ?.classList.add("active");
}

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

    case "corfa":
      pageTitle = "CORFA";
      break;

    case "corfa-algos":
      pageTitle = "Algorithmes CORFA";
      break;

    case "corfa-pharma":
      pageTitle = "Pharmacologie CORFA";
      break;

    case "autre":
      pageTitle = "Autre";
      break;

    case "materials":
      pageTitle = "Matériel";
      break;

    case "detail":
      if (state.detailSource === "star") pageTitle = "Carnet de poche";
      if (state.detailSource === "vd") pageTitle = "Algo VD";
      if (state.detailSource === "autre") pageTitle = "Autre";
      if (state.detailSource === "corfa") pageTitle = "CORFA";
      if (state.detailSource === "corfa-algos") pageTitle = "Algorithmes CORFA";
      if (state.detailSource === "corfa-pharma") pageTitle = "Pharmacologie CORFA";
      break;
  }

  if (title) title.textContent = pageTitle;

  if (screen === "star" || (screen === "detail" && state.detailSource === "star")) {
    topbar?.classList.add("star-mode");
  } else {
    topbar?.classList.remove("star-mode");
  }
}

function showScreen(screen) {
  if (screen === "star" && !canSeeStar) {
    screen = "home";
  }

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
      renderHomeNotes();
      clearHomeSearchResults();
    }
  }

  if (screen === "vd") renderList("vd", "vdList");
  if (screen === "autre") renderList("autre", "autreList");
  if (screen === "corfa") renderCORFA();
  if (screen === "corfa-algos") renderCorfaAlgos();
  if (screen === "corfa-pharma") renderCorfaPharma();
  if (screen === "materials") renderMaterials();
  if (screen === "detail") renderDetail();
  if (screen === "theorie") renderTheorie();
  
if (screen === "resumes") {
  renderResumes();
}


  if (screen === "star" && canSeeStar) {
    renderList("star", "starList");
  }
}

function setupEvents() {
  document.querySelectorAll("[data-screen]").forEach(el => {
    el.addEventListener("click", () => {
      const screen = el.getAttribute("data-screen");
      showScreen(screen);
    });
  });

  document.getElementById("backBtn")?.addEventListener("click", () => {
    showScreen(state.previousScreen || "home");
  });

  document.getElementById("resetMaterials")?.addEventListener("click", () => {
    writeStorage("materials-list", DEFAULT_MATERIAL);
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

window.calculPedia = function () {
  const poids = Number(document.getElementById("poidsPedia")?.value);
  const resultats = document.getElementById("resultatsPedia");

  if (!resultats) return;

  if (isNaN(poids) || poids <= 0) {
    resultats.innerHTML = "";
    return;
  }

  const amioDose = poids * 5;
  const amioMax = poids * 15;
  const amioVol = amioDose / 50;

  const adreDose = poids * 0.01;
  const adreVol = adreDose;

  let dilutionText = "";
  let volCalc = 0;

  if (poids < 10) {
    dilutionText = `Dilution : ${poids} mg dans 100 ml (soit ${poids * 10} µg/ml)`;
    volCalc = 1;
  } else {
    dilutionText = "Dilution : 10 mg dans 100 ml (100 µg/ml)";
    volCalc = poids * 0.1;
  }

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
      Volume non dilué : ${adreVol.toFixed(3)} ml<br>
      ${dilutionText}<br>
      Volume recommandé (dilué) : ${volCalc.toFixed(2)} ml
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
      Volume max : ${liquidesVol.toFixed(0)} ml
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
};

window.calculAntalgie = function () {
  const poids = Number(document.getElementById("poidsAntalgie")?.value);
  const age = Number(document.getElementById("ageAntalgie")?.value);
  const resultats = document.getElementById("resultatsAntalgie");

  if (!resultats) return;

  if (isNaN(poids) || poids <= 0) {
    resultats.innerHTML = "";
    return;
  }

  const fentCharge = poids;
  const fentRappel = poids * 0.5;
  const fentMax = Math.min(poids * 4, 400);

  const morphCharge = poids * 0.1;
  const morphRappel = poids * 0.05;
  const morphMax = Math.min(poids * 0.2, 20);

  const ketaCharge = poids * 0.5;
  const ketaRappel = poids * 0.25;
  const ketaMax = poids;

  let metaMg = "";
  let metaMl = "";

  if (poids >= 30 && poids <= 50) {
    metaMg = "500 mg";
    metaMl = "1 ml";
  } else if (poids > 50) {
    metaMg = "1000 mg";
    metaMl = "2 ml";
  }

  let ketorolac = "";

  if (!isNaN(age) && age > 0) {
    ketorolac = (poids < 50 || age > 65)
      ? "15 mg"
      : "30 mg";
  }

  resultats.innerHTML = `
    <div class="med-box fentanyl">
      <strong>Fentanyl</strong><br>
      Charge : ${fentCharge.toFixed(0)} µg (${(fentCharge / 50).toFixed(2)} ml)<br>
      Rappel : ${fentRappel.toFixed(0)} µg (${(fentRappel / 50).toFixed(2)} ml)<br>
      Max : ${fentMax.toFixed(0)} µg (${(fentMax / 50).toFixed(2)} ml)
    </div>

    <div class="med-box morphine">
      <strong>Morphine</strong><br>
      Charge : ${morphCharge.toFixed(1)} mg (${morphCharge.toFixed(1)} ml)<br>
      Rappel : ${morphRappel.toFixed(1)} mg (${morphRappel.toFixed(1)} ml)<br>
      Max : ${morphMax.toFixed(1)} mg (${morphMax.toFixed(1)} ml)
    </div>

    <div class="med-box ketamine">
      <strong>Kétamine</strong><br>
      Charge : ${ketaCharge.toFixed(1)} mg (${(ketaCharge / 10).toFixed(2)} ml)<br>
      Rappel : ${ketaRappel.toFixed(1)} mg (${(ketaRappel / 10).toFixed(2)} ml)<br>
      Max : ${ketaMax.toFixed(1)} mg (${(ketaMax / 10).toFixed(2)} ml)
    </div>

    <div class="med-box metamizole">
      <strong>Métamizole</strong><br>
      ${metaMg ? `${metaMg} (${metaMl})` : "Poids < 30 kg"}
    </div>

    <div class="med-box midazolam">
      <strong>Midazolam</strong><br>
      0.5 mg à 2 mg
    </div>

    <div class="med-box ketorolac">
      <strong>Ketorolac</strong><br>
      ${ketorolac || "Entrer l'âge"}
    </div>
  `;
};
window.calculAntalgieStar = function () {

  const poids = Number(
    document.getElementById("poidsAntalgieStar")?.value
  );

  const resultats = document.getElementById(
    "resultatsAntalgieStar"
  );

  if (!resultats) return;

  if (!poids || poids <= 0) {
    resultats.innerHTML = "";
    return;
  }
const fentCharge = poids;
  const fentRappel = poids * 0.5;

  const morphCharge = poids * 0.1;
  const morphRappel = poids * 0.05;
  const morphMax = 20 
  
  const ketaCharge = poids * 0.3;
  const ketaRappel = poids * 0.1;
  const ketaMax = poids * 0.4

  let metaMg = "";
  let metaMl = "";

  if (poids >= 30 && poids <= 50) {
    metaMg = "500 mg";
    metaMl = "1 ml";
  } else if (poids > 50) {
    metaMg = "1000 mg";
    metaMl = "2 ml";
  }
  

  resultats.innerHTML = `
    <div class="med-box fentanyl">
      <strong>Fentanyl</strong><br>
      Charge : ${fentCharge.toFixed(0)} µg (${(fentCharge / 50).toFixed(2)} ml)<br>
      Rappel : ${fentRappel.toFixed(0)} µg (${(fentRappel / 50).toFixed(2)} ml)<br>
    </div>

    <div class="med-box morphine">
      <strong>Morphine</strong><br>
      Charge : ${morphCharge.toFixed(1)} mg (${morphCharge.toFixed(1)} ml)<br>
      Rappel : ${morphRappel.toFixed(1)} mg (${morphRappel.toFixed(1)} ml)<br>
      Max : ${morphMax.toFixed(1)} mg (${morphMax.toFixed(1)} ml)
    </div>

    <div class="med-box ketamine">
      <strong>Kétamine</strong><br>
      Charge : ${ketaCharge.toFixed(1)} mg (${(ketaCharge / 10).toFixed(2)} ml)<br>
      Rappel : ${ketaRappel.toFixed(1)} mg (${(ketaRappel / 10).toFixed(2)} ml)<br>
      Max : ${ketaMax.toFixed(1)} mg (${(ketaMax / 10).toFixed(2)} ml)
    </div>

    <div class="med-box metamizole">
      <strong>Métamizole</strong><br>
      ${metaMg ? `${metaMg} (${metaMl})` : "Poids < 30 kg"}
    </div>

   
    `;
};
window.calculAntalgieVD = function () {

  const poids = Number(
    document.getElementById("poidsAntalgieVD")?.value
  );

  const resultats = document.getElementById(
    "resultatsAntalgieVD"
  );

  if (!resultats) return;

  if (!poids || poids <= 0) {
    resultats.innerHTML = "";
    return;
  }
const fentCharge = poids;
  const fentRappel = poids * 0.5;
  const fentMax = 300 

  const morphCharge = poids * 0.1;
  const morphRappel = poids * 0.05;
  const morphMax = 20 
  
  

  resultats.innerHTML = `
   <div class="med-box fentanyl">
  <strong>Fentanyl</strong><br>
  Charge : ${fentCharge.toFixed(0)} µg (${(fentCharge / 50).toFixed(2)} ml)<br>
  Rappel : ${fentRappel.toFixed(0)} µg (${(fentRappel / 50).toFixed(2)} ml)<br>
  Max : ${fentMax.toFixed(0)} µg (${(fentMax / 50).toFixed(2)} ml)
</div>

    <div class="med-box morphine">
      <strong>Morphine</strong><br>
      Charge : ${morphCharge.toFixed(1)} mg (${morphCharge.toFixed(1)} ml)<br>
      Rappel : ${morphRappel.toFixed(1)} mg (${morphRappel.toFixed(1)} ml)<br>
      Max : ${morphMax.toFixed(1)} mg (${morphMax.toFixed(1)} ml)
    </div>

   
    `;
};

window.calculAntalgieTCS = function () {

  const poids = Number(document.getElementById("poidsAntalgieTCS")?.value);
  const age = Number(document.getElementById("ageAntalgieTCS")?.value);
  const resultats = document.getElementById("resultatsAntalgieTCS");

  if (!resultats) return;

  if (isNaN(poids) || poids <= 0) {
    resultats.innerHTML = "";
    return;
  }

  const isSenior = !isNaN(age) && age >= 65;

  // ✅ FENTANYL (divisé par 2 si ≥ 65 ans)
  let fentCharge = poids;
  let fentRappel = poids * 0.5;
  let fentMax = poids * 5;

  if (isSenior) {
    fentCharge /= 2;
    fentRappel /= 2;
    fentMax /= 2;
  }

  // ✅ MORPHINE (divisé par 2 si ≥ 65 ans)
  let morphCharge = poids * 0.1;
  let morphRappel = poids * 0.05;
  let morphMax = 10;

  if (isSenior) {
    morphCharge /= 2;
    morphRappel /= 2;
    morphMax /= 2;
  }

  // ✅ KETOROLAC (UNIQUEMENT AGE)
  let ketorolac = "";

  if (!isNaN(age) && age > 0) {
    ketorolac = age >= 65 ? "15 mg" : "30 mg";
  }

  // ✅ ESOMEPRAZOL (dose unique)
  const esoMG = "40 mg";
  const esoML = "100 ml";

  // ✅ METHOXYFLURANE (ajout demandé)
  const methoxy = "3 ml (dose unique)";

  resultats.innerHTML = `
    <div class="med-box fentanyl">
      <strong>Fentanyl</strong><br>
      Charge : ${fentCharge.toFixed(0)} µg (${(fentCharge / 50).toFixed(2)} ml)<br>
      Rappel : ${fentRappel.toFixed(0)} µg (${(fentRappel / 50).toFixed(2)} ml)<br>
      Max : ${fentMax.toFixed(0)} µg<br>
      ${isSenior ? "<em>⚠️ Dose réduite ≥ 65 ans</em>" : ""}
    </div>

    <div class="med-box morphine">
      <strong>Morphine</strong><br>
      Charge : ${morphCharge.toFixed(1)} mg (${morphCharge.toFixed(1)} ml)<br>
      Rappel : ${morphRappel.toFixed(1)} mg (${morphRappel.toFixed(1)} ml)<br>
      Max : ${morphMax.toFixed(1)} mg<br>
      ${isSenior ? "<em>⚠️ Dose réduite ≥ 65 ans</em>" : ""}
    </div>

    <div class="med-box ketorolac">
      <strong>Ketorolac</strong><br>
      ${ketorolac || "Entrer l'âge"}
    </div>

    <div class="med-box esomeprazol">
      <strong>Esoméprazol</strong><br>
      ${esoMG} (${esoML})<br>
      <em>Dose unique</em>
    </div>

    <div class="med-box methoxy">
      <strong>Méthoxyflurane</strong><br>
      ${methoxy}
    </div>
  `;

};


function init() {

  if (!localStorage.getItem("materials-list")) {
    writeStorage("materials-list", DEFAULT_MATERIAL);
  }

  updateModeUI();   // ✅ toujours exécuté

  setupEvents();
  registerServiceWorker();
  showScreen("home");

  const btn = document.getElementById("unlockBtn");
  if (btn) {
   btn.textContent =
  USER_ROLE === "PUBLIC"
    ? "🔒"
    : `🔓 ${USER_ROLE}`;
  }

  if (!canSeeStar) {
    document.querySelectorAll('[data-screen="star"]').forEach(el => {
      el.style.display = "none";
    });
  }
}



document.addEventListener("DOMContentLoaded", init);


