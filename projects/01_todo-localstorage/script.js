document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-btn')
    const taskList = document.getElementById('todo-list')
    const inputTask = document.getElementById('todo-input')

    let tasks = JSON.parse(localStorage.getItem("Task List")) || []
    
    tasks.forEach((task) => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        const task = inputTask.value.trim()
        if(task === '') return alert("Please enter a valid value!")

        const newTask = {
            id: Date.now(),
            newTask: task,
            isComplete: false
        }
    
        tasks.push(newTask)
        saveTask()
        renderTask(newTask)
        inputTask.value = ''
    })

    function saveTask() {
        localStorage.setItem("Task List", JSON.stringify(tasks))
    }

    function renderTask(task) {
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)  
        if(task.isComplete) li.classList.add('completed')

        li.innerHTML = `
            <span>${task.newTask}</span>
            <button>delete</button>
        `;  

        li.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') return
            task.isComplete = !task.isComplete
            li.classList.toggle('completed')
            saveTask()
        })

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation() // prevent bubbliging up of the event
            tasks = tasks.filter((t => t.id !== task.id))
            li.remove()
            saveTask()
        })

        taskList.append(li)
    }
})