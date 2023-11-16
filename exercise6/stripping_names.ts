

let regexp: RegExp = /^\t|\t$|\n$/g
let person_name: string = "\tAmeer Hamza\t\n";
console.log(person_name);

let person_name_strip = person_name.replace(regexp, "")
console.log(person_name_strip);

