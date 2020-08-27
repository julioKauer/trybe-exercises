const aliquotaInss1 = .08;
const aliquotaInss2 = .09;
const aliquotaInss3 = .11;
const aliquotaInssMax = 570.88;

const faixaInss1 = 1556.95;
const faixaInss2 = 2594.93;
const faixaInss3 = 5189.83;

const aliquotaIR1 = 0.075;
const aliquotaIR2 = 0.15;
const aliquotaIR3 = 0.225;
const aliquotaIR4 = 0.275;

const parcela1 = 142.80;
const parcela2 = 354.80;
const parcela3 = 636.13;
const parcela4 = 869.36;

const faixaIr0 = 1903.99;
const faixaIr1 = 2826.66;
const faixaIr2 = 3751.06;
const faixaIr3 = 4664.68;

const aliquotaTrybe = 0.17;

let salarioBruto = 3500;
let descontoInss = 0;
let descontoIr = 0;
let descontoTrybe = 0;

if ( salarioBruto >= 3500 ) {
    descontoTrybe = salarioBruto * aliquotaTrybe;
}

if ( salarioBruto < faixaInss1 ) {
    descontoInss = salarioBruto * aliquotaInss1;
} else if ( salarioBruto < faixaInss2 ) {
    descontoInss = salarioBruto * aliquotaInss2;
} else if ( salarioBruto < faixaInss3 ) {
    descontoInss = salarioBruto * aliquotaInss3;
} else {
    descontoInss = aliquotaInssMax;
}

let salarioBase = salarioBruto - descontoInss;

if ( salarioBase < faixaIr0 ) {
    descontoIr = 0;
} else if ( salarioBase < faixaIr1 ){
    descontoIr = salarioBase * aliquotaIR1 - parcela1;
} else if ( salarioBase < faixaIr2 ){
    descontoIr = salarioBase * aliquotaIR2 - parcela2;
} else if ( salarioBase < faixaIr3 ){
    descontoIr = salarioBase * aliquotaIR3 - parcela3;
} else {
    descontoIr = salarioBase * aliquotaIR4 - parcela4;
}

let salarioLiquido = salarioBase - descontoIr - descontoTrybe;

console.log(salarioLiquido);