const myAccount = {
    name: 'Alvin Okafor',
    expenses: [
        {
            description: 'Bought coffee',
            amount: 100
        },

        {
            description: 'Paid for car toll',
            amount: 150
        },

        {
            description: 'Got lunch',
            amount: 45
        },
    ],

    income: [
        {
            description: 'Recrowdly Ist Installment',
            amount: 300
        },

        {
            description: 'Salary',
            amount: 1000
        },

        {
            description: 'Side gig',
            amount: 200
        },
    ],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function (description, amount) {
        this.income.push ({
            description: description,
            amount: amount
        })
    },

    filterExpenses: function (query) {
        const filteredExpenses = this.expenses.filter(function (expense) {
            return expense.amount >= query
        })

        return filteredExpenses
    },

    sortExpenses: function () {
        this.expenses.sort(function (a, b) {
            if (a.description.toLowerCase() < b.description.toLowerCase()) {
                return -1
            } else if (b.description.toLowerCase() < a.description.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    },

    sortExpenseAmount: function () {
        this.expenses.sort(function (a, b) {
            if (a.amount < b.amount) {
                return -1
            } else if (b.amount < a.amount) {
                return 1
            } else {
                return 0
            }
        }) 
    },

    removeExpense: function (expenseItem) {
        const index = this.expenses.findIndex(function (expense) {
            return expense.description.toLowerCase() === expenseItem.toLowerCase()
        })

        if (index > -1) {
            this.expenses.splice(index, 1) 
        } else {
            console.log('This expense entry does not exist!')
        }
    },

    getSummary: function () {

        let totalExpense = 0
        this.expenses.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        let balance =  totalIncome - totalExpense

        return `${this.name} has a balance of ${balance}, ${totalIncome} in income and ${totalExpense} in expenses`
    }

}

//create method for adding income and expense
//create method for removing expense
//create methid for account summary
//create method for filtering expenses by amount
//create method for sorting expenses in alphabetical order


// myAccount.addExpense('Got a belt', 200)
// myAccount.addIncome('Got a belt', 200)
// myAccount.sortExpenses()
// myAccount.sortExpenseAmount()
// myAccount.removeExpense('got lunch')
// const searchResults = myAccount.filterExpenses(100)
// console.log(searchResults)
myAccount.getSummary()
console.log(myAccount)
const accountSummary = myAccount.getSummary()
console.log(accountSummary)















































// const myAccount = {
//     name: 'Alvin Okafor',
//     expenses: [
//         {
//             description: 'Bought coffee',
//             amount: 25
//         },

//         {
//             description: 'Paid for car toll',
//             amount: 150
//         },

//         {
//             description: 'Got lunch',
//             amount: 45
//         },
//     ],

//     income: [
//         {
//             description: 'Recrowdly Ist Installment',
//             amount: 300
//         },

//         {
//             description: 'Salary',
//             amount: 1000
//         },

//         {
//             description: 'Side gig',
//             amount: 200
//         },
//     ],

//     //SORTS EXPENSES INTO ALPHABETICAL ORDER
//     sortExpenses: function () {
//         this.expenses.sort(function (a, b) {
//             if(a.description.toLowerCase() < b.description.toLowerCase()) {
//                 return -1
//             } else if (b.description.toLowerCase() < a.description.toLowerCase()) {
//                 return 1
//             } else {
//                 return 0
//             }
//         })
//     },

//     //FUNCTION TO FILTER THROUGH THE EXPENSE DB
//     filterExpense: function (query) {
//         const searchQuery = this.expenses.filter(function (expense) {
//             //CHECKS IF EXPENSE AMOUNT IS GREATER THAN QUERY ENTERED AND SAVES THE RESULT IN THE FILTER ARRAY
//             const isAboveAmount = expense.amount > query 
//             return isAboveAmount
//         })
//         return searchQuery
//     },

//     //FUNCTION TO ADD NEW INCOME ENTRY
//     addIncome: function (description, amount) {
//         this.income.push(
//             {
//                 description: description,
//                 amount: amount
//             }
//         )
//     },

//     //FUNCTION TO ADD NEW EXPENSE ENTRY
//     addExpense: function (description, amount) {
//         this.expenses.push(
//             {
//                 description: description,
//                 amount: amount
//             }
//         )
//     },

//     removeIncome: function (incomeItem) {
//         const index = this.income.findIndex(function (income) {
//             return income.description.toLowerCase() === incomeItem.toLowerCase()
//         })

//         if (index > -1) {
//             this.income.splice(index, 1)
//         } else {
//             console.log('This income entry does not exist')
//         }
//     },


//     removeExpense: function (expenseItem) {
//         const index = this.expenses.findIndex(function (expense) {
//             //CHECKS IF EXPENSE ITEM ENTERED MATCHES OBJECTS IN THE EXPENSES ARRAY
//             return expense.description.toLowerCase() === expenseItem.toLowerCase()
//         })
        
//         if (index > -1) {
//             this.expenses.splice(index, 1)
//         } else {
//             console.log('This entry does not exist')
//         }
//     },

//     getAccountSummary: function () {
//             let totalIncome = 0
//             this.income.forEach (function (income) {
//                 totalIncome = totalIncome + income.amount
//         })

//             let totalExpense = 0
//             this.expenses.forEach (function (expense) {
//                 totalExpense = totalExpense + expense.amount
//         })

//             let balance = totalIncome - totalExpense
//             console.log (`${this.name}'s cash balance is N${balance}, 
//             ${totalIncome} in income and ${totalExpense} in expense`)
//     }

// }

// myAccount.addExpense('Got a new pen', 20)
// myAccount.addExpense('Paid shady', 100)
// myAccount.addExpense('got a hair cut', 200)
// myAccount.addIncome('2nd Side gig', 500)
// myAccount.addIncome('2nd Side gig', 400)
// // myAccount.getAccountSummary()
// // myAccount.removeExpense('paid for toll')
// // let searchResults = myAccount.filterExpense(100)
// // console.log(searchResults)
// // myAccount.sortExpenses()
// // console.log(myAccount)