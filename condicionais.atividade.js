// Exercícios Práticos – Estruturas Condicionais
//(troque o número em "exercicio" para escolher qual rodar)

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const lerTexto = (msg) => rl.question(msg);
const lerNumero = async (msg) => Number((await rl.question(msg)).replace(",", "."));
const real = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// 1. Ano de nascimento -> idade
async function exercicio1() {
  const anoNascimento = await lerNumero("Ano de nascimento: ");
  const anoAtual = new Date().getFullYear();
  console.log(`Sua idade é ${anoAtual - anoNascimento} anos.`);
}

// 2. Sucessor e antecessor
async function exercicio2() {
  const n = parseInt(await lerTexto("Digite um número inteiro: "));
  console.log(`Sucessor: ${n + 1}`);                            
  console.log(`Antecessor: ${n - 1}`);
}

// 3. Salário (R$ 51,90 por hora)
async function exercicio3() {
  const valorHora = 51.9;
  const horas = await lerNumero("Horas trabalhadas: ");
  console.log(`Salário: ${real(horas * valorHora)}`);
}

// 4. Cliente, total da compra e 15% de desconto
async function exercicio4() {
  const cliente = await lerTexto("Nome do cliente: ");
  const total = await lerNumero("Valor total da compra: R$ ");
  const totalComDesconto = total * 0.85;
  console.log(`Cliente: ${cliente}`);
  console.log(`Total com 15% de desconto: ${real(totalComDesconto)}`);
}

// 5. Três notas -> aprovado se média >= 7
async function exercicio5() {
  const n1 = await lerNumero("Nota 1: ");
  const n2 = await lerNumero("Nota 2: ");
  const n3 = await lerNumero("Nota 3: ");
  const media = (n1 + n2 + n3) / 3;
  console.log(`Média: ${media.toFixed(2)}`);
  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

// 6. Aposentado ou Trabalho Formal
async function exercicio6() {
  const idade = await lerNumero("Idade: ");
  if (idade >= 60) {
    console.log("Aposentado");
  } else {
    console.log("Trabalho Formal");
  }
}

// 7. Cartão fidelidade ou compra acima de R$ 500 -> 20% de desconto
async function exercicio7() {
  const total = await lerNumero("Valor total da compra: R$ ");
  const fidelidade = (await lerTexto("Possui cartão fidelidade? (SIM/NÃO): "))
    .trim()
    .toUpperCase();

  if (fidelidade === "SIM" || total > 500) {
    console.log("Desconto de 20% aplicado.");
    console.log(`Total a pagar: ${real(total * 0.8)}`);
  } else {
    console.log("Sem desconto.");
    console.log(`Total a pagar: ${real(total)}`);
  }
}

// 8. Seleção de estagiários: cursando ensino médio E menor de idade
async function exercicio8() {
  const idade = await lerNumero("Idade: ");
  const cursandoEM = (await lerTexto("Está cursando o ensino médio? (SIM/NÃO): "))
    .trim()
    .toUpperCase();

  if (cursandoEM === "SIM" && idade < 18) {
    console.log("Aprovado para próxima fase");
  } else {
    console.log("Não atende aos critérios");
  }
}

async function main() {
  const exercicios = [null, exercicio1, exercicio2, exercicio3, exercicio4,
    exercicio5, exercicio6, exercicio7, exercicio8];

  const escolha = parseInt(await lerTexto("Qual exercício deseja executar (1 a 8)? "));
  if (exercicios[escolha]) {
    await exercicios[escolha]();
  } else {
    console.log("Exercício inválido.");
  }
  rl.close();
}

main();
