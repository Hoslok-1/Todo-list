import { container } from ".";
import { addTaskF } from "./addtask.js";

export const thisweekView = () =>{
    const thisweekPage = document.createElement('div');
    const addTaskBtnTV = document.createElement('button');
    const popUp = document.createElement('div');
    const popUpButtons = document.createElement('div');
    const closePopUp = document.createElement('button');
    const submitPopUp = document.createElement('button')


    addTaskBtnTV.textContent = "Add Task";
    closePopUp.textContent = "Close";
    submitPopUp.textContent = "Submit"


    popUpButtons.classList.add('popUpButtons');
    thisweekPage.classList.add('thisweekPage');
    popUp.setAttribute('id','popUp');
    thisweekPage.setAttribute('id','thisweekPage');


    thisweekPage.appendChild(addTaskBtnTV);
    document.body.appendChild(popUp)
    popUp.appendChild(addTaskF());
    popUp.appendChild(popUpButtons);
    popUpButtons.appendChild(submitPopUp);
    popUpButtons.appendChild(closePopUp);


    closePopUp.addEventListener('click',()=>{popUp.style.display = 'none';container.id = "container"});
    addTaskBtnTV.addEventListener('click',()=>{popUp.style.display = 'block';container.id = "blurredPopUp"});

    return thisweekPage;
}