import hello from "./menuPage";
import "./styles/main.css";

let contentDiv = document.querySelector(".content-div");
contentDiv.innerHTML = "";
console.log(contentDiv);

let headerDiv = document.createElement("header");
headerDiv.innerHTML = "";
headerDiv.className = "header-div";

const navTitle = document.createElement("H1");
navTitle.setAttribute("id", "nav-title");
const textNode = document.createTextNode("Cool Food Palace");
navTitle.appendChild(textNode);

let navSection = document.createElement("nav");
let listStart = document.createElement("ul");
let listelement1 = document.createElement("li");
let listelement2 = document.createElement("li");
let listelement3 = document.createElement("li");
listelement1.innerHTML = '<a href="#">Home</a>';
listelement2.innerHTML = '<a href="#">Menu</a>';
listelement3.innerHTML = '<a href="#">Contact</a>';
listStart.append(listelement1, listelement2, listelement3);

navSection.append(listStart);
headerDiv.append(navTitle, navSection);
console.log(headerDiv);

let mainDiv = document.createElement("main");
mainDiv.className = "main-div";
let btnOrder = document.createElement("button");
btnOrder.className = "btn-main";
btnOrder.textContent = "Order Food!";
let btnContact = document.createElement("button");
btnContact.className = "btn-main";
btnContact.textContent = "Contact Us!";
mainDiv.append(btnOrder, btnContact);

let footerDiv = document.createElement("footer");
footerDiv.className = "footer-div";
footerDiv.innerHTML = "Footer";

contentDiv.append(headerDiv, mainDiv, footerDiv);

console.log(123);
console.log(hello());
