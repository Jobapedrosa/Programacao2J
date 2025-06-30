
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


item.textContent = linguagens[0]; //“JavaScript”
item.textContent = linguagens[1]; //“Python”
item.textContent = linguagens[2]; // “C++”


let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ªsérie",
  materiasFavoritas: ["Geografia", "Programação", "Arte"] 
}
console.log(aluno1.nome); // “Gabriel”
console.log(aluno1.idade); // 13
console.log(aluno1.materiasFavoritas);
 "Geografia","Programação","Arte"
console.log(aluno1.materiasFavoritas[1]); //Programação


const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
//objeto.textContent = aluno1.idade;
//objeto.textContent = aluno1.materiasFavoritas[1];

  

function mudarCor(){
  const elemento = document.getElementById("nome-usuário");
  elemento.style.color = "red";
 
}
mudarCor();
