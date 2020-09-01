let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

console.log(maior(array));

function maior(array) {
    let indexMaior = 0;
    for ( index in array) {
        if ( array[indexMaior].length < array[index].length ) {
            indexMaior = index;
        }
    }
    return array[indexMaior];
}