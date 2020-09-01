let array = [2, 4, 6, 7, 10, 0, -3];

console.log(menor(array));

function menor(array) {
    let indexMenor = 0;
    for ( index in array) {
        if ( array[indexMenor] > array[index] ) {
            indexMenor = index;
        }
    }
    return indexMenor;
}