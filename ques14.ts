let GuestsList  = ['faiza', 'shamoun', 'john'];
for (let guest of GuestsList)
 {
  console.log(`Hello ${guest} you are very welcome to the dinner i arrange.`)
}

console.log('Great news! I found a better and bigger dinner table.');
GuestsList.unshift('larrisa');
GuestsList.splice(2, 0, 'alan walker');
GuestsList.push('evangeline');
for (let guest of GuestsList)
  {
    console.log(`Hello ${guest}, you are invited to the expanded dinner.`);
}