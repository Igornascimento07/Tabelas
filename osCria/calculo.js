//calculadora de idade
function idade(){
let anoDeNascimento = window.prompt("Em que ano você nasceu");
let anoDeHoje = 2023;
let idade = anoDeHoje - anoDeNascimento
console.log(anoDeNascimento);
alert("Quem nasceu em " + anoDeNascimento + " vai fazer " + idade + " em 2023")
}

//calculadora de notas
//Primeiro trimestre
function nota(){
let nota1 = parseFloat (window.prompt("Nota do primeiro trimestre: " ));

//Segundo Trimestre
let nota2 = parseFloat (window.prompt("Nota do segundo trimestre: " ));

let nota3 = parseFloat (window.prompt("Nota do terceiro trimestre: " ));
console.log(nota1 + nota2 + nota3);

let nota4 =  nota1 + nota2 + nota3;

if(nota4 >= 180){
    alert("aprovado");
}
    else{
    alert("reprovado");
}
alert("Sua nota total foi " + nota4);}

