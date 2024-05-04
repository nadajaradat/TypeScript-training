console.log('start the script.ts file');

// Path: to-do/src/index.ts

const list = document.querySelector<HTMLUListElement>('#list')
const input = document.querySelector<HTMLInputElement>('#task')
const form = document.querySelector('#task-form') as HTMLFormElement | null
console.log(form);  // Add this line
type Task = {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

const tasks: Task[] = loadTasks();
tasks.forEach(addListItem)

form?.addEventListener('submit', (e) => {
    console.log("form submit")
    e.preventDefault()
    const value = input?.value
    console.log(value)
    if(!value) return

    const task: Task = {
        id: Date.now(),
        title: value,
        completed: false,
        createdAt: new Date()
    }
    tasks.push(task)
    addListItem(task);
    saveTasks()
    input.value = '';
})

function addListItem(task: Task) {
    console.log("add list item", task)
    const item = document.createElement('li')
    item.innerHTML = `
        <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''}>
        <span>${task.title}</span>
        <a data-id="${task.id}">Delete</a>
    `
    list?.appendChild(item)

    const checkbox = item.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
    checkbox?.addEventListener('change', (e) => {
        console.log("checkbox change", (e.target as HTMLInputElement).checked)
        task.completed = !task.completed 
        saveTasks()
    });

    const deleteBtn = item.querySelector('a') as HTMLAnchorElement | null;
    deleteBtn?.addEventListener('click', (e) => {
        console.log("delete button click", task.id)
        const index = tasks.findIndex(t => t.id === task.id)
        tasks.splice(index, 1)
        item.remove()
        saveTasks()
    });
}
function saveTasks() {
    console.log("save tasks")
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    console.log("load tasks")
    const tasksString = localStorage.getItem('tasks')
    if(!tasksString) return []
    
    return JSON.parse(tasksString) as Task[]
}