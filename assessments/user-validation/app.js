alert('Welcome to the database!')

//dummy user object
const userDatabase = {
    'alvin2k99' : {
        firstName: "Alvin",
        lastName: "Okafor",
        email: "alvin2k99@gmail.com",
        password: "07065222",
        accountStatus: "Pending"
    },

    'angelo' : {
        firstName: "Angelo",
        lastName: "Emeka",
        email: "thegodangelo@gmail.com",
        password: "angelo223",
        accountStatus: "Active"
    },

    'retro224' : {
        firstName: "Agba",
        lastName: "Retro",
        email: "retrosearth@gmail.com",
        password: "agba1999",
        accountStatus: "Active"
    },

    'chinedu' : {
        firstName: "Chinedu",
        lastName: "Okafor",
        email: "alvforang@gmail.com",
        password: "2226334",
        accountStatus: "Pending"
    }
}

let welcome = confirm("Do you want to search for a user")

if(welcome == true) {
    getUserDetails()
}

alert('End of session')


function getUserDetails() {
    //repeat usernme if details are incorrect
    let username = prompt("Input your username")
        while(validateUsername(username) == false) {
            username = prompt('Invalid username! Enter the username again')
        }
            if(username == null) {
                return
            }

    //repeat password if details are incorrect
    let password = prompt("Enter your password")
        while(validatePassword(password) == false) {
            password = prompt('Invalid password! Enter the password again')
        }
            if(password == null) {
                return 
            }
    
    //repeat password if details are incorrect
    let passwordConfirm = prompt('Confirm your password')
        while(passwordConfirm !== password) {
            passwordConfirm = prompt('Password dosent match! Input your password again')
        }
            if(passwordConfirm == null) {
                return
            }

    //check if username is present in object database        
    const user = userDatabase[username]
        if(user == undefined) {
            alert('This user is not on the database!')
        }

    alert (`
        User found with the following details:
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Email: ${user.email}
        Password: ${user.password}
        Account Status: ${user.accountStatus}
    `)    
    
}


//validates username
function validateUsername(username) {

    if(username == null) {
        return 
    }

    if(username.length > 10) {
        return false
    } else {
        return true
    }

}

//validates password
function validatePassword(password) {

    if(password == null) {
        return 
    }

    if(password.length < 6) {
        return false
    } else {
        return true
    }
    
}

