self.onmessage = (event) => {

    console.log("primes.js: received a message!");
    console.log(`Starting prime calculation up to: ${event.data}`);

    primes = findPrimesUpTo(parseInt(event.data, 10));

    self.postMessage(primes);

}

//
// Worker logic (courtesy of Gemini)
//

function findPrimesUpTo(n) {
    if (n < 2 || !Number.isInteger(n)) {
        console.error("Input must be an integer greater than 1.");
        return [];
    }

    const isPrime = new Array(n + 1).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    const primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}