let stopwatch,
startStop,
reset,
startTime,
elapsedTime = 0,
currentTime,
timeInterval,
mins,
secs,
rem,
isRunning = false;

stopwatch = document.getElementById('stopwatch');
startStop = document.getElementById('start_stop');
reset = document.getElementById('reset');

startStop.onclick = function(){
    if(!isRunning){
        isRunning = true;
        if(elapsedTime == 0){
            startTime = new Date().getTime();
        }else{
            startTime = (new Date().getTime()) - elapsedTime;
        }

        timeInterval = window.setInterval(function(){
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;
            stopwatch.innerHTML = elapsedTime;

            mins = Math.floor(elapsedTime/60000);
            rem = elapsedTime - (mins*60000);

            secs = Math.floor(rem/1000);
            rem -= (secs*1000);

            stopwatch.innerHTML = mins + "'" + secs + "''" + rem;
        },1)
    }else{
        window.clearInterval(timeInterval);
        isRunning = false;
    }
}

reset.onclick = function(){
    startTime = new Date().getTime();
    elapsedTime = 0;
    if(isRunning){
        stopwatch.innerHTML = elapsedTime;
    }else{
        stopwatch.innerHTML = "00'00''000";
    }
}