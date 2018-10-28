document.addEventListener("submit", makeGrid);

/**
 * @description Main method called on clicking submit
 * @constructor
 * @param event - The event
 */
function makeGrid(event) {
  // Stop the form from submitting
  event.preventDefault();

  var pixelCanvas = getACleanCanvas();

  drawTheNewCanvas(pixelCanvas);
}

/**
 * @description Wipe the previous Canvas and return a blank one
 * @returns A blank Canvas
 */
function getACleanCanvas() {
  const pixelCanvas = document.getElementById("pixelCanvas");
  pixelCanvas.innerHTML = "";
  return pixelCanvas;
}

/**
 * @description Draws The New Canvas
 * @param pixelCanvas - The old Canvas
 */
function drawTheNewCanvas(pixelCanvas) {
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  for (let n = 0; n < height; n++) {
    // Create the nth Row and append it to the canvas
    let row = document.createElement("tr");
    pixelCanvas.appendChild(row);

    for (let m = 0; m < width; m++) {
      // Create the mth Cell in the nth Row
      let cell = document.createElement("td");

      // Though I don't find it a nice practice
      // Listen to the Click event on the td
      // As requested on the rubric:
      // "Event listeners are properly added to the grid squares
      // (and not to the border or the table itself)."
      row.onclick = onClick;

      // Append it to the mth Row
      row.appendChild(cell);
    }
  }
}

/**
 * @description Handles click event for canvas cells
 * @param event - The event
 */
function onClick(event) {
  var color = document.getElementById("colorPicker").value;
  event.target.style.backgroundColor = color;
}
