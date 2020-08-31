let n = 5;
let string = "";
if (n % 2 == 1) {
    var ponta = 1;
} else {
    var ponta = 2;
}
for (let i = ponta; i <= n; i += 2 ) {
  string = "";
  for (let j = 1; j <= n; j++) {
    if (j <= (n - i) / 2 || j > (n-i)/2 + i ) {
      string = `${string} `;
    } else {
      string = `${string}*`;
    }
  }
  console.log(string);
}