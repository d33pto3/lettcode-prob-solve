function numberOfSteps(num) {
    var steps = 0;
    for (; num > 0;) {
        if (num % 2 === 0) {
            steps++;
            num /= 2;
        }
        else {
            steps++;
            num -= 1;
        }
    }
    return steps;
}
console.log(numberOfSteps(14));
