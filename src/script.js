// select the element
const toDoInput = document.querySelector('#toDoInput')
const addBtn = document.querySelector('#add-btn')
const taskList = document.querySelector('.taskList')
const dateDiv = document.querySelector('#date')

// get current date
let today = new Date()
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let currMonths = months[today.getMonth()]
let currDay = days[today.getDay()]
let currDate = today.getDate()

if(currDate < 10)
{
    currDate = '0'+currDate;
}
const displayDate = currDay+', '+currMonths+' '+currDate
dateDiv.innerHTML = displayDate

// check if the input field is empty and display alert
let disableBtn = () =>{
    let task = toDoInput.nodeValue
    if(task){
        addBtn.disabled = false
    }
    else{
        alert("Please enter a task.")
    }
}

//add a new task, taking input from user
let addTask = () =>{
    //creat a <div> for each task item
    let taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    // creat a custom checkbox using <button>
    let checkButton = document.createElement('button')
    checkButton.innerText = '\u2714'
    checkButton.classList.add('check-btn')
    taskDiv.appendChild(checkButton)

    // creat a <li> that will display task
    let newTask = document.createElement('li')
    newTask.innerText = toDoInput.value 
    taskDiv.appendChild(newTask)

    // crerate a button for deleting task
    let deletebutton = document.createElement('button')
    deletebutton.innerText = 'X'
    deletebutton.classList.add('delete-btn')
    taskDiv.appendChild((deletebutton))

    // finaally, append the taskkDiv to the <ul>
    // check for empty input field
    let task = toDoInput.value
    if(task){
        taskList.appendChild(taskDiv)
    }
    else{
        disableBtn()
    }

    // cleaar input field onccee task is  added
    toDoInput.value = ""
}

// delete or check a task
let deleteCompleteTask=(event)=>{
    let item = event.target
    if(item.classList[0] === 'delete-btn'){
        // delete the task
        item.parentElement.remove()
    }

    if(item.classList[0] === 'check-btn'){
        let taskDiv = item.parentElement.classList
        let taskText = item.nextElementSibling.classList
        // toggle styling for completed task
        taskDiv.toggle('change-color')
        taskText.toggle('strike-through')
    }
}

// use the Enter key to add task
// key code Enter key is 13
let EnterTask=(event)=>{
    if(event.keyCode == 13){
        let task = toDoInput.value
        if (task) {
            addTask(task)
        } else {
            return
        }
    }
}

// dark mode and light mode 
// var section = document.getElementById('section')
function changeColor(color) {
    document.body.style.background = color;
}
function changeFontColorDark(){
    document.body.style.color = '#fec3a6'
    document.getElementById("top").style.color = '#fec3a6'
    document.getElementById("section").style.background = '#141301'
    document.getElementById("section").style.borderColor = 'white'
    document.getElementById("add-btn").style.background = '#fec3a6'
    document.getElementById("add-btn").style.color = 'black'
    document.getElementById("toDoInput").style.borderBottomColor = '#ffd1bb'
    document.getElementById("toDoInput").style.color = 'white'
    document.getElementById("toDoInput").style.placeholder = 'white'

}
function changeFontColorLight(){
    document.body.style.color = 'black'
    document.getElementById("top").style.color = 'black'
    document.getElementById("section").style.background = '#ffd1bb'
    document.getElementById("section").style.borderColor = 'black'
    document.getElementById("add-btn").style.background = 'black'
    document.getElementById("add-btn").style.color = 'white'
    document.getElementById("toDoInput").style.borderBottomColor = 'black'
    document.getElementById("toDoInput").style.color = 'black'


}
function changeFontColorNice(){
    document.body.style.color = 'black'
    document.getElementById("top").style.color = 'black'
    document.getElementById("section").style.background = '#33ffaf'
    document.getElementById("section").style.borderColor = 'black'
    document.getElementById("add-btn").style.background = 'black'
    document.getElementById("add-btn").style.color = 'white'
    document.getElementById("toDoInput").style.borderBottomColor = 'black'
    document.getElementById("toDoInput").style.color = 'black'


}
function lightMode(){
    changeColor('#fec3a6')
    changeFontColorLight()
    
}
function darkMode(){
    changeColor('black')
    changeFontColorDark()
}
function niceMode(){
    changeColor('#33FFBD')
    changeFontColorNice()
}

// event listener
taskList.addEventListener('click', deleteCompleteTask)
addBtn.addEventListener('click', addTask)
document.addEventListener('keyup', EnterTask)
