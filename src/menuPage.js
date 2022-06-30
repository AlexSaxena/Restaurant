function renderMenuPage() {
  let mainDiv = document.createElement("main");
  mainDiv.className = "main-menu";
  let menuTitle = document.createElement("H1");
  menuTitle.className = "menu-title";
  menuTitle.textContent = "Our Menu";
  let menuDiv = document.createElement("div");
  menuDiv.className = "menu-div";

  let item1 = createItem(
    "The Classic",
    "Our Classic burger never changing always Delicious!"
  );
  let item2 = createItem(
    "Cheese Burger",
    "Our Classic burger but with some Extra Cheese on it!"
  );
  let item3 = createItem(
    "Chicken Burger",
    "Same concept just replacing the beef with Chicken!"
  );
  let item4 = createItem(
    "Jalapeno Special",
    "Our Classic burger with some extra Spice!"
  );
  let item5 = createItem(
    "The 10k Cal Burger",
    "For that one hungry person still bulking!"
  );
  let item6 = createItem(
    "The Vegan",
    "I can not believe this is not meat! Same Taste different meat!"
  );
  menuDiv.append(item1, item2, item3, item4, item5, item6);

  // Background Image
  mainDiv.style.backgroundImage = "url(bgBurger.jpg)";
  mainDiv.style.backgroundSize = "stretch";
  mainDiv.style.backgroundRepeat = "no-repeat";
  mainDiv.style.backgroundPosition = "center bottom";
  mainDiv.style.backgroundAttachment = "fixed";

  mainDiv.append(menuTitle, menuDiv);
  return mainDiv;
}

function createItem(title, content) {
  let wrapper = document.createElement("div");
  wrapper.className = "menu-item";
  let span1 = document.createElement("span");
  span1.className = "item-title";
  span1.textContent = title;
  let span2 = document.createElement("span");
  span2.className = "item-content";
  span2.textContent = content;

  wrapper.append(span1, span2);
  return wrapper;
}

export default renderMenuPage;
