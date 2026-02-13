function addTask() {
    const taskInput = document.getElementById('taskInput')
    const taskList = document.getElementById('taskList')

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li')
        newTask.innerHTML = `
            <div class="checkbox-btn" onclick="toggleTaskCompletion(this)">
                <label for="checkbox"></label>
                <input type="checkbox">
                <span class="checkmark"></span>
            </div>
            <span>${taskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Excluir</button>
        `
        taskList.insertBefore(newTask, taskList.firstChild)
        taskInput.value = ''
    }
}

function toggleTaskCompletion(task) {
    task.parentNode.classList.toggle('completed')
}

function deleteTask(button) {
    const task = button.parentNode
    task.remove()
}


document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask()
    }
})