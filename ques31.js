var positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var number = positions_1[_i];
    var Ending = void 0;
    if (number === 1) {
        Ending = 'st';
    }
    else if (number === 2) {
        Ending = 'nd';
    }
    else if (number === 3) {
        Ending = 'rd';
    }
    else {
        Ending = 'th';
    }
    console.log("".concat(number).concat(Ending));
}
