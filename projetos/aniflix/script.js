var lista = document.getElementById("listaAnimes");
var nome = document.getElementById("nome").value;
var link = document.getElementById("url").value;
var animes = [
  "https://cdn.myanimelist.net/images/anime/1240/118272.jpg",
  "https://cdn.myanimelist.net/images/anime/1252/115539.jpg",
  "https://cdn.myanimelist.net/images/anime/1741/117622.jpg",
  "https://cdn.myanimelist.net/images/anime/1811/115541.jpg",
  "https://cdn.myanimelist.net/images/anime/1713/117119.jpg",
  "https://cdn.myanimelist.net/images/anime/1453/116276.jpg",
  "https://cdn.myanimelist.net/images/anime/1154/115599.jpg",
  "https://cdn.myanimelist.net/images/anime/1843/115815.jpg",
  "https://cdn.myanimelist.net/images/anime/1145/115565.jpg"
];
var nomeAnimes = [
  "Genjitsu Shugi Yuusha no Oukoku Saikenki",
  "Kobayashi-san Chi no Maid Dragon S",
  "Tensei shitara Slime Datta Ken 2nd Season Part 2",
  "Vanitas no Karte","Kanojo mo Kanojo",
  "Seirei Gensouki","Jahy-sama wa Kujikenai!",
  "Tantei wa Mou, Shindeiru.",
  "Deatte 5-byou de Battle"
];
var x = animes.indexOf(link);

for (var i = 0; i < animes.length; i++) {
  lista.innerHTML += "<div><img src=" + animes[i] + ">" + "<p>" + nomeAnimes[i] +"</p></div>";
}

function adicionar() {
  link = document.getElementById("url").value;
  nome = document.getElementById("nome").value;
  x = animes.indexOf(link);
  if (x < 0 && link != "") {
    animes.push(link);
    nomeAnimes.push(nome);
    for (i; i < animes.length; i++) {
      lista.innerHTML += "<div><img src=" + animes[i] + ">" + "<p>" + nomeAnimes[i] +"</p></div>";
      document.getElementById("repetido").innerHTML = "";
    }
  } else {
    document.getElementById("repetido").innerHTML = "Titulo Ja Adicionado";
  }
  document.getElementById("url").value = "";
  document.getElementById("nome").value = "";
}

function remover() {
  link = document.getElementById("url").value;
  x = animes.indexOf(link);
  if (x < 0 || link == "") {
    document.getElementById("repetido").innerHTML = "Titulo Não Encontrado!";
  } else {
    document.getElementById("repetido").innerHTML = "Titulo Removido!";
    lista.removeChild(lista.childNodes[x]);
    animes.splice(x, 1);
    nomeAnimes.splice(x, 1)
    i--
  }
  document.getElementById("url").value = "";
  document.getElementById("nome").value = "";
}