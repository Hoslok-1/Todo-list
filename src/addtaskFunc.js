import { viewTask } from "./viewtasks";
import { rightTemplate } from ".";
import { todayView } from "./todayview";

let tasksToday = []
export let tasksThisWeek = []

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
        console.log(tasksToday);
    }
    else if(view == 2)
    {
        tasksThisWeek.push(taskObj);
        console.log(tasksThisWeek);
    }
    rightTemplate.appendChild(viewTask(taskObj));
}

function displayTaskFunc()
{
    for(let i = 0;i < tasksToday.length;i++)
    {
        console.log(tasksToday[i].title,tasksToday[i].date);
    }
}

export {addTaskFunc,tasksToday,displayTaskFunc}