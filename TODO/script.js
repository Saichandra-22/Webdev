function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span>
                    <button onclick="toggleComplete(this)">Complete</button>
                    <button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(completeBtn) {
    const taskSpan = completeBtn.parentElement.querySelector('span');
    taskSpan.classList.toggle('completed');
}

function removeTask(deleteBtn) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(deleteBtn.parentElement);
}
