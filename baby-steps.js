let array = process.argv;

let sum = 0;
for (let i = 2; i < Number(array.length); i++) {
  sum += Number(array[i]);
}

console.log(sum);
