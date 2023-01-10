import { projectsList } from "./projects";
import { container } from ".";


const rightPanel = document.getElementById('rightPanel');
const defaultProjectList = document.querySelector('.projects-list');

export function renderProjects()
{
    defaultProjectList!.textContent = ''   
    for(let i = 0;i<projectsList.length;i++)
    {
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('sidebarProject');
        let pLen = projectsList[i].index
        projectTitle.classList.add(`${pLen}`);
        projectTitle.textContent = projectsList[i].title;
        defaultProjectList?.appendChild(projectTitle);

    }
}

export function projectPopUp()
{
    const popUpProject = document.createElement('div');
    const titlePopUp = document.createElement('input')
    const submitPopUp = document.createElement('button');

    titlePopUp.setAttribute('type','input');
    titlePopUp.setAttribute('id','titlePopUp');
    submitPopUp.setAttribute('id','submitPopUp');

    submitPopUp.textContent = "Submit";

    popUpProject.appendChild(titlePopUp)
    popUpProject.appendChild(submitPopUp);


    container!.appendChild(popUpProject);
}



/* //export const viewDefault =  document.createElement('div')
export function renderView(view:string | number)
{   
    if (view == "today")
    {
        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent =  "Add Task"; 
        addTaskBtn.classList.add('btn');
        const todayView = document.createElement('div');    
        todayView.setAttribute('id','todayView');
        todayView.appendChild(addTaskBtn);
        viewDefault.appendChild(todayView);
        rightPanel?.appendChild(viewDefault);
        viewDefault.setAttribute('id','viewToday');
        
    }
    else if(view == "week")
    {
        console.log("in week")
        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent =  "Add Task"; 
        addTaskBtn.classList.add('btn');
        const weekView = document.createElement('div');    
        weekView.setAttribute('id','weekView');
        weekView.appendChild(addTaskBtn);
        viewDefault?.appendChild(weekView);
        rightPanel?.appendChild(viewDefault);
        viewDefault.setAttribute('id','viewWeek');

    }
    else if(view == "important")
    {
        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent =  "Add Task"; 
        addTaskBtn.classList.add('btn');
        const importantView = document.createElement('div');    
        importantView.setAttribute('id','importantView');
        importantView.appendChild(addTaskBtn);
        viewDefault?.appendChild(importantView);
        rightPanel?.appendChild(viewDefault);
        viewDefault.setAttribute('id','viewImportant');

    }

}   
 */
export function renderViewToday()
{
    let vari = document.getElementById('viewImportant')
    let vari1 = document.getElementById('viewWeek')
    let vari2 = document.getElementById('viewToday');
    if(typeof(vari) != 'undefined' && vari != null)
    {
        vari?.remove();
    }
    if(typeof(vari1) != 'undefined' && vari1 != null)
    {
        vari1.remove()
    }
    if(typeof(vari2) != 'undefined' && vari2 != null)
    {
        vari2.remove()
    }
    const viewDefault = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent =  "Add Task"; 
    addTaskBtn.classList.add('btn');
    const todayView = document.createElement('div');    
    todayView.setAttribute('id','todayView');
    todayView.appendChild(addTaskBtn);
    viewDefault.appendChild(todayView);
    rightPanel?.appendChild(viewDefault);
    viewDefault.setAttribute('id','viewToday');
}

export function renderViewWeek()
{
    let vari = document.getElementById('viewImportant')
    let vari1 = document.getElementById('viewWeek')
    let vari2 = document.getElementById('viewToday');
    if(typeof(vari) != 'undefined' && vari != null)
    {
        vari?.remove();
    }
    if(typeof(vari1) != 'undefined' && vari1 != null)
    {
        vari1.remove()
    }
    if(typeof(vari2) != 'undefined' && vari2 != null)
    {
        vari2.remove()
    }
    const viewDefault = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent =  "Add Task"; 
    addTaskBtn.classList.add('btn');
    const todayView = document.createElement('div');    
    todayView.setAttribute('id','weekView');
    todayView.appendChild(addTaskBtn);
    viewDefault.appendChild(todayView);
    rightPanel?.appendChild(viewDefault);
    viewDefault.setAttribute('id','viewWeek');
}

export function renderViewImportant()
{
    let vari = document.getElementById('viewImportant')
    let vari1 = document.getElementById('viewWeek')
    let vari2 = document.getElementById('viewToday');
    if(typeof(vari) != 'undefined' && vari != null)
    {
        vari?.remove();
    }
    if(typeof(vari1) != 'undefined' && vari1 != null)
    {
        vari1.remove()
    }
    if(typeof(vari2) != 'undefined' && vari2 != null)
    {
        vari2.remove()
    }
    const viewDefault = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent =  "Add Task"; 
    addTaskBtn.classList.add('btn');
    const todayView = document.createElement('div');    
    todayView.setAttribute('id','importantView');
    todayView.appendChild(addTaskBtn);
    viewDefault.appendChild(todayView);
    rightPanel?.appendChild(viewDefault);
    viewDefault.setAttribute('id','viewImportant');
}

