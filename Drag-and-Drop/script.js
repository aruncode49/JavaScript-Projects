"use strict";

// select elements
const listItem = document.querySelectorAll(".list");
let leftBox = document.querySelector(".left");
let rightBox = document.querySelector(".right");

// For a simple drag and drop this is a 3.step process
listItem.forEach((element) => {
  // 1. dragstart event : for reference to the element that the user dragged
  element.addEventListener("dragstart", function (e) {
    let selected = e.target;

    // 2. dragover event : for the target container, we call event.preventDefault(), which enables it to recieve "drop" events.
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    // 3. drop event : for the drop zone, we handle moving the draggable element from the original container to the drop zone.
    rightBox.addEventListener("drop", function (e) {
      rightBox.append(selected);
      selected = "";
    });

    // Repeat the same process for the right box to left box
    // dragover event : for the target container, we call event.preventDefault(), which enables it to recieve "drop" events.
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    // drop event : for the drop zone, we handle moving the draggable element from the original container to the drop zone.
    leftBox.addEventListener("drop", function (e) {
      leftBox.append(selected);
      selected = "";
    });
  });
});
