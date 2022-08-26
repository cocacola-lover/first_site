let size = 16;
const color = [0, 0, 0];

function getRandom(top) {
    return Math.floor(Math.random() * top);
}
function getRandomColor(){
    color[0] = getRandom(255);
    color[1] = getRandom(255);
    color[2] = getRandom(255);
}

function createSlider() {
    let slider = document.querySelector(".slider");
    slider.addEventListener("input", function() {
        size = Math.floor(this.value);
        removeField();
        createField();
    });
}

function removeField() {
    const everyRow = document.querySelectorAll(".row");
    everyRow.forEach((e) => e.remove());
}

function createField() {
    const container = document.querySelector(".field");
    container.addEventListener("mouseleave", () => getRandomColor());

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.toggle("row");
        for (let j = 0; j < size; j++) {
            let tile = document.createElement("div");
            tile.classList.toggle("tile");
            tile.addEventListener("mouseover", () => {
                tile.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            })
            row.appendChild(tile);
        }
        container.appendChild(row);
        }
    }

createField();
//createButton();
createSlider();
