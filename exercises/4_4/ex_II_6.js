let n = 5;

console.log(sum(n));

function sum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;    
    }

    return sum;
}