let magicians_names: string[] = ["David Copperfield", "Criss Angel", "Harry Houdini", "Penn & Teller", "Dynamo"];

function make_great(magicians_names: string[]) {
    for (let names of magicians_names) {
        console.log(` The great ${names}`);


    }
}

make_great(magicians_names);