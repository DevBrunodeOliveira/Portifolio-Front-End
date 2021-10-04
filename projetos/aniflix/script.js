var lista = document.getElementById("listaAnimes");
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
var nomeAnimes = [];
var x = animes.indexOf(link);

for (var i = 0; i < animes.length; i++) {
  lista.innerHTML += "<div><img src=" + animes[i] + ">" + "<p>" + nomeAnimes[i] +"</p></div>";
}

function adicionar() {
  link = document.getElementById("url").value;
  x = animes.indexOf(link);
  if (x < 0 && link != "") {
    animes.push(link);
    for (i; i < animes.length; i++) {
      lista.innerHTML += "<img src=" + animes[i] + ">";
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
    i--
  }
  document.getElementById("url").value = "";
  document.getElementById("nome").value = "";
}