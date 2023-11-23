const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  console.log(location.href.includes(link.href));
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// produto selecionado ao clica

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// galeira bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");



function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if(media){
  galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


//animação
if(window.SimpleAnime){
new SimpleAnime();
}