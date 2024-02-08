const os = require("os");
const num = 1024;
const convert = (n) => `${(n / (num * num * num)).toFixed(2)} GB`;

console.log("Free memory:", convert(os.freemem()));
console.log("Total Memory:", convert(os.totalmem()));
console.log("Version:", os.version());
console.log("processor:", os.cpus());
