import { projectsList } from "./projects";


class task{
    title:string;
    priority:string;
    date:string;
    constructor(title:string,priority:string,date:string)
    {
        this.title = title;
        this.priority = priority;
        this.date = date;
    }
}

interface ty{
    title:string,
    priority:string
    date:string
}

export let tasksToday:ty[] = []
export let tasksWeek:ty[] = []
export let tasksImportant:ty[] = []

export function createTask(projectIndex:string,title:string,priority:string,date:string)
{
    if(projectIndex == "today")
    {
        const taskObj = new task(title,priority,date);
        tasksToday.push(taskObj);
        console.log(tasksToday);
        return 
    }
    if(projectIndex == "week")
    {
        const taskObj = new task(title,priority,date);
        tasksWeek.push(taskObj);
        console.log(tasksWeek);
        return
    }
    if(projectIndex == "important")
    {
        const taskObj = new task(title,priority,date);
        tasksImportant.push(taskObj);
        console.log(tasksImportant);
        return
    }
/*     console.log("This executing?")
    const taskObj = new task(title,priority,date);
    projectsList[projectIndex].tasks?.push(taskObj);
    console.log(projectsList[projectIndex].tasks); */
}

export function createTaskCustom(projectIndex:number,title:string,priority:string,date:string)
{
    const taskObj = new task(title,priority,date);
    projectsList[projectIndex].tasks?.push(taskObj);
    console.log("Working?");
    console.log(projectsList);
}

