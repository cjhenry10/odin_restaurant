console.log("sections.js");

export function createPageElement(...args) {
    let classTemp;
    if (args[1] === "content" && args[4] === undefined) classTemp = "hidden";
    else classTemp = args[4];
    let newPageElement = {
        elem: args[0],
        parent: document.getElementById(args[1]),
        text: args[2],
        id: args[3],
        class: classTemp,
    }
    let newElement = document.createElement(newPageElement.elem);
    if (newPageElement.id != "") newElement.id = newPageElement.id;
    if (newPageElement.class != undefined) newElement.classList.add(newPageElement.class);
    newElement.textContent = newPageElement.text;
    newPageElement.parent.appendChild(newElement);
}

export function createImageElement(...args) {
    let newImageElement = {
        parent: document.getElementById(args[0]),
        src: args[1],
        alt: args[2],
        id: args[3],
        class: args[4],
    }
    let newImage = document.createElement("img");
    newImage.src = newImageElement.src;
    if (newImageElement.alt != undefined) newImage.alt = newImageElement.alt;
    if (newImageElement.id != undefined) newImage.id = newImageElement.id;
    if (newImageElement.class != undefined) newImage.classList.add(newImageElement.class);
    newImageElement.parent.appendChild(newImage);
}



