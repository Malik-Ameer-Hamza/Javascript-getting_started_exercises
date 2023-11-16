function make_album(artist, title, tracks) {
    var album = {};
    album["artist"] = artist;
    album["title"] = title;
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
var dictionary1 = make_album("Rahat Fateh", "Back 2 Love");
var dictionary2 = make_album("Fuzön", "Saagar");
var dictionary3 = make_album("Hadiqa Kiani", "Raasta");
var dictionary4 = make_album("Taylor Swift", "Red", 16);
console.log(dictionary1);
console.log(dictionary2);
console.log(dictionary3);
console.log(dictionary4);
