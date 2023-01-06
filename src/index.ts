import './styles/index.css'
import { defaultProj,defaultProjBtn,defaultInput,defaultProjects,defaultBtn,inputSubmit, rightPanelDefaults } from './default';
import { getProject } from './addProj';
import { iterateTasks,checkChildren } from './viewTasks';

export const leftPanel = document.getElementById('leftPanel');
export const rightPanel = document.getElementById('rightPanel');
export const generatedProject = document.createElement('div');


//appends the default projects (i,e today) from default.ts
leftPanel?.appendChild(defaultProj());


leftPanel?.appendChild(generatedProject)
generatedProject.setAttribute('id','generatedProject');


leftPanel?.appendChild(defaultProjBtn());


//rightPanel?.appendChild(rightPanelDefaults());

const addProjBtn = document.getElementById('defaultAddBtn');
const defaultToday = document.getElementById('defaultToday');


addProjBtn?.addEventListener('click',()=>{defaultBtn.appendChild(defaultInput());});
inputSubmit.addEventListener('click',()=>{generatedProject.appendChild(getProject());checkChildren();});
defaultToday?.addEventListener('click',()=>{document.getElementById('view')?.remove();rightPanel?.appendChild(rightPanelDefaults());iterateTasks("today");})
