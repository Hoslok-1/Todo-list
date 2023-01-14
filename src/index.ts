import './styles/index.css'
import {  projectPopUp, renderViewWeek,renderViewToday,renderViewImportant, taskPopUp,renderTasksToday, renderTasksWeek, renderTasksImportant } from './dom';
import { createProject } from './projects';
import { createTask } from './tasks';

export const container = document.getElementById('container');
const addProjectBtn = document.getElementById('addProjectBtn');
const rightPanel = document.getElementById('rightPanel');
const addTaskBtn = document.getElementById('addTaskBtn');
const todayProject = document.getElementById('todayProject');
const weekProject = document.getElementById('weekProject');
const importantProject = document.getElementById('importantProject');


projectPopUp();
taskPopUp();
const taskPopUpInput = (<HTMLInputElement>document.querySelector('.taskPopUpInput')).value;
const taskPopUpDate = (<HTMLInputElement>document.querySelector('.taskPopUpDate')).value;
const taskPopUpPrio = (<HTMLInputElement>document.getElementById('taskPopUpPrio')).value;


const submitProjPopUp = document.getElementById('submitPopUp');
submitProjPopUp?.addEventListener('click',()=>{createProject()})
//addTaskBtn?.addEventListener('click',()=>{createTask()});



todayProject?.addEventListener('click',()=>{renderViewToday();renderTasksToday()});
weekProject?.addEventListener('click',()=>{renderViewWeek();renderTasksWeek()});
importantProject?.addEventListener('click',()=>{renderViewImportant();renderTasksImportant()});

const taskPopUpSubmit = document.querySelector('.taskPopUpSubmit');
taskPopUpSubmit?.addEventListener('click',()=>{
    if(rightPanel?.firstChild)
    {
        let child = rightPanel.children
        console.log(rightPanel.children);
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
    

    createTask(0,(<HTMLInputElement>document.querySelector('.taskPopUpInput')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value,(<HTMLInputElement>document.querySelector('.taskPopUpDate')).value);
});
