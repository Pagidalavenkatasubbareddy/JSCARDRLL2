const inventory = require("../drill2info/drill2carinventoryinfo");
const problem6 = require("../drill2problems/problem6");

const bmwaudiresult = problem6(inventory);
console.log(JSON.stringify(bmwaudiresult));