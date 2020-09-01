let info = [
  {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  },
  {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  }
];

for (key in info[0]){
  if (key == "recorrente" && info[0][key] == "Sim" && info[1][key] == "Sim") {
    console.log("Ambos recorrentes");
  } else if (key == "recorrente" && info[0][key] == "Não" && info[1][key] == "Não") {
    console.log("Nenhum recorrente");
  } else {
    console.log(`${info[0][key]} e ${info[1][key]}`)
  }
}