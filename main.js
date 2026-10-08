let alarm = document.getElementById("alarm");
let time = document.getElementById("time");
let startAlarm = document.getElementById("startAlarm");
let stopAlarm = document.getElementById("stopAlarm");
let audio = document.getElementById("audio");

let selectedTime = null;
let isPlaying = false;

alarm.addEventListener("submit", function (e){
    e.preventDefault();
    selectedTime = time.value;
    isPlaying = false;
})

stopAlarm.addEventListener("click", function (e){
    e.preventDefault();
    audio.pause();
    selectedTime = null;
    isPlaying = false;
})

setInterval(() => {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let actualTime = `${hours}:${minutes}`;    
    
    if (selectedTime === actualTime && !isPlaying){
        audio.play();
        audio.currentTime = 0;
        isPlaying = true;
    }else if (selectedTime !== actualTime && isPlaying){
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }
});