var magicians = ["David Copperfield", "Criss Angel", "Harry Houdini", "Penn & Teller", "Dynamo"];
function show_magicians(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var names = array_1[_i];
        console.log(names);
    }
}
function make_great(array) {
    var new_array = array.slice();
    for (var i = 0; i < new_array.length; i++) {
        new_array[i] = "The great ".concat(new_array[i]);
    }
    return new_array;
}
var great_magicians = make_great(magicians);
show_magicians(magicians);
show_magicians(great_magicians);
