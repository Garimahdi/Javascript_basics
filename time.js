let clock = document.getElementById('clock');
let seconds;
let minutes, hours;
seconds = new Date().getSeconds();
minutes = new Date().getMinutes();
hours = new Date().getHours();
clock.innerHTML = hours+':'+minutes+':'+seconds;

window.setInterval(function(){
    let today = new Date(); // The positioning of this variable is the key to make the clock works properly
                            // If it's placed outside, ++ and if conditioning is needed (kind of cumbersome technique)
    seconds = today.getSeconds();
    minutes = today.getMinutes();
    hours = today.getHours();
    clock.innerHTML = hours+':'+minutes+':'+seconds;
},1000)