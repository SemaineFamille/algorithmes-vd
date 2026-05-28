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
  "Douleur": {
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


const ALGOS = [
  {
    id: "acr_arret",
    ordre: 1,
    titre: "Abstention / arrêt de réanimation",
    chapitre: "Urgences vitales",
    source: "VD",
    image: "images/acr_arret.png",
    favori: true,
    resume: "Algorithme d'abstention / arrêt de réanimation.",
    notesPlaceholder: "Ex. critères locaux, transmission, points d’attention…"},
  { id: "acc_physio", ordre: 2, titre: "Accouchement physiologique", chapitre: "Obstétrique", source: "VD", image: "images/acc_physio.png" },
  { id: "acc_patho1", ordre: 3, titre: "Accouchement pathologique 1", chapitre: "Obstétrique", source: "VD", image: "images/acc_patho1.png" },
  { id: "acc_patho2", ordre: 4, titre: "Accouchement pathologique 2", chapitre: "Obstétrique", source: "VD", image: "images/acc_patho2.png" },
  { id: "eclampsie", ordre: 5, titre: "Pré-éclampsie / éclampsie", chapitre: "Obstétrique", source: "VD", image: "images/eclampsie.png" },
  { id: "pph", ordre: 6, titre: "Hémorragie post-partum", chapitre: "Obstétrique", source: "VD", image: "images/pph.png" },
  { id: "cordon", ordre: 7, titre: "Circulaire du cordon", chapitre: "Obstétrique", source: "VD", image: "images/cordon.png" },
  { id: "anaphylaxie", ordre: 8, titre: "Réaction anaphylactique", chapitre: "Urgences vitales", source: "VD", image: "images/anaphylaxie.png" },
  { id: "antalgie", ordre: 9, titre: "Antalgie", chapitre: "Douleur", source: "VD", image: "images/antalgie.png" },
  { id: "acr_bls", ordre: 10, titre: "ACR adulte / BLS", chapitre: "Urgences vitales", source: "VD", image: "images/acr_bls.png" },
  { id: "acr_als", ordre: 11, titre: "ACR adulte / ALS", chapitre: "Urgences vitales", source: "VD", image: "images/acr_als.png" },
  { id: "acr_pedia", ordre: 12, titre: "ACR pédiatrique", chapitre: "Pédiatrie", source: "VD", image: "images/acr_pedia.png" },
  { id: "nn", ordre: 13, titre: "Réanimation nouveau-né", chapitre: "Pédiatrie", source: "VD", image: "images/nn.png" },
  { id: "brulures", ordre: 14, titre: "Brûlures", chapitre: "Urgences", source: "VD", image: "images/brulures.png" },
  { id: "conv_adulte", ordre: 15, titre: "Convulsions adulte", chapitre: "Neurologie", source: "VD", image: "images/conv_adulte.png" },
  { id: "conv_pedia", ordre: 16, titre: "Convulsions pédiatriques", chapitre: "Pédiatrie", source: "VD", image: "images/conv_pedia.png" },
  { id: "sca", ordre: 17, titre: "Douleurs thoraciques (SCA)", chapitre: "Cardio", source: "VD", image: "images/sca.png" },
  { id: "resp_adulte", ordre: 18, titre: "Détresse respiratoire adulte", chapitre: "Respiratoire", source: "VD", image: "images/resp_adulte.png" },
  { id: "resp_pedia", ordre: 19, titre: "Détresse respiratoire pédiatrique", chapitre: "Pédiatrie", source: "VD", image: "images/resp_pedia.png" },
  { id: "choc", ordre: 20, titre: "État de choc", chapitre: "Urgences vitales", source: "VD", image: "images/choc.png" },
  { id: "coma", ordre: 21, titre: "Trouble de conscience adulte", chapitre: "Neurologie", source: "VD", image: "images/coma.png" },
  { id: "avc", ordre: 22, titre: "AVC", chapitre: "Neurologie", source: "VD", image: "images/avc.png" },
  { id: "io", ordre: 23, titre: "Voie intra-osseuse", chapitre: "Technique", source: "VD", image: "images/io.png" },
  { id: "avc_annexe", ordre: 24, titre: "AVC Annexe", chapitre: "Neurologie", source: "VD", image: "images/avc_annexe.png"},
  { id: "antalgie_sat", ordre: 25, titre: "Antalgie_SAT", chapitre: "Douleur", source: "SAT", image: "images/antalgie_sat.png" }
];

const DEFAULT_MATERIAL = [
  { id: "venflon", label: "Venflon", checked: false, note: "" },
  { id: "tubulure", label: "Tubulure", checked: false, note: "" },
  { id: "ringer", label: "Ringer", checked: false, note: "" },
  { id: "cofix", label: "Cofix", checked: false, note: "" },
  { id: "gants", label: "Gants", checked: false, note: "" },
  { id: "lunette", label: "Lunette", checked: false, note: "" },
  { id: "masque 02", label: "Masque 02", checked: false, note: "" },
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

function getFavoritesMap() {
  return readStorage("vd-favorites", {});
}

function isFavorite(algo) {
  const favorites = getFavoritesMap();
  if (Object.prototype.hasOwnProperty.call(favorites, algo.id)) {
    return favorites[algo.id];
  }
  return !!algo.favori;
}

function toggleFavorite(id) {
  const favorites = getFavoritesMap();
  const algo = ALGOS.find((a) => a.id === id);
  const currentValue = Object.prototype.hasOwnProperty.call(favorites, id)
    ? favorites[id]
    : !!algo?.favori;

  favorites[id] = !currentValue;
  writeStorage("vd-favorites", favorites);

  renderAlgoList();

  if (state.view === "algo" && state.selectedAlgoId === id) {
    renderAlgo();
  }
}

function showScreen(screen) {
  state.view = screen;

  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById(`screen-${screen}`).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(`.nav-btn[data-screen="${screen}"]`).forEach((el) => {
    el.classList.add("active");
  });

  if (screen === "algo") renderAlgo();
  if (screen === "materials") renderMaterials();
}

function algoCardHTML(algo) {
  const style = chapterStyle(algo.chapitre);
  const favorite = isFavorite(algo);

  return `
    <div class="card algo-item" style="background:${style.background}; border:2px solid ${style.border};">
      <div class="algo-main-line">
        <div>
          <span class="badge" style="${style.badge}">${algo.chapitre}</span>
          <h3 class="algo-title-small">${algo.ordre}. ${algo.titre}</h3>
          <p class="subtle">${algo.resume || ""}</p>
          <p class="subtle small">Source : ${algo.source}</p>
        </div>
        <div class="favorite-stack">
          <button class="favorite-btn ${favorite ? "active" : ""}" data-fav-id="${algo.id}" type="button">
            ${favorite ? "★" : "☆"}
          </button>
          <button class="open-pill" data-open-id="${algo.id}" type="button">Ouvrir</button>
        </div>
      </div>
    </div>
  `;
}

function bindAlgoCardEvents(container) {
  container.querySelectorAll("[data-open-id]").forEach((btn) => {
    btn.addEventListener("click", () => openAlgo(btn.getAttribute("data-open-id")));
  });

  container.querySelectorAll("[data-fav-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(btn.getAttribute("data-fav-id"));
    });
  });
}

function renderAlgoList() {
  const term = document.getElementById("searchInput").value.trim().toLowerCase();

  const filtered = [...ALGOS].filter((item) =>
    !term ||
    [item.titre, item.chapitre, item.resume, item.source]
      .join(" ")
      .toLowerCase()
      .includes(term)
  );

  const favorites = filtered
    .filter((a) => isFavorite(a))
    .sort((a, b) => a.ordre - b.ordre);

  const others = filtered
    .filter((a) => !isFavorite(a))
    .sort((a, b) => a.ordre - b.ordre);

  const favSection = document.getElementById("favoritesSection");

  if (favorites.length) {
    favSection.innerHTML = `
      <div class="card">
        <p class="section-caption">⭐ Mes favoris</p>
        ${favorites.map(algoCardHTML).join("")}
      </div>
    `;
    bindAlgoCardEvents(favSection);
  } else {
    favSection.innerHTML = "";
  }

  const list = document.getElementById("algoList");
  list.innerHTML = others.map(algoCardHTML).join("");
  bindAlgoCardEvents(list);
}

function openAlgo(id) {
  state.selectedAlgoId = id;
  showScreen("algo");
}

function renderAlgo() {
  const algo = ALGOS.find((a) => a.id === state.selectedAlgoId) || ALGOS[0];
  const style = chapterStyle(algo.chapitre);

  document.getElementById("algoBadge").textContent = algo.chapitre;
  document.getElementById("algoBadge").setAttribute("style", style.badge);

  document.getElementById("algoTitle").textContent = algo.titre;
  document.getElementById("algoSource").textContent = algo.source;
  document.getElementById("algoResume").textContent = algo.resume || "";

  const algoCard = document.getElementById("algoCardColor");
  algoCard.style.borderColor = style.border;
  algoCard.style.background = style.background;

  const favBtn = document.getElementById("algoFavoriteBtn");
  favBtn.textContent = isFavorite(algo) ? "★" : "☆";
  favBtn.classList.toggle("active", isFavorite(algo));
  favBtn.onclick = () => toggleFavorite(algo.id);

  const img = document.getElementById("algoImage");
  const wrap = document.getElementById("algoImageWrap");

  img.onerror = () => wrap.classList.remove("has-image");
  img.onload = () => wrap.classList.add("has-image");
  img.src = algo.image;

  const notes = readStorage("vd-annotations", {});
  const notesArea = document.getElementById("notesArea");
  notesArea.placeholder = algo.notesPlaceholder || "Ajoute ici tes notes personnelles...";
  notesArea.value = notes[algo.id] || "";

  notesArea.oninput = (e) => {
    const current = readStorage("vd-annotations", {});
    current[algo.id] = e.target.value;
    writeStorage("vd-annotations", current);
  };
}

function renderMaterials() {
  const list = document.getElementById("materialsList");
  const materials = readStorage("vd-materials", DEFAULT_MATERIAL);

  list.innerHTML = materials.map((item, index) => `
    <div class="card material-box">
      <div class="material-row">
        <input type="checkbox" data-check-index="${index}" ${item.checked ? "checked" : ""} />
        <div style="flex:1;">
          <div class="material-name">${item.label}</div>
          <input
            class="input"
            type="text"
            data-note-index="${index}"
            value="${escapeHtml(item.note || "")}"
            placeholder="Note rapide, quantité, remplacement…"
          />
        </div>
      </div>
    </div>
  `).join("");

  list.querySelectorAll("[data-check-index]").forEach((el) => {
    el.addEventListener("change", (e) => {
      const idx = Number(e.target.getAttribute("data-check-index"));
      const next = readStorage("vd-materials", DEFAULT_MATERIAL);
      next[idx].checked = e.target.checked;
      writeStorage("vd-materials", next);
    });
  });

  list.querySelectorAll("[data-note-index]").forEach((el) => {
    el.addEventListener("input", (e) => {
      const idx = Number(e.target.getAttribute("data-note-index"));
      const next = readStorage("vd-materials", DEFAULT_MATERIAL);
      next[idx].note = e.target.value;
      writeStorage("vd-materials", next);
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

function setupEvents() {
  document.querySelectorAll("[data-screen]").forEach((btn) => {
    btn.addEventListener("click", () => showScreen(btn.getAttribute("data-screen")));
  });

  document.getElementById("backHome").addEventListener("click", () => showScreen("home"));
  document.getElementById("searchInput").addEventListener("input", renderAlgoList);

  document.getElementById("resetMaterials").addEventListener("click", () => {
    writeStorage("vd-materials", DEFAULT_MATERIAL);
    renderMaterials();
  });

  document.getElementById("syncMaterials").addEventListener("click", () => {
    alert("Bouton réservé pour une future synchronisation avec Google Sheets.");
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

function init() {
  if (!localStorage.getItem("vd-materials")) {
    writeStorage("vd-materials", DEFAULT_MATERIAL);
  }

  setupEvents();
  registerServiceWorker();
  renderAlgoList();
  renderAlgo();
  renderMaterials();
  showScreen("home");
}

