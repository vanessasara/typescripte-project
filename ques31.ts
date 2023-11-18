let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of positions) {
    let Ending ;
    if (number === 1) {
        Ending = 'st';
    } else if (number === 2) {
        Ending = 'nd';
    } else if (number === 3) {
        Ending = 'rd';
    } else {
        Ending = 'th';
    }
    console.log(`${number}${Ending}`);
}