// 1- O header deve ter cor de fundo #2E948A.
const header = document.getElementsByTagName("header")[0];
header.style.backgroundColor = "#2E948A";

const link = document.querySelector("#menu_opcoes > nav > a:nth-child(1)")
link.href = "http://127.0.0.1:5500/cursos.html";

// console.log(header[0]);
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A';
header[0].style.backgroundColor = '#00000';

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
linkCursos.setAttribute('href', 'cursos.html');

//  Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";