let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}



function getSummary (book) { 

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)

// console.log(bookSummary.summary)
// console.log(bookSummary.pageCountSummary)

function convertTemp (farenheit) {
    return {
        farenheit: farenheit,
        celcius: (farenheit - 32) * (5/9),
        kelvin: (farenheit * 459.67) * (5/9)
    }
}

let getTemp = convertTemp(345)
// console.log(
//     `Farenheit is ${getTemp.farenheit},
//      Celcius Temperature is ${getTemp.celcius} and 
//      Kelvin Conversion is ${getTemp.kelvin}
//     `
// )

// let myAccount = {
//     name: 'Alvin Chinedu',
//     expenses: 6700,
//     income: 0
// }

// let amount = parseInt(prompt('Enter your recent expense'))

// function addExpense (account, amount) {
//     account.expenses = account.expenses + amount
// }

// addExpense(myAccount, amount)
// console.log(`You spent ${amount} and your total expenses are ${myAccount.expenses}`)


//add income
//reset account 
//get account summary

//mini expense tracker
let userAccount = {
    name: 'Alvin Okafor',
    balance: 0,
    income: 5000,
    expenses: 1500
}



function addExpense (account) {
    let newExpense = parseInt(prompt('Enter your recent expense'))
    account.expenses = account.expenses + newExpense
    console.log(`You spent ${newExpense} and your total expenses are ${userAccount.expenses}`)
}

function resetAccount (account) {
    account.balance = 0
    account.income = 0
    account.expenses = 0
}

function getAccountSummary (account) {
    account.balance = account.income - account.expenses
    console.log(`Account summary for ${account.name} is
                 Account Balance: ${account.balance}
                 Account Income: ${account.income} 
                 Account Expenses: ${account.expenses}   
            `)
}






















// addExpense(userAccount)
// console.log(userAccount)
// resetAccount(userAccount)
// console.log(userAccount)
// getAccountSummary(userAccount)


//OBJECT METHODS
let resturant = {
    name: 'Chicken Republic',
    guestCapacity: 75,
    guestCount: 60,
    checkAvailability: function (partySize) {
        // let partySize = parseInt(prompt('How many are you'))
        let seatsLeft = this.guestCapacity - this.guestCount
        if (partySize <=seatsLeft) {
            console.log(`There are ${seatsLeft} seats left, your party of ${partySize} can come in`)
        } else {
            console.log('There are no seats left, Please try again in a few hours')
        }
    },
    addCustomers: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
// resturant.checkAvailability(10)
// resturant.addCustomers(10)
// resturant.checkAvailability(6)
// resturant.removeParty(5)
// resturant.checkAvailability(6)

//STRING METHODS
// let myName = 'Alvin Okafor'
// let convertCapital = confirm('Do you want to Change your name to uppercase?')

// if (convertCapital) {
//     console.log(myName.toUpperCase())
// } else {
//     console.log('Next time then!')
// }


// let userPassword = parseInt(prompt('Enter your password'))
let userDB = {
    userName: 'fencesitter',
    password: 7368,
    validatePassword: function () {
        if (userPassword === this.password) {
            console.log('Password is correct')
        } else {
            console.log('Password is incorrect')
        }
    }
}
// userDB.validatePassword()

function isValidPassword (password) {
    if (password.length >= 8 && !password.includes('password')) {
        console.log('Strong Password')
    } else {
        console.log('Weak Password')
    }
}

// isValidPassword('password')



//NUMBER METHODS
// let num = 103.938
// console.log(num.toFixed(2))
// console.log(`$ ${num.toFixed(2)}`)
// console.log(Math.floor(num))

// let randomNum = Math.random()
// console.log(randomNum)

// function guessNum (guess) {
//     let min = 1
//     let max = 5

//     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//     console.log(randomNum)

//     if (guess == randomNum) {
//         console.log('You guessed right!')
//     } else {
//         console.log('Wrong Guess! Try again')
//     }

// }

// guessNum(4)

