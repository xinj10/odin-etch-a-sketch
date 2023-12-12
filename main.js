const colorRecord = [];
let GRID = 16;
const container = document.querySelector(".container");
const btn = document.querySelector("button");

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r, g, b];
};

const setCellColor = (event) => {
  const [r, g, b] = getRandomColor();
  const cellRow = Math.floor(event.target.id / GRID);
  const cellCol = Math.floor(event.target.id % GRID);
  const attempts = colorRecord[cellRow][cellCol];
  event.target.setAttribute(
    "style",
    `background: rgb(${r}, ${g}, ${b}, ${Math.min(1.0, (attempts + 1) / 10)})`
  );
  colorRecord[cellRow][cellCol] += 1;
};

const generateGrid = (gridSize = 16) => {
  colorRecord.length = 0; // clear array
  GRID = gridSize;
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    const colorRowRecord = [];
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = i * gridSize + j;
      cell.addEventListener("mouseover", setCellColor);
      row.appendChild(cell);
      colorRowRecord.push(0);
    }
    container.appendChild(row);
    colorRecord.push(colorRowRecord);
  }
};

generateGrid();

btn.addEventListener("click", () => {
  const gridSize = Math.min(prompt("enter number of squares per side"), 100);
  container.innerHTML = "";
  generateGrid(gridSize);
});
