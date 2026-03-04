//document.querySelectorAll(".item") → Busca todos os elementos que têm a classe "item"
// e guarda dentro da variável list. Assim você pode trabalhar com eles como uma lista.
//document.getElementById("next") → Pega o elemento que tem o id="next" e guarda na variáve
//next. Normalmente usado para um botão de avançar.
//document.getElementById("prev") → Pega o elemento que tem o id="prev" e guarda na variável
// prev. Normalmente usado para um botão de voltar.//

let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

//"list.length" :esse código para saber quantos itens existem na lista.
//Por exemplo: se no HTML você tiver 3 elementos com a classe "item", então count vai valer 3.
//Isso é muito útil em carrosséis ou slides, porque você precisa saber o total de itens
// para controlar a navegação com os botões next e prev.

let count = list.length;
let active = 0;

//Botão next:Remove a classe "active" do item atual.
//Verifica se o item ativo já é o último (active >= count - 1).
//Se for, volta para o primeiro (active = 0).
//Se não for, avança para o próximo (active + 1).
//Adiciona a classe "active" ao novo item.

next.onclick = () => {
  let activeold = document.querySelector(".active");
  activeold.classList.remove("active");

  active = active >= count - 1 ? 0 : active + 1;
  list[active].classList.add("active");
};

//Botão prev:Remove a classe "active" do item atual.
//Verifica se o item ativo já é o primeiro (active <= 0).
//Se for, vai para o último (active = count - 1).
//Se não for, volta para o anterior (active - 1).
//Adiciona a classe "active" ao novo item.

prev.onclick = () => {
  let activeold = document.querySelector(".active");
  activeold.classList.remove("active");

  active = active <= 0 ? count - 1 : active - 1;
  list[active].classList.add("active");
};

//Esse código faz com que, ao clicar em próximo ou anterior, o item ativo mude
//corretamente, sempre mantendo apenas um elemento com a classe "active".
//Ele também garante que a navegação seja cíclica: quando chega no fim,
//volta para o início; e quando está no início, volta para o fim.
