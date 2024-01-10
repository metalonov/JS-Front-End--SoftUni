function solve(typeOfDay, age) {

    let result = "Error!";
    switch (typeOfDay) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                result = '12$';
            } else if (18 < age && age <= 64) {
                result = '18$';
            } else if (64 < age && age <= 122) {
                result = '12$';
            }
            break;
        case 'Weekend':
            if (0 <= age && age <= 18) {
                result = '15$';
            } else if (18 < age && age <= 64) {
                result = '20$';
            } else if (64 < age && age <= 122) {
                result = '15$';
            }
            break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                result = '5$';
            } else if (18 < age && age <= 64) {
                result = '12$';
            } else if (64 < age && age <= 122) {
                result = '10$';
            }
            break;
    }
    console.log(result)
}
//solve('Holiday', 15);