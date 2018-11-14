var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(event){
	event.preventDefault();
	var corpostit = document.getElementById("cor");
	var tarefa = document.getElementById("tarefa").value;
	var corpo = document.querySelector("body");
	var postit = document.createElement("p");
	postit.textContent = tarefa
	corpo.appendChild(postit);
});
function cortarefas(){
	//var classe = document.getElementByClass("cor").className;
	console.log(classe);
	/*if (class == rosa){
		console.log("Rosa");
	}*/
};

