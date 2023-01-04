import './styles/index.css'
import { defaultProj,defaultProjBtn,defaultInput,defaultProjects,defaultBtn,inputSubmit } from './default';
import { getProject } from './addProj';

const leftPanel = document.getElementById('leftPanel');
const generatedProject = document.createElement('div');


//appends the default projects (i,e today) from default.ts
leftPanel?.appendChild(defaultProj());


leftPanel?.appendChild(generatedProject)
generatedProject.setAttribute('id','generatedProject');

leftPanel?.appendChild(defaultProjBtn());






const addProjBtn = document.getElementById('defaultAddBtn');
addProjBtn?.addEventListener('click',()=>{defaultBtn.appendChild(defaultInput());});


inputSubmit.addEventListener('click',()=>{generatedProject.appendChild(getProject());});
