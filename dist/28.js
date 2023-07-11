"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strStr(haystack, needle) {
    var ind = 0, match = 0;
    for (var i = 0, j = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) {
            console.log(i, j);
            match++;
            j++;
        }
        else {
            match--;
            j--;
        }
        if (match === needle.length) {
            console.log(i, j, match);
        }
    }
    return -1;
}
console.log(strStr("mississipi", "issip"));
