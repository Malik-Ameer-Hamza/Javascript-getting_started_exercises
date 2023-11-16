let places: string[] = ["Peyto Lake", "Meeru Island", "Niagara Falls", "Marble Caves", "Lake Matheson"];
console.log(places);

let sortPlaces = places.slice().sort() // or directly print console.log(places.slice().sort())
console.log(sortPlaces);
console.log(places);


let sort_reverse_places = places.slice().sort().reverse(); // or directly print console.log(places.slice().sort().reverse())
console.log(sort_reverse_places);
console.log(places);


console.log("Reverse and reverse back");
console.log(places.reverse());
console.log(places.reverse());


console.log("Sort and sort back");
console.log(places.sort());
console.log(places.sort().reverse());




