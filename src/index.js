import './style.css';
const container = document.getElementById('container');


//Navigation bar code

const navBarClass = document.createElement('div')
const navBar = document.createElement('nav')
const navBarItems = document.createElement('ul')
const navBarItem1 = document.createElement('li')
const navBarItem2 = document.createElement('li')
const navBarItem3 = document.createElement('li')
const navBarProjects = document.createElement('ul')
const addProjectBtn = document.createElement('button')


container.appendChild(navBarClass)
navBarClass.appendChild(navBar)
navBar.appendChild(navBarItems)
navBarItems.appendChild(navBarItem1)
navBarItems.appendChild(navBarItem2)
navBarItems.appendChild(navBarItem3)
navBar.appendChild(navBarProjects)
navBarProjects.appendChild(addProjectBtn)


navBarClass.classList.add('navBarClass');
navBarItems.classList.add('initialProjects')
navBarProjects.classList.add('navBarProjects')
addProjectBtn.classList.add('addProject')

navBarItem1.textContent = "Today"
navBarItem2.textContent = "This Week"
navBarItem3.textContent = "Later"


addProjectBtn.textContent = "➕ Add Project"


// Text Code