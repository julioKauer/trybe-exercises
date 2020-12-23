let skills = ['foco', 'calma', 'paciência', 'inteligência', 'determinação'];

let replace = (param) => {
  let string = 'Tryber x aqui!';
  return string.replace('x',`${param}`);
}

let skillsTextGen = (string) => {
  let sortedSkills = skills.sort();
  let newString = string;
  newString = `${newString}:
  - ${sortedSkills[0]}`
  for (let index = 1; index < sortedSkills.length - 1; index++) {
    const element = sortedSkills[index];
    newString = `${newString};
  - ${element}`;
  }
    newString = `${newString};
  - ${sortedSkills[sortedSkills.length-1]}
 #goTrybe`;
 return newString;
}

console.log(skillsTextGen(replace('Júlio')))