var regexp = /^\t|\t$|\n$/g;
var person_name = "\tAmeer Hamza\t\n";
console.log(person_name);
var person_name_strip = person_name.replace(regexp, "");
console.log(person_name_strip);
