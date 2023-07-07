"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberOfSteps(num) {
    var steps = 0;
    for (; num > 0;) {
        if ((num & 1) === 0) {
            num >>= 1;
        }
        else {
            num -= 1;
        }
        steps++;
    }
    return steps;
}
console.log(numberOfSteps(14));
// time complexity: O(logn)
// space complexity: O(1)
