import "./styles/main.css";
import renderHeader from "./header";
import renderFooter from "./footer";
import renderIntroPage from "./introPage";
import renderMenuPage from "./menuPage";
import renderContactPage from "./contactPage";

console.log(123);

let contentDiv = document.querySelector(".content-div");

contentDiv.append(renderHeader(), renderIntroPage(), renderFooter());

let mainDiv = contentDiv.children[1];

// All the Nav Btns
let btnHome = document.querySelector(".btn-home");
let btnMenu = document.querySelector(".btn-menu");
let btnContact = document.querySelector(".btn-contact");
let btnContactUs = document.querySelector(".btn-contact-us");

btnHome.addEventListener("click", () => {
  contentDiv.replaceChild(renderIntroPage(), mainDiv);
  mainDiv = contentDiv.children[1];
});

btnMenu.addEventListener("click", () => {
  contentDiv.replaceChild(renderMenuPage(), mainDiv);
  mainDiv = contentDiv.children[1];
});

btnContact.addEventListener("click", () => {
  contentDiv.replaceChild(renderContactPage(), mainDiv);
  mainDiv = contentDiv.children[1];
});

btnContactUs.addEventListener("click", () => {
  contentDiv.replaceChild(renderContactPage(), mainDiv);
  mainDiv = contentDiv.children[1];
});
