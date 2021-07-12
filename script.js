var mini = document.getElementById('minisec');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var seconds = 0;
var minutes = 0;
var miniseconds = 0;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var interval;

function startTimer(){
    miniseconds++;
    if(miniseconds < 10){
        mini.innerHTML = "0" + miniseconds;
    }
    if(miniseconds >= 10 && miniseconds < 100){
        mini.innerHTML = miniseconds;
    }
    if(miniseconds > 99){
        miniseconds = 0;
        mini.innerHTML = "00";
        seconds++;    
    }
    if(seconds < 10){
        sec.innerHTML = "0" + seconds;
    }
    if(seconds >= 10 && seconds < 60){
        sec.innerHTML = seconds;
    }
    if(seconds > 59){
        seconds = 0;
        sec.innerHTML = "00";
        minutes++;
    }
    if(minutes < 10){
        min.innerHTML = "0" + minutes;
    }
    if(minutes >= 10 && minutes < 60){
        min.innerHTML = minutes;
    }
}

start.onclick = function(){
    interval = setInterval(startTimer);
};

stop.onclick = function(){
    clearInterval(interval);
};

reset.onclick = function(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    miniseconds = 0;
    min.innerHTML = "00";
    mini.innerHTML = "00";
    sec.innerHTML = "00";
};