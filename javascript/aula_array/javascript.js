let array = ['FFD', 1, true, ['array20']];

/*array.forEach(function (item, i){
console.log("ITENS: "+ item, "INDEX: "+ i)
});*/

/*NOVO ITEM NO FINAL*/ 
//array.push("New item");
//console.log(array);

//Tira do final: 
//array.pop();
//console.log(array);

//Tira do inicio: 
//array.shift();
//console.log(array);

//Novo Item no inicio: 
//array.unshift("New begin");
//console.log(array);

//BUsca o Indice do valor: 
//console.log( array.indexOf(1));

//Deleta com: inicio do indice array e qtd do array: 
//console.log(array.splice(1, 2));

//Start indice e qtd d elementos: 
/*console.log(array.slice(0, 4));

var objeto = {name: "MAthreus", age: 38, cp: "552452",phone: "88998885"};

destruct:
var {name, age} = objeto;
console.log(name);*/

/*CONDICIONAIS:*/

var val_1 = 1;
var val_2 = 0;

//val_1 != 0 || val_2 > 0 ?  console.log('Verdade'):console.log('Falso');


/*FOR*/

obj = {nome: "Luiz", nome2: "Luna", nome3: "Loiola"};

//for in pra Objetos
/*for(i in obj){
    console.log(i);
} 
for of não funciona pra objetos:
for(i of obj.nome){
    console.log(i)
}*/

function operadores( value_1, value_2){
    
    //ex: true or false
    var iguais = Number(value_1) === Number(value_2);

    var iguais_nao = Number(value_1) === Number(value_2) ? 'Iguais': 'Diferentes';
    var maior_menor = (Number(value_1) + Number(value_2) > 10) && (Number(value_1) + Number(value_2) < 20) ? 
                        `Soma entre ${value_1} e ${value_2} é maior que 10 e menor que 20`: 
                        `Soma entre ${value_1} e ${value_2} não é maior que 10 e menor que 20`;
    var soma = Number(value_1) + Number(value_2);

    console.log(`NUmeros são ${iguais_nao}; Sua soma é: ${soma}. ${maior_menor}`);
}

operadores(20, 20);