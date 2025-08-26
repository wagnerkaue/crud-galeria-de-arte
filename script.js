let quadros = [
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


const painel = document.getElementById("painel");

function renderizar(lista = quadros) {
  painel.innerHTML = "";
  lista.forEach(q => {
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

// Preencher filtros automaticamente
function preencherFiltros() {
  const selectArtista = document.getElementById("filtroArtista");
  const selectPeriodo = document.getElementById("filtroPeriodo");

  // Limpar opções antigas
  selectArtista.innerHTML = '<option value="">Todos os artistas</option>';
  selectPeriodo.innerHTML = '<option value="">Todos os períodos</option>';

  // Criar listas únicas de artistas e períodos
  const artistas = [...new Set(quadros.map(q => q.autor))];
  const periodos = [...new Set(quadros.map(q => q.periodo))];

  // Preencher artistas
  artistas.forEach(a => {
    const option = document.createElement("option");
    option.value = a;
    option.textContent = a;
    selectArtista.appendChild(option);
  });

  // Preencher períodos
  periodos.forEach(p => {
    const option = document.createElement("option");
    option.value = p;
    option.textContent = p;
    selectPeriodo.appendChild(option);
  });
}

// Filtrar quadros
function filtrar() {
  const artista = document.getElementById("filtroArtista").value;
  const periodo = document.getElementById("filtroPeriodo").value;
  const ordenacao = document.getElementById("ordenar").value;

  let lista = [...quadros];

  if (artista) lista = lista.filter(q => q.autor === artista);
  if (periodo) lista = lista.filter(q => q.periodo === periodo);

  if (ordenacao === "alfabetica") lista.sort((a,b) => a.titulo.localeCompare(b.titulo));
  else if (ordenacao === "ano") lista.sort((a,b) => a.ano - b.ano);
  else if (ordenacao === "pais") lista.sort((a,b) => a.pais.localeCompare(b.pais));

  renderizar(lista);
}

// Limpar filtros
function limparFiltros() {
  document.getElementById("filtroArtista").value = "";
  document.getElementById("filtroPeriodo").value = "";
  document.getElementById("ordenar").value = "";
  renderizar();
}

// Mostrar galeria completa
function verGaleria() {
  renderizar();
}

// Adicionar quadro (mostra formulário)
function mostrarFormulario() {
  painel.innerHTML = `
    <form onsubmit="adicionarQuadro(event)">
      <input type="text" id="titulo" placeholder="Título" required>
      <input type="text" id="autor" placeholder="Autor" required>
      <input type="number" id="ano" placeholder="Ano" required>
      <input type="text" id="periodo" placeholder="Período artístico" required>
      <input type="text" id="pais" placeholder="País do artista" required>
      <input type="text" id="imagem" placeholder="URL da imagem" required>
      <button type="submit">Adicionar Quadro</button>
    </form>
  `;
}

// Adicionar novo quadro
function adicionarQuadro(event) {
  event.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const ano = parseInt(document.getElementById("ano").value);
  const periodo = document.getElementById("periodo").value;
  const pais = document.getElementById("pais").value;
  const imagem = document.getElementById("imagem").value;

  quadros.push({titulo, autor, ano, periodo, pais, imagem});
  preencherFiltros(); // Atualiza filtros com novos dados
  renderizar();
}

// Contar quadros
function contarQuadros() {
  alert(`Total de quadros na galeria: ${quadros.length}`);
}

// Inicializar filtros ao carregar a página
preencherFiltros();
renderizar();