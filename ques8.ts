// Program Name: Dinner Invitation 
// My Name: [Vanessa Sarah]
// Date: [11.11.2023]

// Guest List
let dinnerGuests = ['Sonia', 'Sehba', 'Rose'];

// Inviting more 
let additionalGuests = ['Aster', 'Eida', 'Boruto'];

// Printed the invitation message for each guest list
for (let guest of dinnerGuests.concat(additionalGuests)) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// One guest can't make it
let guestCantMakeIt = dinnerGuests[1];
console.log(`Unfortunately, ${guestCantMakeIt} can't make it.`);