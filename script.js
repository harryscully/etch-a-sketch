const container = document.querySelector(".container");
let opacityMode = false;
let rainbowMode = false;

let random255 = () => {
    return Math.floor(Math.random()*256);
}

let randomRGB = () => {
    const r = random255();
    const g = random255();
    const b = random255();
    return `${r}, ${g}, ${b}`;
}

let toggleOpacity = () => {
    opacityMode = !opacityMode;
    if (opacityMode) {
        opacityButton.style.backgroundColor = "lightgrey";
        opacityButton.style.color = "black";
    } else {
        opacityButton.style.backgroundColor = "black";
        opacityButton.style.color = "white";
    }
}

let toggleRainbow = () => {
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        rainbowButton.style.backgroundColor = `rgb(${randomRGB()})`;
    } else {
        rainbowButton.style.backgroundColor = "black";
        rainbowButton.style.color = "white";
    };
}

let clearGrid = () => {
    const allDivs = document.querySelectorAll(".container > div")
    allDivs.forEach( div => {
        div.style.backgroundColor = "white";
    })
};

let generateDiv = function(n) {
    const div = document.createElement("div");
    div.style.height = `${100/n}%`;
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
        
        if (rainbowMode) {
            div.style.backgroundColor = `rgb(${randomRGB()})`;
        } else {
            div.style.backgroundColor = `black`;
        };
        if (opacityMode) {
            div.style.opacity = `${Number(div.style.opacity) + 0.25}`;
        } else {
            div.style.opacity = "1";
        }
        
    })
};

let n = 16;
for (let i = 1; i <= n**2; i++) {
    generateDiv(n)
};

let gridButton = document.querySelector(".grid");

gridButton.addEventListener("click", () => {
    let n = prompt("Pick a value of n for nxn grid (max n=64)", 16);
    if (isNaN(n)) {
        alert("Enter a number");
    } else if (n > 64) {
        alert("Value for n too high");
    } else {
       while (container.firstChild) {
        container.removeChild(container.firstChild)
        };
        for (let i = 1; i <= n**2; i++) {
            generateDiv(n)
        };
    }
})


let opacityButton = document.querySelector(".opacity");

opacityButton.addEventListener("click", () => {
    toggleOpacity();
});

let rainbowButton = document.querySelector(".rainbow");

rainbowButton.addEventListener("click", () => {
    toggleRainbow();
});

let clearButton = document.querySelector(".clear")

clearButton.addEventListener("click", () => {
    clearGrid();
});
