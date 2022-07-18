let n = 100;
let oddSum = 0;
let evenSum = 0;
let i = 1; // initialization
while (i <= n) {
  // condition
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
  i++; // incrementation
}
console.log(oddSum, evenSum);
