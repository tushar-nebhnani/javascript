console.log("Jai Shree Ram!");
// Challenge 1: Change Text
document.getElementById('changeTextButton').addEventListener('click', () => {
    let paragraph = document.getElementById('myParagraph')
    paragraph.textContent = "The paragraph is changed." 
})

// Challenge 2: Traverse the DOM
document.getElementById('highlightFirstCity').addEventListener('click', function() {
    let citiesList = document.getElementById('citiesList')
    citiesList.firstElementChild.classList.add('highlight')
        
})

// Challenge 3: Manipulation DOM
document.getElementById('changeOrder').addEventListener('click', () => {
    let order = document.getElementById('coffeeType')
    order.textContent = "Espresso"
    order.style.backgroundColor = "pink"
    order.style.color = "black"
})

// Challenge 4: Creating N Inserting New Element
document.getElementById('addNewItem').addEventListener('click', () => {
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    document.getElementById('shoppingList').appendChild(newItem)
})

// Challenge 5: Delete an Element
document.getElementById('removeLastTask').addEventListener('click', () => {
    let lastItem = document.getElementById('taskList')
    lastItem.lastElementChild.remove(lastItem)
})

// Challenge 6: Event Handling
document.getElementById('clickMeButton').addEventListener('dblclick', () => {
    alert("Chai Code!")
})

// Challenge 7: Event Delegation
// event.target.matches('.teaItem') => to select a particular region of the code 
document.getElementById("teaList").addEventListener('click', (event) => {
    if(event.target && event.target.matches('.teaItem')) {
        alert(`You selected ${event.target.textContent}!`)
    }    
})

// Challenge 8: Form Handling
document.getElementById('feedbackForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value
    document.getElementById('feedbackDisplay').textContent = `Feedback is: ${feedback}`
})

// Challenge 9: DOM content loading
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('domStatus').textContent = "DOM fully loaded."
})


// Challenge 10
document.getElementById('toggleHighlight').addEventListener('click', () => {
    document.getElementById('descriptionText').classList.toggle('highlight')
})
