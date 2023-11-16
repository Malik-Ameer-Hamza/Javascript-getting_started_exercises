let magicians: string[] = ["David Copperfield", "Criss Angel", "Harry Houdini", "Penn & Teller", "Dynamo"];

function show_magicians(array: string[]) {
    for (let names of array) {
        console.log(names);

    }
}

function make_great(array: string[]): string[] {
    let new_array = array.slice();
    for (let i = 0; i < new_array.length; i++) {
        new_array[i] = `The great ${new_array[i]}`

    }

    return new_array;
}

let great_magicians = make_great(magicians);

show_magicians(magicians);

show_magicians(great_magicians);