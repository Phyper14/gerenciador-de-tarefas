var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(event){
	event.preventDefault();
	var corpostit = document.getElementById("cor");
	var tarefa = document.getElementById("tarefa").value;
	var postit = document.createElement("p");
	postit.appendChild(tarefa);
	body.appendChild(postit);

	console.log(postit);
});
