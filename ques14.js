var GuestsList = ['faiza', 'shamoun', 'john'];
for (var _i = 0, GuestsList_1 = GuestsList; _i < GuestsList_1.length; _i++) {
    var guest = GuestsList_1[_i];
    console.log("Hello ".concat(guest, " you are very welcome to the dinner i arrange."));
}
console.log('Great news! I found a better and bigger dinner table.');
GuestsList.unshift('larrisa');
GuestsList.splice(2, 0, 'alan walker');
GuestsList.push('evangeline');
for (var _a = 0, GuestsList_2 = GuestsList; _a < GuestsList_2.length; _a++) {
    var guest = GuestsList_2[_a];
    console.log("Hello ".concat(guest, ", you are invited to the expanded dinner."));
}
