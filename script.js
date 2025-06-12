const btnAdd = document.getElementById('btnAdd');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual é o seu nome?")
if (nome==""){
titulo.innerHTML = `Lista de tarefas do generico`;
}
else{
    titulo.innerHTML = `Lista de tarefas do(a): ${nome}`;
    tarefa.focus();
}
btnAdd.addEventListener("click",criarTarefa);

tarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') criarTarefa();
});

function criarTarefa(){
    if (tarefa.value==""){
        alert("Digite o nome da sua tarefa")
    }
    else{
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

    tarefa.value = '';
    tarefa.focus();
        }
}