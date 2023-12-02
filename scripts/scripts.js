/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
function redirectToCreatage() {
    window.location.href = 'create.html';
}

// scripts.js

// scripts.js

function redirectToCreatePage() {
  // Create a new big-circle element
  var newBigCircle = document.createElement("div");
  newBigCircle.className = "big-circle";

  // Generate random size and position within the flex container
  var flexContainer = document.querySelector("main > div");
  var randomSize = Math.floor(Math.random() * 100) + 50; // Adjust the range of sizes as needed
  var randomLeft = Math.floor(Math.random() * (flexContainer.clientWidth - randomSize));
  var randomTop = Math.floor(Math.random() * (flexContainer.clientHeight - randomSize));

  // Set the style for the new big-circle element
  newBigCircle.style.width = randomSize + "px";
  newBigCircle.style.height = randomSize + "px";
  newBigCircle.style.left = randomLeft + "px";
  newBigCircle.style.top = randomTop + "px";

  // Check for overlapping with existing big circles
  while (checkOverlap(newBigCircle)) {
    randomLeft = Math.floor(Math.random() * (flexContainer.clientWidth - randomSize));
    randomTop = Math.floor(Math.random() * (flexContainer.clientHeight - randomSize));
    newBigCircle.style.left = randomLeft + "px";
    newBigCircle.style.top = randomTop + "px";
  }

  // Append the new big-circle element to the flex container
  flexContainer.appendChild(newBigCircle);
}

function checkOverlap(newCircle) {
  var existingCircles = document.querySelectorAll(".big-circle");
  for (var i = 0; i < existingCircles.length; i++) {
    var existingCircle = existingCircles[i];
    if (isOverlap(newCircle, existingCircle)) {
      return true; // Overlapping found
    }
  }
  return false; // No overlapping
}

function isOverlap(circle1, circle2) {
  var rect1 = circle1.getBoundingClientRect();
  var rect2 = circle2.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
