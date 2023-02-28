let today = new Date();

let display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

let dateString = today.toLocaleDateString('en-US', display);

let header = document.getElementById('date-header');
header.textContent = `${dateString}`;
