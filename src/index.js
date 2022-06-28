import "./styles/main.css";
import renderHeader from "./header";
import renderFooter from "./footer";
import renderIntroPage from "./introPage";
import renderMenuPage from "./menuPage";

console.log(123);

let contentDiv = document.querySelector(".content-div");

contentDiv.append(renderHeader(), renderMenuPage(), renderFooter());
