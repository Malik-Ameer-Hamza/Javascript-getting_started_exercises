var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
for (var i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == 1) {
        console.log("".concat(ordinalNumbers[i], "st"));
    }
    else if (ordinalNumbers[i] == 2) {
        console.log("".concat(ordinalNumbers[i], "nd"));
    }
    else if (ordinalNumbers[i] == 3) {
        console.log("".concat(ordinalNumbers[i], "rd"));
    }
    else {
        console.log("".concat(ordinalNumbers[i], "th"));
    }
}
