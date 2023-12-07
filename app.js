// Select the form and task input element
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');
const editButton = document.getElementById('edit-btn');
const completeButton = document.getElementById('complete-btn');
const highPriorityButton = document.getElementById('high-priority');

// Add task
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="complete-btn">Mark as Complete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Edit task
taskList.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('edit-btn')) {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.querySelector('span');
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskText.textContent = newText;
        }
    }
});

// Mark as complete/incomplete
taskList.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('complete-btn')) {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle('completed');
    }
});

// Set task priority to high
highPriorityButton.addEventListener('click', function () {
    const selectedTask = taskList.querySelector('.completed');
    if (selectedTask) {
        selectedTask.classList.add('priority-high');
    }
});
// Select the form and task input element
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');
const editButton = document.getElementById('edit-btn');
const completeButton = document.getElementById('complete-btn');
const highPriorityButton = document.getElementById('high-priority');

// Add task
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="complete-btn">Mark as Complete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Edit task
taskList.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('edit-btn')) {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.querySelector('span');
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskText.textContent = newText;
        }
    }
});

// Mark as complete/incomplete
taskList.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('complete-btn')) {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle('completed');
    }
});

// Set task priority to high
highPriorityButton.addEventListener('click', function () {
    const selectedTask = taskList.querySelector('.completed');
    if (selectedTask) {
        selectedTask.classList.add('priority-high');
    }
});
