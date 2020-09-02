let array = [2, 3, 2, 5, 8, 2, 3];

console.log(repetitions(array))

function repetitions(array) {
    let counter = {};

    for (const index in array) {
    if ( counter.hasOwnProperty(`${array[index]}`)) {
        counter[`${array[index]}`] += 1;
    } else {
        counter[`${array[index]}`] = 1;
    }
    }

    let maior=0;
    let maiorKey;
    for (const key in counter) {
        if (counter[key] > maior) {
            maiorKey = key;
            maior = counter[key];
        }
    }
    
    return (parseInt(maiorKey));
}