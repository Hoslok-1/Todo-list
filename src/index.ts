import './styles/index.css'
import {  projectPopUp, renderViewWeek,renderViewToday,renderViewImportant, taskPopUp,renderTasksToday, renderTasksWeek, renderTasksImportant, renderTasksCustom, popUpProject } from './dom';
import { createProject } from './projects';
import { createTask, createTaskCustom } from './tasks';

export const container = document.getElementById('container');
const addProjectBtn = document.getElementById('addProjectBtn');
const rightPanel = document.getElementById('rightPanel');
const addTaskBtn = document.getElementById('addTaskBtn');
const todayProject = document.getElementById('todayProject');
const weekProject = document.getElementById('weekProject');
const importantProject = document.getElementById('importantProject');

projectPopUp();
taskPopUp();


const submitProjPopUp = document.getElementById('submitPopUp');
submitProjPopUp?.addEventListener('click',()=>{createProject();})
//addTaskBtn?.addEventListener('click',()=>{createTask()});



todayProject?.addEventListener('click',()=>{renderViewToday();renderTasksToday()});
weekProject?.addEventListener('click',()=>{renderViewWeek();renderTasksWeek()});
importantProject?.addEventListener('click',()=>{renderViewImportant();renderTasksImportant()});

addProjectBtn?.addEventListener('click',()=>{
    popUpProject.style.display = 'block';
})
const submitProj  = document.getElementById('submitPopUp');

submitProj?.addEventListener('click',()=>{
    popUpProject.style.display = 'none';
})

const taskPopUpSubmit = document.querySelector('.taskPopUpSubmit');
taskPopUpSubmit?.addEventListener('click',()=>{
    rightPanel?.children[0].classList.add('default');
    console.log((rightPanel?.lastChild))
    popUpProject.style.display = 'none'
    if(rightPanel?.children[0].className == 'default')
    {
        let child = rightPanel!.children
        console.log(rightPanel!.children);
        if (child[0].id == "viewToday")
        {
            createTask("today",(<HTMLInputElement>document.querySelector('.taskPopUpInput')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value);
            renderTasksToday();
        }
        else if(child[0].id == "viewWeek")
        {
            createTask("week",(<HTMLInputElement>document.querySelector('.taskPopUpInput')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value);
            renderTasksWeek();
        }
        else if(child[0].id == "viewImportant")
        {
            createTask("important",(<HTMLInputElement>document.querySelector('.taskPopUpInput')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value);
            renderTasksImportant();
        }
        return 
    }
    else
    {
        console.log("Wordong?")
        let child = rightPanel!.children
        createTaskCustom(parseInt(child[0].classList[1]),(<HTMLInputElement>document.querySelector('.taskPopUpInput')).value,(<HTMLInputElement>document.getElementById('taskPopUpPrio')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value);
        renderTasksCustom();
    }
    

});

