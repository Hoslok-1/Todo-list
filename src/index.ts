import './styles/index.css'
import {  projectPopUp, renderViewWeek,renderViewToday,renderViewImportant } from './dom';
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




const submitProjPopUp = document.getElementById('submitPopUp');
submitProjPopUp?.addEventListener('click',()=>{createProject()})
//addTaskBtn?.addEventListener('click',()=>{createTask()});



todayProject?.addEventListener('click',()=>{renderViewToday()});
weekProject?.addEventListener('click',()=>{renderViewWeek()});
importantProject?.addEventListener('click',()=>{renderViewImportant()});