// criando o vetor (array) vazio para armazenar os números e a variável para contar as aparições
let vetor = []; // [] vai guardar os 10 números inteiros digitados pelo usuário
let contador = 0; // começa valendo 0 e vai somando +1 cada vez que encontrar o número escolhido

for (let i = 0; i < 10; i++) { // uma repetição que vai rodar exatamente 10 vezes para coletar os dados
    let numero = Number(prompt(`Digite o ${i + 1}º número:`)); // abre a caixinha, transforma o texto em número e guarda temporariamente
    vetor.push(numero); // empurra o número digitado para dentro da nossa lista (vetor)
}

// pede para o usuário escolher qual número ele quer procurar dentro da lista
let numeroProcurado = Number(prompt("Digite um número para verificar quantas vezes ele aparece na lista:"));

for (let i = 0; i < vetor.length; i++) { // ler a lista cheia do começo ao fim (vetor.length)
    if (vetor[i] === numeroProcurado) { // se o número da posição atual da lista for exatamente igual ao número que o usuário está procurando
        contador++; // adiciona +1 ao nosso contador (encontramos uma aparição!)
    }
}

alert(`A lista digitada foi: [ ${vetor.join(" - ")} ]\n\nO número ${numeroProcurado} aparece ${contador} vez(es) no vetor.`);