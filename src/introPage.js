function renderIntroPage() {
  let mainDiv = document.createElement("main");
  mainDiv.className = "main-div";
  let btnOrder = document.createElement("button");
  btnOrder.className = "btn-main";
  btnOrder.textContent = "Order Food!";
  let btnContact = document.createElement("button");
  btnContact.className = "btn-main";
  btnContact.textContent = "Contact Us!";
  mainDiv.append(btnOrder, btnContact);

  mainDiv.style.backgroundImage = "url(bgBurger.jpg)";
  mainDiv.style.backgroundSize = "stretch";
  mainDiv.style.backgroundRepeat = "no-repeat";
  mainDiv.style.backgroundPosition = "center bottom";
  mainDiv.style.backgroundAttachment = "fixed";

  return mainDiv;
}

export default renderIntroPage;
