// TODO: calc some primes

onmessage = (event) => {

    console.log("worker.js: received a message!");
    console.log(event);
    console.log(event.data);

}

//
// Worker logic
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

console.log("Starting prime number calculation...");

const limit = 1000000;

const startTime = performance.now();
const primeNumbers = findPrimesUpTo(limit);
const endTime = performance.now();

console.log(`Found ${primeNumbers.length} primes up to ${limit}.`);
console.log(`Calculation took ${ (endTime - startTime).toFixed(2) } milliseconds.`);
console.log("The first 10 prime numbers are:", primeNumbers.slice(0, 10));
console.log("The last 10 prime numbers are:", primeNumbers.slice(-10));
