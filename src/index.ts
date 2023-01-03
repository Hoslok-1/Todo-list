import './styles/index.css'
import { defaultProj,defaultProjBtn,defaultInput,defaultProjects,defaultBtn } from './default';

const leftPanel = document.getElementById('leftPanel');

//appends the default projects (i,e today) from default.ts
leftPanel?.appendChild(defaultProj());
leftPanel?.appendChild(defaultProjBtn());







const addProjBtn = document.getElementById('defaultAddBtn');
addProjBtn?.addEventListener('click',()=>{defaultBtn.appendChild(defaultInput());});