import obrasIniciais from './dados.js';
import * as estado from './estado.js';
import * as ui from './ui.js';
import { organizarObras } from './logica.js';

const painelGaleria = document.getElementById("painelGaleria");
const selecaoFiltroArtista = document.getElementById("filtroArtista");
const selecaoFiltroPeriodo = document.getElementById("filtroPeriodo");
const selecaoFiltroPais = document.getElementById("filtroPais")
const selecaoOrdenarPor = document.getElementById("ordenarPor");
const botaoDirecao = document.getElementById("botaoDirecao");
const botaoAdicionarObra = document.getElementById("botaoAdicionarObra");
const botaoLimparFiltros = document.getElementById("botaoLimparFiltros");
const botaoCarregarObrasIniciais = document.getElementById("botaoCarregarObrasIniciais");
const botaoLimparGaleria = document.getElementById("botaoLimparGaleria");
const templateCartao = document.getElementById("templateCartao");
const templateFormulario = document.getElementById("templateFormulario");

let direcaoOrdenacao = 'decrescente';

function atualizarFiltros() {
    const artistaSelecionado = selecaoFiltroArtista.value;
    const periodoSelecionado = selecaoFiltroPeriodo.value;
    const paisSelecionado = selecaoFiltroPais.value;

    ui.preencherSelect(selecaoFiltroArtista, estado.obterValoresUnicos('autor'), "Todos os artistas");
    ui.preencherSelect(selecaoFiltroPeriodo, estado.obterValoresUnicos('periodo'), "Todos os períodos");
    ui.preencherSelect(selecaoFiltroPais, estado.obterValoresUnicos('pais'), "Todos os países");
    
    selecaoFiltroArtista.value = artistaSelecionado;
    selecaoFiltroPeriodo.value = periodoSelecionado;
    selecaoFiltroPais.value = paisSelecionado;
}

function atualizarUI() {
    const todasObras = estado.obterObras();
    
    const filtradasEOrdenadas = organizarObras(todasObras, {
        artistaFiltro: selecaoFiltroArtista.value,
        periodoFiltro: selecaoFiltroPeriodo.value,
        paisFiltro: selecaoFiltroPais.value,
        ordenarPor: selecaoOrdenarPor.value,
        direcao: direcaoOrdenacao,
    });

    ui.renderizarGaleria(painelGaleria, templateCartao, filtradasEOrdenadas);
}

// Alternar tema claro/escuro
const botaoTema = document.getElementById("toggleTema");

function alternarTema() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }

  localStorage.setItem("tema", document.body.classList.contains("dark-theme") ? "escuro" : "claro");
}

botaoTema.addEventListener("click", alternarTema);

window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("dark-theme");
    botaoTema.textContent = "☀️";
  }
});


// ---------------- Overlay ----------------
function abrirOverlay() {
    let overlay = document.querySelector('.popup-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');
        document.body.appendChild(overlay);
    }
    requestAnimationFrame(() => overlay.classList.add('is-active'));
    return overlay;
}

function fecharOverlay() {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.classList.remove('is-active');
        overlay.addEventListener('transitionend', () => {
            if (!overlay.classList.contains('is-active')) {
                overlay.remove();
            }
        }, { once: true });
    }
}

// ---------------- Ordenação ----------------
function alternarDirecaoOrdenacao() {
    direcaoOrdenacao = direcaoOrdenacao === 'crescente' ? 'decrescente' : 'crescente';
    botaoDirecao.textContent = direcaoOrdenacao === 'decrescente' ? '↑' : '↓';
    botaoDirecao.title = `Alternar para ordem ${direcaoOrdenacao}`;
    atualizarUI();
}

// ---------------- Formulário ----------------
function abrirFormularioDeAdicionarObra() {
    const overlay = abrirOverlay();
    const formulario = ui.exibirFormulario(overlay, templateFormulario);
    formulario.addEventListener('submit', salvarAdicionamentoDeObra);
}

function abrirFormularioDeEditarObra(idObra) {
    const obra = estado.obterObraPorId(idObra);
    if (obra) {
        const overlay = abrirOverlay();
        const formulario = ui.exibirFormulario(overlay, templateFormulario, obra);
        formulario.addEventListener('submit', (evento) => {
            salvarEdicaoDeObra(evento, idObra);
        });
    }
}

function salvarAdicionamentoDeObra(evento) {
    evento.preventDefault();
    const formulario = evento.target;
    const dadosObra = ui.obterValoresFormulario(formulario);
    if (dadosObra) {
        estado.adicionarObra(dadosObra);
        atualizarFiltros();
        atualizarUI();
        fecharOverlay();
    }
}

function salvarEdicaoDeObra(evento, idObra) {
    evento.preventDefault();
    const formulario = evento.target;
    const dadosObra = ui.obterValoresFormulario(formulario);
    if (dadosObra) {
        estado.atualizarObra(idObra, dadosObra);
        atualizarFiltros();
        atualizarUI();
        fecharOverlay();
    }
}

function confirmarDeletarObra(idObra) {
    if (confirm('Tem certeza que deseja deletar esta obra?')) {
        estado.removerObra(idObra);
        atualizarFiltros();
        atualizarUI();
    }
}

function resetarSelecoes() {
    selecaoFiltroArtista.value = "";
    selecaoFiltroPeriodo.value = "";
    selecaoFiltroPais.value = "";
    selecaoOrdenarPor.value = "dataCriacao";
    direcaoOrdenacao = 'decrescente';
    botaoDirecao.textContent = '↓';
    atualizarUI();
}

function carregarObrasIniciais() {
    if (confirm('Tem certeza que deseja carregar as obras iniciais?')) {
        obrasIniciais.forEach(obra => {
            const existe = estado.obterObras().some(o => o.titulo === obra.titulo && o.autor === obra.autor);
            if (!existe) {
                estado.adicionarObra(obra);
            }
        });
        atualizarFiltros();
        atualizarUI();
    }
}

function limparGaleria() {
    if (confirm('Tem certeza que deseja limpar a galeria?')) {
        estado.limparTodasObras();
        atualizarFiltros();
        atualizarUI();
    }
}

// ---------------- Popup de Visualização ----------------
function abrirPopupVisualizacao(idObra) {
    const obra = estado.obterObraPorId(idObra);
    if (obra) {
        const overlay = abrirOverlay();
        ui.exibirPopupVisualizacao(overlay, obra);
    }
}

function fecharPopupVisualizacao() {
    fecharOverlay();
    atualizarUI();
}

// ---------------- Eventos ----------------
document.addEventListener('click', (evento) => {
    const alvo = evento.target;

    if (alvo.id === 'botaoCancelar') {
        fecharOverlay();
        return; 
    }

    const cartao = alvo.closest('.cartao');
    if (cartao) {
        const idObra = parseInt(cartao.dataset.id, 10);
        
        if (alvo.classList.contains('botao-editar')) {
            abrirFormularioDeEditarObra(idObra);
        } else if (alvo.classList.contains('botao-deletar')) {
            confirmarDeletarObra(idObra);
        } else {
            abrirPopupVisualizacao(idObra);
        }
    }

    if (alvo.classList.contains('popup-fechar') || alvo.classList.contains('popup-overlay')) {
        fecharPopupVisualizacao();
    }
});

function inicializar() {
    selecaoFiltroArtista.addEventListener("change", atualizarUI);
    selecaoFiltroPeriodo.addEventListener("change", atualizarUI);
    selecaoFiltroPais.addEventListener("change", atualizarUI);
    selecaoOrdenarPor.addEventListener("change", atualizarUI);
    botaoDirecao.addEventListener("click", alternarDirecaoOrdenacao);
    botaoAdicionarObra.addEventListener("click", abrirFormularioDeAdicionarObra);
    botaoLimparFiltros.addEventListener("click", resetarSelecoes);
    botaoCarregarObrasIniciais.addEventListener("click", carregarObrasIniciais);
    botaoLimparGaleria.addEventListener("click", limparGaleria);
    
    estado.carregarObrasDoArmazenamento();
    atualizarFiltros();
    atualizarUI();
}

inicializar();
