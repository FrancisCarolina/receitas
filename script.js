const items = [
    {
        titulo: "Pão com margarina na figideira", 
        igredientes: ["Pão", "Margarina"], 
        preparo:[
            "Pegue o pão, corte no meio e passe margarina nos dois lados.", 
            "Aqueça a figideira por 2 minutos",
            "Coloque o pão com a margarina para baixo em fogo médio-baixo", 
            "Ir apertando o pão na frigideira aos poucos", 
            "Quando começar a formar uma crosta marrom retirar da figideira", 
            "Deixe esfriar e sirva em um prato bonito!"
        ], 
        img:'pao.png'
    },
    {
        titulo: "Brownie", 
        igredientes: [
            "2 xícaras de achocolatado em pó", 
            "1 xícara de farinha de trigo", 
            "1 xícara de açúcar", 
            "200 gramas de manteiga", 
            "4 ovos"
        ], 
        preparo:[
            "Em uma tigela, coloque os ovos, o açúcar e bata com a ajuda de um fouet ou garfo;", 
            "Em seguida, adicione a manteiga e o achocolatado em pó",
            "Misture tudo e depois adicione a farinha de trigo", 
            "Mexa a massa até que fique homogênea", 
            "Depois, despeje a massa em uma forma untada com achocolatado em pó",
            "Leve para assar em forno preaquecido a 180 graus Celsius por 35 minutos", 
            "Retire do forno e sirva!"
        ], 
        img:'brownie.jpg'
    },
]
const container = document.querySelector("#receitasContainer");

window.onload = function() {
        container.innerHTML = createCards(items);
};
const createCards = (items) =>{
    return "<div>"+items.map(item => `<section class="receitaContainer">
    <figure>
      <img src="${item.img}" alt="bolo" class="receitaImg" />
    </figure>
    <div class="receitaDescricao">
      <h2>${item.titulo}</h2>
      <h3>Igredientes</h3>
      <ul id="listaIgredientes">
      ${item.igredientes.map(igrediente => `<li>${igrediente}</li>`).join("")}
      </ul>
      <h3>Modo de preparo</h3>
      <ol id="listaPreparo">
      ${item.preparo.map(preparo => `<li>${preparo}</li>`).join("")}
      </ol>
    </div>
  </section>`).join('')+"</div>"
      
}
