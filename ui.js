export function renderizarGaleria(elementoPainel, elementoTemplate, obrasParaRenderizar) {
    elementoPainel.innerHTML = ""; // Limpa o conteúdo existente
    if (obrasParaRenderizar.length === 0) {
        elementoPainel.innerHTML = `<p>Nenhuma obra encontrada. Tente limpar os filtros ou adicionar novas obras.</p>`;
        return;
    }
    obrasParaRenderizar.forEach(obra => {
        const cloneCartao = elementoTemplate.content.cloneNode(true);
        const divCartao = cloneCartao.querySelector(".cartao"); 

        divCartao.dataset.id = obra.id;
        cloneCartao.querySelector(".cartao-titulo").textContent = obra.titulo;
        const img = cloneCartao.querySelector(".cartao-imagem");
        img.src = obra.imagem;
        img.alt = obra.titulo;
        img.onerror = () => { img.src = 'https://placehold.co/600x400/222/fff?text=Imagem+Indispon%C3%ADvel'; };
        
        cloneCartao.querySelector(".cartao-info").textContent = `${obra.autor} (${obra.ano})`;
        cloneCartao.querySelector(".cartao-periodo-pais").textContent = `${obra.periodo} - ${obra.pais}`;

        elementoPainel.appendChild(cloneCartao);
    });
}

export function preencherSelect(elementoSelect, opcoes, textoDefault) {
    const valorAtual = elementoSelect.value;
    elementoSelect.innerHTML = `<option value="">${textoDefault}</option>`;
    opcoes.forEach(opcao => {
        const elementoOpcao = new Option(opcao, opcao);
        elementoSelect.appendChild(elementoOpcao);
    });
    elementoSelect.value = valorAtual;
}

export function exibirFormulario(elementoPainel, elementoTemplate, dadosIniciais = {}) {
    elementoPainel.innerHTML = "";
    const cloneFormulario = elementoTemplate.content.cloneNode(true);
    const formulario = cloneFormulario.querySelector("form");

    formulario.querySelector("#tituloFormulario").textContent = dadosIniciais.id ? "Editar Quadro" : "Adicionar Quadro";
    formulario.querySelector("#botaoSalvar").textContent = dadosIniciais.id ? "Salvar Alterações" : "Salvar Quadro";
    formulario.querySelector("#titulo").value = dadosIniciais.titulo || "";
    formulario.querySelector("#autor").value = dadosIniciais.autor || "";
    formulario.querySelector("#ano").value = dadosIniciais.ano || "";
    formulario.querySelector("#periodo").value = dadosIniciais.periodo || "";
    formulario.querySelector("#pais").value = dadosIniciais.pais || "";
    formulario.querySelector("#imagem").value = dadosIniciais.imagem || "";

    elementoPainel.appendChild(cloneFormulario);
    return elementoPainel.querySelector("form");
}

export function obterValoresFormulario(elementoForm) {
    const dadosFormulario = new FormData(elementoForm);
    const dados = Object.fromEntries(dadosFormulario.entries());
    dados.ano = parseInt(dados.ano, 10) || 0; 

    return dados;
}