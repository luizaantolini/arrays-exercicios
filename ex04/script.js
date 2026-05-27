// criando os dois vetores (arrays) vazios
let vetorOriginal = []; // [] vai guardar os 10 números originais que o usuário digitar
let vetorSemDuplicatas = []; // [] vai guardar apenas os números únicos, sem repetições

for (let i = 0; i < 10; i++) { // uma repetição que vai rodar exatamente 10 vezes para ler os números
    let numero = Number(prompt(`Digite o ${i + 1}º número:`)); // abre a caixinha, converte para número e guarda temporariamente
    vetorOriginal.push(numero); // empurra o número digitado para dentro do nosso vetor original
}

for (let i = 0; i < vetorOriginal.length; i++) { // ler o vetor original do começo ao fim para filtrar os números
    // o método .includes() verifica se o número da vez JÁ ESTÁ dentro do vetorSemDuplicatas
    // o ponto de exclamação (!) no começo significa "NÃO". Ou seja: "Se o vetor NÃO inclui esse número..."
    if (!vetorSemDuplicatas.includes(vetorOriginal[i])) { 
        vetorSemDuplicatas.push(vetorOriginal[i]); // ...então pode empurrar o número para o vetor sem duplicatas
    }
}

// exibe na tela o balão final mostrando o antes e o depois das listas
alert(`Vetor Original: [ ${vetorOriginal.join(" - ")} ]\n\nVetor Sem Duplicatas: [ ${vetorSemDuplicatas.join(" - ")} ]`);

alert(`A lista digitada foi: [ ${vetor.join(" - ")} ]\n\nO número ${numeroProcurado} aparece ${contador} vez(es) no vetor.`);