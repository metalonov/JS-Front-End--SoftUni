function solve(params) {
    
    let phoneBook = {};

    for (const iterator of params) {
        let temp = iterator.split(' ');
        phoneBook[temp[0]] = temp[1];
        // const [name, phone] = line.split(' ');
        // phonebook[name] = phone;
    }

    for (const [key, value] of Object.entries(phoneBook)) {
        console.log(`${key} -> ${value}`);
    }
    
}

solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);