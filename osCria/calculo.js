//calculadora de idade
/*console.log("esta funcinando!");

let anoDeNascimento = window.prompt("Em que ano você nasceu");
let anoDeHoje = 2023
let idade = anoDeHoje - anoDeNascimento 
console.log(anoDeNascimento);
alert("Quem nasceu em " + anoDeNascimento + " vai fazer " + idade + " em 2023") */

//Primeiro trimestre
let nota1 = parseFloat (window.prompt("Nota do primeiro trimestre: " ));

//Segundo Trimestre
let nota2 = parseFloat (window.prompt("Nota do segundo trimestre: " ));
console.log(nota1 + nota2);

let nota3 =  nota1 + nota2 


if(nota3 >= 12){
    alert("aprovado");
}
    else{
    alert("reprovado");
}
alert("Sua nota total foi " + nota3);




