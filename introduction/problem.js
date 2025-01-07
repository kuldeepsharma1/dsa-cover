// Users databse
const users = ["john", "rahul", "kuldeep", "raj", "andrew", "david"]

// To Do Create a Alogorithm to find perticular user in short create a function in js to find one user

// Solution

// Found : rahul

const findUser = (users, name) => {
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i] === name) {
            console.log(`Found : ${name}`);
            found = true;
            break;
           
        }
    }
    if (!found) {
        console.log(`Not Found: ${name}`);
    }
    

}
findUser(users, "rahul")
