let user = [];

for (let i = 0; i < user.length; i++) {
    if (user[i] == "admin") {
        console.log(`Hello ${user[i]}, would you like to see a status report?`);

    } else {
        console.log(`Hello ${user[i]}, thank you for logging in again.`);

    }

}

// exercise 31 task "if the list is empty print we need to find some users"

if (user.length == 0) { 
    console.log("We need to find some users!");
}