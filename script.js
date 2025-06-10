const btnAdd = document.getElementById('btnAdd');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let mome = prompt("Qual é o seu nome?")
if (nome==""){
titulo.innerHTML = `Lista de tarefa: ${nome}`;
}
else{
    titulo.innerHTML = `Lista de tarefa: ${nome}`;
}
btnAdd.addEventListener("click",criarTarefa);

function criarTarefa(){
    
}