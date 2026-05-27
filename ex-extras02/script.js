// crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
// ex: digite o primeiro valor: 3
// digite o último valor: 15
// digite o incremento: 3
// contagem: 3 - 6 - 9 - 12 - 15

let contagem = ""; // variável para armazenar a contagem, começa vazia
let valorInicial = parseFloat(prompt("Digite o valor inicial da contagem:"));
let valorFinal = parseFloat(prompt("Digite o valor final da contagem:"));
let incremento = parseFloat(prompt("Digite o incremento da contagem:"));

for (let numeros = valorInicial; numeros <= valorFinal; numeros += incremento) { // a variável começa com o valor inicial, e enquanto for menor ou igual ao valor final, ela vai aumentando de acordo com o incremento
    contagem += `${numeros} - `; // cada número gerado pela contagem é adicionado à variável contagem
} if (valorInicial > valorFinal) {
    alert("Não é possível realizar a contagem com o valor inicial maior que o valor final.");
}
alert(contagem);