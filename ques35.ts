function make_album(artist, title, tracks ) 
 {
    let album =
     {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album('Artist1', 'Album1');
let album2 = make_album('Artist2', 'Album2', 12);
let album3 = make_album('Artist3', 'Album3', 8);

console.log(album1);
console.log(album2);
console.log(album3);
