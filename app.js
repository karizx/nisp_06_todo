const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const newListItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '10px';
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                newListItem.classList.add('completed');
            } else {
                newListItem.classList.remove('completed');
            }
        });
        newListItem.appendChild(checkbox);
        newListItem.appendChild(taskSpan);
        taskList.appendChild(newListItem);
        taskInput.value = "";
    } else {
        alert("Wpisz treść zadania!");
    }
});