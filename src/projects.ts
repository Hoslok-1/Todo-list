import { renderProjects } from "./dom" 

interface sy{
    title:string,
    tasks?:any[]
}

let projectsList:sy[] = []

class Project
{
    title:string
    tasks:string[]
    constructor(title:string)
    {
        this.title = title;
        this.tasks = [];
    }
}

export function createProject(title:string)
{
    const projectObj = new Project(title);
    projectsList.push(projectObj);
    renderProjects();
    console.log(projectsList);
}

export { projectsList }