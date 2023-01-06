import { popUp } from "./default";

export const addTaskBtn = () =>{
    
    const taskBtn = document.createElement('button')


    taskBtn.setAttribute('id','addTaskBtn');
    taskBtn.setAttribute('type','button');

    
    taskBtn.textContent = "+Add";

    taskBtn.addEventListener('click',()=>{popUp.style.display = 'block'})


    return taskBtn;

}

export const appendPopUp = ()=>{
    
    const generatePopUp =  document.createElement('div');
    const taskTitle = document.createElement('input')
    const taskDate = document.createElement('input')
    const taskPrio = document.createElement('select')
    const prioLow = document.createElement('option');
    const prioMedium = document.createElement('option')
    const prioHigh = document.createElement('option');
    const closeBtn = document.createElement('button');
    const submitBtn = document.createElement('button');

    taskPrio.appendChild(prioLow);
    taskPrio.appendChild(prioMedium);
    taskPrio.appendChild(prioHigh);
    generatePopUp.appendChild(taskTitle);
    generatePopUp.appendChild(taskDate);
    generatePopUp.appendChild(taskPrio);
    generatePopUp.appendChild(submitBtn);
    generatePopUp.appendChild(closeBtn);

;
    prioHigh.textContent = "High";
    prioLow.textContent = "Low";
    prioMedium.textContent = "Medium";
    closeBtn.textContent = "Close";
    submitBtn.textContent = "Submit";


    taskTitle.setAttribute('type','text');
    taskDate.setAttribute('type','date');
    taskPrio.setAttribute('type','select');
    generatePopUp.setAttribute('id','generatePopUp');
    closeBtn.setAttribute('id','closeBtnPopUp');
    submitBtn.setAttribute('id','submitBtnPopUp');
    
    closeBtn.addEventListener('click',()=>popUp.style.display ='none')

    return generatePopUp;
}
