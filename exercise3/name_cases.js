var person_name = "Ameer hamza";
console.log("Person name in lower case: ".concat(person_name.toLowerCase()));
console.log("Person name in upper case: ".concat(person_name.toUpperCase()));
// there is no built in method or function in javascript or typescript to 
// title case the string or person_name in our case. So, I'm creating a 
// function for converting person_name into title case.
function titleCase(name) {
    var nameWords = name.toLowerCase().split(" ");
    for (var i = 0; i < nameWords.length; i++) {
        nameWords[i] = nameWords[i].charAt(0).toUpperCase() + nameWords[i].slice(1);
        console.log(nameWords[i].slice(2));
    }
    return nameWords.join(" ");
}
var person_name_titleCase = titleCase(person_name);
console.log("Person name in title cases: ".concat(person_name_titleCase));
