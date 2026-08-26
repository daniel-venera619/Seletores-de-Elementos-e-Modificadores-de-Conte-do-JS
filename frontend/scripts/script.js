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

