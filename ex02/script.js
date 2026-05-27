// criando o vetor (array) vazio para armazenar os números aleatórios
let numerosAleatorios = []; // [] vai guardar os 7 números gerados pelo computador

for (let i = 0; i < 7; i++) { // uma repetição que vai rodar exatamente 7 vezes. a variável i começa em 0 e vai até 6, controlando o sorteio
    let numeroGerado = Math.floor(Math.random() * 100) + 1; 
    // Math.random() gera um número decimal aleatório entre 0 e quase 1 (0,9999...)
    // multiplica o número por 100, fazendo o número ficar entre 0 e quase 100 (99,9999...)
    // Math.floor() arredonda o número para baixo, transformando em um inteiro, basicamente tirando a vírgula
    numerosAleatorios.push(numeroGerado); // pega o número gerado pelo computador e empurra (push) para dentro da nossa lista (vetor)

}
alert(`Os 7 números gerados aleatoriamente foram:\n[ ${numerosAleatorios.join(" - ")} ]`);
// numerosAleatorios.join(" - ") pega os números da lista que provavelmente estavam separados por vírgulas e junta eles em uma string, separando por " - " para ficar mais bonito na exibição