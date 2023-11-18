var magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var greatMagicians = make_great(magicians.slice());
show_magicians(greatMagicians);
var unchanged_Magicians = make_great(magicians.slice());
show_magicians(magicians);
