"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberOfSteps(num) {
    var steps = 0;
    for (; num > 0;) {
        if (num % 2 === 0) {
            num /= 2;
        }
        else {
            num -= 1;
        }
        steps++;
    }
    return steps;
}
