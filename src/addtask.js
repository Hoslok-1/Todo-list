export const addTaskF = () =>{

const addTask = document.createElement('div');
const addTitle = document.createElement('div');
const addDueDate = document.createElement('div');
const addTitleName = document.createElement('div');
const addTitleInput = document.createElement('input');
const addDescName = document.createElement('div');
const addDescInput = document.createElement('input');
const addDueDateName = document.createElement('div');
const addDueDateInput = document.createElement('input');


addTask.appendChild(addTitle);

addTask.appendChild(addDueDate);
addTitle.appendChild(addTitleName);
addTitle.appendChild(addTitleInput);

addDueDate.appendChild(addDueDateName);
addDueDate.appendChild(addDueDateInput);


addTask.classList.add('addTask');
addTitle.classList.add('addTitle');

addDueDate.classList.add('addDueDate');
addTitleName.classList.add('titleName');
addTitleInput.classList.add('titleInput');

addDueDateName.classList.add('dueDateName');
addDueDateInput.classList.add('dueDateInput');


addTitleName.textContent = "Title"
addTitleInput.textContent = "";

addDueDateName.textContent = "Due Date";



addTitleInput.setAttribute('id','titleInput');

addDueDateInput.setAttribute('id','dueDateInput');

addTitleInput.setAttribute('type','text');
addDueDateInput.setAttribute('type','date');

return addTask;  

}