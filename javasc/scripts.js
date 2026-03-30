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