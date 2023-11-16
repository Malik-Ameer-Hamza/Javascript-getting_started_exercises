var magicians_names = ["David Copperfield", "Criss Angel", "Harry Houdini", "Penn & Teller", "Dynamo"];
function make_great(magicians_names) {
    for (var _i = 0, magicians_names_1 = magicians_names; _i < magicians_names_1.length; _i++) {
        var names = magicians_names_1[_i];
        console.log(" The great ".concat(names));
    }
}
make_great(magicians_names);
