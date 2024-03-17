function solve(input){

    const employees = [];

    for (const name of input) {
        const employee = {name: name, id: name.length};
        employees[name] = employee;
    }

    for (const [key, value] of Object.entries(employees)) {
        console.log(`Name: ${key} -- Personal Number: ${value.id}`);
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);