let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mean = 0;
for (let i = 0; i < numbers.length; i++) {
  mean += numbers[i];
}
mean /= numbers.length;
console.log("The mean of the numbers is " + mean);

if (mean > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
