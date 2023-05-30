// Control GUI Changes

// Variables
let worldClockDiv = document.getElementById("world-clocks-div");
let stopwatchDiv = document.getElementById("stopwatch-div");
let stopwatchDiv2 = document.getElementById("display-stopwatch");
let timerDiv = document.getElementById("timer-div");
let worldClocksLink = document.getElementById("selector-clocks");
let stopwatchLink = document.getElementById("selector-stopwatch");
let timerLink = document.getElementById("selector-timer");
let timerDiv2 = document.getElementById("timer-display");

// Initialize div style and Selector style
// switching div
stopwatchDiv.style.display = "none";
timerDiv.style.display = "none";
worldClockDiv.style.display = "block";
// altering style of selector to make it look better
stopwatchLink.style.color = "blue";
stopwatchLink.style.textDecoration = "underline";
stopwatchLink.style.cursor = "pointer";
timerLink.style.color = "blue";
timerLink.style.textDecoration = "underline";
timerLink.style.cursor = "pointer";
worldClocksLink.style.color = "";
worldClocksLink.style.textDecoration = "";
worldClocksLink.style.cursor = "";
stopwatchDiv2.style.display = "none";
timeDisplay.style.display = "block";
canvas.style.display = "block";
timerDiv2.style.display = "none";

// Stopwatch link clicked
stopwatchLink.addEventListener("click", displayStopwatch);

function displayStopwatch() {
  // switching div
  worldClockDiv.style.display = "none";
  timerDiv.style.display = "none";
  stopwatchDiv.style.display = "block";
  // altering style of selector to make it look better
  worldClocksLink.style.color = "blue";
  worldClocksLink.style.cursor = "pointer";
  timerLink.style.color = "blue";
  timerLink.style.cursor = "pointer";
  stopwatchLink.style.color = "";
  stopwatchLink.style.textDecoration = "";
  stopwatchLink.style.cursor = "";
  stopwatchDiv2.style.display = "block";
  timeDisplay.style.display = "none";
  canvas.style.display = "none";
  timerDiv2.style.display = "none";
}

// Timer link clicked
timerLink.addEventListener("click", displayTimer);

function displayTimer() {
  // switching div
  worldClockDiv.style.display = "none";
  stopwatchDiv.style.display = "none";
  timerDiv.style.display = "block";
  // altering style of selector to make it look better
  stopwatchLink.style.color = "blue";
  stopwatchLink.style.cursor = "pointer";
  worldClocksLink.style.color = "blue";
  worldClocksLink.style.cursor = "pointer";
  timerLink.style.color = "";
  timerLink.style.textDecoration = "";
  timerLink.style.cursor = "";
  stopwatchDiv2.style.display = "none";
  timeDisplay.style.display = "none";
  canvas.style.display = "none";
  timerDiv2.style.display = "block";
}

// World clocks link clicked
worldClocksLink.addEventListener("click", displayWorldClock);

function displayWorldClock() {
  // switching div
  stopwatchDiv.style.display = "none";
  timerDiv.style.display = "none";
  worldClockDiv.style.display = "block";
  // altering style of selector to make it look better
  stopwatchLink.style.color = "blue";
  stopwatchLink.style.cursor = "pointer";
  timerLink.style.color = "blue";
  timerLink.style.cursor = "pointer";
  worldClocksLink.style.color = "";
  worldClocksLink.style.textDecoration = "";
  worldClocksLink.style.cursor = "";
  stopwatchDiv2.style.display = "none";
  timeDisplay.style.display = "block";
  canvas.style.display = "block";
  timerDiv2.style.display = "none";
}
