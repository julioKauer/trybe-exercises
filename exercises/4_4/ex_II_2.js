let array = [2, 3, 6, 7, 10, 1];

console.log(maior(array));

function maior(array) {
    let indexMaior = 0;
    for ( index in array) {
        if ( array[indexMaior] < array[index] ) {
            indexMaior = index;
        }
    }
    return indexMaior;
}