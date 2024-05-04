"use strict";
console.log('start the script.ts file');
// Path: to-do/src/index.ts
const list = document.querySelector('#list');
const input = document.querySelector('#task');
const form = document.querySelector('#task-form');
console.log(form); // Add this line
const tasks = loadTasks();
tasks.forEach(addListItem);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    console.log("form submit");
    e.preventDefault();
    const value = input === null || input === void 0 ? void 0 : input.value;
    console.log(value);
    if (!value)
        return;
    const task = {
        id: Date.now(),
        title: value,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(task);
    addListItem(task);
    saveTasks();
    input.value = '';
});
function addListItem(task) {
    console.log("add list item", task);
    const item = document.createElement('li');
    item.innerHTML = `
        <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''}>
        <span>${task.title}</span>
        <a data-id="${task.id}">Delete</a>
    `;
    list === null || list === void 0 ? void 0 : list.appendChild(item);
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener('change', (e) => {
        console.log("checkbox change", e.target.checked);
        task.completed = !task.completed;
        saveTasks();
    });
    const deleteBtn = item.querySelector('a');
    deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener('click', (e) => {
        console.log("delete button click", task.id);
        const index = tasks.findIndex(t => t.id === task.id);
        tasks.splice(index, 1);
        item.remove();
        saveTasks();
    });
}
function saveTasks() {
    console.log("save tasks");
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    console.log("load tasks");
    const tasksString = localStorage.getItem('tasks');
    if (!tasksString)
        return [];
    return JSON.parse(tasksString);
}
