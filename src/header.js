function renderHeader() {
  let headerDiv = document.createElement("header");
  headerDiv.innerHTML = "";
  headerDiv.className = "header-div";

  const navTitle = document.createElement("H1");
  navTitle.setAttribute("id", "nav-title");
  const textNode = document.createTextNode("The Burger Palace");
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

  return headerDiv;
}

export default renderHeader;
