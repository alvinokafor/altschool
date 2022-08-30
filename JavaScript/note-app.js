const paragraphs = document.querySelectorAll('p')

// li.forEach(function (li) {
//    li.textContent = '*****'
// })

const newParagraph = document.createElement('p')
newParagraph.textContent = `New Element`
document.querySelector('body').appendChild(newParagraph)