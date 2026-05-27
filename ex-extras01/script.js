// desenvolva um algoritmo que mostre, com o código "alert" uma contagem regressiva de 30 até 1, marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo: 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16] 15 14 13 [12] 11 10 9 [8] 7 6 5 [4] 3 2 [1]

let contagem = "";
// let i = 30 indica inicialização
// i >= 1 indica a condição
// i-- incremento ou decremento
for (let i = 30; i >= 1; i--) { // a contagem começa em 30 e diminui 1 por vez
    if (i % 4 === 0) { // se o número for dividido por 4 e o resto for igual a 0, ele é divisível por 4
        contagem += `[${i}] `; // se o número for divisível por 4, mostre ele entre colchetes
    } else { 
        contagem += `${i} `; // se o número não for divisível por 4, mostre ele normalmente, sem colchetes
    }
}
alert(contagem); 