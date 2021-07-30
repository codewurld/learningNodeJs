const { people, ages } = require('./people');

console.log(people, ages);
// console.log(people);

const os = require("os");
// os is used to find info about operating system 

console.log(os.platform(), os.homedir());