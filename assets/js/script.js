let today = new Date();

let display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

let dateString = today.toLocaleDateString('en-US', display);

let header = document.getElementById('date-header');
header.textContent = `${dateString}`;

// auto type 
const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Gain Control", "Manage Time", "Reduce Stress","Get Productive"];
const typingDelay = 150;
const erasingDelay = 150;
const newLetterDelay = 1500;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
// Task Submit Button 

document.querySelector('#task-submit').addEventListener('mouseenter', entering);
document.querySelector('#task-submit').addEventListener('mouseleave', leaving);

function entering(ev){
  ev.currentTarget.style.backgroundColor = '#333';
  ev.currentTarget.style.color = 'rgb(250, 249, 246)'
}
function leaving (ev){
  ev.currentTarget.style.backgroundColor = 'rgb(250, 249, 246)';
  ev.currentTarget.style.color = '#333'
}

// Creating the list 

const form = document.querySelector('form'); 
console.log('form');
const taskList = document.querySelector('#task-list-ul'); 

form.addEventListener('submit', function (event){
  event.preventDefault();
  console.log('Form Submitted');
  const taskInput = document.getElementById('task');
  const taskValue = taskInput.value

  const newListItem = document.createElement('li');
  newListItem.textContent = taskInput.value;
  taskList.appendChild(newListItem);

  taskInput.value = '';

  newListItem.addEventListener('click', function(){
    newListItem.style.textDecoration = 'line-through';
  })

  newListItem.addEventListener('dblclick', function(){
    taskList.removeChild(newListItem);
  })
})

// modal functionality 

// create required variables. 

let openModalButton = document.getElementById('open-modal');
let closeModalButton = document.getElementById('close-modal');
let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal');

// Add event listeners

openModalButton.addEventListener('click', () => {
  openModal(modal)
})
closeModalButton.addEventListener('click', () => {
  closeModal(modal)
})

// Create the functions 

function openModal(modal){
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal){
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Open Modal Button Effects

openModalButton.addEventListener('mouseenter', entering); 
openModalButton.addEventListener('mouseleave', leaving); 

function entering(ev){
  ev.currentTarget.style.backgroundColor = '#333';
  ev.currentTarget.style.color = '#fff'
}


// Change theme mouse events. 
document.querySelector('#change-theme').addEventListener('mouseenter', entering);
document.querySelector('#change-theme').addEventListener('mouseleave', leaving);

function entering(ev){
  ev.currentTarget.style.backgroundColor = '#333';
  ev.currentTarget.style.color = 'rgb(250, 249, 246)'
  ev.currentTarget.style.transition = '1.05s'
}
function leaving(ev){
  if (body.style.background === "rgb(250, 249, 246)"){
    ev.currentTarget.style.backgroundColor = 'rgb(250, 249, 246)';
    ev.currentTarget.style.color = '#333'
  } else {
    ev.currentTarget.style.backgroundColor = '#333';
    ev.currentTarget.style.color = 'rgb(250, 249, 246)'
  }
  ev.currentTarget.style.transition = '1.05s'
}

// Change Theme Functionality 

let themeChange = document.getElementById('change-theme');
let body = document.querySelector('body');
let label = document.querySelector('label');
let input = document.querySelector('input');
let taskSubmit = document.getElementById('task-submit');
let headerBorder = document.getElementById('header');
let borderBottom = document.getElementById('auto-container');
themeChange.addEventListener('click', function (){

  if (body.style.background === "rgb(250, 249, 246)"){
    // background color changes. 
    body.style.backgroundColor ='#333';
    header.style.color = 'rgb(250, 249, 246)';
    typedTextSpan.style.color = 'rgb(250, 249, 246)';
    label.style.color = 'rgb(250, 249, 246)';
    input.style.background = '#333';
    // border changes
    headerBorder.style.borderBottomColor = 'rgba(250,249,246)';
    borderBottom.style.borderBottomColor = 'rgba(250,249,246)';
    //  Button changes.
    openModalButton.style.background = 'rgba(68, 68, 68, 0.761)';
    openModalButton.style.color = 'rgb(250, 249, 246)';
    openModalButton.style.boxShadow = '0px 6px #0e0d0dc2';
    openModalButton.style.border = '1px solid rgb(250, 249, 246)';

    themeChange.style.background = 'rgba(68, 68, 68, 0.761)';
    themeChange.style.color = 'rgb(250, 249, 246)';
    themeChange.style.boxShadow = '0px 6px #0e0d0dc2';
    themeChange.style.border = '1px solid rgb(250, 249, 246)';

    taskSubmit.style.background = 'rgba(68, 68, 68, 0.761)';
    taskSubmit.style.color = 'rgb(250, 249, 246)';
    taskSubmit.style.boxShadow = '0px 6px #0e0d0dc2';
    taskSubmit.style.border = '1px solid rgb(250, 249, 246)'
    // transition speeds
    body.style.transition = '1.25s';
    header.style.transition = '1.25s';
    typedTextSpan.style.transition ='1.25s';
    label.style.transition ='1.25s'
    input.style.transition = '1.25s';
    openModalButton.style.transition = '1.25s';
    taskSubmit.style.transition = '1.25s';
    themeChange.style.transition ='1.25s';
    headerBorder.style.transition ='1.25s';
    borderBottom.style.transition = '1.25s';

  } else{

    // background changes. 

    body.style.background = 'rgb(250, 249, 246)';
    header.style.color = '#333';
    typedTextSpan.style.color = '#333';
    label.style.color = '#333';
    input.style.background = 'rgb(250, 249, 246)';

    // button chnages 

    openModalButton.style.background = 'rgba(250,249,246)';
    openModalButton.style.color = 'rgb(68, 68, 68, 0.761)';
    openModalButton.style.boxShadow = '0px 6px #0e0d0dc2';
    openModalButton.style.border = '1px solid rgb(68, 68, 68, 0.761)';

    taskSubmit.style.background = 'rgba(250,249,246)';
    taskSubmit.style.color = 'rgb(68, 68, 68, 0.761)'
    taskSubmit.style.boxShadow = '0px 6px #0e0d0dc2';
    taskSubmit.style.border = '1px solid rgb(68, 68, 68, 0.761)';

    // border lines 
    headerBorder.style.borderBottomColor = '#333';
    borderBottom.style.borderBottomColor = '#333';
  }
})