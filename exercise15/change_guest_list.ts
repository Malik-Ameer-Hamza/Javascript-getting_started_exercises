let guestList: string[] = ["Rashid", "Fatima", "Mubashir", "Zain"];

console.log(`Hey ${guestList[0]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[1]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[2]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[3]}, I'm inviting you for dinner tonight at my place.`);

// exercise 15 start here
console.log(`Sorry, ${guestList[2]} can't make it tonight.`);

guestList.splice(2, 1, "Irfan");


console.log("\nHere is the list of our new guests.\n");


console.log(`Hey ${guestList[0]}, I'm inviting you for dinner tonight at my place.`);

console.log(`Hey ${guestList[1]}, I'm inviting you for dinner tonight at my place.`);

console.log(`Hey ${guestList[2]}, I'm inviting you for dinner tonight at my place.`);

console.log(`Hey ${guestList[3]}, I'm inviting you for dinner tonight at my place.`);

