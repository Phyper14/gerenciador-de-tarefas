var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(event){
	event.preventDefault();
	var nota = document.createElement("div");
	var btnApagar = criarbtn("cor-apagar", "btn-apagar");
	var btnEditar = criarbtn("cor-editar","btn-editar");
	var corpostit = document.getElementById("cor").value;
	var tarefa = document.getElementById("tarefa").value;
	var corpo = document.getElementById("lista_tarefas");
	var postit = document.createElement("p");
	var fonte = corpostit.replace("#", '');
	var r = parseInt(fonte.substring(0,2), 16);
	var g = parseInt(fonte.substring(2,4), 16);
	var b = parseInt(fonte.substring(4,6), 16);
	console.log(r, g, b)
	if ((r+g+b)<432){
		postit.style.color = "white";
	}
	nota.style.backgroundColor = corpostit;
	console.log(corpostit);
	postit.textContent = tarefa
	nota.classList.add("caixa");
	nota.classList.add("notas");
	postit.appendChild(btnApagar);
	postit.appendChild(btnEditar);
	nota.appendChild(postit);
	corpo.appendChild(nota);
	indice = (localStorage.length) + 1
	localStorage.setItem("tarefa_" + indice, tarefa);
});
for(var i=1; i<=(localStorage.length); i++ )
	localStorage.getItem("tarefa_"+i), i;

function criarbtn(cor, icone){
	var i = document.createElement("i");
	var btn = document.createElement("button");
	btn.appendChild(i);
	btn.classList.add(cor);
	i.classList.add(icone);
	return btn;
}
/**function cortarefas(){
	
};*/