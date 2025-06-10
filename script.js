const btnAdd = document.getElementById('btnAdd');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual é o seu nome?")
if (nome==""){
titulo.innerHTML = `Lista de tarefa generico`;
}
else{
    titulo.innerHTML = `Lista de tarefa: ${nome}`;
}
btnAdd.addEventListener("click",criarTarefa);

function criarTarefa(){
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem)

    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "x"
    

    removeButton.addEventListener("click", function (){
        taskList.removeChild(listItem);
    })

    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓";

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    concluirButton.addEventListener("click", function(){
        listItem.classList.toggle('completed');
    })
}