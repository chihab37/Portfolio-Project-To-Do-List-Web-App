// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('task-description');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const sortSelect = document.getElementById('sort');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = categoryInput.value; // Add category as a class
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <p class="description">${descriptionInput.value}</p>
                <p class="due-date">Due Date: ${dueDateInput.value}</p>
                <p class="priority">Priority: ${priorityInput.value}</p>
                <button class="edit-btn">Edit</button>
                <button class="complete-btn">Mark as Complete</button>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'low';
            categoryInput.value = 'work';

            sortTasks();
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('edit-btn')) {
            const taskItem = e.target.parentElement;
            const taskText = taskItem.querySelector('span');
            const newTaskText = prompt('Edit task:', taskText.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskText.textContent = newTaskText;
            }
        } else if (e.target && e.target.classList.contains('complete-btn')) {
            const taskItem = e.target.parentElement;
            taskItem.classList.toggle('completed');
            sortTasks();
        } else if (e.target && e.target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this task?')) {
                const taskItem = e.target.parentElement;
                taskItem.remove();
                sortTasks();
            }
        }
    });

    sortSelect.addEventListener('change', sortTasks);

    function sortTasks() {
        const tasks = Array.from(taskList.children);
        const sortingMethod = sortSelect.value;

        tasks.sort((a, b) => {
            switch (sortingMethod) {
                case 'due-date':
                    const aDueDate = a.querySelector('.due-date').textContent.split(': ')[1];
                    const bDueDate = b.querySelector('.due-date').textContent.split(': ')[1];
                    return new Date(aDueDate) - new Date(bDueDate);

                case 'priority':
                    const aPriority = a.querySelector('.priority').textContent.split(': ')[1];
                    const bPriority = b.querySelector('.priority').textContent.split(': ')[1];
                    return aPriority.localeCompare(bPriority);

                case 'category':
                    return a.className.localeCompare(b.className);

                default:
                    return 0;
            }
        });

        taskList.innerHTML = '';
        tasks.forEach(task => {
            taskList.appendChild(task);
        });
    }
});
