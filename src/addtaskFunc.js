import { viewTask } from "./viewtasks";
import { rightTemplate } from ".";

let tasksToday = []

function tasks(title,date)
{
    this.title = title;
    this.date = date;
}

function addTaskFunc(title,date,view)
{
    const taskObj = new tasks(title,date);
    if(view == 1){
        tasksToday.push(taskObj);
    }
    console.log(tasksToday);
    rightTemplate.appendChild(viewTask(taskObj));
}

export {addTaskFunc,tasksToday}