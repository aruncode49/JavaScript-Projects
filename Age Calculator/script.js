"use strict";

// Selecting elements
const inputDate = document.querySelector("#date__input");
inputDate.max = new Date().toISOString().split("T")[0];
const button = document.querySelector(".btn");
const displayDate = document.querySelector(".display__date");

// Add Event Listener
button.addEventListener("click", function () {
  const [y, m, d] = inputDate.value.split("-");
  const dob = new Date(y, m - 1, d).getTime();
  console.log(dob);

  const now = new Date().getTime();
  console.log(now);
  const timeDiff = Math.abs(now - dob);
  console.log(timeDiff);

  const totalYear = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
  const totalMonth = Math.floor((timeDiff / (1000 * 3600 * 24 * 30.4375)) % 12);
  const totalDay = Math.floor((timeDiff / (1000 * 3600 * 24)) % 30.4375);

  displayDate.innerHTML = `You are <span>${totalYear}</span> years, <span>${totalMonth}</span> months and <span>${totalDay}</span> days old`;
});
