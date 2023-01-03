import { container } from ".";
import { addTaskF } from "./addtask";
import { addTaskFunc,tasksToday,displayTaskFunc } from "./addtaskFunc.js";
export const popUp = document.createElement('div');

export const todayView = () =>{
    


    const todayPage = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    const popUpButtons = document.createElement('div');
    const closePopUp = document.createElement('button');
    const submitPopUp = document.createElement('button')
    const displayTasks = document.createElement('div');
    
    
    
    addTaskBtn.textContent = "Add Task";
    closePopUp.textContent = "Close";
    submitPopUp.textContent = "Submit"
    
    displayTasks.classList.add('displayTaskList');
    popUpButtons.classList.add('popUpButtons');
    todayPage.classList.add('todayPage');
    popUp.setAttribute('id','popUp');
    todayPage.setAttribute('id','todayPage');
    submitPopUp.setAttribute('id','submitPopUp');
    closePopUp.setAttribute('id','closePopUp');
    const popUpID =  document.getElementById('popUp');

    
    todayPage.appendChild(addTaskBtn);
    document.body.appendChild(popUp);
    popUp.appendChild(addTaskF());
    popUp.appendChild(popUpButtons);
    popUpButtons.appendChild(submitPopUp);
    popUpButtons.appendChild(closePopUp);
    todayPage.appendChild(displayTasks);
    
    
    //displayTaskFunc();
    
    const title = document.getElementById('titleInput');
    const date = document.getElementById('dueDateInput');
    
    document.getElementById('closePopUp').addEventListener('click',()=>{popUp.style.display = 'none';container.id = "container";popUp.remove();displayTaskFunc()});
    addTaskBtn.addEventListener('click',()=>{
        if(tasksToday.length != 0)
            {
                generatePopUp();
                console.log("generating popup...")
                
            }
            else
            {
                document.getElementById('popUp').style.display = 'block';
                container.id = "blurredPopUp"
            }
            //document.getElementById('popUp').style.display = 'block';
    });
    document.getElementById('submitPopUp').addEventListener('click',()=>{addTaskFunc(title.value,date.value,1);});


    
    
    
    return todayPage;

}

export function generatePopUp()
{
    const popUp = document.createElement('div');
    const popUpButtons = document.createElement('div');
    const closePopUp = document.createElement('button');
    const submitPopUp = document.createElement('button')

    closePopUp.textContent = "Close";
    submitPopUp.textContent = "Submit"

    popUpButtons.classList.add('popUpButtons');
    popUp.setAttribute('id','popUp');

    document.body.appendChild(popUp);

    popUp.appendChild(addTaskF());
    popUp.appendChild(popUpButtons);
    //popUpButtons.appendChild(submitPopUp);
    //popUpButtons.appendChild(closePopUp);
    document.getElementById('popUp').style.display = 'block';

    submitPopUp.setAttribute('id','submitPopUp');
    closePopUp.setAttribute('id','closePopUp');

    const title = document.getElementById('titleInput');
    const date = document.getElementById('dueDateInput')

    document.getElementById('closePopUp').addEventListener('click',()=>{popUp.style.display = 'none';container.id = "container";popUp.remove();displayTaskFunc();});
    document.getElementById('submitPopUp').addEventListener('click',()=>{addTaskFunc(title.value,date.value,1);});



}