const container = document.querySelector("#container");
const resetBtn = document.querySelector("#resetBtn");

let boxSize = prompt("Please enter number of squares per side");
while (boxSize > 10 || boxSize == 0) {
  boxSize = prompt("Please enter number of squares per side");
}

const createGrid = () => {
  for (let row = 0; row < boxSize; row++) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    container.appendChild(divRow);
    for (let column = 0; column < boxSize; column++) {
      const divCell = document.createElement("div");
      divCell.classList.add("cell");
      divRow.appendChild(divCell);
    }
  }
};

createGrid();

document.body.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.classList.add("greenCell");
  }
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
