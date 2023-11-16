function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("The size of the shirt is ".concat(size, " and the message is ").concat(message, ". "));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Python");
