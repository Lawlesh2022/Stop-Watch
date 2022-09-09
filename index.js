let secs = 0;
let mins = 0;
let hrs = 0;
let dispSecs = 0;
let dispMins = 0;
let dispHrs = 0;
let interval = null;
let state = "stopped"
function stopWatch(){
    secs++;
    if(secs/60==1){
        secs = 0;
        mins++;
        if(mins/60==1){
            mins=0;
            hrs++;
        }
    }
    if(secs<10){
        dispSecs = "0"+secs.toString();
    }
    else{
        dispSecs = secs;
    }
    if(mins<10){
        dispMins = "0"+mins.toString();
    }
    else{
        dispMins = mins;
    }
    if(hrs<10){
        dispHrs = "0"+hrs.toString();
    }
    else{
        dispHrs = hrs;
    }
    document.getElementById("display").innerHTML = dispHrs+":"+dispMins+":"+dispSecs;
}
document.getElementById("pause").disabled =true;
document.getElementById("stop").disabled =true;    
function start(){
   if(state == "stopped"){
      interval = window.setInterval(stopWatch, 1000);
      document.getElementById("pause").innerHTML = "pause";
      state = "started";
      document.getElementById("start").disabled = true; 
      document.getElementById("pause").disabled = false;
      document.getElementById("stop").disabled = false;      
   }
}
function stop(){
    if(state == "started"){
        window.clearInterval(interval);
        secs = 0;
        mins = 0;
        hrs = 0;
        document.getElementById("display").innerHTML = "00:00:00";
        document.getElementById("start").innerHTML = "start";
        state = "stopped";
        document.getElementById("start").disabled = false;
        document.getElementById("pause").disabled = true;
        document.getElementById("stop").disabled = true;
    }
}
function pause(){
    if(state == "started"){
        window.clearInterval(interval);
        document.getElementById("pause").innerHTML = "continue";
        state = "stopped";
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = true;
    }
    else{
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("pause").innerHTML = "pause";
        state = "started";
        document.getElementById("stop").disabled = false;

    }
}