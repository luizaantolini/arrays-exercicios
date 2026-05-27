// criando o vetor (array) vazio e a variável para a soma
let vetor = []; // [] é para armazenar os números inteiros
let soma = 0; // começa com ele valendo 0, e depois vai acumulando a soma dos pares

for (let i = 0; i < 10; i++) { // uma repetição (um combinado) que vai rodar exatamente 10 vezes. variável i começa valendo 0 e a cada rodada ganha mais 1 até chegar perto de 10
    let numero = Number(prompt(`Digite o ${i + 1}º número:`));
    vetor.push(numero); //pegue esse número que a pessoa acabou de digitar e empurre (push) para dentro da nossa lista (vetor). Feito isso, feche essa rodada e vá para a próxima, até pegar os 10 números
}
for (let i = 0; i < vetor.length; i++) { // agora a lista está cheia e vamos lê-la, vetor.lenght é o tamanho da lista
    if (vetor[i] % 2 === 0) { // se o número dessa posição for dividido por 2 e o resto for igual a 0, o número é par
        soma += vetor[i]; // se o número for par, adicione ele na soma
    }
}
alert(`A soma dos números pares digitados é: ${soma}`);