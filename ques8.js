// Program Name: Dinner Invitation 
// My Name: [Vanessa Sarah]
// Date: [11.11.2023]
// Guest List
var dinnerGuests = ['Sonia', 'Sehba', 'Rose'];
// Inviting more 
var additionalGuests = ['Aster', 'Eida', 'Boruto'];
// Printed the invitation message for each guest list
for (var _i = 0, _a = dinnerGuests.concat(additionalGuests); _i < _a.length; _i++) {
    var guest = _a[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// One guest can't make it
var guestCantMakeIt = dinnerGuests[1];
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it."));
