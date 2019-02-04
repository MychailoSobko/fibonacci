const a = parseInt(prompt('Enter your index'));

const fibNumbers = [1, 1];

const ourNumber = checkNumber(a);
alert(ourNumber);

function checkNumber() {
    if (a === 1) {
        return 'Your number is ' + 1;
    }
    if (a === 2) {
        return 'Your number is ' + 1;
    }
    if (a < 1) {
        return 'This is not a correct index';
    }
    let i = 3;
    while (i <= a) {
        fibNumbers.push(fibNumbers[i - 3] + fibNumbers[i - 2]);
        i++;
    }
    return 'Your number is ' + fibNumbers[a - 1];
}
