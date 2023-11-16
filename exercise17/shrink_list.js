var guestList = ["Rashid", "Fatima", "Mubashir", "Zain"];
console.log("Hey ".concat(guestList[0], ", I'm inviting you for dinner tonight at my place."));
console.log("Hey ".concat(guestList[1], ", I'm inviting you for dinner tonight at my place."));
console.log("Hey ".concat(guestList[2], ", I'm inviting you for dinner tonight at my place."));
console.log("Hey ".concat(guestList[3], ", I'm inviting you for dinner tonight at my place."));
console.log("Sorry, ".concat(guestList[2], " can't make it tonight."));
guestList.splice(2, 1, "Irfan");
console.log("\nHere is the list of our new guests.\n");
console.log("Hey ".concat(guestList[0], ", I'm inviting you for dinner tonight at my place."));
console.log("Hey ".concat(guestList[1], ", I'm inviting you for dinner tonight at my place."));
console.log("Hey ".concat(guestList[2], ", I'm inviting you for dinner tonight at my place."));
console.log("Hey ".concat(guestList[3], ", I'm inviting you for dinner tonight at my place."));
console.log("\nI have some good news. I just found a bigger dinner table. So, I'm inviting  more guests for dinner.\n");
guestList.unshift("Muneeb");
guestList.splice(3, 0, "Farhan");
// In exercise task was to Use append() to add one new guest to the end of your list. 
// But there is not any specific append() method in javascript.
// we can use the push method to add values to the end an array
guestList.push("Fahad");
console.log("Hey ".concat(guestList[0], ", I'm hosting a dinner tonight at my place and I want you to be there."));
console.log("Hey ".concat(guestList[1], ", I'm hosting a dinner tonight at my place and I want you to be there."));
console.log("Hey ".concat(guestList[2], ", I'm hosting a dinner tonight at my place and I want you to be there."));
console.log("Hey ".concat(guestList[3], ", I'm hosting a dinner tonight at my place and I want you to be there."));
console.log("Hey ".concat(guestList[4], ", I'm hosting a dinner tonight at my place and I want you to be there."));
console.log("Hey ".concat(guestList[5], ", I'm hosting a dinner tonight at my place and I want you to be there."));
console.log("Hey ".concat(guestList[6], ", I'm hosting a dinner tonight at my place and I want you to be there."));
// exercise 17 starts here
console.log("\nNew table hasn't arrived and I don't have enough space for everyone.So, I can invite only two people for dinner.\n");
var removed_guest1 = guestList.pop();
console.log("Sorry! ".concat(removed_guest1, ", I can't invite you to dinner."));
var removed_guest2 = guestList.pop();
console.log("Sorry! ".concat(removed_guest2, ", I can't invite you to dinner."));
var removed_guest3 = guestList.pop();
console.log("Sorry! ".concat(removed_guest3, ", I can't invite you to dinner."));
var removed_guest4 = guestList.pop();
console.log("Sorry! ".concat(removed_guest4, ", I can't invite you to dinner."));
var removed_guest5 = guestList.pop();
console.log("Sorry! ".concat(removed_guest5, ", I can't invite you to dinner."));
console.log(guestList);
console.log("Hey ".concat(guestList[0], ", please reach at time. Becaue you're still invited for the dinner."));
console.log("Hey ".concat(guestList[1], ", please reach at time. Becaue you're still invited for the dinner."));
guestList.splice(0, 2);
console.log(guestList);
