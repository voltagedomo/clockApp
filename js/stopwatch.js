// Stopwatch part by Alexander Alkin - seperate js to reduce amount of scrolling needed

// Variables
let stopwatchDivvik = document.getElementById("stopwatch-out");
let startBtn = document.getElementById("stopwatch-start");
let resetBtn = document.getElementById("stopwatch-reset");
let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 0;
let lapList = document.getElementById("lap-times");
let laptime = [];
let elapsedSeconds = 0;
let elapsedMinutes = 0;
let elapsedHours = 0;
let timerStopped = true;

// can add milliseconds to make more legit
// function to calculate stopwatch time passed and return that time.
function calculateTimePassed() {
  elapsedSeconds++;
  if (elapsedSeconds > 59) {
    elapsedSeconds = 0;
    elapsedMinutes++;
    if (elapsedMinutes > 59) {
      elapsedHours++;
    }
  }

  return `${fixTime(elapsedHours)}:${fixTime(elapsedMinutes)}:${fixTime(
    elapsedSeconds
  )}`;
}

// function to start timer
function startTimer() {
  timerInterval = setInterval(() => {
    stopwatchDivvik.innerHTML = calculateTimePassed();
  }, 1000);
  // changing buttons to have alternate function
  startBtn.innerHTML = "Stop";
  resetBtn.innerHTML = "Record Lap";
  startBtn.removeEventListener("click", startTimer);
  startBtn.addEventListener("click", stopTimer);
  resetBtn.removeEventListener("click", resetTimer);
  resetBtn.addEventListener("click", recordLap);
}

// function to stop timer
function stopTimer() {
  clearInterval(timerInterval);
  // changing buttons to have standard button function
  startBtn.innerHTML = "Start";
  resetBtn.innerHTML = "Reset";
  startBtn.removeEventListener("click", stopTimer);
  startBtn.addEventListener("click", startTimer);
  resetBtn.removeEventListener("click", recordLap);
  resetBtn.addEventListener("click", resetTimer);
}

// function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedSeconds = 0;
  elapsedMinutes = 0;
  elapsedHours = 0;
  stopwatchDivvik.innerHTML = "00:00:00";
  elapsedTime = 0;
  lapCounter = 0;
  laptime = [];
  lapList.innerHTML = "";
}

// function to record laps and display the lap and time taken during lap in a new div
function recordLap() {
  stopwatchDivvik;
  elapsedTime = `${fixTime(elapsedHours)}:${fixTime(elapsedMinutes)}:${fixTime(
    elapsedSeconds
  )}`;
  console.log(elapsedTime);
  lapCounter++;
  let lap = document.createElement("li");
  // makes lap time smaller so more can fit on the screen before requiring to scroll
  lap.style.fontSize = "25px";
  lap.innerText = `Lap ${lapCounter}: ${elapsedTime}`;
  laptime.push(elapsedTime);
  document.getElementById("lap-times").appendChild(lap);
}

// event listener for start/stop, record lap/reset buttons
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// function to add 0's for time to make it look better
function fixTime(type) {
  type = ("0" + type).slice(-2);
  return type;
}
