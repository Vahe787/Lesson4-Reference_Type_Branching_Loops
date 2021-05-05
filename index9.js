let a = 19;
isPrime = "yes";
for (let i = 2; i < a; i++) {
  if (a % i === 0) {
    isPrime = "no";
  }
}
console.log(isPrime);
