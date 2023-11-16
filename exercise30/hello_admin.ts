let userName: string[] = ["hamza", "farhan", "admin", "shoaib", "mudassir"];

for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "admin") {
        console.log(`Hello ${userName[i]}, would you like to see a status report?`);

    } else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);

    }

}