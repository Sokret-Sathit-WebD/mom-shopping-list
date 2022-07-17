const form = document.addItem
//removeToDo = document.querySelectorAll('.removeBtn')


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const groceryItem = form.title.value
    form.title.value = ""
    console.log(groceryItem)
    
    const ul = document.getElementById("list")
    const listItem = document.createElement("li")
    listItem.textContent = groceryItem
    ul.appendChild(listItem)
    listItem.className = "listItem"

    //Remove button
    const removeButton = document.createElement("button")
    removeButton.textContent = "X"
    listItem.appendChild(removeButton)

    //Remove button eventlistener
removeButton.addEventListener('click', function() {
    //var li = this.parentNode
    //li.remove()
    listItem.remove()

    //Edit button - user input should pop-up with the list Item already on
    
})
})