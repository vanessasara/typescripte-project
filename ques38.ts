let magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) 
 {
    for (let magician of magicians)
     {
        console.log(magician);
    }
}
show_magicians(magicians);        function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let greatMagicians = make_great(magicians.slice()); 
show_magicians(greatMagicians);

let unchanged_Magicians = make_great(magicians.slice()); 
show_magicians(magicians); 