let nomes = [
	"jamilton",
	"josé",
	"letícia",
	"maria",
	"carlos",
	"pedro",
	"marcela",
	"carla",
	"carlos"
]

function pesquisarNome(){

	let nomePesquisa = document.getElementById('campoNome').value
	let itemLista = ''

	for(indice in nomes){
		let nome = nomes[indice]
		if( nomePesquisa == nome ){
			itemLista += `
			<li class="list-group-item">
				${nome}
			</li>`
		}
	}

	document.getElementById('lista').innerHTML = itemLista

}

function carregarNomes(){

	let itemLista = ''
	for(indice in nomes){
		
		let nome = nomes[indice]

		itemLista += `
			<li class="list-group-item">
				${nome}
			</li>`
	}

	document.getElementById('lista').innerHTML = itemLista

}