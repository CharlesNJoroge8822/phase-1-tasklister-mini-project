const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const taskValue = inputBox.value.trim(); // Trim any whitespace

    if (taskValue === '') {
        alert('No activity added');
    } else {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskValue; // Set the text content of the list item

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('aria-label', 'Delete task'); // Accessibility
        deleteButton.addEventListener('click', function() {
            listContainer.removeChild(li); // Remove the task when button is clicked
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);
        listContainer.appendChild(li); // Append the new list item to the list

        inputBox.value = ''; // Clear the input box
    }
}

// Optional: Add keyboard accessibility to the input box
inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});





