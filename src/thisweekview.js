import { container } from ".";
import { addTaskF } from "./addtask.js";
import { addTaskFunc,tasksThisWeek } from "./addtaskFunc.js";
import { generatePopUp } from "./todayview";
export const popUp = document.createElement('div');

export const thisweekView = () =>{
    const thisweekPage = document.createElement('div');
    const addTaskBtnTV = document.createElement('button');
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
    submitPopUp.setAttribute('id','submitPopUp');
    closePopUp.setAttribute('id','closePopUp');


    thisweekPage.appendChild(addTaskBtnTV);
    document.body.appendChild(popUp)
    popUp.appendChild(addTaskF());
    popUp.appendChild(popUpButtons);
    popUpButtons.appendChild(submitPopUp);
    popUpButtons.appendChild(closePopUp);


    const title = document.getElementById('titleInput');
    const date = document.getElementById('dueDateInput');

    closePopUp.addEventListener('click',()=>{popUp.style.display = 'none';container.id = "container";popUp.remove()});

    addTaskBtnTV.addEventListener('click',()=>{
        if(tasksThisWeek.length != 0)
            {
                //generatePopUp();
                console.log("generating popup...")
            };
            popUp.style.display = 'block';
            container.id = "blurredPopUp"
            //document.getElementById('popUp').style.display = 'block';
    });

    document.getElementById('submitPopUp').addEventListener('click',()=>{addTaskFunc(title.value,date.value,2);});

    
    
    return thisweekPage;
}