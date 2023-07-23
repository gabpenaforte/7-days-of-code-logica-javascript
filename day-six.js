let laticinios = [];
let congelados = [];
let frutas = [];
let legumes = [];
let item = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim";  

while(adicionarMais != "não"){
    if(laticinios.length === 0 && congelados.length === 0 && frutas.length === 0 && legumes.length === 0){
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");
    } else {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'. Se deseja remover um item, responda com 'remover'.");
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {  
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");
    }

    if (inserirMais === "não"){ 
    alert(`Lista de compras:\n  Laticínios: ${laticinios}\n  Congelados: ${congelados}\n  Frutas: ${frutas}\n  Legumes: ${legumes}`);
    }

    if(adicionarMais === "sim"){
        item = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'laticínios','congelados', 'frutas' ou 'legumes'?");
            if (categoria === 'laticínios'){
            laticinios.push(item);
        } else if (categoria === 'congelados'){
            congelados.push(item);
        } else if(categoria === 'frutas'){
            frutas.push(item);
        } else if(categoria === 'legumes'){
            legumes.push(item)
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    } else if(adicionarMais === "remover"){
	    if(laticinios.length === 0 && congelados.length === 0 && frutas.length === 0 && legumes.length === 0){  
		alert(`A lista está vazia!`);
	    } else { 
            remover = prompt(`Lista de compras:\n  Laticínios: ${laticinios}\n  Congelados: ${congelados}\n  Frutas: ${frutas}\n  Legumes: ${legumes}\n\nQual produto você deseja remover?`);
            if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(legumes.indexOf(remover) != -1){
                legumes.splice(legumes.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
	    }
    }
}