function make_shirt(size: string = "large", message: string = "I love typescript") {
    console.log(`The size of the shirt is ${size} and the message is ${message}.`);

}

make_shirt();
make_shirt("medium");
make_shirt("small", "I love Python")