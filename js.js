let secondsTime = document.getElementById("seconds");
let milliSecondsTime = document.getElementById("milliseconds");
let minutesTime = document.getElementById("minutes");

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

setInterval(() => {
  milliSeconds++;
  milliSecondsTime.innerHTML = milliSeconds;
  secondsTime.innerHTML = seconds;
  minutesTime.innerHTML = minutes;
  milliSeconds =
    milliSeconds == 99 ? ((milliSeconds = 0), seconds++) : milliSeconds++;
  seconds = seconds == 60 ? ((seconds = 0), minutes++) : seconds++;
}, 1000 / 500);
