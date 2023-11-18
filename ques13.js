var DinnerGuest = ['Faiza', 'Shamoun', 'John'];
for (var _i = 0, DinnerGuest_1 = DinnerGuest; _i < DinnerGuest_1.length; _i++) {
    var guest = DinnerGuest_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
// Changing List of guests
console.log("".concat(DinnerGuest[1], " can't make it."));
DinnerGuest[1] = 'Evangeline rose';
console.log(" dear, ".concat(DinnerGuest[1], " you are invited to the dinner"));
