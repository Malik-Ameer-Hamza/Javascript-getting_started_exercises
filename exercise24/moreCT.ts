let district: string = "Korangi";
console.log("Is district == 'Korangi'? I predict true");
console.log(district == "Korangi");
console.log("Is district == 'korangi'? I predict false");
console.log(district == "korangi");


let Audotorium: string = "Baharia Audotorium";
console.log("Is Audotorium == 'Baharia Audotorium'? I predict true");
console.log(Audotorium == "Baharia Audotorium")
console.log("Is Audotorium == 'baharia audotorium'? I predict false");
console.log(Audotorium == Audotorium.toLowerCase()); // Tests using the lower case function


let laptop: string = "Surface Pro";
console.log("Is laptop == 'Surface Pro'? I predict true");
console.log(laptop == "Surface Pro");
console.log("Is laptop == 'MACBOOK PRO'? I predict false");
console.log(laptop == laptop.toUpperCase());


let browser: string = "Google Chrome";
console.log("Is browser == 'Google Chrome'? I predict true");
console.log(browser == "Google Chrome");
console.log("Is browser != 'Google Chrome'? I predict false");
console.log(browser != "Google Chrome"); // Tests for equality and inequality with strings


let num1: number = 4;
let num2: number = 2;
let num3: number = 5;

// Numerical tests involving equality and inequality
console.log("Is num1 != num2? I predict true");
console.log(num1 != num2);
console.log("Is num1 == num2? I predict false");
console.log(num1 == num2);

// Numerical tests involving greater than and less than
console.log("Is num1 > num2? I predict true");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict false");
console.log(num1 < num2);

// Numerical tests involving greater than or equal to, and less than or equal to
console.log("Is num1 > num2? I predict true");
console.log(num1 >= num2);
console.log("Is num1 < num2? I predict false");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
console.log("Is num3 > num1 or num2? I predict true");
console.log(num3 == num1 || num2);
console.log("Is num3 == num1 && num2? I predict false");
console.log(num3 == num1 && num2);



// Test whether an item is in a array
var cities = ["karachi", "peshawar", "lahore", "queta", "multan", "sukkur"]
console.log(cities);

// Test whether an item is in a array
console.log(`Is 5 in the array? ${cities.includes(`lahore`)}`); //true

// Test whether an item is not in a array
console.log(`Is 5 not in the array? ${!cities.includes("lahore")}`); //true


