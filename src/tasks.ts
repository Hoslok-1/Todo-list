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

export function createTask(projectIndex:any,title:string,priority:string,date:string)
{
    const taskObj = new task(title,priority,date);
    projectsList[projectIndex].tasks?.push(taskObj);
    console.log(projectsList[projectIndex]);
}