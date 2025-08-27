export function organizarObras(obras, { artistaFiltro, periodoFiltro, paisFiltro, ordenarPor, direcao = 'crescente' }) {
    let obrasFiltradas = [...obras];

    if (artistaFiltro) {
        obrasFiltradas = obrasFiltradas.filter(obra => obra.autor === artistaFiltro);
    }

    if (periodoFiltro) {
        obrasFiltradas = obrasFiltradas.filter(obra => obra.periodo === periodoFiltro);
    }

    if (paisFiltro) {
        obrasFiltradas = obrasFiltradas.filter(obra => obra.pais === paisFiltro);
    }

    const obrasOrdenadas = obrasFiltradas.toSorted((a, b) => {
        const campo = ordenarPor === 'dataCriacao' ? 'id' : ordenarPor;
        const valorA = a[campo];
        const valorB = b[campo];
        const multiplicador = direcao === 'crescente' ? 1 : -1;

        if (typeof valorA === 'string') {
            return valorA.localeCompare(valorB) * multiplicador;
        }
        if (typeof valorA === 'number') {
            return (valorA - valorB) * multiplicador;
        }
        return 0;
    });

    return obrasOrdenadas;
}