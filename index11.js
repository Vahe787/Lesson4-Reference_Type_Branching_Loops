let p = 1;
let p1 = 0;
let n = 2345;

while (n > 0) {
  p = p * (n % 10);
  p1 = p1 + (n % 10);
  n = Math.floor(n / 10);
}
if (p % p1 === 0) {
  console.log("Quotient is " + p / p1);
} else {
  console.log(p % p1);
}
