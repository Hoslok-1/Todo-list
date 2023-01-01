import { tasksToday } from "./addtaskFunc.js";
let i = 1;
export const viewTask = (task) =>{

    const taskDev = document.createElement('div');
    const taskName = document.createElement('div');
    const taskDueDate = document.createElement('div');
    const taskChecked = document.createElement('input');

    taskDev.classList.add("task");
    taskDev.classList.add(`${i}`)
    taskChecked.classList.add('taskChecked');
    taskChecked.setAttribute('type','checkbox');
    
    taskDev.appendChild(taskChecked);
    taskDev.appendChild(taskName);
    taskDev.appendChild(taskDueDate);



    taskName.textContent = task.title;

    taskDueDate.textContent = task.date;

    i+=1; 
    return taskDev;

}

