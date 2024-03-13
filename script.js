const btE = document.getElementById("btn");
let topPosition = 0;
let leftPosition = 0;

window.addEventListener("keydown", (e) => {
  e.preventDefault(); // Prevent default arrow key behavior

  switch (e.key) {
    case "ArrowUp":
      topPosition -= 10;
      break;
    case "ArrowLeft":
      leftPosition -= 10;
      break;
    case "ArrowDown":
      topPosition += 10;
      break;
    case "ArrowRight":
      leftPosition += 10;
      break;
  }
  // Update button position ,To make the button start moving where the last event ended
  updateBtnPosition();
});

window.addEventListener("click", (e) => {
  leftPosition = e.clientX - btE.offsetWidth / 2; //the difference between the x-coordinate and half with of button will result click in the middel of button
  topPosition = e.clientY - btE.offsetHeight / 2;

  // Update button position
  updateBtnPosition();
});

function updateBtnPosition() {
  //in this condition if the left position > from the width of window -width of bte then set the value to the width of window -width of bte eller set it to its leftpsition
  leftPosition = Math.max(
    0,
    Math.min(leftPosition, window.innerWidth - btE.offsetWidth)
  );

  //There is a possibility that the value from Math.min is negative so we use math.max to make sure the left position is not less than 0 and then set it to 0
  topPosition = Math.max(
    0,
    Math.min(topPosition, window.innerHeight - btE.offsetHeight)
  );

  btE.style.top = `${topPosition}px`;
  btE.style.left = `${leftPosition}px`;
}
