import { rightPanel,generatedProject } from ".";
import { projectsPresent } from "./addProj";
import { rightPanelDefaults } from "./default";

type Task = {
    title:string;
    date:string;
    priority:string;
}


let tasksToday:Task[] = [{title:"eat",date:"23/12/44",priority:"low"},{title:"shit",date:"23/12/45",priority:"high"}]

export function iterateTasks(variable:string):void
{
    if (variable == "today")
    {
        for(let i =0;i<tasksToday.length;i++)
        {
            viewTask(tasksToday[i]);
        }
    }
}

function viewTask(task:Task)
{
    const tasks = document.getElementById('tasks');

    let title = document.createElement('div');
    title.setAttribute('id','taskTitle');
    
    let date = document.createElement('div');
    date.setAttribute('id','taskDate');

    let prio = document.createElement('div');
    prio.setAttribute('id','taskPrio');
    
    title.textContent = task.title;
    date.textContent = task.date;
    prio.textContent = task.priority;
    
    let subTask = document.createElement('div')
    subTask.classList.add('subTask');


    subTask.appendChild(title);
    subTask.appendChild(date);
    subTask.appendChild(prio);


    tasks?.appendChild(subTask);
}

export function checkChildren()
{
    let mainEle = document.getElementById('generatedProject')
    for(let i = 0;i<generatedProject.childNodes.length;i++)
    {
        generatedProject.childNodes[i].addEventListener('click',()=>{
            document.getElementById('view')?.remove();
            rightPanel?.appendChild(rightPanelDefaults());
            iterateTasks(projectsPresent[i]);
        }); 
    }

}
