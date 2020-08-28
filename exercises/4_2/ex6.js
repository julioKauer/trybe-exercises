let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 1) {
    odds++;
  }
}
if (odds == 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log("Foram encontrados " + odds + " números ímpares.");
}
