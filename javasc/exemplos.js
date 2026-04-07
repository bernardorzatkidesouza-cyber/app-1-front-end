let nome="João";
let Nome="Maria";

console.log(nome)
console.log(Nome)

let idade= 30;
let cidade="São Paulo";

if (idade>18){
    console.log(nome + " é maior de idade.");
}else {
    console.log(nome +" é menor de idade")
}


let profissao= "Desenvolvedor";
function saudacao(){
    console.log("olá!");
}

let meuNome= "João";
meuNome="Pedro";

const PI=3.14159;
const usuario = {nome: "Maria"};
ususario.nome="Ana";

console.log(ususario)

//strig
const nome= "Carlos"
//number
const idade= 25;
//boolean
const temCarro=false;
//Undefined
let endereco;
//usando template literals
const saudacao = `olá, meu noe é ${nome} e tenho ${idade} anos`
console.log(saudacao);

//array
const frutas = ["maça","Banana","Morango"];
console.log(frutas)
console.log(frutas[1])
//object
const pessoa = {
    nome:"Ana",
    idade: 30,
    cidade: "Rio de Janeiro"
};

//usando template literals
const saudacao = `Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`
console.log (saudacao);

//condicional if/else
    const idade=20;
if (idade>18){
    console.log(nome + " é maior de idade.");
}else {
    console.log(nome +" é menor de idade")
}

//ternário
let validaIdade = idade >= 18 ?"maior" : "menor";
console.log("você é ", validaIdade, " de idade");
//condicional switch
const statusSemaforo = "vermelho";
switch (statusSemaforo) {
    case "vermelho":
        console.log("Pare!");
        break
    case "verde":
        console.log("Siga!");
        break
    default:
        console.log("Aguarde!");
}
//loops
let contador = 0;
while (contador < 3) {
 console.log(`O contador é ${contador}.`);
 contador++; // evitar um loop infinito
}

//'++' somar 1 e '--' diminuir 1

// Saída:
// O contador é 0.
// O contador é 1.
// O contador é 2.

for (let i = 0; i < 5; i++) {
 console.log(`O valor de i é ${i}.`);
}
// Saída:
// O valor de i é 0.
// O valor de i é 1.
// O valor de i é 2.
// O valor de i é 3.
// O valor de i é 4.

const frutas = ["Maçã", "Banana", "Laranja"];
for (const fruta of frutas) {
 console.log(fruta);
}
// Saída:
// Maçã
// Banana
// Laranja

// função

function somar (a,b){
    return a + b;
}

const resultado= somar (5,3);
console.log(reasultado);//8

//função anonima(forma diferente de chamar a função)
const multiplicar = function(a, b) {
 return a * b;
};


console.log(multiplicar(5, 3)); // 15

//Arrow Function (ES6) Sintaxe mais curta e moderna.
const dividir = (a, b) => {
 return a / b;
};

// Sintaxe simplificada para retorno de 1 linha
const subtrair = (a, b) => a - b; 

console.log(dividir(10, 2)); // 5
console.log(subtrair(10, 2)); // 8

//forEach Executa uma função para cada elemento do array. Não retorna um novo array
const numeros = [1, 2, 3];

numeros.forEach((numero) => {
 console.log(numero * 2);
});

// Saída: 2, 4, 6

//map Cria um novo array com os resultados da chamada de uma função para cada elemento.
const numeros = [1, 2, 3];

const dobro = numeros.map((numero) => numero * 2);

console.log(dobro); // [2, 4, 6]

//filter()Cria um novo array contendo apenas os elementos que passam em um teste fornecido por uma função.

const idades = [15, 20, 25, 17];


const cnh = idades.filter((idade) => idade >= 18);


console.log(maioresDeIdade); // [20, 25]
//find Retorna o primeiro elemento do array que satisfaz a condição da função de teste. Se nenhum for encontrado,retorna undefined.
const usuarios = [
 { id: 1, nome: 'Ana' }, 
 { id: 2, nome: 'Bruno' }
];

const usuarioEncontrado = usuarios.find((user) => user.id === 2);
console.log(usuarioEncontrado); 

// { id: 2, nome: 'Bruno' }

//reduce() Executa uma função "redutora" em cada elemento do array (da esquerda para a direita), resultando em um único valor de retorno.
const precos = [10, 25, 5];
const total = precos.reduce((acumulador, preco) => acumulador +
preco, 0);

console.log(total); // 40

//Spread (...) Permite expandir elementos de um array ou propriedades de um objeto em um novo array ou objeto. É ótimo para copiar e combinar dados sem modificar os originais.
//Arrays

const frutas = ['uva', 'maçã'];

const novasFrutas = [...frutas, 'banana',
'laranja'];

console.log(novasFrutas); 

// ['uva', 'maçã', 'banana', 'laranja']

//Objetos

const pessoa = { nome: 'João', idade: 30 };

const pessoaAtualizada = { ...pessoa, cidade: 'São
Paulo' };

console.log(pessoaAtualizada); 

// { nome: 'João', idade: 30, cidade: 'São Paulo' }

//join() Junta todos os elementos de um array em uma única string. Você pode especificar um separador.

const palavras = ['Olá', 'Mundo', 'JavaScript'];

const fraseEspaco = palavras.join(' ');

console.log(fraseEspaco); // "Olá Mundo JavaScript"

const frasePonto = palavras.join('.');

console.log(frasePonto); // "Olá.Mundo.JavaScript"

const fraseTraco = palavras.join('-');

console.log(fraseTraco); // "Olá-Mundo-JavaScript"
----------------------------------------------------------------
//por id:Retorna um único elemento, pois o id deve ser único na página.
//html:<h1 id="titulo-principal">Olá Mundo</h1>
const titulo =document.getElementById ( 'titulo-principal');


console.log(titulo.textContent); 
//saida;ola mundo

//Por Classe (getElementsByClassName)
//Retorna uma coleção de elementos (HTMLCollection), mesmo que haja apenas um.
// HTML: <p class="texto">Conteúdo 1</p> <p class="texto">Conteúdo 2</p>
const textos=document.getElementsByClassName('texto');

console.log(textos[ ].textContent);
// Saída: "Conteúdo 1"

//Por Seletor CSS (querySelector e querySelectorAll)
//O método mais flexível e moderno, usando a sintaxe de seletores CSS.
// HTML: <ul id="lista"><li class="item">Item 1</li></ul>
const primeiroItem=document.querySelector('#lista .item');
console.log(primeiroItem.textContent);// Saída: "Item 1"

const todosItens=document.querySelectorAll('.item');
console.log(primeiroItem.length);// Saída: 1



