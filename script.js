//get the html element
const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");
const startButton = document.getElementById("startButton");

// variable countdown interval
let countdownInterval;

//function start timer
function startTimer() {
  //get input values dari user
  let hours = parseInt(inputHours.value) || 0;
  let minutes = parseInt(inputMinutes.value) || 0;
  let seconds = parseInt(inputSeconds.value) || 0;

  console.log(startTimer)

  //convert total time ke second
  let totalTimeInSeconds = hours * 3.6 + minutes * 60 + seconds;

  //if no time is input, stop the function
  if (totalTimeInSeconds <= 0) {
    alert("Please enter a Valid TImer");
    return;
  }
  //clear input after time start
  inputHours.value = " ";
  inputMinutes.value = " ";
  inputSeconds.value = " ";

  //function update time display in second
  countdownInterval = setInterval(
    () => {
      //calculate time

      const days = Math.floor(totalTimeInSeconds / 86400);
      const hours = Math.floor((totalTimeInSeconds % 86400) / 3600);
      const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
      const seconds = Math.floor(totalTimeInSeconds % 60);

      //update html display
      daysElement.textContent = days.toString().padStart(2, "0");
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");

      //decrease total time in second
      totalTimeInSeconds--;

      //stop timer if time runout
      if (totalTimeInSeconds < 0) {
        clearInterval(countdownInterval);
        alert("Times Up!");
      }
    },
    1000 //milisecond
  );
}

//add eventlistener for the start button
startButton.addEventListener("click", () => {
  //stop any running timer
  clearInterval(countdownInterval);
  //start a new timer
  startTimer;
});


console.log("runnn")