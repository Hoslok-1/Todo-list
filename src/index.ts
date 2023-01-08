import './styles/index.css'
import { projectPopUp } from './dom';
import { createProject } from './projects';

export const container = document.getElementById('container');
const addProjectBtn = document.getElementById('addProjectBtn');

projectPopUp();



const submitProjPopUp = document.getElementById('submitPopUp');
submitProjPopUp?.addEventListener('click',()=>{createProject((<HTMLInputElement>document.getElementById("titlePopUp")).value)})

