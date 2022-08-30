let todoList = [
    {
     title: 'Do the laundry',
     completed: false
    },
 
    {
     title: 'Buy some groceries',
     completed: false
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

 //1. filter todo items and render on browser
 //2. display how many todos are left

const filters = {
    searchText: ''
}

function filterTodo (todoList, filters) {
    const filteredTodo = todoList.filter(function (todo) {
        //checks if the characters contained in the filter search text property match the todo title
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        //saves the result to the filtered todo array
    })

    //clears the div
    document.querySelector('#todos').innerHTML = ''
    
    //loops through the filtered todo array and renders each item on the browser
    filteredTodo.forEach(function (todo) {
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.title
        document.querySelector('#todos').appendChild(todoElement)
    })


    document.querySelector('#todoSummary').innerHTML = ''
    //checks how nmany todo items are left
    const unDoneTodos = filteredTodo.filter(function (todo) {
        return !todo.completed
    })

    const incompleteTodo = document.createElement('h4')
    incompleteTodo.textContent = `You have ${unDoneTodos.length} todo's left`
    document.querySelector('#todoSummary').appendChild(incompleteTodo)
    
}

filterTodo(todoList, filters)

document.querySelector('#search-query').addEventListener('input', function(e) {
    //assigns the input characters in real time to the filters search text property
    filters.searchText = e.target.value
    //rerenders todo list from filtered list
    filterTodo(todoList, filters)
})


document.querySelector('#inputForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const newTodo = e.target.elements.inputTodo.value

    todoList.push({
        title: newTodo,
        completed: false
    })

    // const newTodoEntry = document.createElement('p')
    // newTodoEntry.textContent = newTodo
    // document.querySelector('#todos').appendChild(newTodoEntry)

    filterTodo(todoList, filters)

    // console.log(todoList)

    e.target.elements.inputTodo.value = ''
})


















//  let completed = 0
//  todoList.forEach(function(todo) {
//     if (!todo.completed) {
//         completed = completed + 1
//     }
//  })
