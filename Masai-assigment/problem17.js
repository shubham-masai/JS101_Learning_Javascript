// Problem 4: Print the average of even numbers from 1 to 100 (both included)
let j = 100;
let i = 1;
let sum = 0;
let count = 0;
while (i <= j) {
  if (i % 2 == 0) {
    sum += i;
    count++;
  }
  i++;
}
console.log(sum / count);
