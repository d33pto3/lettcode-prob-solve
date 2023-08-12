function numJewelsInStones(jewels, stones) {
    var count = 0;
    for (var i = 0; i <= jewels.length - 1; i++) {
        console.log(jewels[i]);
        for (var j = 0; j <= stones.length - 1; j++) {
            if (jewels[i] === stones[j]) {
                count++;
            }
        }
    }
    return count++;
}
console.log(numJewelsInStones("aA", "aAAbbbb"));
