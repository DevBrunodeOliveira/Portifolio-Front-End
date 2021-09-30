var jogador1 = {
  nome: "Fulano",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var jogador2 = {
  nome: "Ciclano",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var jogador3 = {
  nome: "Deltrano",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogadores = [jogador1, jogador2, jogador3];

function exibirTabela(jogadores) {
  var jogador = jogadores;
  var elemento = "";
  for (var i = 0; i < jogador.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + jogador[i].nome + "</td>";
    elemento += "<td>" + jogador[i].vitorias + "</td>";
    elemento += "<td>" + jogador[i].empates + "</td>";
    elemento += "<td>" + jogador[i].derrotas + "</td>";
    elemento += "<td>" + jogador[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirTabela(jogadores);

function calculaPontos(jogador) {
  var pontos = jogador.pontos;
  pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas * 2;
  return pontos;
}

function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  jogadores[i].pontos = calculaPontos(jogadores[i]);
  exibirTabela(jogadores);
}

function adicionarEmpate(i) {
  jogadores[i].empates++;
  jogadores[i].pontos = calculaPontos(jogadores[i]);
  exibirTabela(jogadores);
}

function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  jogadores[i].pontos = calculaPontos(jogadores[i]);
  exibirTabela(jogadores);
}

function adicionar() {
  var novoJogador = {
    nome: "",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var nomeJogador = document.getElementById("jogador").value;
  novoJogador.nome = nomeJogador;
  jogadores.push(novoJogador);
  exibirTabela(jogadores);
  document.getElementById("jogador").value = "";
}

function remover() {
  var listaNomes = [];
  for (var x = 0; x < jogadores.length; x++) {
    listaNomes.push(jogadores[x].nome);
  }
  var removerJogador = document.getElementById("jogador").value;
  var indice = listaNomes.indexOf(removerJogador);
  if (indice >= 0) {
    jogadores.splice(indice, 1);
    exibirTabela(jogadores);
  }
  document.getElementById("jogador").value = "";
}