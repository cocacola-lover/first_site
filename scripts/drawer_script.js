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

function createButton() {
    const btn = document.querySelector(".changing_field_size");

    btn.addEventListener("mouseenter", () => {
        btn.style.fontWeight = "900";
        btn.style.color = "rgb(232, 0, 66)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.fontWeight = "500";
        btn.style.color = "rgb(145, 49, 76);";
    });

    btn.addEventListener("click", () => {
        str = prompt("Какой размер пожелаете?");

        if (isNaN(str)) {
            btn.textContent = "Нужно ввести число!";
            return;
        }
        if (Number(str) > 100) {
            btn.textContent = "Число должно быть меньше 100!";
            return;
        }
        if (Number(str) < 1) {
            btn.textContent = "Число должно быть больше 1!";
            return;
        }
        size = Math.floor(Number(str));
        removeField();
        createField();
    })

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
createButton();
