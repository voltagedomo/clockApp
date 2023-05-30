// Timer part by Alexander Alkin - seperate js to reduce amount of scrolling needed

let outputDiv = document.getElementById("timer-out");
let button = document.getElementById("timer-btn");
let setSeconds = 0;
let setMinutes = 0;
let setHours = 0;
let inputSeconds;
let inputMinutes;
let inputHours;
let myInterval;
let cycle = 0;
let minuteCycle = 0;

// event listener for input notes when changing to update values for setTimes
button.addEventListener("click", intervalSet);

// functions to update timer inputs

let countdown = 0;

function intervalSet() {
  // set variables when running function so they are updated
  if (countdown == 0) {
    inputSeconds = +document.getElementById("seconds-input").value;
    inputMinutes = +document.getElementById("minutes-input").value;
    inputHours = +document.getElementById("hours-input").value;
    if (!inputSeconds && !inputMinutes && !inputHours) {
      alert("All time fields cannot be empty");
      return;
    } else {
      setSeconds = inputSeconds;
      setMinutes = inputMinutes;
      setHours = inputHours;
      cycle = 0;

      // create countdown time
      countdown = inputSeconds + inputMinutes * 60 + inputHours * 60 * 60;
    }
  } else {
    countdown = countdown;
  }

  myInterval = setInterval(startTimer, 1000);
  // initialize timer time so it doesn't start on the following number
  outputDiv.innerHTML = `${setSeconds - cycle}:${setMinutes}:${setHours}`;
}

function startTimer() {
  cycle++;
  button.removeEventListener("click", intervalSet);
  button.addEventListener("click", stopTimer);
  button.innerText = "Stop";
  let end = 0;
  if (countdown > end) {
    countdown--;
  } else {
    stopTimer();

    return;
  }

  if (setMinutes == -1) {
    setHours--;
    setMinutes = 59;
  }
  if (setHours == -1) {
    setMinutes = 59;
  }

  console.log(`cycle:${cycle}`);
  console.log(countdown);
  if (setSeconds - cycle <= 0) {
    minuteCycle++;
    if (setMinutes > 0) {
      setSeconds = 59;
      setMinutes--;
    } else if (setMinutes == 0) {
      return;
    }
    outputDiv.innerHTML = `${setSeconds}:${setMinutes}:${setHours}`;
  } else {
    outputDiv.innerHTML = `${setSeconds - cycle}:${setMinutes}:${setHours}`;
  }
}

function stopTimer() {
  clearInterval(myInterval);
  button.removeEventListener("click", stopTimer);
  button.addEventListener("click", intervalSet);
  button.innerText = "Start";
}
