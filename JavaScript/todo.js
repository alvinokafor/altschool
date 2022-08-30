let todoList = [
   {
    title: 'Do the laundry',
    completed: false
   },

   {
    title: 'Buy some groceries',
    completed: true
   },

   {
    title: 'Mark exam scripts',
    completed: false
   },

   {
    title: 'Write some notes',
    completed: true
   },

   {
    title: 'Take out the trash',
    completed: false
   }
]

//FUNCTION TO SORT TODOS BY UNCOMPLETED ITEMS
function sortTodo (todoList) {
    todoList.sort(function (a, b) {
        //IF FIRST ITEM IS NOT COMPLETED AND 2ND ITEM IS NOT COMPLETED DISPLAY 1ST ITEM FIRST
        if (!a.completed && b.completed) {
            return -1
        //IF SECOND ITEM IS NOT COMPLETED AND 1ST ITEM IS COMPLETED, DISPLAY 2ND ITEM FIRST    
        } else if (!b.completed && a.completed) {
            return 1
        //CHECKS IF BOTH ITEMS ARE COMPLETED OR NOT COMPLETED AND RETAINS THE ORDER    
        } else {
            return 0
        }
    })
}
// sortTodo(todoList)
// console.log(todoList)


//FUNCTION TO DELETE TODO ITEM
function deleteTodo (todoList, todoItem) {
    
    //GRABS THE TODO ITEM TO BE DELETED AND SAVES IT IN THE INDEX VARIABLE
    const index = todoList.findIndex(function(todo) {
      return todo.title.toLowerCase() === todoItem.toLowerCase()
    })

    //CHECKS IF THE TODO ITEM EXISTS IN THE TODO LIST ARRAY
    if (index > -1) {
        todoList.splice(index, 1)
    } else {
        console.log('TODO dosent exist!')
    }
    
    console.log(todoList)
}
// deleteTodo(todoList, 'take out the trash')


//FUNCTION TO SEARCH FOR TODO ITEMS
function filterTodo (todoList, query) {
    //STORES THE SEARCH RESULTS INTO SEARCH QUERY
    const searchQuery = todoList.filter(function (todo) {
        //CHECKS IF THE TITLE INCLUDES THE SEARCH QUERY
        const isTitleMatch = todo.title.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch
    })
    return searchQuery
}
// const searchResults = filterTodo(todoList, 'take')
// console.log(searchResults)


//FUNCTION TO DISPLAY UNCOMPLETED TOD0 ITEMS
function completedTodo (todoList) {
    const filteredTodo = todoList.filter(function (todo) {
            const IsNotCompleted = !todo.completed
            return IsNotCompleted
    })
    return filteredTodo
}

//console.log(completedTodo(todoList))

















// //FUNCTION TO DELETE TODO ITEM
// function deleteTodo (todoList, todoItem) {

//     //GRABS THE TODO ITEM TO BE DELETED AND SAVES IT IN THE INDEX VARIABLE
//     const index = todoList.find(function(todo) {
//       return todo.title.toLowerCase() === todoItem.toLowerCase()
//     })

//     console.log(index)

//     //CHECKS IF THE TODO ITEM EXISTS IN THE TODO LIST ARRAY
//     if (todoList.includes(index)) {
//         todoList.splice(index, 1)
        
//         console.log(`${index.title} had been deleted from your TODO List`)
//     } else {
//        console.log('TODO dosent exist!')
//     }
    
//     console.log(todoList)
// }
// deleteTodo(todoList, 'take out the trash')






// console.log(`You have ${todo.length} things to do today!`)
//looping through arrays
// todo.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
//     console.log(todo)
//     console.log(index)
// })

// for (count=todo.length - 1; count >=0; count--) {
//     console.log(todo[count])
// }

// for (count=0; count < todo.length; count++) {
//     const num = count + 1
//     console.log(`${num}. ${todo[count]}`)
// }