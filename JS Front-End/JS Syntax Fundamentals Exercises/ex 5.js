function solve(number) {

    for (let times = 1; times < 11; times++ )
    {
        let product = times * number;
        console.log(`${number} X ${times} = ${product}`)
    }

    
}
solve();