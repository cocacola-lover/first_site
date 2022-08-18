const btn = document.querySelector('.click');
btn.style.minWidth = `0px`;

const startingSize = 100;
const expandBy = 100;
let size = startingSize;
let margin = 0;
let expand = true;

btn.addEventListener("click", () => {
    if (expand === true) {
        if (size == startingSize + expandBy * 4) {
            expand = false;
            margin += expandBy;
            size -= expandBy;
        }
        else size += expandBy;
    }
    else {
        if (size == startingSize) {
            expand = true;
            size += expandBy;
        }
        else {
            margin += expandBy;
            size -= expandBy;
        }
    }
    btn.style.minWidth = `${size}px`;
    btn.style.marginLeft = `${margin}px`;
});