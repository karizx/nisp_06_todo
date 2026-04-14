const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const newListItem = document.createElement('li');
        ewListItem.textContent = taskText;
        taskList.appendChild(newListItem);
        taskInput.value = "";
    } else {
        alert("Wpisz treść zadania!");
    }
});