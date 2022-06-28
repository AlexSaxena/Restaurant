import hello from "./menuPage";
import "./styles/main.css";
import renderHeader from "./header";
import renderFooter from "./footer";
import renderIntroPage from "./introPage";
import bgBurger from "./assets/bgBurger.jpg";

console.log(123);
console.log(hello());

let contentDiv = document.querySelector(".content-div");

contentDiv.append(renderHeader(), renderIntroPage(), renderFooter());
