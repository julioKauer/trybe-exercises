let peca = "Peão";
let movimento = "";
peca = peca.toLowerCase();
switch (peca) {
  case "peão":
    movimento =
      "Para frente uma casa, podem ser duas no primeiro movimento, toma uma casa na diagonal.";
    break;
  case "torre":
    movimento = "Em cruz.";
    break;
  case "bispo":
    movimento = "Diagonais.";
    break;
  case "cavalo":
    movimento = "Em L.";
    break;
  case "dama":
  case "rainha":
    movimento = "Todas as direções.";
    break;
  case "rei":
    movimento = "Todas as direções uma só casa.";

  default:
    movimento = "Não é uma peça!";
    break;
}

console.log(peca + " -> " + movimento);
