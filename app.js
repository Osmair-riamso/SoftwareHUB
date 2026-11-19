const PARTNERS = [
  {
    id: `israel-diacov`,
    name: `Israel Demetrios Diacov`,
    initials: `IDD`,
    handle: `@israel-diacov`,
    role: `Engenheiro de Sistemas & Áudio`,
    location: `Curitiba, PR`,
    experience: `12 anos em desktop nativo`,
    bio: `Especialista em processamento de áudio em baixa latência e ferramentas nativas em C++20 e Rust para criadores, streamers e engenheiros de som no Windows.`,
    stacks: [
      `C++20`,
      `Rust`,
      `JUCE`,
      `WASAPI`,
      `CMake`,
      `Win32 API`,
      `WebAssembly`,
    ],
    links: [
      { network: `GitHub`, address: `github.com/israel-diacov` },
      { network: `LinkedIn`, address: `linkedin.com/in/israel-diacov` },
      { network: `Portfólio`, address: `israel-diacov.dev.br` },
    ],
  },
  {
    id: `jhonatan-marcondes`,
    name: `Jhonatan Marcondes`,
    initials: `JM`,
    handle: `@jhonatan-marcondes`,
    role: `Arquiteta de Segurança & Redes`,
    location: `Curitiba, PR`,
    experience: `8 anos em Blue Team & Infra`,
    bio: `Pesquisadora em segurança defensiva e automação de redes corporativas. Desenvolve utilitários portáteis e auditáveis para equipes de Blue Team e SysAdmins.`,
    stacks: [
      `Go`,
      `Python`,
      `Windows Filtering Platform`,
      `WireGuard`,
      `TLS/X.509`,
      `SQLite`,
    ],
    links: [
      { network: `GitHub`, address: `github.com/jhonatanmarcondes-sec` },
      { network: `LinkedIn`, address: `linkedin.com/in/jhonatan-marcondes-sec` },
      { network: `Blog Técnico`, address: `jhonatanmarcondes.io` },
    ],
  },
  {
    id: `thiago-nakagawa`,
    name: `Thiago Nakagawa`,
    initials: `TN`,
    handle: `@tnakagawa`,
    role: `Engenheiro de Developer Experience`,
    location: `São Paulo, SP`,
    experience: `7 anos em DX & Compiladores`,
    bio: `Focado em produtividade de desenvolvedores, servidores locais e automação de fluxos de trabalho. Criador de ferramentas leves que reduzem atrito no desenvolvimento.`,
    stacks: [
      `TypeScript`,
      `Node.js`,
      `Zig`,
      `Tauri`,
      `SQLite`,
      `OpenAPI`,
      `Docker`,
    ],
    links: [
      { network: `GitHub`, address: `github.com/tnakagawa` },
      { network: `LinkedIn`, address: `linkedin.com/in/thiago-nakagawa` },
      { network: `Portfólio`, address: `nakagawa.codes` },
    ],
  },
  {
    id: `beatriz-alencar`,
    name: `Beatriz Alencar`,
    initials: `BA`,
    handle: `@beatriz-alencar`,
    role: `Engenheira de UI & Ergonomia Digital`,
    location: `Recife, PE`,
    experience: `6 anos em Windows Desktop`,
    bio: `Apaixonada por interfaces minimalistas, acessibilidade e ergonomia em monitores ultrawide. Constrói aplicativos focados em organização visual e foco profundo.`,
    stacks: [`C#`, `.NET 8`, `WinUI 3`, `XAML`, `Rust`, `DirectComposition`],
    links: [
      { network: `GitHub`, address: `github.com/beatrizalencar` },
      { network: `LinkedIn`, address: `linkedin.com/in/beatriz-alencar-ui` },
      { network: `Estúdio`, address: `alencar.studio` },
    ],
  },
];

const PROJECTS = [
  {
    id: "osmair-lotofacil",
    name: "OsmAIr Lotofácil",
    category: "Aplicação Estatística",
    icon: "chart-no-axes-combined",
    status: "Em desenvolvimento",
    shortDesc: "Aplicação para análise estatística de concursos da Lotofácil, estudo de frequências e simulação de combinações.",
    fullDesc: "Projeto pessoal com frontend em React e Vite e backend em Node.js. A proposta reúne histórico de concursos, análise de frequência, identificação de dezenas quentes e frias, seleção de bases e simulações. O projeto está em evolução e ainda requer validações e ajustes.",
    stack: ["JavaScript", "React", "Vite", "Node.js", "Tailwind CSS", "JSON"],
    features: [
      "Conversão e utilização de histórico de concursos.",
      "Análise estatística de frequência das dezenas.",
      "Organização de dezenas quentes e frias.",
      "Seleção de bases e simulação de combinações."
    ],
    notes: "Projeto em desenvolvimento. As funcionalidades e resultados devem ser considerados experimentais até a conclusão dos testes."
  },
  {
    id: "site-sarah-pereira",
    name: "Site Sarah Pereira",
    category: "Desenvolvimento Web",
    icon: "globe",
    status: "Em desenvolvimento",
    shortDesc: "Site de apresentação e portfólio artístico para reunir biografia, modalidades, galeria, vídeos e premiações.",
    fullDesc: "Site desenvolvido para apresentar a trajetória artística de Sarah Pereira. A estrutura contempla apresentação, galeria de imagens, vídeos, premiações e informações sobre suas modalidades de dança e ginástica.",
    stack: ["JavaScript", "React", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
    features: [
      "Apresentação e biografia artística.",
      "Galeria de imagens e vídeos.",
      "Seção de premiações e participações.",
      "Organização de conteúdo por modalidades."
    ],
    notes: "Projeto de portfólio em evolução. Conteúdo e identidade visual podem ser atualizados conforme a trajetória artística."
  },
  {
    id: "naruto-tibia-ot",
    name: "Naruto Tibia OT",
    category: "Game Server",
    icon: "gamepad-2",
    status: "Projeto experimental",
    shortDesc: "Projeto de servidor de jogo inspirado no universo Naruto, envolvendo configuração de servidor, banco de dados e cliente.",
    fullDesc: "Projeto experimental de servidor OT baseado em tecnologias do ecossistema Tibia, com adaptações temáticas. Envolveu configuração de ambiente Linux, MariaDB, arquivos de servidor, scripts Lua e ferramentas relacionadas ao cliente e aos recursos visuais.",
    stack: ["Lua", "SQL", "MariaDB", "Linux", "Ubuntu", "OTClient"],
    features: [
      "Configuração e execução do servidor.",
      "Integração com banco de dados MariaDB.",
      "Ajustes de scripts e configurações em Lua.",
      "Exploração de ferramentas para cliente e recursos visuais."
    ],
    notes: "Projeto experimental. A stack exibida reúne tecnologias e ferramentas utilizadas em diferentes etapas do trabalho."
  }
];


const PARTNER_PROJECTS = [
  { id:"demo-gainstage", partnerId:"israel-diacov", name:"GainStage Meter", category:"Mídia & Áudio", icon:"audio-waveform", status:"Demonstração", shortDesc:"Medidor de áudio para monitoramento de nível e pico em transmissões e produção sonora.", fullDesc:"Aplicativo fictício de demonstração associado ao perfil de Israel Diacov. Os dados servem apenas para validar a navegação e o catálogo de parceiros.", stack:["C++20","JUCE","WASAPI"], features:["Interface de medição de áudio.","Exibição de níveis e picos.","Exemplo de ficha de software."], notes:"Conteúdo fictício de demonstração. Não há executável disponível." },
  { id:"demo-netshield", partnerId:"jhonatan-marcondes", name:"NetShield Tray", category:"Segurança", icon:"shield-check", status:"Demonstração", shortDesc:"Conceito de painel para visualizar conexões e regras de firewall.", fullDesc:"Aplicativo fictício de demonstração associado ao perfil de Camila Duarte. Os dados servem apenas para validar a navegação e o catálogo de parceiros.", stack:["Go","Python","SQLite"], features:["Conceito de auditoria de conexões.","Painel ilustrativo de regras.","Exemplo de ficha de software."], notes:"Conteúdo fictício de demonstração. Não há executável disponível." },
  { id:"demo-devflow", partnerId:"thiago-nakagawa", name:"DevFlow Local", category:"Produtividade", icon:"workflow", status:"Demonstração", shortDesc:"Conceito de ferramenta para organizar tarefas e fluxos locais de desenvolvimento.", fullDesc:"Aplicativo fictício de demonstração associado ao perfil de Thiago Nakagawa. Os dados servem apenas para validar a navegação e o catálogo de parceiros.", stack:["TypeScript","Node.js","SQLite"], features:["Organização de fluxos locais.","Visão resumida de tarefas.","Exemplo de ficha de software."], notes:"Conteúdo fictício de demonstração. Não há executável disponível." },
  { id:"demo-uifocus", partnerId:"beatriz-alencar", name:"UIFocus Desk", category:"Produtividade", icon:"panels-top-left", status:"Demonstração", shortDesc:"Conceito de interface desktop para organização visual e foco no trabalho.", fullDesc:"Aplicativo fictício de demonstração associado ao perfil de Beatriz Alencar. Os dados servem apenas para validar a navegação e o catálogode parceiros.", stack:["C#",".NET 8","WinUI 3"], features:["Conceito_de_organização_de_janelas.","Interface_desktop_ilustrativa.","Exemplo_de_ficha_de_software."], notes:"Conteúdo fictício_de_demonstração._Não_há_executável_disponível." }
];

const state = {
  searchQuery: "",
  selectedCategory: "todas",
  sortBy: "nome",
  activeTab: "meus",
  selectedPartnerFilter: "todos",
  currentProjectId: null,
  currentPartnerModalId: null,
  lastFocusElement: null
};

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function getProjectById(id) {
  return [...PROJECTS, ...PARTNER_PROJECTS].find(project => project.id === id);
}
function getPartnerById(id) {
  return PARTNERS.find(partner => partner.id === id);
}
function getVisibleProjects() {
  return state.activeTab === "parceiros" ? PARTNER_PROJECTS : PROJECTS;
}

function getFilteredProjects() {
  const query = state.searchQuery.trim().toLocaleLowerCase("pt-BR");
  return getVisibleProjects().filter(project => {
    if (state.activeTab === "parceiros" && state.selectedPartnerFilter !== "todos" && project.partnerId !== state.selectedPartnerFilter) return false;
    if (state.selectedCategory !== "todas" && project.category !== state.selectedCategory) return false;
    const searchable = [project.name, project.category, project.shortDesc, project.fullDesc, project.stack.join(" ")].join(" ").toLocaleLowerCase("pt-BR");
    return !query || searchable.includes(query);
  }).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

function renderCards() {
  const grid = document.getElementById("cards-grid");
  const empty = document.getElementById("empty-state");
  const summary = document.getElementById("results-summary");
  if (!grid || !empty) return;

  const projects = getFilteredProjects();
  if (summary) summary.textContent = `Exibindo ${projects.length} ${projects.length === 1 ? "projeto" : "projetos"} ${state.activeTab === "parceiros" ? "demonstrativos" : "pessoais"}`;
  empty.hidden = projects.length > 0;

  grid.innerHTML = projects.map(project => `
    <div class="card-wrapper">
      <article class="app-card">
        <div class="card-top">
          <div class="card-identity">
            <div class="app-icon-box"><i data-lucide="${project.icon}" aria-hidden="true" width="20" height="20"></i></div>
            <div class="app-title-wrap">
              <button type="button" class="app-title-btn" onclick="openAppModal('${project.id}', this)">${project.name}</button>
              <div class="app-meta-line"><span>${project.category}</span><span>•</span><span>${project.status}</span></div>
            </div>
          </div>
          <span class="exe-badge">Projeto</span>
        </div>
        <div class="card-author-row"><span class="author-static-tag">por ${state.activeTab === "meus" ? "Osmair Pereira" : (getPartnerById(project.partnerId)?.name || "Desenvolvedor parceiro")}</span><span class="author-static-tag">Conteúdo demonstrativo</span></div>
        <p class="card-desc">${project.shortDesc}</p>
        <div class="stack-row">${project.stack.slice(0, 4).map(tech => `<span class="stack-tag">${tech}</span>`).join("")}</div>
        <div class="card-footer">
          <span class="download-counter"><i data-lucide="code-2" aria-hidden="true" width="15" height="15"></i><span>${state.activeTab === "meus" ? "Projeto pessoal" : "Projeto demonstrativo"}</span></span>
          <div class="card-actions">
            <button type="button" class="btn-primary" onclick="openAppModal('${project.id}', this)">Ver projeto</button>
          </div>
        </div>
      </article>
    </div>
  `).join("");
  refreshIcons();
}

function renderAll() {
  const tabMeus = document.getElementById("tab-meus-projetos");
  const tabParceiros = document.getElementById("tab-parceiros");
  const panel = document.getElementById("catalog-panel");
  if (tabMeus) tabMeus.setAttribute("aria-selected", String(state.activeTab === "meus"));
  if (tabParceiros) tabParceiros.setAttribute("aria-selected", String(state.activeTab === "parceiros"));
  if (panel) panel.setAttribute("aria-labelledby", state.activeTab === "meus" ? "tab-meus-projetos" : "tab-parceiros");
  const total = document.getElementById("kpi-total-apps");
  const count = document.getElementById("count-meus");
  const partnerCount = document.getElementById("count-parceiros");
  if (total) total.textContent = String(PROJECTS.length);
  if (count) count.textContent = String(PROJECTS.length);
  if (partnerCount) partnerCount.textContent = String(PARTNERS.length);
  const search = document.getElementById("search-input");
  const category = document.getElementById("category-select");
  if (search && search.value !== state.searchQuery) search.value = state.searchQuery;
  if (category && category.value !== state.selectedCategory) category.value = state.selectedCategory;
  renderPartnerBar();
  renderCards();
  refreshIcons();
}

function renderPartnerBar() {
  const bar = document.getElementById("partner-bar");
  const pills = document.getElementById("partner-pills");
  const clearBtn = document.getElementById("btn-clear-partner");
  if (!bar || !pills) return;
  bar.hidden = state.activeTab !== "parceiros";
  if (bar.hidden) return;
  if (clearBtn) clearBtn.hidden = state.selectedPartnerFilter === "todos";
  pills.innerHTML = PARTNERS.map(partner => `
    <div class="partner-chip-group${state.selectedPartnerFilter === partner.id ? " active" : ""}">
      <button type="button" class="partner-filter-btn" onclick="filterByPartner('${partner.id}')" aria-pressed="${state.selectedPartnerFilter === partner.id}">
        <span class="avatar-monogram">${partner.initials}</span><span>${partner.name}</span>
      </button>
      <button type="button" class="partner-profile-trigger" onclick="openPartnerModal('${partner.id}', this)" aria-label="Abrir perfil demonstrativo de ${partner.name}">
        <i data-lucide="user-round" aria-hidden="true" width="14" height="14"></i><span>Perfil</span>
      </button>
    </div>`).join("");
  refreshIcons();
}

function switchTab(tab) {
  state.activeTab = tab === "parceiros" ? "parceiros" : "meus";
  state.selectedPartnerFilter = "todos";
  state.searchQuery = "";
  state.selectedCategory = "todas";
  renderAll();
}

function filterByPartner(partnerId) {
  state.selectedPartnerFilter = state.selectedPartnerFilter === partnerId ? "todos" : partnerId;
  renderPartnerBar();
  renderCards();
}

function handleSearchInput(value) {
  state.searchQuery = value;
  renderCards();
}

function handleCategoryChange(value) {
  state.selectedCategory = value;
  renderCards();
}

function handleSortChange(value) {
  state.sortBy = value;
  renderCards();
}

function clearFilters() {
  state.searchQuery = "";
  state.selectedCategory = "todas";
  renderAll();
}

function openAppModal(projectId, triggerEl) {
  const project = getProjectById(projectId);
  if (!project) return;
  state.currentProjectId = projectId;
  state.lastFocusElement = triggerEl || document.activeElement;

  const icon = document.getElementById("app-modal-icon");
  const title = document.getElementById("app-modal-title");
  const subtitle = document.getElementById("app-modal-subtitle");
  const specs = document.getElementById("app-modal-specs");
  const description = document.getElementById("app-modal-desc");
  const features = document.getElementById("app-modal-features");
  const stack = document.getElementById("app-modal-stack");
  const notes = document.getElementById("app-modal-changelog");

  if (icon) icon.innerHTML = `<i data-lucide="${project.icon}" aria-hidden="true" width="22" height="22"></i>`;
  if (title) title.textContent = project.name;
  if (subtitle) subtitle.textContent = `${project.category} · ${project.status} · ${project.partnerId ? "Projeto demonstrativo de " + (getPartnerById(project.partnerId)?.name || "parceiro") : "Desenvolvido por Osmair Pereira"}`;
  if (specs) specs.innerHTML = `<div class="spec-well"><span class="data-label">Categoria</span><span class="spec-value">${project.category}</span></div><div class="spec-well"><span class="data-label">Situação</span><span class="spec-value">${project.status}</span></div><div class="spec-well"><span class="data-label">Autoria</span><span class="spec-value">Projeto pessoal</span></div>`;
  if (description) description.textContent = project.fullDesc;
  if (features) features.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join("");
  if (stack) stack.innerHTML = project.stack.map(tech => `<span class="stack-tag">${tech}</span>`).join("");
  if (notes) notes.textContent = project.notes;

  const modal = document.getElementById("app-modal-backdrop");
  if (modal) {
    modal.classList.add("open");
    const close = modal.querySelector(".modal-close-btn");
    if (close) close.focus();
  }
  refreshIcons();
}


function openPartnerModal(partnerId, triggerEl) {
  const partner = getPartnerById(partnerId);
  if (!partner) return;
  state.currentPartnerModalId = partnerId;
  state.lastFocusElement = triggerEl || document.activeElement;
  const projects = PARTNER_PROJECTS.filter(project => project.partnerId === partnerId);
  const put = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  put("partner-modal-avatar", partner.initials);
  put("partner-modal-name", partner.name);
  put("partner-modal-meta", `${partner.handle} · ${partner.role} · ${partner.location} · PERFIL FICTÍCIO`);
  const metrics = document.getElementById("partner-modal-metrics");
  if (metrics) metrics.innerHTML = `<div class="spec-well"><span class="data-label">Projetos demonstrativos</span><span class="spec-value">${projects.length}</span></div><div class="spec-well"><span class="data-label">Experiência ilustrativa</span><span class="spec-value">${partner.experience}</span></div><div class="spec-well"><span class="data-label">Perfil</span><span class="spec-value">Demonstração</span></div>`;
  put("partner-modal-bio", partner.bio);
  const stacks = document.getElementById("partner-modal-stacks");
  if (stacks) stacks.innerHTML = partner.stacks.map(item => `<span class="stack-tag">${item}</span>`).join("");
  const links = document.getElementById("partner-modal-links");
  if (links) links.innerHTML = partner.links.map((link, i) => `<button type="button" class="dev-link-btn" onclick="copyDeveloperLink('${link.address}', '${link.network}', ${i})" id="dev-link-${i}"><div class="dev-link-meta"><span class="dev-link-network">${link.network}</span><span class="dev-link-handle">${link.address}</span></div><i data-lucide="copy" aria-hidden="true" width="16" height="16"></i></button>`).join("");
  const appList = document.getElementById("partner-modal-apps");
  if (appList) appList.innerHTML = projects.map(project => `<div class="partner-app-item"><div class="partner-app-info"><span class="partner-app-name">${project.name}</span><span class="data-label">${project.category} · Conteúdo fictício</span></div><button type="button" class="btn-secondary" onclick="closeModal('partner'); openAppModal('${project.id}', this)">Ver projeto</button></div>`).join("");
  const backdrop = document.getElementById("partner-modal-backdrop");
  if (backdrop) { backdrop.classList.add("open"); backdrop.querySelector(".modal-close-btn")?.focus(); }
  refreshIcons();
}

function copyDeveloperLink(address, network, idx) {
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(address).catch(() => {});
  const label = document.querySelector(`#dev-link-${idx} .dev-link-network`);
  if (label) label.textContent = `${network} · Copiado`;
  showToast("Endereço demonstrativo copiado", address);
}

function closeModal(type = 'app') {
  const modal = document.getElementById(type === "partner" ? "partner-modal-backdrop" : "app-modal-backdrop");
  if (modal) modal.classList.remove("open");
  if (type === "app") state.currentProjectId = null;
  if (type === "partner") state.currentPartnerModalId = null;
  if (state.lastFocusElement && typeof state.lastFocusElement.focus === "function") state.lastFocusElement.focus();
  state.lastFocusElement = null;
}

function handleBackdropClick(event, type = "app") {
  if (event.target.classList.contains("modal-backdrop")) closeModal(type);
}

function showToast(message, detail = "") {
  const region = document.getElementById("toast-region");
  if (!region) return;
  const toast = document.createElement("div");
  toast.className = "toast-card";
  const content = document.createElement("div");
  content.textContent = detail ? `${message} · ${detail}` : message;
  toast.appendChild(content);
  region.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const partnerModal = document.getElementById("partner-modal-backdrop");
    closeModal(partnerModal?.classList.contains("open") ? "partner" : "app");
  }
});

window.addEventListener("DOMContentLoaded", renderAll);
