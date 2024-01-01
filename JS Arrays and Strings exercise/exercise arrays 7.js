function func(match, text) {

    let lowercase = text.toLowerCase().split(' ');

    if (lowercase.includes(match)) {
        console.log(match);
    } else {
        console.log(`${match} not found!`);
    }


}
func('python',
'JavaScript is the best programming language');