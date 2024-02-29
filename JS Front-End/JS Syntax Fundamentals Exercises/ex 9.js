function solve(fruit, KG, ppkg) {

    const weight = KG/1000;
    const money = weight * ppkg;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);