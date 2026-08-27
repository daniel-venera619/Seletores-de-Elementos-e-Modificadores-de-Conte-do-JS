//1. Selecione o <h1> usando querySelector e mostre o elemento inteiro no console, para confirmar que pegou o elemento certo

const titulo = document.querySelector("h1");
console.log(titulo);

//2. Selecione o parágrafo de classe subtitulo e mostre no console só o texto dele (não o elemento inteiro).
const subtitulo = document.querySelector(".subtitulo");
console.log(subtitulo.innerText);

//3. Use querySelectorAll para selecionar todos os elementos com classe produto e mostre no console quantos foram encontrados.

const produtos = document.querySelectorAll(".produto");
console.log(produtos);

//4. Selecione apenas o primeiro elemento de classe preco da página (dica: dentro de uma lista de querySelectorAll, como pegar só um item específico?) e mostre o texto dele no console.

const precos = document.querySelectorAll(".preco");
console.log(precos[0].textContent);

//5. Selecione o produto pelo id (#produto-2) e mostre o elemento inteiro no console. Compare no console: o que aparece dentro dele além do texto?

const produtoDois = document.querySelector("#produto-2");
console.log(produtoDois);

//6. Selecione o <h2> do #produto-1 (o que tem <strong> dentro) e mostre no console, separadamente, o resultado de textContent, innerText e innerHTML desse elemento. Anote a diferença que você observou entre os três.

const produto1 = document.querySelector("#produto-1 h2");
console.log("textContent: ", produto1.textContent);
console.log("innerText: ", produto1.innerText);
console.log("innerHTML: ", produto1.innerHTML);

//7. Troque o texto do <h1> para "Loja da Turma — Promoção!" usando textContent.

const titulo1 = document.getElementById("titulo");
titulo1.textContent = "Loja da Turma — Promoção";

//8. Troque o texto do #rodape para "Todos os direitos reservados © 2026".

const rodape = document.getElementById("rodape");
rodape.textContent = "Todos os direitos reservados © 2026";

//9. Selecione a <p class="descricao"> do #produto-3 e altere o texto para "Perfeita para o inverno.".

const descricao = document.querySelector("#produto-3 .descricao");
descricao.textContent = "Perfeita para o inverno.";

//10. Use innerHTML para alterar o <h2> do #produto-2, deixando a palavra "Dev" em negrito, assim: Camiseta <strong>Dev</strong> — Edição Limitada. Depois, tente fazer a mesma alteração usando textContent no lugar de innerHTML e observe (e explique) o que muda no resultado.

const produto2 = document.querySelector("#produto-2 h2");
produto2.innerHTML = "Camiseta <strong>Dev</strong> — Edição Limitada.";

//11. Selecione o <span id="contador-carrinho"> e altere seu texto para "3".

const contador = document.getElementById("contador-carrinho");
contador.textContent = "3";

//12. Selecione o <ul id="lista-avisos"> inteiro e, usando innerHTML, substitua todo o conteúdo por uma nova lista de 2 avisos diferentes dos originais.

const listaAviso = document.getElementById("lista-avisos");

listaAviso.innerHTML = `
  <li>Pagamento seguro e facilitado</li>
  <li>Produtos com qualidade garantida</li>
`;
 
// 13. Desafio: troque o texto de um elemento dentro de cada um dos três produtos (#produto-1, #produto-2, #produto-3), usando um seletor diferente em cada caso (por id, por class, e por hierarquia — ex: #produto-3 .preco).

//Produto 1 - usando ID
const produtoum =document.getElementById("produto-1");
produtoum.querySelector("p").textContent = "Produto em destaque! S2";

//Produto 2 - usando CLASS
const descricaodois = document.querySelector(".descricao");
descricaodois.textContent = "Camiseta Dev com edição limitada! S2"

// Produto 3 — usando HIERARQUIA
const preco = document.querySelector("#produto-3 .preco");
preco.textContent = "R$ 24,24";

//14. Para pensar (sem código): tudo que você fez até aqui aconteceu assim que a página carregou. Se você quisesse que o texto do #contador-carrinho só mudasse quando alguém clicasse em um botão, o que você acha que precisaria existir no código para isso funcionar?
// R: Seria necessário ter um botão no HTML e um ação no JAVA SCRIPT.