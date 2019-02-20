var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(event){
	event.preventDefault();
	var nota = document.createElement("div");
	var conteudo = document.createElement("div");
	var btnApagar = criarbtn("btn-apagar", "icone-apagar");
	var btnEditar = criarbtn("btn-editar", "icone-editar");
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
	conteudo.classList.add("conteudo");
	nota.classList.add("nota");
	conteudo.style.backgroundColor = corpostit;
	postit.textContent = tarefa
	postit.style.padding = 5%
	nota.classList.add("caixa");
	nota.classList.add("notas");
	nota.appendChild(btnApagar);
	nota.appendChild(btnEditar);
	conteudo.appendChild(postit);
	nota.appendChild(conteudo);
	corpo.appendChild(nota);

	indice = (localStorage.length) + 1
	localStorage.setItem("tarefa_" + indice, tarefa);
	

	var botaoApagar = document.querySelectorAll(".btn-apagar");
	botaoApagar.forEach(function(botao){
	botao.addEventListener("click", apagarTarefa);
	});

	var botaoEditar = document.querySelectorAll(".btn-editar");
	botaoEditar.forEach(function(botao){
	botao.addEventListener("click", editarTarefa);
	});
});

function criarbtn(cor, icone){
	var i = document.createElement("i");
	var btn = document.createElement("button");
	btn.appendChild(i);
	btn.classList.add(cor);
	i.classList.add(icone);
	return btn;
}

function editarTarefa(event){

};

function apagarTarefa(event){
	var apagar;
	if(event.target.hasChildNodes()) {
		apagar = event.target.parentNode;
		console.log("erro no if");
	} else {
		apagar = event.target.parentNode.parentNode;
		console.log("erro no else");
	}
	apagar.classList.add("fade-out");
	/*var indice = apagar.id;*/
	localStorage.removeItem("tarefa_" + indice);
	setTimeout(function(){
		apagar.remove();
	}, 250);
}

for(var i=1; i<=(localStorage.length); i++ )
	localStorage.getItem("tarefa_"+i), i;
/**function cortarefas(){

};*/