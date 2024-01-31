function solve(pplCount, typeOfppl, day) {

    let price;
    if (typeOfppl === "Students") {
        if (day === "Friday") {
            price = 8.45 * pplCount;

        } if (day === "Saturday") {
            price = 9.80 * pplCount;
        } if (day === "Sunday") {
            price = 10.46 * pplCount;
        } if (pplCount >= 30) {
            price = price - price * 0.15;
        }
    } if (typeOfppl === "Business") {
        if (pplCount >= 100) {
            pplCount = pplCount - 10;
        }
        if (day === "Friday") {
            price = 10.90 * pplCount;
        } if (day === "Saturday") {
            price = 15.60 * pplCount;
        } if (day === "Sunday") {
            price = 16 * pplCount;
        }
    } if (typeOfppl === "Regular") {
        if (day === "Friday") {
            price = 15 * pplCount;
        } if (day === "Saturday") {
            price = 20 * pplCount;
        } if (day === "Sunday") {
            price = 22.50 * pplCount;
        } if (pplCount >= 10 && pplCount <= 20) {
            price = price - price * 0.05;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

//solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")