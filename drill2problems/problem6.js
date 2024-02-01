function problem6(inventory)
{
    const bmwaudicars = inventory.filter(car => car.car_make == "BMW"|| car.car_make == "Audi");
    return bmwaudicars;
}
module.exports = problem6;