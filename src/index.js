import './style.css';
import {constructNavbar} from './modules/navbar.js';
import {createPageElement, createImageElement} from './modules/sections.js';
import Picture from './img/restaurant1.jpg';

const sections = ["about", "menu", "contact"];

constructNavbar(sections);

// createPageElement(
//     "HTML Element",
//     "Parent Element Id",
//     "Text Content",
//     "Id",
//     "Class",
// );

createPageElement(
    "section",
    "content",
    "",
    sections[0],
    "show"
);
createPageElement(
    "h1",
    sections[0],
    "About Us",
);
createPageElement(
    "p",
    sections[0],
    `Our restaurant has been around for 3 days. We do not have food.
    Please do not come here. Thank you.`,
);
createPageElement(
    "p",
    sections[0],
    "hello",
);

createImageElement(
    sections[0],
    Picture,
    "picture of a vegetable bowl",

);


createPageElement(
    "section",
    "content",
    "",
    sections[1],
);

createPageElement(
    "div",
    sections[1],
    "Salad #1 - $9.99",
    "salad-1",
    "menu-block",
);
createPageElement(
    "div",
    sections[1],
    "Salad #2 - $12.99",
    "salad-2",
    "menu-block",
);
createImageElement(
    "salad-1",
    Picture,
    "picture of a vegetable bowl",
);
createImageElement(
    "salad-2",
    Picture,
    "picture of a vegetable bowl",
);
createPageElement(
    "div",
    sections[1],
    "Salad #3 - $7.99",
    "salad-3",
    "menu-block",
);
createPageElement(
    "div",
    sections[1],
    "Salad #2 - $14.99",
    "salad-4",
    "menu-block",
);
createImageElement(
    "salad-3",
    Picture,
    "picture of a vegetable bowl",
);
createImageElement(
    "salad-4",
    Picture,
    "picture of a vegetable bowl",
);


createPageElement(
    "section",
    "content",
    "",
    "contact",
);
createPageElement(
    "h1",
    "contact",
    "How To Reach Us",
);
createPageElement(
    "p",
    "contact",
    "Don't."
);




setTimeout(function(){
    document.body.className = "";
    console.log("body class removed");
}, 2000);