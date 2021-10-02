var cartas = [
  (carta1 = {
    nome: "Dino1",
    imagem: "https://i.ytimg.com/vi/tFi6BKvbPxU/maxresdefault.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      velocidade: 6
    }
  }),
  (carta2 = {
    nome: "Dino2",
    imagem: "https://super.abril.com.br/wp-content/uploads/2018/06/dino.png",
    atributos: {
      ataque: 9,
      defesa: 5,
      velocidade: 4
    }
  }),
  (carta3 = {
    nome: "Dino3",
    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/97/0b/5a/dinossauro.jpg?w=900&h=-1&s=1",
    atributos: {
      ataque: 2,
      defesa: 10,
      velocidade: 7
    }
  })
];
var cartaComputador;
var cartaJogador;

function sortear() {
  var computador = parseInt(Math.random() * 3);
  var jogador = parseInt(Math.random() * 3);
  while (jogador == computador) {
    jogador = parseInt(Math.random() * 3);
  }
  cartaComputador = cartas[computador];
  cartaJogador = cartas[jogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCarta();
}

function obtemAtributoSelecionado() {
  var ratributos = document.getElementsByName("atributo");
  for (var i = 0; i < ratributos.length; i++) {
    if (ratributos[i].checked == true) {
      return ratributos[i].value;
    }
  }
}

function exibirCarta() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="./Moldura-Card-Game.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id=opcoes class='carta-status'>";
  var escolhas = "";
  for (var atributo in cartaJogador.atributos) {
    if (atributo == "ataque") {
      escolhas +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'checked>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    } else {
      escolhas +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + escolhas + "</div>";
}

function exibirCartaComputador() {
  var divCartaComputador = document.getElementById("carta-computador");
  divCartaComputador.style.backgroundImage = `url(${cartaComputador.imagem})`;
  var moldura =
    '<img src="./Moldura-Card-Game.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id=opcoes class='carta-status'>";
  var atributosCarta = "";
  for (var atributo in cartaComputador.atributos) {
    atributosCarta +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaComputador.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaComputador.nome}</p>`;
  divCartaComputador.innerHTML =
    moldura + nome + tagHTML + atributosCarta + "</div>";
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorJogador = cartaJogador.atributos[atributoSelecionado];
  var valorComputador = cartaComputador.atributos[atributoSelecionado];
  if (valorJogador > valorComputador) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você Venceu</p>";
  } else if (valorJogador < valorComputador) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você Perdeu</p>";
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empate</p>";
  }
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaComputador();
}