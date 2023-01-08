import { projectsList } from "./projects";
import { container } from ".";



const generatedProjectList = document.querySelector('.projects-list');

export function renderProjects()
{
    generatedProjectList!.textContent = ''   
    for(let i = 0;i<projectsList.length;i++)
    {
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('sidebarProject');
        projectTitle.textContent = projectsList[i].title;
        generatedProjectList?.appendChild(projectTitle);

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