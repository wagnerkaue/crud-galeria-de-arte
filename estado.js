const CHAVE_ARMAZENAMENTO = 'galeriaInterativaObras';
let obras = [];
let proximoId = 1;

export function carregarObrasDoArmazenamento() {
    const obrasArmazenadas = localStorage.getItem(CHAVE_ARMAZENAMENTO);
    obras = obrasArmazenadas ? JSON.parse(obrasArmazenadas) : [];
    atualizarProximoId();
}

function salvarObrasNoArmazenamento() {
    localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(obras));
}

function atualizarProximoId() {
    proximoId = obras.length > 0 ? Math.max(...obras.map(o => o.id)) + 1 : 1;
}

export const obterObras = () => [...obras];

export const obterObraPorId = (id) => obras.find(o => o.id === id);

export function adicionarObra(dadosObra) {
    const novaObra = {
        ...dadosObra,
        id: proximoId,
        criadoEm: new Date().toISOString(),
    };
    obras.push(novaObra);
    atualizarProximoId();
    salvarObrasNoArmazenamento();
}

export function atualizarObra(id, dadosAtualizados) {
    const indice = obras.findIndex(o => o.id === id);
    if (indice !== -1) {
        obras[indice] = { ...obras[indice], ...dadosAtualizados };
        salvarObrasNoArmazenamento();
    }
}

export function removerObra(id) {
    obras = obras.filter(o => o.id !== id);
    salvarObrasNoArmazenamento();
}

export function limparTodasObras() {
    obras = [];
    atualizarProximoId();
    salvarObrasNoArmazenamento();
}

export function obterValoresUnicos(chave) {
    const todosValores = obras.map(obra => obra[chave]);
    return [...new Set(todosValores)].sort();
}