const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("task-due-date");

let taskIndex = 1;

// console.log(taskForm, taskList);

taskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    const taskPriority = priorityInput.value;
    const dueDate = dueDateInput.value;

    if (taskInput === "") {
        alert("Please enter a task.");
        return; 
    }

    if (dueDate === "") {
        alert("Please select an upcoming date for the deadline.");
        return; 
    }

    const selectedDate = new Date(dueDate);
    const today = new Date();

    if (selectedDate <= today){
        alert("You must set a completion date for this task that is after the current date.");
        return;
    }

    // Create a new Task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <p>${taskText}</p>
        <p>Priority: ${taskPriority}</p>
        <p>Deadline: ${dueDate}</p>
        <button class="mark-done">Mark Done</button>
    `;


    taskList.appendChild(taskItem);
    taskIndex++;
    taskInput.value = "";
    priorityInput.value = "top";
    dueDateInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle("completed");
    }
});