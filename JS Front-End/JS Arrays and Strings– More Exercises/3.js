function pyramid(base, increment) {
    let gold = 0;
    let lapisLazuli = 0;
    let marble = 0;
    let stone = 0;
    let levels = 0;
    
    while (base * base >= 4) {
        levels++;
        if (levels % 5 === 0) {
            let currentLayerLapis = ((base - 1) * 4) - 4;
            lapisLazuli += Math.ceil(currentLayerLapis * increment);
            if (base * base != currentLayerLapis) {
                stone += ((base * base) - currentLayerLapis) * increment;
            }
        }
        else {
            let currentLayerMarble = ((base - 1) * 4) - 4;
            marble += Math.ceil(currentLayerMarble * increment);
            if (base * base != currentLayerMarble) {
                stone += ((base * base) - currentLayerMarble) * increment;
            }
        }
        if (base - increment * 2 <= 0) {
            gold += base * base;
            break;
        }
        base -= increment * 2;
    }


    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${levels}`);
}
pyramid(11, 1);
// pyramid(11, 0.75);
// pyramid(12, 1);
// pyramid(23, 0.5);