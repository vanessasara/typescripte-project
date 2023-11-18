let GuestList = ['Faiza', 'Shamoun','John'];
for (let guest of GuestList ) 
{
    console.log(` Hello, ${guest} you are very welcome to the dinner i arrange it for you. `);
}
if (GuestList[1]) 
{
    console.log(`${GuestList[1]} can't make it.`);
    GuestList[1] = 'Evangeline';
    for (let guest of GuestList) 
    {
        console.log(`Hello ${guest}, you are still invited to dinner.`);
    }
}