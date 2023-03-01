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