
function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuário");
 elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript","Python","C++"];
console.log(linguagens[0]);// “JavaScript”
console.log(linguagens[1]); // “Python”
console.log(linguagens[2]); // “C++”

const item = document.querySelector("#lista");


item.textContent = linguagens[0];
item.textContent = linguagens[1];
item.textContent = linguagens[2];


//const aluno1 = {
  //nome: "Gabriel",
 // idade: 13,
 // anoLetivo: "2ºsérie",
 // materiasFavoritas: "Geografia","Programação","Arte"
//}
//const item = document.querySelector("#aluno");
//item.textContent = aluno1.nome;
//item.textContent = aluno1.idade;
//item.textContent = aluno1.materiasFavoritas[1];
function mudarCor(){
  const elemento = document.getElementById("nome-usuário");
  elemento.style.color = "red";
 
}
mudarCor();
