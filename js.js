let secondsTime = document.getElementById("seconds");

let seconds = 0;

setInterval(() => {
  seconds++;
  secondsTime.innerHTML = seconds;
}, 1000);
