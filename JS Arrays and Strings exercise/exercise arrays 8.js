function func(text){
    let regex = /[A-Z][a-z]*/g;
    let splittedText = text.match(regex).join(', ');

    console.log(splittedText);
}
func('SplitMeIfYouCanHaHaYouCantOrYouCan')