
function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuário");
 elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript","Python","C++"];
//console.log(linguagens[0]);// “JavaScript”
//console.log(linguagens[1]); // “Python”
//console.log(linguagens[2]); // “C++”

const item = document.querySelector("#lista");


item.textContent = linguagens[0];
item.textContent = linguagens[1];
item.textContent = linguagens[2];


const aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ªsérie",
  materiasFavoritas: ["Geografia", "Programação", "Arte"] 
}
//console.log(aluno1.nome) // “Gabriel”
//console.log(aluno1.idade) // 13
//console.log(aluno1.materiaFavorita)
// "Geografia","Programação","Arte"
//console.log(aluno1.materiaFavorita[1])  //Programação


const item = document.querySelector("#aluno");
item.textContent = aluno1.nome;
item.textContent = aluno1.idade;
item.textContent = aluno1.materiasFavoritas[1];

//const texto = document.querySelector('#entrada-de-texto').value;
//const campoResultado = document.querySelector('#resultado-palavrachave');
//const palavras = texto.split(" ");
//campoResultado.textContent = palavras[0]

//let perguntas = [
  //{
   // enunciado: "Pergunta 1",
    //alternativas: ["pergunta1","pergunta2","pergunta3"]
  //},
  //{
   // enunciado: "Pergunta 1",
   // alternativas: ["pergunta1","pergunta2","pergunta3"]
 // }
//]
  
//let atual = 0;
//let perguntaAtual;
//function mostraPergunta() {
  //perguntaAtual = perguntas[atual]; // perguntas[0]
  //caixaPerguntas.textContent = perguntaAtual.enunciado;
//}
//pergunta[0].enunciado;


function mudarCor(){
  const elemento = document.getElementById("nome-usuário");
  elemento.style.color = "red";
 
}
mudarCor();
