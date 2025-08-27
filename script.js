// @ts-check

const quadrosRegistrados = [
  {titulo: "Mona Lisa", autor: "Leonardo da Vinci", ano: 1503, periodo: "Renascentista", pais: "Itália", imagem: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"},
  {titulo: "A Noite Estrelada", autor: "Vincent van Gogh", ano: 1889, periodo: "Pós-Impressionismo", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"},
  {titulo: "O Nascimento de Vênus", autor: "Sandro Botticelli", ano: 1486, periodo: "Renascentista", pais: "Itália", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1920px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"},
  {titulo: "Guernica", autor: "Pablo Picasso", ano: 1937, periodo: "Cubismo", pais: "Espanha", imagem: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"},
  {titulo: "O Grito", autor: "Edvard Munch", ano: 1893, periodo: "Expressionismo", pais: "Noruega", imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg"},
  {titulo: "A Última Ceia", autor: "Leonardo da Vinci", ano: 1498, periodo: "Renascentista", pais: "Itália", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg/1920px-Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg"},
  {titulo: "A Persistência da Memória", autor: "Salvador Dalí", ano: 1931, periodo: "Surrealismo", pais: "Espanha", imagem: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"},
  {titulo: "As Meninas", autor: "Diego Velázquez", ano: 1656, periodo: "Barroco", pais: "Espanha", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg"},
  {titulo: "A Criação de Adão", autor: "Michelangelo", ano: 1512, periodo: "Renascentista", pais: "Itália", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/God2-Sistine_Chapel.png/1920px-God2-Sistine_Chapel.png"},
  {titulo: "O Beijo", autor: "Gustav Klimt", ano: 1908, periodo: "Simbolismo", pais: "Áustria", imagem: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"},
  {titulo: "Moça com Brinco de Pérola", autor: "Johannes Vermeer", ano: 1665, periodo: "Barroco", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg"},
  {titulo: "A Ronda Noturna", autor: "Rembrandt", ano: 1642, periodo: "Barroco", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1280px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"},
  {titulo: "A Escola de Atenas", autor: "Rafael", ano: 1511, periodo: "Renascentista", pais: "Itália", imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Escola_de_Atenas_-_Vaticano_2.jpg"},
  {titulo: "Impressão, Nascer do Sol", autor: "Claude Monet", ano: 1872, periodo: "Impressionismo", pais: "França", imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg"},
  {titulo: "O Jardim das Delícias Terrenas", autor: "Hieronymus Bosch", ano: 1515, periodo: "Renascimento Nórdico", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg/1920px-The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg"},
  {titulo: "Vaso com Doze Girassóis", autor: "Vincent van Gogh", ano: 1888, periodo: "Pós-Impressionismo", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/800px-Vincent_Willem_van_Gogh_128.jpg"},
  {titulo: "Olympia", autor: "Édouard Manet", ano: 1863, periodo: "Realismo", pais: "França", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Manet%2C_Edouard_-_Olympia%2C_1863.jpg"},
  {titulo: "Composição em Vermelho, Amarelo e Azul", autor: "Piet Mondrian", ano: 1930, periodo: "De Stijl", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/1024px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg"},
  {titulo: "American Gothic", autor: "Grant Wood", ano: 1930, periodo: "Realismo Social", pais: "Estados Unidos", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Grant_DeVolson_Wood_-_American_Gothic.jpg/800px-Grant_DeVolson_Wood_-_American_Gothic.jpg"},
  {titulo: "O Almoço na Relva", autor: "Édouard Manet", ano: 1863, periodo: "Realismo", pais: "França", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_dejeunersurlherbe.jpg/800px-Monet_dejeunersurlherbe.jpg"},
  {titulo: "A Liberdade Guiando o Povo", autor: "Eugène Delacroix", ano: 1830, periodo: "Romantismo", pais: "França", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1280px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg"},
  {titulo: "Noite Estrelada sobre o Ródano", autor: "Vincent van Gogh", ano: 1888, periodo: "Pós-Impressionismo", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg"},
  {titulo: "O Grande Moinho de Vento de Wijk", autor: "Jacob van Ruisdael", ano: 1670, periodo: "Barroco Holandês", pais: "Holanda", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Mill.jpg/1280px-The_Mill.jpg"},
  {titulo: "O Anjo Caído", autor: "Alexandre Cabanel", ano: 1847, periodo: "Academicismo", pais: "França", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Alexandre_Cabanel_-_Fallen_Angel.jpg/1280px-Alexandre_Cabanel_-_Fallen_Angel.jpg"},
  {titulo: "O Casal Arnolfini", autor: "Jan van Eyck", ano: 1434, periodo: "Renascimento Nórdico", pais: "Bélgica", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/800px-The_Arnolfini_portrait_%281434%29.jpg"},
  {titulo: "Nighthawks", autor: "Edward Hopper", ano: 1942, periodo: "Realismo Moderno", pais: "Estados Unidos", imagem: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg"},
];

// Constantes do documento
const painel = document.getElementById("painel");
const selectArtista = document.getElementById("filtroArtista");
const selectPeriodo = document.getElementById("filtroPeriodo");
const ordenacaoSelect = document.getElementById("ordenar");
const formularioTemplate = document.getElementById("formularioCriarTemplate");

// Botões
const mostrarFormularioBotao = document.getElementById("mostrarFormularioBotao");
const limparFiltrosBotao = document.getElementById("limparFiltrosBotao");
const contarQuadrosBotao = document.getElementById("contarQuadrosBotao");


// Funções

/** Filtra quadros por um artista específico. */
function filtrarPorArtista(quadros, artista) {
  return quadros.filter(quadro => quadro.autor === artista);
}

/** Filtra quadros por um período específico. */
function filtrarPorPeriodo(quadros, periodo) {
  return quadros.filter(quadro => quadro.periodo === periodo);
}

/** Reordena os quadros com base no critério de ordenação. */
function reordenarQuadros(quadros, ordenacao) {
  const quadrosCopiados = [...quadros];

  const funcoesDeOrdenacao = {
    "alfabetica": (a, b) => a.titulo.localeCompare(b.titulo),
    "ano": (a, b) => a.ano - b.ano,
    "pais": (a, b) => a.pais.localeCompare(b.pais),
  };

  const funcaoOrdenacao = funcoesDeOrdenacao[ordenacao];
  return funcaoOrdenacao ? quadrosCopiados.sort(funcaoOrdenacao) : quadrosCopiados;
}

function limparSelect(selectElement, textoPadrao) {
  // Cria a opção padrão primeiro
  const optionPadrao = document.createElement('option');
  optionPadrao.textContent = textoPadrao;
  optionPadrao.value = "";

  // Substitui todos os filhos existentes pela nova opção padrão
  selectElement.replaceChildren(optionPadrao);
}

/** Preenche os selects de filtro com base nos quadros registrados. */
function preencherFiltros() {
  // Limpar opções antigas
  limparSelect(selectArtista, "Todos os artistas");
  limparSelect(selectPeriodo, "Todos os períodos");
  const artistas = [...new Set(quadrosRegistrados.map(q => q.autor))].sort();
  const periodos = [...new Set(quadrosRegistrados.map(q => q.periodo))].sort();

  artistas.forEach(artista => {
    const option = new Option(artista, artista);
    selectArtista.appendChild(option);
  });

  periodos.forEach(periodo => {
    const option = new Option(periodo, periodo);
    selectPeriodo.appendChild(option);
  });
}

/** Renderiza a galeria na tela com base nos filtros e ordenação atuais. */
function renderizar() {
  let quadrosFiltrados = [...quadrosRegistrados];
  const artistaSelecionado = selectArtista.value;
  const periodoSelecionado = selectPeriodo.value;
  const ordenacaoSelecionada = ordenacaoSelect.value;

  if (artistaSelecionado) {
    quadrosFiltrados = filtrarPorArtista(quadrosFiltrados, artistaSelecionado);
  }
  if (periodoSelecionado) {
    quadrosFiltrados = filtrarPorPeriodo(quadrosFiltrados, periodoSelecionado);
  }

  const quadrosOrdenados = reordenarQuadros(quadrosFiltrados, ordenacaoSelecionada);

  painel.innerHTML = "";
  quadrosOrdenados.forEach(q => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <strong>${q.titulo}</strong>
      <img src="${q.imagem}" alt="${q.titulo}">
      <p>${q.autor} (${q.ano})</p>
      <p>${q.periodo} - ${q.pais}</p>
    `;
    painel.appendChild(div);
  });
}

/** Limpa os filtros e renderiza a galeria novamente. */
function limparFiltros() {
  selectArtista.value = "";
  selectPeriodo.value = "";
  ordenacaoSelect.value = "alfabetica";
  renderizar();
}

/** Exibe um alerta com o número total de quadros. */
function contarQuadros() {
  alert(`Total de quadros na galeria: ${quadrosRegistrados.length}`);
}

/** Exibe o formulário para adicionar um novo quadro. */
function mostrarFormulario() {
  const clone = formularioTemplate.content.cloneNode(true);
  painel.innerHTML = "";
  painel.appendChild(clone);
  
  // Adiciona o listener para o formulário que acabou de ser criado
  const form = painel.querySelector("form");
  form.addEventListener("submit", adicionarQuadro);
}

/** Adiciona um novo quadro à lista, vindo do formulário. */
function adicionarQuadro(event) {
  event.preventDefault();
  const form = event.target;
  
  const novoQuadro = {
    titulo: form.querySelector("#titulo").value,
    autor: form.querySelector("#autor").value,
    ano: parseInt(form.querySelector("#ano").value, 10),
    periodo: form.querySelector("#periodo").value,
    pais: form.querySelector("#pais").value,
    imagem: form.querySelector("#imagem").value,
  };

  quadrosRegistrados.push(novoQuadro);
  preencherFiltros(); // Atualiza os filtros com os novos dados
  renderizar(); // Renderiza a galeria com o quadro novo
}


// --- INICIALIZAÇÃO E EVENT LISTENERS ---

// Adiciona os listeners de eventos para os controles
mostrarFormularioBotao.addEventListener("click", mostrarFormulario);
limparFiltrosBotao.addEventListener("click", limparFiltros);
contarQuadrosBotao.addEventListener("click", contarQuadros);

selectArtista.addEventListener("change", renderizar);
selectPeriodo.addEventListener("change", renderizar);
ordenacaoSelect.addEventListener("change", renderizar);


// Inicializa a aplicação ao carregar a página
preencherFiltros();
renderizar();