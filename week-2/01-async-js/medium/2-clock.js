let count = 0;
function updateCounter(){
   count++;
   updateClock(count); 
}

function updateClock(count){
    let currTime = convertTime(count);
    console.log(currTime);

}

function convertTime(second){
    let Hour = Math.floor(second/3600);
    let Minute = Math.floor((second%3600)/60);
    let Sec = Math.floor(second%60);

let fHour = padZero(Hour);
let fMin  = padZero(Minute);
let fSec = padZero(Sec);

let time =  `${fHour}:${fMin}:${fSec}`;
return time;
}

function padZero(num){
    if(num < 10){
        let p = '0'+num;
        return p;
    }
    else{
        return num;
    }
}

setInterval(updateCounter , 1000);
