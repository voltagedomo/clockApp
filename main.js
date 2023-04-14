// Clock Program by Alexander Alkin

// Event Listeners
document
  .getElementById("timezone-menu")
  .addEventListener("change", timezoneChange);

document.getElementById("format-menu").addEventListener("change", switchFormat);

// Variables
let timezone = document.getElementById("timezone-menu").value;
let timeDisplay = document.getElementById("display-clock");
let today = new Date();
let currentHours = today.getHours();
let currentMinutes = today.getMinutes();
let currentSeconds = today.getSeconds();
let selectedFormat;
let timezoneAdjust =
  // Display Time as soon as page is opened so there is no delay
  (currentHours = ("0" + currentHours).slice(-2));
if (currentHours > 12) {
  currentHours -= 12;
}
currentMinutes = ("0" + currentMinutes).slice(-2);
currentSeconds = ("0" + currentSeconds).slice(-2);
timeDisplay.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;

// Default to 12 hr time
setInterval(updateTime12, 1000);

// Change to 12 hour format or 24 hour format for the clock depending on menu selection
function switchFormat() {
  selectedFormat = document.getElementById("format-menu").value;
  if (selectedFormat === "12hr") {
    console.log("switch to 12hr");
    clearTimeout(updateTime24);
    setInterval(updateTime12, 1000);
  } else if (selectedFormat === "24hr") {
    console.log("switch to 24hr");
    clearTimeout(updateTime12);
    setInterval(updateTime24, 1000);
  }
}

function updateTime24() {
  // The code below circumvents an issue where this function still runs even while I have cleared the interval
  if (selectedFormat === "12hr") {
    return;
  }
  // The getTime functions do not add a zero if the number is below 10 resulting in weird looking time like 1:1:52 so here I check to see if number is lower than 10 and if it is then add 0 before number
  let today = new Date();
  let currentHours = today.getHours();
  let currentMinutes = today.getMinutes();
  let currentSeconds = today.getSeconds();
  currentHours = ("0" + currentHours).slice(-2);
  currentMinutes = ("0" + currentMinutes).slice(-2);
  currentSeconds = ("0" + currentSeconds).slice(-2);
  timeDisplay.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;
}

function updateTime12() {
  // The code below circumvents an issue where this function still runs even while I have cleared the interval
  if (selectedFormat === "24hr") {
    return;
  }
  // The getTime functions do not add a zero if the number is below 10 resulting in weird looking time like 1:1:52 so here I check to see if number is lower than 10 and if it is then add 0 before number
  let today = new Date();
  let currentHours = today.getHours();
  let currentMinutes = today.getMinutes();
  let currentSeconds = today.getSeconds();
  currentHours = ("0" + currentHours).slice(-2);
  currentMinutes = ("0" + currentMinutes).slice(-2);
  currentSeconds = ("0" + currentSeconds).slice(-2);
  if (currentHours > 12) {
    currentHours -= 12;
  }

  timeDisplay.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;
}

// Switch the time according to the time zone
function timezoneChange() {
  timezone = document.getElementById("timezone-menu").value;
  console.log(timezone);
}
