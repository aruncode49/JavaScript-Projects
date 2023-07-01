// Selecting elements
let launchDate = new Date(2023, 7, 1).getTime(); // 1 Aug 2023
let d = document.querySelector(".days");
let h = document.querySelector(".hours");
let m = document.querySelector(".minutes");
let s = document.querySelector(".seconds");

// update time function
let updateTimer = function () {
  let now = new Date().getTime();
  let distance = launchDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  d.textContent = days.toString().padStart(2, "0");
  h.textContent = hours.toString().padStart(2, "0");
  m.textContent = minutes.toString().padStart(2, "0");
  s.textContent = seconds.toString().padStart(2, "0");

  // check when the time is complete or -ve
  if (distance < 0) {
    clearInterval(x);
    d.textContent = "00";
    h.textContent = "00";
    m.textContent = "00";
    s.textContent = "00";
  }
};

var x = setInterval(updateTimer, 1000); // setInterval for every 1 sec
updateTimer(); // call the function
