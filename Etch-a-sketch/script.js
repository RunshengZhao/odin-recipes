const container = document.querySelector("#container");

const button = document.querySelector("#popup");


//createGrid
function createGrid(size) {
  const totalSize = 800; // or 960px if you prefer
  const squareSize = totalSize / size;

  container.style.width = `${totalSize}px`;
  container.style.height = `${totalSize}px`;
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.boxSizing = "border-box";

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

//clearGrid function
function clearGrid() {
  container.innerHTML = "";
}

// Grid size control
button.addEventListener("click", () => {
  let userInput = prompt("Enter grid size (max 100):");
  let gridSize = parseInt(userInput);

  // Validate
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  clearGrid();
  createGrid(gridSize);
});

createGrid(16)
