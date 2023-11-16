let guestList: string[] = ["Rashid", "Fatima", "Mubashir", "Zain"];

console.log(`Hey ${guestList[0]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[1]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[2]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[3]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Sorry, ${guestList[2]} can't make it tonight.`);

guestList.splice(2, 1, "Irfan");


console.log("\nHere is the list of our new guests.\n");


console.log(`Hey ${guestList[0]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[1]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[2]}, I'm inviting you for dinner tonight at my place.`);
console.log(`Hey ${guestList[3]}, I'm inviting you for dinner tonight at my place.`);

// exercise 16 starts here

console.log("\nI have some good news. I just found a bigger dinner table. So, I'm inviting  more guests for dinner.\n");

guestList.unshift("Muneeb");
guestList.splice(3, 0, "Farhan");
// In exercise task was to Use append() to add one new guest to the end of your list. 
// But there is not any specific append() method in javascript.
// we can use the push method to add values to the end an array
guestList.push("Fahad");

console.log(`Hey ${guestList[0]}, I'm hosting a dinner tonight at my place and I want you to be there.`);
console.log(`Hey ${guestList[1]}, I'm hosting a dinner tonight at my place and I want you to be there.`);
console.log(`Hey ${guestList[2]}, I'm hosting a dinner tonight at my place and I want you to be there.`);
console.log(`Hey ${guestList[3]}, I'm hosting a dinner tonight at my place and I want you to be there.`);
console.log(`Hey ${guestList[4]}, I'm hosting a dinner tonight at my place and I want you to be there.`);
console.log(`Hey ${guestList[5]}, I'm hosting a dinner tonight at my place and I want you to be there.`);
console.log(`Hey ${guestList[6]}, I'm hosting a dinner tonight at my place and I want you to be there.`);