import { container } from ".";
import { addTaskF } from "./addtask";
import { addTaskFunc } from "./addtaskFunc.js";

export const todayView = () =>{

    const todayPage = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    const popUp = document.createElement('div');
    const popUpButtons = document.createElement('div');
    const closePopUp = document.createElement('button');
    const submitPopUp = document.createElement('button')
    


    addTaskBtn.textContent = "Add Task";
    closePopUp.textContent = "Close";
    submitPopUp.textContent = "Submit"


    popUpButtons.classList.add('popUpButtons');
    todayPage.classList.add('todayPage');
    popUp.setAttribute('id','popUp');
    todayPage.setAttribute('id','todayPage');


    todayPage.appendChild(addTaskBtn);
    document.body.appendChild(popUp);
    popUp.appendChild(addTaskF());
    popUp.appendChild(popUpButtons);
    popUpButtons.appendChild(submitPopUp);
    popUpButtons.appendChild(closePopUp);

    const title = document.getElementById('titleInput');
    const desc = document.getElementById('descInput');
    const date = document.getElementById('dueDateInput');


    closePopUp.addEventListener('click',()=>{popUp.style.display = 'none';container.id = "container"});
    addTaskBtn.addEventListener('click',()=>{popUp.style.display = 'block';container.id = "blurredPopUp"});
    submitPopUp.addEventListener('click',()=>{addTaskFunc(title.value,date.value,1)});


    
    return todayPage;
}
