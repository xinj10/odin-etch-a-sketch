const container = document.querySelector(".container");
const btn = document.querySelector("button");

const generateGrid = (gridSize = 16) => {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", (event) => {
        event.target.classList.add("colored");
      });
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
};

generateGrid();

btn.addEventListener("click", () => {
  const gridSize = Math.min(prompt("enter number of squares per side"), 100);
  container.innerHTML = "";
  generateGrid(gridSize);
});
