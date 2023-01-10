import { renderProjects } from "./dom" 

interface sy{
    title:string,
    tasks?:any[]
    index:number
}

let projectsList:sy[] = []

class Project
{
    title:string
    tasks:string[]
    index:number
    constructor(title:string,index:number)
    {
        this.title = title;
        this.tasks = [];
        this.index = index;
    }
}

export function createProject()
{
    let title = (<HTMLInputElement>document.getElementById('titlePopUp')).value
    let index = projectsList.length;
    const projectObj = new Project(title,index);
    projectsList.push(projectObj);
    renderProjects();
    console.log(projectsList);
}

export { projectsList }