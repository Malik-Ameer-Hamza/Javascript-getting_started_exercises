let person_name: string = "Ameer hamza";
console.log(`Person name in lower case: ${person_name.toLowerCase()}`);
console.log(`Person name in upper case: ${person_name.toUpperCase()}`);

// there is no built in method or function in javascript or typescript to 
// title case the string or person_name in our case. So, I'm creating a 
// function for converting person_name into title case.

function titleCase(name: string): string {
    let nameWords = name.toLowerCase().split(" ");

    for (let i = 0; i < nameWords.length; i++) {
        nameWords[i] = nameWords[i].charAt(0).toUpperCase() + nameWords[i].slice(1);

    }
    return nameWords.join(" ");
}

let person_name_titleCase = titleCase(person_name);
console.log(`Person name in title cases: ${person_name_titleCase}`)

