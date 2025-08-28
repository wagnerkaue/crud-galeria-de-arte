export function renderizarGaleria(elementoPainel, elementoTemplate, obrasParaRenderizar) {
    elementoPainel.innerHTML = ""; // Limpa o conteúdo existente
    
    // Esconde o formulário se estiver visível
    const formularioExistente = elementoPainel.querySelector('form');
    if (formularioExistente) formularioExistente.remove();

    if (obrasParaRenderizar.length === 0) {
        elementoPainel.innerHTML = `<p class="mensagem-vazia">Nenhuma obra encontrada. Tente limpar os filtros ou adicionar novas obras.</p>`;
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

export function preencherSelect(elementoSelect, valores, textoDefault) {
    const valorAtual = elementoSelect.value; // Salva o valor selecionado
    elementoSelect.innerHTML = `<option value="">${textoDefault}</option>`;
    valores.forEach(valor => {
        const option = document.createElement('option');
        option.value = valor;
        option.textContent = valor;
        elementoSelect.appendChild(option);
    });
    elementoSelect.value = valorAtual; // Restaura o valor selecionado
}

export function exibirFormulario(elementoContainer, elementoTemplate, dadosObra = null) {
    elementoContainer.innerHTML = ""; // Limpa para mostrar o formulário
    const cloneFormulario = elementoTemplate.content.cloneNode(true);
    const formulario = cloneFormulario.querySelector("form");
    formulario.id = "formularioObra"; 

    formulario.classList.add('formulario-popup');

    const tituloForm = formulario.querySelector("#tituloFormulario");
    const botaoSalvar = formulario.querySelector("#botaoSalvar");
    
    const idInput = document.createElement('input');
    idInput.type = 'hidden';
    idInput.id = 'obraId';
    idInput.name = 'id';
    formulario.appendChild(idInput);

    if (dadosObra) {
        tituloForm.textContent = "Editar Obra de Arte";
        botaoSalvar.textContent = "Salvar Edição";
        idInput.value = dadosObra.id;
        formulario.querySelector("#titulo").value = dadosObra.titulo;
        formulario.querySelector("#autor").value = dadosObra.autor;
        formulario.querySelector("#ano").value = dadosObra.ano;
        formulario.querySelector("#periodo").value = dadosObra.periodo;
        formulario.querySelector("#pais").value = dadosObra.pais;
        formulario.querySelector("#imagem").value = dadosObra.imagem;
    } else {
        tituloForm.textContent = "Adicionar Nova Obra";
        botaoSalvar.textContent = "Adicionar Obra";
        idInput.value = ""; 
        formulario.reset();
    }

    elementoContainer.appendChild(cloneFormulario);
    return formulario;
}

export function obterValoresFormulario(formulario) {
    const titulo = formulario.querySelector("#titulo").value;
    const autor = formulario.querySelector("#autor").value;
    const ano = parseInt(formulario.querySelector("#ano").value, 10);
    const periodo = formulario.querySelector("#periodo").value;
    const pais = formulario.querySelector("#pais").value;
    const imagem = formulario.querySelector("#imagem").value;

    if (!titulo || !autor || isNaN(ano) || !periodo || !pais || !imagem) {
        alert("Por favor, preencha todos os campos obrigatórios (Título, Autor, Ano, Período, País, Imagem).");
        return null;
    }

    return { titulo, autor, ano, periodo, pais, imagem };
}

// Função para exibir o pop-up de visualização da obra
export function exibirPopupVisualizacao(elementoContainer, dadosObra) {
    elementoContainer.innerHTML = "";

    const popupHTML = `
        <div class="popup-visualizacao">
            <button type="button" class="popup-fechar">&times;</button>
            <div class="popup-conteudo">
                <img src="${dadosObra.imagem}" alt="${dadosObra.titulo}" class="popup-imagem">
                <div class="popup-info">
                    <h2>${dadosObra.titulo}</h2>
                    <p><strong>Autor:</strong> ${dadosObra.autor}</p>
                    <p><strong>Ano:</strong> ${dadosObra.ano}</p>
                    <p><strong>Período:</strong> ${dadosObra.periodo}</p>
                    <p><strong>País:</strong> ${dadosObra.pais}</p>
                </div>
            </div>
        </div>
    `;

    elementoContainer.innerHTML = popupHTML;
    return elementoContainer.querySelector('.popup-visualizacao');
}
