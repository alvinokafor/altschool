const notes = [
    {
        title: 'Javascript 101',
        body: 'Javascript is for web development'
    },

    {
        title: 'New Workspace Modifications',
        body: 'Get the new monitor'
    },

    {
        title: 'Work Mods',
        body: 'Buy mouse'
    },

    {
        title: 'Games to download',
        body: 'Download farcry and asssasins creed'
    }
]


function sortNotes (notes) {
    notes.sort(function (a, b) {
        //CHECKS IF ITEM A IS LESS THAN ITEM B AND SHOULD BE DISPLAYED FIRST
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        //CHECKS IF ITEM B IS LESS THAN ITEM A AND SHOULD BE DISPLAYED FIRST    
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        //CHECKS IF BOTH ITEM A & B ARE IDENTICAL AND RETAINS THIER ORDER    
        } else {
            return 0
        }
    })
}
// sortNotes(notes)
// console.log(notes)





function filterNotes (notes, query) {
    const filteredNotes = notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        console.log(isTitleMatch)
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        console.log(isBodyMatch)
        return isTitleMatch || isBodyMatch
    })

    return filteredNotes
}

// const searchResult = filterNotes(notes, 'wo')
// console.log(searchResult)


//function to return note index
function findNote (notes, noteTitle) {
    //finds and stores index value into 'index' variable
    const index = notes.findIndex(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    //returns index of note 
    return notes[index]
}

// function findNote (notes, noteTitle) {
//     const note = notes.find(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note
// }

// const note = findNote(notes, 'javascript 101')
// console.log(note)





// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Workspace Modifications'
// })

// console.log(index)








// notes.splice(1, 1, "New Note")
// console.log(notes)

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }



// function addNote() {
//     let newNote = prompt('Enter a new note')
//     notes.push(newNote)
//     console.log(notes) 
// }

// function removeNote() {
//     let deletePrompt = parseInt(prompt(`Choose a note to delete ${notes}`))

//     for (let index of notes) {

//         if (deletePrompt == notes.indexOf(index)) {
//             let warning = confirm(`Are you sure you want to delete ${notes[notes.indexOf(index)]}`)
//             if (warning) {
//                 notes.splice(notes.indexOf(index), 1)
//             } else {
//                 console.log('Ok')
//             }
            
//         } else if(deletePrompt != notes.indexOf(index)) {
//             console.log('Choose another note')
//         }

//        console.log(notes)
//     }
// }

// removeNote()










