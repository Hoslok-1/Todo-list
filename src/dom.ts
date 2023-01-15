import { projectsList } from "./projects";
import { container } from ".";
import { tasksImportant, tasksToday, tasksWeek } from "./tasks";

const rightPanel = document.getElementById('rightPanel');
const defaultProjectList = document.querySelector('.projects-list');


export function renderProjects()
{
    defaultProjectList!.textContent = ''   
    for(let i = 0;i<projectsList.length;i++)
    {
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('sidebarProject');
        let pLen:number = projectsList[i].index
        projectTitle.classList.add(`${pLen}`);
        projectTitle.textContent = projectsList[i].title;
        defaultProjectList?.appendChild(projectTitle);

        projectTitle.addEventListener('click',()=>{
            let index:string = projectTitle.classList[1];
            renderGeneratedProjectsView((parseInt(index)))
    });
    }
};

export function renderGeneratedProjectsView(index:number)
{
    rightPanel!.textContent = '';


    const view = document.createElement('div');
    rightPanel!.appendChild(view);

    view.classList.add('generatedView');
    view.classList.add(`${index}`);

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

export function taskPopUp()
{
    const taskPopUpMain = document.createElement('div');
    const taskTitle = document.createElement('input');
    const taskDueDate = document.createElement('input');
    const taskPriority = document.createElement('select');
    const taskSubmit = document.createElement('button');
    const priorityHigh = document.createElement('option');
    const priorityMid = document.createElement('option');
    const priorityLow = document.createElement('option');

    taskPopUpMain.appendChild(taskTitle);
    taskPopUpMain.appendChild(taskDueDate);
    taskPopUpMain.appendChild(taskPriority);
    taskPopUpMain.appendChild(taskSubmit);
    taskPriority.appendChild(priorityHigh);
    taskPriority.appendChild(priorityMid);
    taskPriority.appendChild(priorityLow);

    taskTitle.setAttribute('type','text');
    taskDueDate.setAttribute('type','date');

    taskSubmit.textContent = "Submit";
    priorityLow.textContent = "Low";
    priorityHigh.textContent = "High";
    priorityMid.textContent = "Midium";;

    taskPopUpMain.classList.add('taskPopUpMain');
    taskTitle.classList.add('taskPopUpInput');
    taskDueDate.classList.add('taskPopUpDate');
    taskPriority.setAttribute('id','taskPopUpPrio');
    taskSubmit.classList.add('taskPopUpSubmit');

    container?.appendChild(taskPopUpMain);
}


export function renderViewToday()
{
    rightPanel!.textContent = '';
    let vari = document.getElementById('viewImportant')
    let vari1 = document.getElementById('viewWeek')
    let vari2 = document.getElementById('viewToday');
/*     if(typeof(vari) != 'undefined' && vari != null)
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
    } */
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
    rightPanel!.textContent = '';
    let vari = document.getElementById('viewImportant')
    let vari1 = document.getElementById('viewWeek')
    let vari2 = document.getElementById('viewToday');
/*     if(typeof(vari) != 'undefined' && vari != null)
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
    } */
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
    rightPanel!.textContent = '';
    let vari = document.getElementById('viewImportant')
    let vari1 = document.getElementById('viewWeek')
    let vari2 = document.getElementById('viewToday');
/*     if(typeof(vari) != 'undefined' && vari != null)
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
    } */
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


export function renderTasksToday()
{
    const tasksTodayVar = document.getElementById('viewToday')
    tasksTodayVar!.textContent = ''   
    for(let i = 0;i<tasksToday!.length;i++)
    {
        const mainTask = document.createElement('div');
        mainTask.classList.add('mainTask');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task');
        taskTitle.textContent = tasksToday[i].title;
        const taskDate = document.createElement('div');
        taskDate.classList.add('task');
        taskDate.textContent = tasksToday[i].date;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasksToday[i].priority;

        mainTask.appendChild(taskTitle);
        mainTask.appendChild(taskDate);
        mainTask.appendChild(taskPriority);

        tasksTodayVar?.appendChild(mainTask);
    }
}

export function renderTasksWeek()
{
    const tasksWeekVar = document.getElementById('viewWeek')
    tasksWeekVar!.textContent = ''   
    for(let i = 0;i<tasksWeek!.length;i++)
    {
        const mainTask = document.createElement('div');
        mainTask.classList.add('mainTask');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task');
        taskTitle.textContent = tasksWeek[i].title;
        const taskDate = document.createElement('div');
        taskDate.classList.add('task');
        taskDate.textContent = tasksWeek[i].date;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasksWeek[i].priority;

        mainTask.appendChild(taskTitle);
        mainTask.appendChild(taskDate);
        mainTask.appendChild(taskPriority);

        tasksWeekVar?.appendChild(mainTask);
    }
}

export function renderTasksImportant()
{
    const tasksImportantVar = document.getElementById('viewImportant')
    tasksImportantVar!.textContent = ''   
    for(let i = 0;i<tasksImportant!.length;i++)
    {
        const mainTask = document.createElement('div');
        mainTask.classList.add('mainTask');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task');
        taskTitle.textContent = tasksImportant[i].title;
        const taskDate = document.createElement('div');
        taskDate.classList.add('task');
        taskDate.textContent = tasksImportant[i].date;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasksImportant[i].priority;

        mainTask.appendChild(taskTitle);
        mainTask.appendChild(taskDate);
        mainTask.appendChild(taskPriority);

        tasksImportantVar?.appendChild(mainTask);
    }
}