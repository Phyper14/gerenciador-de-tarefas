var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(event){
	event.preventDefault();
	var corpostit = document.getElementById("cor").value;
	var tarefa = document.getElementById("tarefa").value;
	var corpo = document.getElementById("lista_tarefas");
	var postit = document.createElement("p");
	postit.style.backgroundColor = corpostit;
	console.log(corpostit);
	postit.textContent = tarefa
	postit.classList.add("caixa");
	corpo.appendChild(postit);
});
function cortarefas(){
	
	/*if (class == rosa){
		console.log("Rosa");
	}*/
};

