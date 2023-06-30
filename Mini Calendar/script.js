"use strict";

// selecting elements
let date = document.querySelector(".date");
let weekDay = document.querySelector(".week__day");
let year = document.querySelector(".year");
let month = document.querySelector(".month");

// display the real date on website
let now = new Date();

// display date
date.textContent = (now.getDate() < 10 ? "0" : "") + now.getDate();

// display weekday name
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
weekDay.textContent = days[now.getDay()];

// display year
year.textContent = now.getFullYear();

// display month name
month.textContent = now.toLocaleString("default", { month: "long" });
