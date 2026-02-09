const findMaxConsecutivesOnes = (nums) => {
    let maxOnes = 0; // Maior sequencia de 1s registrada
    let countOnes = 0; // Sequencia de 1s atual

    for (let value of nums) {
        if (value == 1)
            countOnes++;

        if (value != 1 && countOnes > 0) {
            if (countOnes > maxOnes)
                maxOnes = countOnes;
            countOnes = 0;
        }
    }

    if (countOnes > maxOnes)
        maxOnes = countOnes;

    return maxOnes;
};

console.log(findMaxConsecutivesOnes([1,1,0,1,1,1])) // 3
console.log(findMaxConsecutivesOnes([1,1,0,1,0,1])) // 2
console.log(findMaxConsecutivesOnes([1,1,0,1,0,1,1,1,1,1,0,1])) // 