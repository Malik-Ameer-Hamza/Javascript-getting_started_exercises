
function make_album(artist: string, title: string, tracks?: number): object {
    let album = {};
    album["artist"] = artist;
    album["title"] = title;
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}

let dictionary1 = make_album("Rahat Fateh", "Back 2 Love");
let dictionary2 = make_album("Fuzön", "Saagar");
let dictionary3 = make_album("Hadiqa Kiani", "Raasta");
let dictionary4 = make_album("Taylor Swift", "Red", 16)

console.log(dictionary1);
console.log(dictionary2);
console.log(dictionary3);
console.log(dictionary4);

