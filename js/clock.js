// Clock Program by Alexander Alkin

// Variables
let timezoneMenu = document.getElementById("timezone-menu");
let timezoneSelected = document.getElementById("timezone-menu").value;
let timeDisplay = document.getElementById("display-clock");
let today = new Date();
let currentHours = today.getUTCHours();
let currentMinutes = today.getUTCMinutes();
let currentSeconds = today.getUTCSeconds();
let selectedFormat;
let currentTime = new Date();
let currentUTCTime = currentTime.getTime();
let currentUTCHours = currentTime.getUTCHours();
let currentUTCMinutes = currentTime.getUTCMinutes();

// Calculate time in selected timezone
let selectedTimezoneOffset = timezoneMenu.value;
let selectedTime = currentUTCTime + selectedTimezoneOffset * 60 * 60 * 1000;
let selectedTimeDate = new Date(selectedTime);
let selectedHours = selectedTimeDate.getHours();
let amOrPm = selectedHours >= 12 ? "pm" : "am";
selectedHours = selectedHours % 12;
selectedHours = selectedHours ? selectedHours : 12;
let selectedMinutes = selectedTimeDate.getMinutes();

// event listener
timezoneMenu.addEventListener("change", getTime);

// Set timezone options
let timezoneOptions = [
  {
    display: "Samoan Standard Time (SST)",
    name: "sst",
    value: -5,
    dstAffected: false,
  },
  {
    display: "Hawaii Standard Time (HST)",
    name: "hst",
    value: -4,
    dstAffected: false,
  },
  {
    display: "Alaska Standard Time (AKST)",
    name: "akst",
    value: -3,
    dstAffected: false,
  },
  {
    display: "Pacific Standard Time (PST)",
    name: "pst",
    value: -1,
    dstAffected: true,
  },
  {
    display: "Mountain Standard Time (MST)",
    name: "mst",
    value: 0,
    dstAffected: true,
  },
  {
    display: "Central Standard Time (CST)",
    name: "cst",
    value: 1,
    dstAffected: true,
  },
  {
    display: "Eastern Standard Time (EST)",
    name: "est",
    value: 2,
    dstAffected: true,
  },
  {
    display: "Atlantic Standard Time (AST)",
    name: "ast",
    value: 3,
    dstAffected: true,
  },
  {
    display: "Atlantic Daylight Time (ADT)",
    name: "adt",
    value: 4,
    dstAffected: true,
  },
  {
    display: "South Georgia Time (GST)",
    name: "gst",
    value: 4,
    dstAffected: false,
  },
  {
    display: "Cape Verde Time (CVT)",
    name: "cvt",
    value: 5,
    dstAffected: false,
  },
  {
    display: "Coordinated Universal Time (UTC)",
    name: "utc",
    value: 347,
    dstAffected: false,
  },
  {
    display: "Central European Time (CET)",
    name: "cet",
    value: 8,
    dstAffected: true,
  },
  {
    display: "Eastern European Time (EET)",
    name: "eet",
    value: 8,
    dstAffected: false,
  },
  {
    display: "Eastern African Time (EAT)",
    name: "eat",
    value: 9,
    dstAffected: false,
  },
  {
    display: "Armenian Time (AMT)",
    name: "amt",
    value: 10,
    dstAffected: false,
  },
  {
    display: "Oral Time (ORAT)",
    name: "orat",
    value: 11,
    dstAffected: false,
  },
  {
    display: "Bangladesh Time (BST)",
    name: "bst",
    value: 12,
    dstAffected: false,
  },
  {
    display: "Indochina Time Time (ICT)",
    name: "ict",
    value: 13,
    dstAffected: false,
  },
  {
    display: "Hong Kong Time (HKT)",
    name: "hkt",
    value: 14,
    dstAffected: false,
  },
  {
    display: "Korea Standard Time (KST)",
    name: "kst",
    value: 15,
    dstAffected: false,
  },
  {
    display: "Austrailian Eastern Standard Time (AEST)",
    name: "aest",
    value: 16,
    dstAffected: false,
  },
  {
    display: "Vladivostok Time (VLAT)",
    name: "vlat",
    value: 16,
    dstAffected: true,
  },
  {
    display: "New Zealand Standard Time (NZST)",
    name: "nzst",
    value: 18,
    dstAffected: false,
  },
  {
    display: "Pheonix Island Time (PHOT)",
    name: "phot",
    value: 19,
    dstAffected: false,
  },
];

// Add the array elements to menu
timezoneOptions.forEach((option) => {
  let timezoneOption = document.createElement("option");
  timezoneOption.value = option.value;
  timezoneOption.text = option.display;
  timezoneMenu.add(timezoneOption);
});

// Set default timezone offset to be 0 (UTC)
let timezoneOffset = 0;

// Switch the time according to the time zone
function timezoneChange() {
  timezoneSelected = document.getElementById("timezone-menu").value;
}

// Default to 12 hr time
setInterval(updateTime, 1000);

// Change to 12 hour format or 24 hour format for the clock depending on menu selection

function updateTime() {
  let currentTime = new Date();
  let currentUTCTime = currentTime.getTime();
  let currentUTCHours = currentTime.getUTCHours();
  let currentUTCMinutes = currentTime.getUTCMinutes();
  let currentUTCSeconds = currentTime.getUTCSeconds();

  // Calculate time in selected timezone
  let selectedTimezoneOffset = timezoneMenu.value;
  let selectedTime = currentUTCTime + selectedTimezoneOffset * 60 * 60 * 1000;
  let selectedTimeDate = new Date(selectedTime);
  let selectedHours = selectedTimeDate.getHours();
  let amOrPm = selectedHours >= 12 ? "pm" : "am";
  selectedHours = selectedHours % 12;
  selectedHours = selectedHours ? selectedHours : 12;
  let selectedMinutes = selectedTimeDate.getMinutes();
  let selectedSeconds = selectedTimeDate.getSeconds();

  // Adds 0's to time to make it look like (04:)
  selectedHours = fixHours(selectedHours);
  selectedMinutes = ("0" + selectedMinutes).slice(-2);
  selectedSeconds = ("0" + selectedSeconds).slice(-2);

  let clockDiv = document.getElementById("display-clock");

  // Display Time in selected timezone
  if (selectedTimezoneOffset == 347) {
    clockDiv.innerHTML =
      fixHours(currentUTCHours) +
      ":" +
      currentUTCMinutes +
      ":" +
      currentUTCSeconds;
  } else {
    clockDiv.innerHTML =
      selectedHours +
      ":" +
      selectedMinutes +
      ":" +
      selectedSeconds +
      " " +
      amOrPm;
  }
}

function fixHours(h) {
  if (h === 0) {
    return (h = 12);
  } else if (h > 12) {
    return h - 12;
  } else {
    return h;
  }
}

// canvas
let canvas = document.getElementById("clockCanvas");
let ctx = canvas.getContext("2d");

// canvas dimensions and center
canvas.width = 300;
canvas.height = 300;
ctx.translate(150, 150);

// Function to draw the clock
function drawClock() {
  // Clear the canvas
  ctx.clearRect(-150, -150, canvas.width, canvas.height);

  // Draw the clock background
  ctx.beginPath();
  ctx.arc(0, 0, 120, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // Draw the hour hands
  for (let i = 1; i <= 12; i++) {
    let angle = (i / 12) * 2 * Math.PI;
    let x = 100 * Math.sin(angle);
    let y = -100 * Math.cos(angle);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
  }
}

// Function to draw the clock hands
function drawHands(hours, minutes) {
  // Calculate the angles for the hour and minute hands
  let hourAngle = (((hours % 12) + minutes / 60) * 30 * Math.PI) / 180;
  let minuteAngle = (minutes * 6 * Math.PI) / 180;

  // Draw the hour hand
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rotate(hourAngle);
  ctx.lineTo(0, -50);
  ctx.lineWidth = 6;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.rotate(-hourAngle);

  // Draw the minute hand
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rotate(minuteAngle);
  ctx.lineTo(0, -80);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.rotate(-minuteAngle);
}

// Function to update the clock
function updateClock(hours, minutes) {
  drawClock();
  drawHands(hours, minutes);
}

// set setInterval on updateclock function to update hand positions with current time
function getTime() {
  // get initial time to display for clock
  currentTime = new Date();
  currentUTCTime = currentTime.getTime();
  currentUTCHours = currentTime.getUTCHours();
  currentUTCMinutes = currentTime.getUTCMinutes();

  // Calculate time in selected timezone
  selectedTimezoneOffset = timezoneMenu.value;
  selectedTime = currentUTCTime + selectedTimezoneOffset * 60 * 60 * 1000;
  selectedTimeDate = new Date(selectedTime);
  selectedHours = selectedTimeDate.getHours();
  amOrPm = selectedHours >= 12 ? "pm" : "am";
  selectedHours = selectedHours % 12;
  selectedHours = selectedHours ? selectedHours : 12;
  selectedMinutes = selectedTimeDate.getMinutes();
  updateClock(selectedHours, selectedMinutes);
}

setInterval(getTime, 1000);
