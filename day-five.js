let  laticinios = [];
let congelados = [];
let frutas = [];
let legumes = [];
let item = "";
let categoria = "";

let inserirMais = "sim";

while (inserirMais = "sim"){
    inserirMais = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com 'sim' ou 'não'.");
    while (inserirMais != "sim" && inserirMais != "não") { 
        alert(`Operação não reconhecida!`);
        inserirMais = prompt("Você deseja adicionar uma item na lista de compras? Responda 'sim' ou 'não'.");
    }

    if (inserirMais == "não"){ 
    alert(`Lista de compras:\n  Laticínios: ${laticinios}\n  Congelados: ${congelados}\n  Frutas: ${frutas}\n  Legumes: ${legumes}`);
    }

    item = prompt("Qual item você deseja inserir?");
    categoria = prompt("Em qual categoria essa item se encaixa: 'laticínios', 'congelados', 'frutas' ou 'legumes'");

    if(categoria == 'laticínios'){
        laticinios.push(item);
    } else if (categoria == 'congelados'){
        congelados.push(item);
    } else if(categoria == 'frutas'){
        frutas.push(item);
    } else if(categoria == 'legumes'){
        legumes.push(item);
    } else {
        alert("Categoria inválida!")
    }
} 



