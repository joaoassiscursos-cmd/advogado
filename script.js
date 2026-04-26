// --- FUNÇÕES ORIGINAIS (MANTIDAS EXATAMENTE COMO ESTAVAM) ---
function toggleMenu() {
    const overlay = document.getElementById("menu-overlay");
    overlay.style.display = (overlay.style.display === "flex") ? "none" : "flex";
}

function toggleAccordion(id, setaId) {
    const content = document.getElementById(id);
    content.classList.toggle("accordion-content-aberto");
}

function toggleLocal(id) {
    const info = document.getElementById(id);
    document.querySelectorAll('.local-info-hidden').forEach(el => {
        if(el.id !== id) el.style.maxHeight = null;
    });
    info.style.maxHeight = info.style.maxHeight ? null : info.scrollHeight + "px";
}

// --- NOVA FUNÇÃO DO MODAL (ADICIONADA) ---
function abrirModal(id) {
    const modal = document.getElementById('modal-container');
    const corpoTexto = document.getElementById('modal-body-text');
    corpoTexto.innerHTML = textosCompletos[id];
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function fecharModal() {
    document.getElementById('modal-container').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// Fecha se clicar fora da caixa
window.onclick = function(event) {
    const modal = document.getElementById('modal-container');
    if (event.target == modal) fecharModal();
}

// --- TEXTOS DETALHADOS (BASEADOS NA SUA LISTA) ---
const textosCompletos = {
    'modal-admin': `<h2>Administrativo & Eleitoral</h2>
        <p><b>Administrativo:</b> Licitações, contratos públicos e defesas em PADs/Improbidade.</p>
        <p><b>Eleitoral:</b> Campanhas, registros de candidatura e prestação de contas.</p>`,
    'modal-civil': `<h2>Civil</h2>
        <p>Estratégia processual, contratos, família, sucessões e direito imobiliário.</p>`,
    'modal-empresarial': `<h2>Empresarial, Ambiental & Tributário</h2>
        <p>Estudos estratégicos, conformidade ambiental e recuperação tributária.</p>`,
    'modal-trabalhista': `<h2>Trabalhista & Previdenciário</h2>
        <p>Aposentadorias, acidentes de trabalho e defesa patronal/obreira.</p>`,
    'modal-penal': `<h2>Direito Penal</h2>
        <p>Direito Penal Econômico, Crimes Empresariais e Tribunal do Júri.</p>`
};