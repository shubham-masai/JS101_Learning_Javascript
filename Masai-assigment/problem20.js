// Problem 3 : Given an array of numbers find the average of all the even numbers


let a = [1, 2, 3, 4, 5];
sum = 0;
count = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    sum += a[i];
    count++;
  }
}
console.log(sum / count);