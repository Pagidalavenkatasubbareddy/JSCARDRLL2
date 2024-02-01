const inventory = require("../drill2info/drill2carinventoryinfo");
const problem4 = require("../drill2problems/problem4");
const problem5 = require("../drill2problems/problem5");

const caryears = problem4(inventory);
const oldercars = problem5(inventory,caryears);

const oldcarlength = oldercars.length;
console.log(oldercars);
console.log(oldcarlength);