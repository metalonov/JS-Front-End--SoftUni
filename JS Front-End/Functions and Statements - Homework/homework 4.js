// 4. Odd and Even Sum
// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
function solve(num) {

    let arr = num
    .toString()
    .split('');
    let oddsum = 0;
    let evensum = 0;

    while (arr.length > 0) {
        let lastDigit = Number(
            arr
        .pop()
        );
        if (lastDigit % 2 == 0) {
            evensum += lastDigit;
        }
        else
            oddsum += lastDigit;
    }
    console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`);
}
// solve(1000435);
solve(3495892137259234);