function solve(list){
    const heroList = [];

    for (const row of list) {
        
        let hero = row.split(' / ');
        const heroSheet = {
            Hero: hero[0],
            level: Number(hero[1]),
            items: hero[2],
        }
        heroList.push(heroSheet);
    }

    heroList.sort((a, b) => a.level - b.level);
    heroList.forEach(hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);