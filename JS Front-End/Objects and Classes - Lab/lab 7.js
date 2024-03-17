function solve(entries) {

    const adressbook = {};

    for (const iterator of entries) {
        const [name, adress] = iterator.split(':');
        adressbook[name] = adress;
    }

    Object
    .entries(adressbook)
    .sort(([a], [b]) => a[0].localeCompare(b[0]))
    .forEach(([name, address]) => console.log(`${name} -> ${address}`))

}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);