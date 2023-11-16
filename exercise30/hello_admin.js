var userName = ["hamza", "farhan", "admin", "shoaib", "mudassir"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] == "admin") {
        console.log("Hello ".concat(userName[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
