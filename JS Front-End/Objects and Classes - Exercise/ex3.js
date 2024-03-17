function solve(stock, newProducts){

    const all = stock.concat(newProducts);
    const store = {};

    for (let i = 0; i < all.length; i += 2) {
        const item = all[i];
        const amount = Number(all[i+1]);
        if (store[item]){
            store[item] += amount;
        } else {
            store[item] = amount;
        }
    }

    for (const item in store) {
        console.log(`${item} -> ${store[item]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);