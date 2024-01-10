function solve (integer) {

    let monthNames = [ "null", "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

    if (integer < 1 || integer > 12) {
        console.log("Error!")
    }
    else {
        console.log(monthNames[integer])
    }
}
//solve(13)