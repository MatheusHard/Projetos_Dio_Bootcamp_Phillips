let array = ['FFD', 1, true, ['array20']];

array.forEach(function (item, i){
console.log("ITENS: "+ item, "INDEX: "+ i)
});

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
console.log(array.slice(0, 4));

var objeto = {name: "MAthreus", age: 38, cp: "552452",phone: "88998885"};

//destruct:
var {name, age} = objeto;
console.log(name);