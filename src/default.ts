const defaultProjects = document.createElement('div');
const defaultBtn = document.createElement('div');
export const inputSubmit = document.createElement('button');


// generates DOM for 'Today Tasks'
export const defaultProj = () =>{

    const defaultToday = document.createElement('div');
    const todayName = document.createElement('div');


    defaultProjects.appendChild(defaultToday);
    defaultToday.appendChild(todayName);


    defaultProjects.classList.add('defaultProjects');
    defaultToday.classList.add('defaultToday');
    defaultToday.classList.add('projBtn');
    todayName.classList.add('todayName');
    defaultToday.setAttribute('id','defaultToday');

    todayName.textContent = "Tasks Today"; 

    return defaultProjects;
} 

// generates DOM for 'Add Project' button 
export const defaultProjBtn = () =>{

    const defaultAddBtn = document.createElement('div');

    defaultBtn.appendChild(defaultAddBtn);

    defaultBtn.classList.add('defaultBtn');
    defaultAddBtn.classList.add('defaultAddBtn');
    defaultAddBtn.classList.add('btn');
    defaultAddBtn.setAttribute('id','defaultAddBtn');


    defaultAddBtn.textContent = "Add Project";
    
    return defaultBtn;

}

// generates DOM for input box when 'Add Project' is clicked
export const defaultInput = () =>{

    const inputProj = document.createElement('div');
    const inputBox = document.createElement('input');
    const inputClose = document.createElement('button');


    inputProj.appendChild(inputBox);

    inputProj.appendChild(inputSubmit);
    inputProj.appendChild(inputClose);
    
    
    inputClose.setAttribute('id','inputClose');
    inputSubmit.setAttribute('id','inputSubmit');
    inputBox.setAttribute('id','inputBox');
    inputBox.setAttribute('placeholder',"Project name?");
    inputBox.setAttribute('type','text');
    inputProj.setAttribute('id','inputProj');
    inputProj.classList.add('inputProj');
    inputBox.classList.add('inputBox');
    inputSubmit.classList.add('inputSubmit');
    inputClose.classList.add('inputClose');


    inputSubmit.textContent = "Submit";
    inputClose.textContent = "Close";

    
    inputClose.addEventListener('click',()=>{inputProj.remove()}) // removes 'inputProj' once close is clicked

    return inputProj;

}

export {defaultProjects,defaultBtn}