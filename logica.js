const funcaoOrdenacao = {
    'dataCriacao_desc': (a, b) => b.id - a.id,
    'titulo_asc': (a, b) => a.titulo.localeCompare(b.titulo),
    'ano_asc': (a, b) => a.ano - b.ano,
    'pais_asc': (a, b) => a.pais.localeCompare(b.pais),
};

export function organizarObras(obras, { artistaFiltro, periodoFiltro, ordenarPor }) {
    let obrasFiltradas = [...obras];

    if (artistaFiltro) {
        obrasFiltradas = obrasFiltradas.filter(obra => obra.autor === artistaFiltro);
    }

    if (periodoFiltro) {
        obrasFiltradas = obrasFiltradas.filter(obra => obra.periodo === periodoFiltro);
    }

    const funcaoOrd = funcaoOrdenacao[ordenarPor] || funcaoOrdenacao['dataCriacao_desc'];
    const obrasOrdenadas = obrasFiltradas.toSorted(funcaoOrd);

    return obrasOrdenadas;
}
