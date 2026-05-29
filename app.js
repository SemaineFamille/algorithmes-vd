const CHAPTER_STYLES = {
  "Urgences vitales": {
    badge: "background:#fee2e2;color:#b91c1c;border-color:#fecaca;",
    border: "#fca5a5",
    background: "#fff1f2"
  },
  "Neurologie": {
    badge: "background:#f3e8ff;color:#7e22ce;border-color:#d8b4fe;",
    border: "#c084fc",
    background: "#faf5ff"
  },
  "Antalgie": {
    badge: "background:#dbeafe;color:#1d4ed8;border-color:#93c5fd;",
    border: "#60a5fa",
    background: "#eff6ff"
  },
  "Pédiatrie": {
    badge: "background:#dcfce7;color:#15803d;border-color:#86efac;",
    border: "#4ade80",
    background: "#f0fdf4"
  },
  "Obstétrique": {
    badge: "background:#fce7f3;color:#be185d;border-color:#f9a8d4;",
    border: "#f472b6",
    background: "#fdf2f8"
  },
  "Respiratoire": {
    badge: "background:#cffafe;color:#0f766e;border-color:#99f6e4;",
    border: "#2dd4bf",
    background: "#ecfeff"
  },
  "Cardio": {
    badge: "background:#fee2e2;color:#b91c1c;border-color:#fca5a5;",
    border: "#ef4444",
    background: "#fef2f2"
  },
  "Technique": {
    badge: "background:#ede9fe;color:#6d28d9;border-color:#c4b5fd;",
    border: "#8b5cf6",
    background: "#f5f3ff"
  },
  "Interne": {
    badge: "background:#e2e8f0;color:#475569;border-color:#cbd5e1;",
    border: "#94a3b8",
    background: "#f8fafc"
  }
};

const VD_ALGOS = [
  { id: "acc_physio", ordre: 2, titre: "Accouchement physiologique", chapitre: "Obstétrique", source: "VD", image: "images/acc_physio.png", favori: false, notesPlaceholder: "Ex. matériel de naissance, points d’anticipation…" },
  { id: "acc_patho1", ordre: 3, titre: "Accouchement pathologique 1", chapitre: "Obstétrique", source: "VD", image: "images/acc_patho1.png", favori: false, notesPlaceholder: "Ex. points d’attention…" },
  { id: "acc_patho2", ordre: 4, titre: "Accouchement pathologique 2", chapitre: "Obstétrique", source: "VD", image: "images/acc_patho2.png", favori: false, notesPlaceholder: "Ex. points d’attention…" },
  { id: "eclampsie", ordre: 5, titre: "Pré-éclampsie / éclampsie", chapitre: "Obstétrique", source: "VD", image: "images/eclampsie.png", favori: false, notesPlaceholder: "Ex. Labetalol, MgSO4, conduite locale…" },
  { id: "pph", ordre: 6, titre: "Hémorragie post-partum", chapitre: "Obstétrique", source: "VD", image: "images/pph.png", favori: false, notesPlaceholder: "Ex. points de surveillance…" },
  { id: "cordon", ordre: 7, titre: "Circulaire du cordon", chapitre: "Obstétrique", source: "VD", image: "images/cordon.png", favori: false, notesPlaceholder: "Ex. conduite locale…" },
  { id: "anaphylaxie", ordre: 8, titre: "Réaction anaphylactique", chapitre: "Urgences vitales", source: "VD", image: "images/anaphylaxie.png", favori: false, notesPlaceholder: "Ex. adrénaline, surveillance…" },
  { id: "antalgie", ordre: 9, titre: "Antalgie", chapitre: "Antalgie", source: "VD", image: "images/antalgie.png", favori: true, notesPlaceholder: "Ex. posologies terrain, antiémétique, précautions sujet âgé…" },
  { id: "acr_bls", ordre: 10, titre: "ACR adulte / BLS", chapitre: "Urgences vitales", source: "VD", image: "images/acr_bls.png", favori: true, notesPlaceholder: "Ex. checklist équipe, matériel, points de briefing…" },
  { id: "acr_als", ordre: 11, titre: "ACR adulte / ALS", chapitre: "Urgences vitales", source: "VD", image: "images/acr_als.png", favori: false, notesPlaceholder: "Ex. adrénaline, amiodarone, causes réversibles…" },
  { id: "acr_pedia", ordre: 12, titre: "ACR pédiatrique", chapitre: "Pédiatrie", source: "VD", image: "images/acr_pedia.png", favori: false, notesPlaceholder: "Ex. doses, matériel pédiatrique…" },
  { id: "nn", ordre: 13, titre: "Réanimation nouveau-né", chapitre: "Pédiatrie", source: "VD", image: "images/nn.png", favori: false, notesPlaceholder: "Ex. matériel, température, ventilation…" },
  { id: "brulures", ordre: 14, titre: "Brûlures", chapitre: "Urgences vitales", source: "VD", image: "images/brulures.png", favori: false, notesPlaceholder: "Ex. refroidissement, pansement, surveillance…" },
  { id: "conv_adulte", ordre: 15, titre: "Convulsions adulte", chapitre: "Neurologie", source: "VD", image: "images/conv_adulte.png", favori: false, notesPlaceholder: "Ex. midazolam, clonazépam…" },
  { id: "conv_pedia", ordre: 16, titre: "Convulsions pédiatriques", chapitre: "Pédiatrie", source: "VD", image: "images/conv_ped_star.png", favori: false, notesPlaceholder: "Ex. glycémie, température, refroidissement…" },
  { id: "sca", ordre: 17, titre: "Douleurs thoraciques (SCA)", chapitre: "Cardio", source: "VD", image: "images/sca.png", favori: false, notesPlaceholder: "Ex. ECG 12 dérivations, ASA, nitrés…" },
  { id: "resp_adulte", ordre: 18, titre: "Détresse respiratoire adulte", chapitre: "Respiratoire", source: "VD", image: "images/resp_adulte.png", favori: false, notesPlaceholder: "Ex. O2, salbutamol, CPAP…" },
  { id: "resp_pedia", ordre: 19, titre: "Détresse respiratoire pédiatrique", chapitre: "Pédiatrie", source: "VD", image: "images/resp_pedia.png", favori: false, notesPlaceholder: "Ex. nébulisation, respect position spontanée…" },
  { id: "choc", ordre: 20, titre: "État de choc", chapitre: "Urgences vitales", source: "VD", image: "images/choc.png", favori: false, notesPlaceholder: "Ex. RL, TA cible, TXA…" },
  { id: "coma", ordre: 21, titre: "Trouble de conscience adulte", chapitre: "Neurologie", source: "VD", image: "images/coma.png", favori: false, notesPlaceholder: "Ex. glucose, naloxone, thiamine…" },
  { id: "avc", ordre: 22, titre: "AVC", chapitre: "Neurologie", source: "VD", image: "images/avc.png", favori: true, notesPlaceholder: "Ex. anticoagulants, heure de début, proches à prévenir…" },
  { id: "io", ordre: 23, titre: "Voie intra-osseuse", chapitre: "Technique", source: "VD", image: "images/io.png", favori: false, notesPlaceholder: "Ex. indications, contre-indications, surveillance…" },
  { id: "avc_annexe", ordre: 24, titre: "AVC Annexe", chapitre: "Neurologie", source: "VD", image: "images/avc_annexe.png", favori: false, notesPlaceholder: "Ex. Rankin, checklist filière…" },
  { id: "antalgie_sat", ordre: 25, titre: "Antalgie SAT", chapitre: "Antalgie", source: "SAT", image: "images/antalgie_sat.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" },
  { id: "labo", ordre: 26, titre: "Valeur Laboratoire", chapitre: "Interne", source: "Moi", image: "images/labo.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" },
  { id: "molecules", ordre: 27, titre: "Molécules Antalgie", chapitre: "Interne", source: "STAR", image: "images/molecules.png", favori: false, notesPlaceholder: "Ex. protocole interne SAT…" }
];

const STAR_ALGOS = [
  { id: "amd", ordre: 1, titre: "AMD", chapitre: "Antalgie", source: "STAR", image: "amd.png", favori: false, notesPlaceholder: "Notes STAR…" },
  { id: "star", ordre: 2, titre: "STAR 2", chapitre: "Interne", source: "STAR", image: "images/star_2.png", favori: false, notesPlaceholder: "Notes STAR…" }
];

const DEFAULT_MATERIAL = [
  { id: "venflon", label: "Venflon", checked: false, note: "" },
  { id: "tubulure", label: "Tubulure", checked: false, note: "" },
  { id: "ringer", label: "Ringer", checked: false, note: "" },
  { id: "cofix", label: "Cofix", checked: false, note: "" },
  { id: "gants", label: "Gants", checked: false, note: "" },
  { id: "lunette", label: "Lunette", checked: false, note: "" },
  { id: "masque02", label: "Masque O2", checked: false, note: "" },
  { id: "reserve", label: "Réassort / fin de journée", checked: false, note: "" }
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

function chapterStyle(chapter) {
  return CHAPTER_STYLES[chapter] || CHAPTER_STYLES["Interne"];
}

function getListBySource(source) {
  return source === "star" ? STAR_ALGOS : VD_ALGOS;
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
  const current = Object.prototype.hasOwnProperty.call(favs, key) ? favs[key] : !!item?.favori;
  favs[key] = !current;
  writeStorage("favorites-map", favs);

  renderHomeFavorites();
  if (state.screen === "vd") renderList("vd", "vdList");
  if (state.screen === "star") renderList("star", "starList");
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
    ...STAR_ALGOS.map((item) => ({ item, source: "star" }))
  ];

  const favorites = all.filter(({ item, source }) => isFavorite(source, item));

  if (!favorites.length) {
    favoritesSection.innerHTML = "";
    return;
  }

  favoritesSection.innerHTML = `
    <div class="section-card">
      <p class="section-caption">⭐ Mes favoris</p>
      ${favorites
        .sort((a, b) => a.item.ordre - b.item.ordre)
        .map(({ item, source }) => cardHTML(item, source))
        .join("")}
    </div>
  `;

  bindCardEvents(favoritesSection);
}

function renderList(source, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = getListBySource(source).slice().sort((a, b) => a.ordre - b.ordre);
  container.innerHTML = list.map((item) => cardHTML(item, source)).join("");
  bindCardEvents(container);
}

function renderHomeVdList() {
  renderList("vd", "homeVdList");
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

  materialsList.innerHTML = materials.map((item, index) => `
    <div class="material-item">
      <div class="material-row">
        <input type="checkbox" data-check-index="${index}" ${item.checked ? "checked" : ""} />
        <div style="flex:1;">
          <div class="material-name">${item.label}</div>
          <input class="input" type="text" data-note-index="${index}" value="${escapeHtml(item.note || "")}" placeholder="Note rapide…" />
        </div>
      </div>
    </div>
  `).join("");

  materialsList.querySelectorAll("[data-check-index]").forEach((el) => {
    el.addEventListener("change", (e) => {
      const idx = Number(e.target.getAttribute("data-check-index"));
      const next = readStorage("materials-list", DEFAULT_MATERIAL);
      next[idx].checked = e.target.checked;
      writeStorage("materials-list", next);
    });
  });

  materialsList.querySelectorAll("[data-note-index]").forEach((el) => {
    el.addEventListener("input", (e) => {
      const idx = Number(e.target.getAttribute("data-note-index"));
      const next = readStorage("materials-list", DEFAULT_MATERIAL);
      next[idx].note = e.target.value;
      writeStorage("materials-list", next);
    });
  });
}

function escapeHtml(value) {
  return String(value)
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

  if (screen === "star" || (screen === "detail" && state.detailSource === "star")) {
    topbar?.classList.add("star-mode");
    if (title) title.textContent = "Carnet de poche";
  } else {
    topbar?.classList.remove("star-mode");
    if (title) title.textContent = "Algorithmes";
  }
}

function showScreen(screen) {
  state.screen = screen;
  updateHeaderAndNav(screen);

  if (screen === "home") {
    renderHomeFavorites();
    renderHomeVdList();
  }
  if (screen === "vd") {
    renderList("vd", "vdList");
  }
  if (screen === "star") {
    renderList("star", "starList");
  }
  if (screen === "detail") {
    renderDetail();
  }
  if (screen === "materials") {
    renderMaterials();
  }
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
    writeStorage("materials-list", DEFAULT_MATERIAL);
    renderMaterials();
  });

  document.getElementById("syncMaterials")?.addEventListener("click", () => {
    alert("Synchronisation à brancher plus tard.");
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
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

