let n = 7;
let string = "";
for (let i = 1; i < n; i += 2) {
  string = "";
  for (let j = 1; j <= n; j++) {
    if (j == (n - i) / 2 + 1 || j == (n - i) / 2 + i) {
      string = `${string}*`;
    } else {
      string = `${string} `;
    }
  }
  console.log(string);
}
string = "";
for (let i = 0; i < n; i++) {
  string = `${string}*`;
}
console.log(string);
