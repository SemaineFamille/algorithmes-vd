const CHAPTER_STYLES = {
  "Urgences vitales": { badge: "background:#fee2e2;color:#b91c1c;border-color:#fecaca;", border: "#fca5a5" },
  "Neurologie": { badge: "background:#f3e8ff;color:#7e22ce;border-color:#d8b4fe;", border: "#c084fc" },
  "Douleur": { badge: "background:#dbeafe;color:#1d4ed8;border-color:#93c5fd;", border: "#60a5fa" },
  "Pédiatrie": { badge: "background:#dcfce7;color:#15803d;border-color:#86efac;", border: "#4ade80" },
  "Obstétrique": { badge: "background:#fce7f3;color:#be185d;border-color:#f9a8d4;", border: "#f472b6" },
  "Matériel": { badge: "background:#fef3c7;color:#b45309;border-color:#fcd34d;", border: "#f59e0b" },
  "Interne": { badge: "background:#e2e8f0;color:#475569;border-color:#cbd5e1;", border: "#94a3b8" }
};

const ALGOS = [
  {
    id: "avc",
    ordre: 1,
    titre: "AVC",
    chapitre: "Neurologie",
    source: "PDF VD p. 26-27",
    resume: "Symptômes observés ≤ 8 heures ou au réveil, G-FAST et orientation filière AVC.",
    image: "images/avc.png",
    notesPlaceholder: "Ex. liste anticoagulants, autonomie de base, proches à appeler…",
    favori: true
  },
  {
    id: "antalgie",
    ordre: 2,
    titre: "Antalgie",
    chapitre: "Douleur",
    source: "PDF VD p. 13",
    resume: "Patient ≥ 30 kg, EVA ≥ 3, exclure SCA, fentanyl ou morphine selon critères.",
    image: "images/antalgie.png",
    notesPlaceholder: "Ex. posologies terrain, précautions sujet âgé, antiémétique du service…",
    favori: true
  },
  {
    id: "acr-bls",
    ordre: 3,
    titre: "Arrêt cardio-respiratoire adulte / BLS",
    chapitre: "Urgences vitales",
    source: "PDF VD p. 14",
    resume: "Débuter RCP, analyser rythme chocable/non chocable, défibrillation si indiquée.",
    image: "images/acr-bls.png",
    notesPlaceholder: "Ex. briefing équipe, matériel à préparer, rappel local…",
    favori: true
  },
  {
    id: "detresse-pedia",
    ordre: 4,
    titre: "Détresse respiratoire non traumatique pédiatrique",
    chapitre: "Pédiatrie",
    source: "PDF VD p. 23",
    resume: "Oxygène, respect position spontanée, salbutamol ou adrénaline selon présentation.",
    image: "images/detresse-pedia.png",
    notesPlaceholder: "Ex. nébulisation disponible, astuces matériel pédiatrique…",
    favori: false
  },
  {
    id: "accouchement",
    ordre: 5,
    titre: "Accouchement physiologique",
    chapitre: "Obstétrique",
    source: "PDF VD p. 6",
    resume: "Accouchement imminent, soins mère / nouveau-né, surveillance et transport.",
    image: "images/accouchement.png",
    notesPlaceholder: "Ex. matériel de naissance à préparer, points d’anticipation…",
    favori: false
  },
  {
    id: "algo-interne-1",
    ordre: 6,
    titre: "Algo interne – exemple",
    chapitre: "Interne",
    source: "Interne",
    resume: "Emplacement réservé pour vos algorithmes internes classés selon vos priorités.",
    image: "images/interne-exemple.png",
    notesPlaceholder: "Ex. particularités du service, numéros utiles, adaptations terrain…",
    favori: false
  }
];

const DEFAULT_MATERIAL = [
  { id: "venflon", label: "Vénflon", checked: false, note: "" },
  { id: "tubulure", label: "Tubulure", checked: false, note: "" },
  { id: "ringer250", label: "Ringer 250 ml", checked: false, note: "" },
  { id: "cofix", label: "Cofix", checked: false, note: "" },
  { id: "gants", label: "Gants", checked: false, note: "" },
  { id: "reserve", label: "Réassort / fin de journée", checked: false, note: "" }
];

const state = {
  view: "home",
  selectedAlgoId: ALGOS[0].id
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

function chapterStyle(chapter) {
  return CHAPTER_STYLES[chapter] || CHAPTER_STYLES["Interne"];
}

function showScreen(screen) {
  state.view = screen;
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  document.getElementById(`screen-${screen}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach((el) => el.classList.remove('active'));
  document.querySelectorAll(`[data-screen="${screen}"]`).forEach((el) => el.classList.add('active'));
  if (screen === 'algo') renderAlgo();
  if (screen === 'materials') renderMaterials();
}

function renderAlgoList() {
  const term = document.getElementById('searchInput').value.trim().toLowerCase();
  const list = document.getElementById('algoList');
  const items = [...ALGOS]
    .sort((a, b) => a.ordre - b.ordre)
    .filter((item) => !term || [item.titre, item.chapitre, item.resume, item.source].join(' ').toLowerCase().includes(term));

  list.innerHTML = items.map((algo) => {
    const style = chapterStyle(algo.chapitre);
    return `
      <button class="card algo-item" data-open-id="${algo.id}">
        <div class="algo-main-line">
          <div>
            <span class="badge" style="${style.badge}">${algo.chapitre}</span>
            ${algo.favori ? '<span class="badge-star">★</span>' : ''}
            <h3 class="algo-title-small">${algo.ordre}. ${algo.titre}</h3>
            <p class="subtle">${algo.resume}</p>
            <p class="subtle small">Source : ${algo.source}</p>
          </div>
          <span class="open-pill">Ouvrir</span>
        </div>
      </button>
    `;
  }).join('');

  list.querySelectorAll('[data-open-id]').forEach((btn) => {
    btn.addEventListener('click', () => openAlgo(btn.getAttribute('data-open-id')));
  });
}

function openAlgo(id) {
  state.selectedAlgoId = id;
  showScreen('algo');
}

function renderAlgo() {
  const algo = ALGOS.find((a) => a.id === state.selectedAlgoId) || ALGOS[0];
  const style = chapterStyle(algo.chapitre);
  document.getElementById('algoBadge').textContent = algo.chapitre;
  document.getElementById('algoBadge').setAttribute('style', style.badge);
  document.getElementById('algoTitle').textContent = algo.titre;
  document.getElementById('algoSource').textContent = algo.source;
  document.getElementById('algoResume').textContent = algo.resume;
  document.getElementById('algoCardColor').style.borderColor = style.border;

  const img = document.getElementById('algoImage');
  const wrap = document.getElementById('algoImageWrap');
  img.onerror = () => wrap.classList.remove('has-image');
  img.onload = () => wrap.classList.add('has-image');
  img.src = algo.image;

  const notes = readStorage('vd-annotations', {});
  const notesArea = document.getElementById('notesArea');
  notesArea.placeholder = algo.notesPlaceholder || 'Ajoute ici tes notes personnelles...';
  notesArea.value = notes[algo.id] || '';
  notesArea.oninput = (e) => {
    const current = readStorage('vd-annotations', {});
    current[algo.id] = e.target.value;
    writeStorage('vd-annotations', current);
  };
}

function renderMaterials() {
  const list = document.getElementById('materialsList');
  const materials = readStorage('vd-materials', DEFAULT_MATERIAL);
  list.innerHTML = materials.map((item, index) => `
    <div class="card material-box">
      <div class="material-row">
        <input type="checkbox" data-check-index="${index}" ${item.checked ? 'checked' : ''} />
        <div style="flex:1;">
          <div class="material-name">${item.label}</div>
          <input class="input" type="text" data-note-index="${index}" value="${escapeHtml(item.note || '')}" placeholder="Note rapide, quantité, remplacement…" />
        </div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('[data-check-index]').forEach((el) => {
    el.addEventListener('change', (e) => {
      const idx = Number(e.target.getAttribute('data-check-index'));
      const next = readStorage('vd-materials', DEFAULT_MATERIAL);
      next[idx].checked = e.target.checked;
      writeStorage('vd-materials', next);
    });
  });
  list.querySelectorAll('[data-note-index]').forEach((el) => {
    el.addEventListener('input', (e) => {
      const idx = Number(e.target.getAttribute('data-note-index'));
      const next = readStorage('vd-materials', DEFAULT_MATERIAL);
      next[idx].note = e.target.value;
      writeStorage('vd-materials', next);
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function setupEvents() {
  document.querySelectorAll('[data-screen]').forEach((btn) => {
    btn.addEventListener('click', () => showScreen(btn.getAttribute('data-screen')));
  });
  document.getElementById('backHome').addEventListener('click', () => showScreen('home'));
  document.getElementById('searchInput').addEventListener('input', renderAlgoList);
  document.getElementById('resetMaterials').addEventListener('click', () => {
    writeStorage('vd-materials', DEFAULT_MATERIAL);
    renderMaterials();
  });
  document.getElementById('syncMaterials').addEventListener('click', () => {
    alert('Bouton réservé pour une future synchronisation avec Google Sheets.');
  });
}

function init() {
  if (!localStorage.getItem('vd-materials')) {
    writeStorage('vd-materials', DEFAULT_MATERIAL);
  }
  setupEvents();
  renderAlgoList();
  renderAlgo();
  renderMaterials();
  showScreen('home');
}

document.addEventListener('DOMContentLoaded', init);
