import obrasIniciais from './dados.js';
import * as estado from './estado.js';
import * as ui from './ui.js';
import { organizarObras } from './logica.js';

const painelGaleria = document.getElementById("painelGaleria");
const selecaoFiltroArtista = document.getElementById("filtroArtista");
const selecaoFiltroPeriodo = document.getElementById("filtroPeriodo");
const selecaoOrdenarPor = document.getElementById("ordenarPor");
const botaoAdicionarObra = document.getElementById("botaoAdicionarObra");
const botaoLimparFiltros = document.getElementById("botaoLimparFiltros");
const botaoCarregarObrasIniciais = document.getElementById("botaoCarregarObrasIniciais");
const botaoLimparGaleria = document.getElementById("botaoLimparGaleria");
const templateCartao = document.getElementById("templateCartao");
const templateFormulario = document.getElementById("templateFormulario");

function atualizarFiltros() {
    const artistaSelecionado = selecaoFiltroArtista.value;
    const periodoSelecionado = selecaoFiltroPeriodo.value;

    ui.preencherSelect(selecaoFiltroArtista, estado.obterValoresUnicos('autor'), "Todos os artistas");
    ui.preencherSelect(selecaoFiltroPeriodo, estado.obterValoresUnicos('periodo'), "Todos os períodos");

    selecaoFiltroArtista.value = artistaSelecionado;
    selecaoFiltroPeriodo.value = periodoSelecionado;
}

function atualizarUI() {
    const todasObras = estado.obterObras();
    
    const filtradasEOrdenadas = organizarObras(todasObras, {
        artistaFiltro: selecaoFiltroArtista.value,
        periodoFiltro: selecaoFiltroPeriodo.value,
        ordenarPor: selecaoOrdenarPor.value,
    });

    ui.renderizarGaleria(painelGaleria, templateCartao, filtradasEOrdenadas);
}

function abrirFormularioDeAdicionarObra() {
    const formulario = ui.exibirFormulario(painelGaleria, templateFormulario);
    formulario.addEventListener('submit', salvarAdicionamentoDeObra);
}

function abrirFormularioDeEditarObra(idObra) {
    const obra = estado.obterObraPorId(idObra);
    if (obra) {
        const formulario = ui.exibirFormulario(painelGaleria, templateFormulario, obra);
        formulario.addEventListener('submit', (evento) => {
            salvarEdicaoDeObra(evento, idObra);
        });
    }
}

function salvarAdicionamentoDeObra(evento) {
    evento.preventDefault();
    const formulario = evento.target;
    const dadosObra = ui.obterValoresFormulario(formulario);

    estado.adicionarObra(dadosObra);
    atualizarFiltros();
    atualizarUI();
}

function salvarEdicaoDeObra(evento, idObra) {
    evento.preventDefault();
    const formulario = evento.target;
    const dadosObra = ui.obterValoresFormulario(formulario);

    estado.atualizarObra(idObra, dadosObra);
    atualizarFiltros();
    atualizarUI();
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
    selecaoOrdenarPor.value = "dataCriacao_desc";
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

document.addEventListener('click', (evento) => {
    const alvo = evento.target;

    if (alvo.id === 'botaoCancelar' && alvo.closest('form')) {
        atualizarUI();
        return; 
    }

    const cartao = alvo.closest('.cartao');
    if (cartao) {
        const idObra = parseInt(cartao.dataset.id, 10);
        if (alvo.classList.contains('botao-editar')) {
            abrirFormularioDeEditarObra(idObra);
        } else if (alvo.classList.contains('botao-deletar')) {
            confirmarDeletarObra(idObra);
        }
    }
});

function inicializar() {
    selecaoFiltroArtista.addEventListener("change", atualizarUI);
    selecaoFiltroPeriodo.addEventListener("change", atualizarUI);
    selecaoOrdenarPor.addEventListener("change", atualizarUI);
    botaoAdicionarObra.addEventListener("click", abrirFormularioDeAdicionarObra);
    botaoLimparFiltros.addEventListener("click", resetarSelecoes);
    botaoCarregarObrasIniciais.addEventListener("click", carregarObrasIniciais);
    botaoLimparGaleria.addEventListener("click", limparGaleria);
    
    estado.carregarObrasDoArmazenamento();
    atualizarFiltros();
    atualizarUI();
}

inicializar();
