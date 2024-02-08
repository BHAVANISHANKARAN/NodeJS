console.log("Hello");
// console.log(process.argv);
const dbl = (n) => n * 2;

const [, , num] = process.argv;
console.log(dbl(num));

console.log(dbl(process.argv[2]));

// console.log(dbl(5));

// console.log(document) // this is wrong

// console.log(window) // window is not defined

// console.log(global);
