function problem5(inventory,caryears){
    const oldercars = caryears.filter(year => year < 2000);
    return oldercars;
}
module.exports = problem5;