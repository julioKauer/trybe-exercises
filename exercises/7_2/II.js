const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKey(object, key, value) {
  object[key] = value;
}

function listKeys(object) {
  return Object.keys(object);
}

function objectSize(object) {
  return Object.keys(object).length;
}

const objectValues = (object) => Object.values(object);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

function studentsTotal(object) {
  let total = 0;
  const keys = Object.keys(object);
  keys.forEach(key => {
    total += object[key].numeroEstudantes;
  });
  return total;
}

function getValueByNumber(object, number) {
  return Object.values(object)[number];
}

function verifyPair(object, key, value) {
  if (object[key] === value) {
    return true;
  } else {
    return false;
  }
}

