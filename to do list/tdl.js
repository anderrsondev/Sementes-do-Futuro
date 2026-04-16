let inputTarefa = document.getElementById("adicionartarefa");
let botaoAdicionar = document.getElementById("botaoadicionar");
let listaTarefas = document.getElementById("lista-tarefas");

console.log(inputTarefa)
console.log(botaoAdicionar)
console.log(listaTarefas)

function adicionartarefa() {
    let textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        alert("Digite uma tarefa!");
        return
    }


let li = document.createElement("li");
li.innerHTML =`
    <span>${textoTarefa}</span>
    <button class="remover">❌</button>
    `

 let botaoRemover = li.querySelector(".remover");

 botaoRemover.onclick = function() {
    li.remove();
 };

 listaTarefas.appendChild(li);

 inputTarefa.value = "";

}

botaoAdicionar.onclick = adicionartarefa;

