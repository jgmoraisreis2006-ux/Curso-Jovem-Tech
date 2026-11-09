// Atividade - Laços de Repetição (PARA, ENQUANTO, REPITA)

const prompt = require("prompt-sync")();

/* ==================== LAÇO PARA (for) ==================== */

// PARA 1: números pares de 2 até 100
function para1() {
  for (let i = 2; i <= 100; i += 2) console.log(i);
}

// PARA 2: tabuada do 7
function para2() {
  for (let i = 1; i <= 10; i++) console.log(`7 x ${i} = ${7 * i}`);
}

// PARA 3: soma dos números de 1 a 20
function para3() {
  let soma = 0;
  for (let i = 1; i <= 20; i++) soma += i;
  console.log("Soma:", soma); // 210
}

// PARA 4: números ímpares de 1 a 99
function para4() {
  for (let i = 1; i <= 99; i += 2) console.log(i);
}

/* ================== LAÇO ENQUANTO (while) ================== */

// ENQUANTO 1: ler números enquanto o usuário digitar um valor positivo
function enquanto1() {
  let n = Number(prompt("Digite um número: "));
  while (n > 0) {
    console.log("Você digitou:", n);
    n = Number(prompt("Digite outro número: "));
  }
}

// ENQUANTO 2: ler um número e imprimir os pares menores que ele
function enquanto2() {
  const limite = Number(prompt("Digite um número: "));
  let i = 2;
  while (i < limite) {
    console.log(i);
    i += 2;
  }
}

// ENQUANTO 3: continuar lendo valores enquanto a soma for menor que 100
function enquanto3() {
  let soma = 0;
  while (soma < 100) {
    soma += Number(prompt("Digite um valor: "));
  }
  console.log("Soma final:", soma);
}

// ENQUANTO 4: imprimir de 10 até 1
function enquanto4() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

/* ================= LAÇO REPITA (do...while) ================= */

// REPITA 1: menu que repete até o usuário escolher sair
function repita1() {
  let opcao;
  do {
    console.log("\n1 - Cadastrar\n2 - Listar\n3 - Sair");
    opcao = Number(prompt("Escolha: "));
    switch (opcao) {
      case 1: console.log("Cadastrando..."); break;
      case 2: console.log("Listando..."); break;
      case 3: console.log("Saindo..."); break;
      default: console.log("Opção inválida");
    }
  } while (opcao !== 3);
}

// REPITA 2: ler números até digitar um múltiplo de 5
function repita2() {
  let n;
  do {
    n = Number(prompt("Digite um número: "));
  } while (n % 5 !== 0);
  console.log("Múltiplo de 5 digitado:", n);
}

// REPITA 3: ler notas de alunos até o usuário decidir parar
function repita3() {
  let soma = 0;
  let cont = 0;
  let resp;
  do {
    soma += Number(prompt("Digite a nota: "));
    cont++;
    resp = prompt("Continuar? (S/N) ").toUpperCase();
  } while (resp !== "N");
  console.log("Média:", soma / cont);
}

// REPITA 4: ler números positivos e parar quando digitar zero
function repita4() {
  let n;
  do {
    n = Number(prompt("Digite um número positivo (0 para parar): "));
    if (n > 0) console.log("Número positivo:", n);
  } while (n !== 0);
}

/* ==================== MENU PARA EXECUTAR ==================== */

const exercicios = {
  "PARA 1": para1, "PARA 2": para2, "PARA 3": para3, "PARA 4": para4,
  "ENQUANTO 1": enquanto1, "ENQUANTO 2": enquanto2,
  "ENQUANTO 3": enquanto3, "ENQUANTO 4": enquanto4,
  "REPITA 1": repita1, "REPITA 2": repita2,
  "REPITA 3": repita3, "REPITA 4": repita4,
};

const nomes = Object.keys(exercicios);
let escolha;
do {
  console.log("\n=== EXERCÍCIOS ===");
  nomes.forEach((nome, i) => console.log(`${i + 1} - ${nome}`));
  console.log("0 - Sair");
  escolha = Number(prompt("Escolha o exercício: "));
  if (escolha >= 1 && escolha <= nomes.length) {
    console.log(`\n--- ${nomes[escolha - 1]} ---`);
    exercicios[nomes[escolha - 1]]();
  } else if (escolha !== 0) {
    console.log("Opção inválida");
  }
} while (escolha !== 0);
