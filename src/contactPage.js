// Btn prevent submit
// document
//   .getElementById("contact-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//   });

function renderContactPage() {
  let mainDiv = document.createElement("main");
  mainDiv.className = "main-contact";
  let contactWrapper = document.createElement("div");
  contactWrapper.className = "contact-wrapper";
  let formWrapper = document.createElement("div");
  formWrapper.className = "form-wrapper";
  let formIntro = document.createElement("h1");
  formIntro.className = "form-intro";
  formIntro.textContent = "Feedback";

  let newForm = createForm();
  let infoWrapper = createInfoSection();

  mainDiv.append(contactWrapper);
  return mainDiv;
}

function createInfoSection() {
  let contactInfoWrapper = document.createElement("div");
  contactInfoWrapper.className = "contact-info";

  let contactTitle = document.createElement("h2");
  contactTitle.className = "contact-title";
  let contactTitleNode = document.createTextNode("Contact Us!");
  contactTitle.appendChild(contactTitleNode);

  let telDiv = document.createElement("div");
  telDiv.className = "tel-div";

  let telTitle = document.createElement("p");
  telTitle.className = "tel-title";
  let telNode = document.createTextNode("Telephone Nr.");
  telTitle.appendChild(telNode);

  let telnrPara = document.createElement("p");
  telnrPara.className = "telnr-p";
  let telnrparaNode = document.createTextNode("+123-123456789");
  telnrPara.appendChild(telnrparaNode);

  let adressDiv = document.createElement("div");
  adressDiv.className = "adress-div";

  let adressTitle = document.createElement("p");
  adressTitle.className = "adress-title";
  let adressTitleNode = document.createTextNode("Local Adress");
  adressTitle.appendChild(adressTitleNode);

  let adressPara = document.createElement("p");
  adressPara.className = "adress-p";
  let adressParaNode = document.createTextNode("Fake Street 123");
  adressPara.appendChild(adressParaNode);

  contactInfoWrapper.append(contactTitle, telDiv, adressDiv);

  return contactInfoWrapper;
}

function createForm() {
  let contactForm = document.createElement("form");
  contactForm.setAttribute("method", "post");
  contactForm.setAttribute("action", "#");

  //Labels for all Form Elements
  let labelFname = document.createElement("label");
  labelFname.setAttribute("for", "fname");
  labelFname.innerHTML = "First Name";

  let labelLname = document.createElement("label");
  labelLname.setAttribute("for", "lname");
  labelLname.innerHTML = "Last Name";

  let labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.innerHTML = "E-Mail";

  let labelTelnr = document.createElement("label");
  labelTelnr.setAttribute("for", "telNumber");
  labelTelnr.innerHTML = "Telephone Number";

  let labelCategory = document.createElement("label");
  labelCategory.setAttribute("for", "Category");
  labelCategory.innerHTML = "Category";

  // Create an input element for First Name
  let inputFName = document.createElement("input");
  inputFName.setAttribute("type", "text");
  inputFName.setAttribute("id", "fname");
  inputFName.setAttribute("name", "firstname");
  inputFName.setAttribute("placeholder", "Your name..");
  inputFName.setAttribute("required", "");

  // Create an input element for Last Name
  let inputLName = document.createElement("input");
  inputLName.setAttribute("type", "text");
  inputLName.setAttribute("id", "lname");
  inputLName.setAttribute("name", "lastname");
  inputLName.setAttribute("placeholder", "Your last name..");
  inputLName.setAttribute("required", "");

  // Create an input element for E-Mail
  let inpuEmail = document.createElement("input");
  inpuEmail.setAttribute("type", "email");
  inpuEmail.setAttribute("id", "email");
  inpuEmail.setAttribute("name", "emailAdress");
  inpuEmail.setAttribute("placeholder", "BurgerLover@mail.com");
  inpuEmail.setAttribute("required", "");

  // Create an input element for Tel-Number
  let inputTelnr = document.createElement("input");
  inputTelnr.setAttribute("type", "tel");
  inputTelnr.setAttribute("id", "telNumber");
  inputTelnr.setAttribute("name", "telephoneNumber");
  inputTelnr.setAttribute("placeholder", "+123-45678910");

  // Create an Select element for Category
  let inputCategory = document.createElement("select");
  inputCategory.setAttribute("id", "Category");
  inputCategory.setAttribute("name", "Category");

  let opt1 = document.createElement("option");
  let opt2 = document.createElement("option");
  let opt3 = document.createElement("option");

  opt1.value = "food&beverage";
  opt1.text = "Food & Beverage";

  opt2.value = "service";
  opt2.text = "Service";

  opt3.value = "other";
  opt3.text = "Other";

  inputCategory.add(opt1, null);
  inputCategory.add(opt2, null);
  inputCategory.add(opt3, null);

  // Create a submit button
  let btnSubmitForm = document.createElement("input");
  btnSubmitForm.setAttribute("type", "submit");
  btnSubmitForm.setAttribute("value", "Submit");

  //Append Form
  contactForm.append(
    labelFname,
    inputFName,
    labelLname,
    inputLName,
    labelEmail,
    inpuEmail,
    labelTelnr,
    inputTelnr,
    labelCategory,
    inputCategory,
    btnSubmitForm
  );

  return contactForm;
}
