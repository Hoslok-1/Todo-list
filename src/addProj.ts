
let projectsPresent:string[] = []



export const getProject = () =>{
    const projectName = document.createElement('div');
    let title = (<HTMLInputElement>document.getElementById('inputBox')).value;
    projectName.classList.add('projBtn');
    projectName.textContent = title;

    projectsPresent.push(title);

    return projectName;
}






