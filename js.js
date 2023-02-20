let secondsTime = document.getElementById("seconds");
let milliSecondsTime = document.getElementById("milliseconds");
let minutesTime = document.getElementById("minutes");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let lapButton = document.getElementById("lap");

// <button id="start">Start</button>
// <button id="stop">Stop</button>
// <button id="lap">Lap</button>
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

let counter = () => {
  setInterval((_) => {
    milliSeconds++;
    milliSecondsTime.innerHTML = milliSeconds;
    secondsTime.innerHTML = seconds;
    minutesTime.innerHTML = minutes;
    milliSeconds =
      milliSeconds == 99 ? ((milliSeconds = 0), seconds++) : milliSeconds++;
    seconds = seconds == 60 ? ((seconds = 0), minutes++) : seconds++;
  }, 1000 / 100);
};

startButton.addEventListener("click", counter);
stopButton.addEventListener("click", (_) => {
  clearInterval(counter); // stoppign time wont fucking work ass
});
