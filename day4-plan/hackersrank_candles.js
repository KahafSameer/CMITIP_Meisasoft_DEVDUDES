function birthdayCakeCandles(candles) {
    // Step 1: Find the maximum height
    let maxHeight = Math.max(...candles);

    // Step 2: Count how many candles have that height
    let count = candles.filter(c => c === maxHeight).length;

    return count;
}


let candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));