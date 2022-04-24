// 3 - Crie uma função chamada mostrarDobro(num), que recebe um parâmetro sendo um número
// inteiro. Esta função será chamada ao abrir a página e mostrará um alerta com o resultado.
// Exemplo: “O dobro do número 5 é 10.”
// const numero = 10;

let numero = Number(prompt("Informe um número: "));

const mostrarDobro = (num) => num * 2;

const dobro = mostrarDobro(numero);

alert(`O dobro do número ${numero} é ${dobro}.`);
