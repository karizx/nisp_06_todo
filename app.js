const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const newListItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            newListItem.classList.toggle('completed', checkbox.checked);
        });
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.style.marginLeft = "10px";
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Usuń';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            newListItem.remove();
        });
        newListItem.appendChild(checkbox);
        newListItem.appendChild(taskSpan);
        newListItem.appendChild(deleteBtn); 
        taskList.appendChild(newListItem);
        taskInput.value = "";
    }
});