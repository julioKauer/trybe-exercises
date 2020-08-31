let primes = [];
let n = 97;

for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 0 ; j < primes.length; j++) {
        if (i % primes[j] == 0) {
            isPrime = false;
            break;
        }
        
    }
    if (isPrime) {
       primes.push(i);
    }
}

if (primes[ primes.length - 1 ] == n) {
    console.log(`${n} é primo!`)
} else {
    console.log(`${n} não é primo!`)
}