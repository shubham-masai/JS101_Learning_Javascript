// Problem 1 : Given a string count the number of words in that string

let a = "Hello world";
let space = " ";
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] == space) {
    count++;
  }
}
console.log("total word is", count + 1);