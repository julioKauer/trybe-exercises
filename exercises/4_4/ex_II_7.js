let string1 = "trybe";
let string2 = "be";

console.log(verificaFimPalavra(string1, string2));

function verificaFimPalavra(string1, string2) {
  for (let i = 0; i < string2.length; i++) {
    if (string1[string1.length - string2.length + i] != string2[i]) {
      return false;
    }
  }
  return true;
}
