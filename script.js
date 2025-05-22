const container = document.querySelector(".container");

let generateDiv = function() {
    const div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
        div.setAttribute("class", "hovered");
    })
};

let n = 256;
for (let i = 1; i <= n; i++) {
    generateDiv()
};

let gridButton = document.querySelector("button");

gridButton.addEventListener("click", () => {
    let n = prompt("Pick a value of n for nxn grid (max n=100)", 16);
    if (n > 100) {
        alert("Value for n too high");
    } else {
        while (container.div) {
            container.removeChild(div)
        };
        for (let i = 1; i <= n**2; i++) {
            generateDiv()
        };
    }
})