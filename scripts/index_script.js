const btn = document.querySelector('.click');
btn.style.minWidth = `0vw`;

const startingSize = 7;
const expandBy = 5;
let size = startingSize;
let margin = 0;
let expand = true;

btn.addEventListener("click", () => {

    if (btn.style.marginLeft > "80vw") {
        margin = -10 - size + startingSize/2;
        btn.style.marginLeft = `${margin}vw`;
        return;
    }

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
    btn.style.minWidth = `${size}vw`;
    btn.style.marginLeft = `${margin}vw`;
});