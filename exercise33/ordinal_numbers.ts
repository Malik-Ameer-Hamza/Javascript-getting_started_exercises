let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == 1) {
        console.log(`${ordinalNumbers[i]}st`);

    } else if (ordinalNumbers[i] == 2) {
        console.log(`${ordinalNumbers[i]}nd`);

    } else if (ordinalNumbers[i] == 3) {
        console.log(`${ordinalNumbers[i]}rd`);

    } else {
        console.log(`${ordinalNumbers[i]}th`);

    }
}