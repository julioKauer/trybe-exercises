var a = 12;
var b = 2;
var c = 6;
var isTriangle = a + b + c == 180; 
console.log( isTriangle );
if ( ! isTriangle ) {
    console.log("Erro! Os ângulos de um triângulo devem somar 180° !")
}