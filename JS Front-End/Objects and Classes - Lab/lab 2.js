function solve(object) {


    for (const [key, value] of Object.entries(object)) {
        console.log(`${key} -> ${value}`);
    }

}

solve({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    }
    );