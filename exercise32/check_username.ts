let current_users: string[] = ["Ali", "Hamza", "Fatima", "Bilal", "Aisha"]

let new_users: string[] = ["Sara", "Bilal", "Hina", "Usman", "HAMZA"]

// with for of loop

for(let new_user of new_users){
    let is_used = true;
    let new_user_lowercase = new_user.toLowerCase();    

    for(let current_user of current_users){
        let current_user_lowercase = current_user.toLowerCase();
        
        if(new_user_lowercase===current_user_lowercase){
            is_used = false;
            
        }
    } 

    if(is_used){
        console.log(`${new_user} is available.`);
        
    }else{
        console.log(`${new_user} has already been used. Please enter a new user name.`);
        
    }
}


// // or with for loop

// for (let i = 0; i<new_users.length; i++){
//     let isused = true;
//     let newUserLowerCase = new_users[i].toLowerCase();

//     for(let x = 0; x<current_users.length; x++){
//         let currentUserLowerCase = current_users[x].toLowerCase();
        
//         if(newUserLowerCase==currentUserLowerCase){
//             isused = false;
//         }
//     }

//     if(isused){
//         console.log(`${new_users[i]} is available.`);

//     }else{
//         console.log(`${new_users[i]} has already been used. Please enter a new user name.`);

//     }
// }