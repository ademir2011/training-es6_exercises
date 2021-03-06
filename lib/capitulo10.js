"use strict";

var _this = void 0;

// Capítulo 10 - Arrow Functions

/*
Exercício 1 - Hora de usar as setas
Utilize o que foi aprendido neste capítulo e refatore a função imprimeProduto para utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings.

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}
*/
var carrinho = [{
  nome: "abacaxi",
  preco: "2.00"
}, {
  nome: "detergente",
  preco: "2.50"
}, {
  nome: "bolacha",
  preco: "3.80"
}];

var imprimeProduto = function imprimeProduto(nome, preco) {
  return console.log("Produto: ".concat(nome, " | Pre\xE7o: ").concat(preco));
};

carrinho.forEach(function (produto) {
  return imprimeProduto(produto.nome, produto.preco);
});
/*
Exercício 2 - Hora de usar as setas novamente
Refatore o código a seguir para utilizar arrow functions:

let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(function(item) {
    console.log(item);
})
*/

var itens = ["abacaxi", "banana", "maçã", "laranja", "limão"];
itens.forEach(function (item) {
  return console.log(item);
});
/*
Exercício 3 - Quem está na janela?
Toda função declarada no escopo global possui o objeto window como valor do this. Por que acontece isso?
*/
//Por que this vai se referir ao contexto do objeto pai

/*
Exercício 4 - Vou lavar sua boca com sabão!
Utilize as arrow funcions para deixar o código a seguir ainda menor.

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(function(palavrao){ return palavrao.length });

console.log(tamanhos); // [ 22, 22, 44, 28 ]
*/

var palavroes = ["Inconstitucionalíssimo", "Otorrinolaringologista", "Pneumoultramicroscopicossilicovulcanoconiose", "Oftalmotorrinolaringologista"];
var tamanhos = palavroes.map(function (palavrao) {
  return palavrao.length;
});
console.log(tamanhos); // [ 22, 22, 44, 28 ]

/*
Exercício 5 - Tudo dentro do seu escopo
O código a seguir utiliza um velho truque do JavaScript para conseguir utilizar o valor do this que referência o objeto dentro do loop. 
Utilize os seus conhecimentos de ES6 para refatorá-lo da melhor maneira.

var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        var that = this;
        this.membros.forEach(function(membro) {
            console.log(membro + ' é da equipe ' + that.nome);
        })
    }
}

equipe.imprimeNomes();
*/

var equipe = {
  nome: "Valentes da Glória",
  membros: ["Luciano", "Maria", "Virgínia", "Daniela"],
  imprimeNomes: function imprimeNomes() {
    _this.membros.forEach(function (membro) {
      return console.log("".concat(membro, " \xE9 da equipe ").concat(_this.nome));
    });
  }
};
equipe.imprimeNomes();