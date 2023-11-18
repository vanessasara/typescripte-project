let GuestList = ['faiza', 'shamoun', 'john', 'larrisa', 'alan walker', 'evangeline' ];

console.log('Aplogize new dinner table did not arrive in time and we are only able to inite two people. ');

while (GuestList.length > 2) {
    let removedGuest = GuestList.pop();
    if (removedGuest) {
        console.log(`Pardon, ${removedGuest}, we can't invite you to the dinner.`);
    }
}
for (let remainingGuest of GuestList)
 {
    console.log(`Hello ${remainingGuest}, you are still invited to dinner.`);
}