const defaultProjects = document.createElement('div');
const defaultBtn = document.createElement('div');


// generates DOM for 'Today Tasks'
export const defaultProj = () =>{

    const defaultToday = document.createElement('div');
    const todayName = document.createElement('div');


    defaultProjects.appendChild(defaultToday);
    defaultToday.appendChild(todayName);


    defaultProjects.classList.add('defaultProjects');
    defaultToday.classList.add('defaultToday');
    defaultToday.classList.add('btn');
    todayName.classList.add('todayName');
    

    todayName.textContent = "Tasks Today"; 

    return defaultProjects;
} 

// generates DOM for 'Add Project' button 
export const defaultProjBtn = () =>{

    const defaultAddBtn = document.createElement('div');

    defaultBtn.appendChild(defaultAddBtn);

    defaultBtn.classList.add('defaultBtns');
    defaultAddBtn.classList.add('defaultAddBtn');
    defaultAddBtn.classList.add('btn');
    defaultAddBtn.setAttribute('id','defaultAddBtn');


    defaultAddBtn.textContent = "Add Project";
    
    return defaultBtn;

}

// generates DOM for input box and submit button when 'Add Project' is clicked
export const defaultInput = () =>{

    const inputProj = document.createElement('div');
    const inputBox = document.createElement('input');
    const inputSubmit = document.createElement('button');
    const inputDate = document.createElement('input');
    const inputPriority = document.createElement('select');
    const inputPriorityLow = document.createElement('option');
    const inputPriorityMedium = document.createElement('option');
    const inputPriorityHigh = document.createElement('option');
    const inputClose = document.createElement('button');


    inputProj.appendChild(inputBox);
    inputProj.appendChild(inputDate);
    inputProj.appendChild(inputPriority);
    inputPriority.appendChild(inputPriorityLow);
    inputPriority.appendChild(inputPriorityMedium);
    inputPriority.appendChild(inputPriorityHigh);
    inputProj.appendChild(inputSubmit);
    inputProj.appendChild(inputClose);
    
    
    inputBox.setAttribute('placeholder',"What's the task?");
    inputPriority.setAttribute('id','priority');
    inputBox.setAttribute('type','text');
    inputDate.setAttribute('type','date');
    inputProj.classList.add('inputProj');
    inputBox.classList.add('inputBox');
    inputSubmit.classList.add('inputSubmit');
    inputDate.classList.add('inputDate');
    inputClose.classList.add('inputClose');


    inputPriorityLow.textContent = "Low";
    inputPriorityMedium.textContent = "Medium";
    inputPriorityHigh.textContent = "High";
    inputSubmit.textContent = "Submit";
    inputClose.textContent = "Close";


    return inputProj;

}

export {defaultProjects,defaultBtn}