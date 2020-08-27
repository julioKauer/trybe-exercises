let valorCusto = 10;
let quantidade = 1000;
let impostoSobreOCusto = 0.2;
let valorVenda = 30;

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = ( valorVenda - valorCustoTotal ) * quantidade;

if ( valorVenda > 0 && valorCusto > 0 ) {
    console.log("O lucro total foi de " + lucro );
} else {
    console.log("Erro na entrada de valores")
}
