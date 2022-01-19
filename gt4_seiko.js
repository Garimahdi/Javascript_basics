let ms = document.getElementById('ms');
let secs = document.getElementById('secs');
let mins = document.getElementById('mins');
let startStop = document.getElementById('start_stop');
let reset = document.getElementById('reset');
let isRunning = false;
let startTime, currentTime, elapsedTime = 0;
let stopwatch;
let minutes, seconds, remain;
let mouseClick = 0;

function ms_format(x){
    if(x < 100 && x > 9){
        return '0'+x;
    }else if(x < 10){
        return '0'+'0'+x;
    }else{
        return x;
    }
}

function sec_min_format(y){
    if(y < 10){
        return '0'+y;
    }else{
        return y;
    }
}

startStop.onclick = function(){
    if(!isRunning){
        isRunning = true
        if(elapsedTime == 0){
            startTime = new Date().getTime();
        }else{
            startTime = new Date().getTime() - elapsedTime;
        }
        stopwatch = window.setInterval(function(){
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;
            console.log(elapsedTime);

            minutes = Math.floor(elapsedTime/60000);
            remain = elapsedTime - (minutes * 60000);

            seconds = Math.floor(elapsedTime/1000);
            remain -= (seconds*1000);

            mins.innerHTML = sec_min_format(minutes);
            secs.innerHTML = sec_min_format(seconds);
            ms.innerHTML = ms_format(remain);
        })
    }else{
        window.clearInterval(stopwatch);
        isRunning = false;
    }
}

reset.onclick = function(){
    startTime = new Date().getTime();
    if(!isRunning){
        mins.innerHTML = '00';
        secs.innerHTML = '00';
        ms.innerHTML = '000';
        document.getElementById('timestamp').innerHTML = '';
    }else{
        elapsedTime = 0;
        mouseClick++
        document.getElementById('timestamp').innerHTML += '<li>'+'Lap '+mouseClick+' : '+mins.innerHTML+"'"+secs.innerHTML+'.'+ms.innerHTML+"''"+'</li>';
    }
}