const container = document.querySelector(".container");

let generateDiv = function() {
    const div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
        div.setAttribute("class", "hovered");
    })
};

for (let i = 1; i <= 256; i++) {
    generateDiv()
};
