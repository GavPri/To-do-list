let today = new Date();

let display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

let dateString = today.toLocaleDateString('en-US', display);

let header = document.getElementById('date-header');
header.textContent = `${dateString}`;

// auto type 
let typed = new typed('.auto-text',{
    strings: ['Get Productive','Reduce Stress','Manage Time','Collaborate Better','Take Control'],
    typedSpeed:150,
    backSpeed:150,
    loop:true
});