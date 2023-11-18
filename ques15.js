var GuestList = ['faiza', 'shamoun', 'john', 'larrisa', 'alan walker', 'evangeline'];
for (var _i = 0, Guestlist_1 = Guestlist; _i < Guestlist_1.length; _i++) {
    var guest = Guestlist_1[_i];
    console.log('Uh-oh! The new dinner table won\'t arrive in time, and we can only invite two people.');
}
while (GuestList.length > 2) {
    var removedGuest = GuestList.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
for (var _a = 0, GuestList_1 = GuestList; _a < GuestList_1.length; _a++) {
    var remainingGuest = GuestList_1[_a];
    console.log("Dear ".concat(remainingGuest, ", you are still invited to dinner."));
}
