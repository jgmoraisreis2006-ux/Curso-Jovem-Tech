// Atividade – Vetores
//(troque o número em "exercicio" para escolher qual rodar)


//Ferraduras
async function main() {
  const cavalos = await ler("Cavalos comprados: ");
  console.log("Ferraduras necessárias:", cavalos * 4);
  rl.close();
}
main();

//Sexta parte
async function main() {
  const n = await ler("Número: ");
  console.log("Sexta parte:", n / 6);
  rl.close();
}
main();

//Área do triângulo retângulo
async function main() {
  const a = await ler("Cateto 1: ");
  const b = await ler("Cateto 2: ");
  console.log("Área:", (a * b) / 2);
  rl.close();
}
main();

//Buscar número no vetor
async function main() {
  const v = [];
  for (let i = 0; i < 10; i++) v.push(await ler(`Número ${i + 1}: `));
  const x = await ler("Buscar: ");
  const pos = v.indexOf(x);
  console.log(pos >= 0 ? `Encontrado na posição ${pos}` : "Não existe no vetor");
  rl.close();
}
main();

//Litros de refrigerante
async function main() {
  const latas = await ler("Latas de 350 ml: ");
  const g600 = await ler("Garrafas de 600 ml: ");
  const g2l = await ler("Garrafas de 2 L: ");
  const litros = (latas * 350 + g600 * 600) / 1000 + g2l * 2;
  console.log("Total:", litros, "litros");
  rl.close();
}
main();

//15 números e múltiplos de 10
async function main() {
  const v = [];
  for (let i = 0; i < 15; i++) v.push(await ler(`Número ${i + 1}: `));
  console.log("Vetor:", v);
  for (let i = 0; i < v.length; i++) {
    if (v[i] % 10 === 0) console.log(`Múltiplo de 10 na posição ${i}`);
  }
  rl.close();
}
main();

//10 inteiros e números pares
async function main() {
  const v = [];
  for (let i = 0; i < 10; i++) v.push(await ler(`Número ${i + 1}: `));
  for (let i = 0; i < v.length; i++) {
    if (v[i] % 2 === 0) console.log(`Par ${v[i]} na posição ${i}`);
  }
  rl.close();
}
main();

//Idades de 8 pessoas
async function main() {
  const idades = [];
  for (let i = 0; i < 8; i++) idades.push(await ler(`Idade ${i + 1}: `));

  const maior = Math.max(...idades);
  const soma = idades.reduce((acc, x) => acc + x, 0);

  console.log("a) Média:", soma / idades.length);
  console.log("b) Mais de 25 anos nas posições:",
    idades.map((x, i) => (x > 25 ? i : -1)).filter((i) => i >= 0));
  console.log("c) Maior idade:", maior);
  console.log("d) Posições da maior idade:",
    idades.map((x, i) => (x === maior ? i : -1)).filter((i) => i >= 0));
  rl.close();
}
main();