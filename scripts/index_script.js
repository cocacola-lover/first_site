const btn = document.querySelector('.click');
//btn.style.minWidth = `0vw`;

//const startingSize = 7;
const startingSize = btn.offsetWidth * 100 / document.documentElement.offsetWidth;
const expandBy = startingSize/2;
let size = 0;
let margin = 0;
let expand = true;
//btn.style.width = `${startingSize + size * expandBy}vw`;

btn.addEventListener("click", () => {

    if (Number(btn.style.marginLeft.slice(0, -2)) > 80) {
        margin = -10/expandBy -startingSize/expandBy/2;
        btn.style.marginLeft = `${margin * expandBy}vw`;
        return;
    }

    if (expand) {
        if (size === 4) {
            expand = false;
            margin++;
            size--;
        }
        else size++;
    }
    else {
        if (size === 0) {
            expand = true;
            size++;
        }
        else {
            margin++;
            size--;
        }
    }
    btn.style.width = `${startingSize + size * expandBy}vw`;
    btn.style.marginLeft = `${margin * expandBy}vw`;
});