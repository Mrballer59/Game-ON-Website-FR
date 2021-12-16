function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelector(".icon").addEventListener("click", editNav);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModal.addEventListener("click", crossClose);

function crossClose() {
  modalbg.style.display = "none";
}

// Validation

// Retrieve nodes for validation

// Firstname
const firstName = document.querySelector("#first");
const prenomDiv = document.querySelector("#div-prenom");
// Lastname
const lastName = document.querySelector("#last");
const nomDiv = document.querySelector("#div-nom");
//Email
const email = document.querySelector("#email");
const emailDiv = document.querySelector("#div-email");
// Birthdate
const birthDate = document.querySelector("#birthdate");
const birthDateDiv = document.querySelector("#birthdate-div");
// n° of tournaments
const tournamentNr = document.querySelector("#quantity");
const tournamentDiv = document.querySelector("#tournament-div");
// cities
const radios = document.getElementsByName("location");
const checkboxDiv = document.querySelector("#checkbox-div");
// terms of use
const checkbox1Div = document.querySelector("#checkbox1-div");
const checkbox1 = document.querySelector("#checkbox1");

// Manage form submission

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  //add a counter to check each form input
  let counter = 0;

  // Validation conditions

  // input values does not accept blanks
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();

  //define email format
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //define tournamentNr format
  const tournamentNrFormat = /\d+/g;

  // check firstname

  if (firstNameValue.length < 2) {
    // Error message
    prenomDiv.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères, pour le champ du prenom"
    );
    prenomDiv.setAttribute("data-error-visible", "true");
  } else {
    prenomDiv.setAttribute("data-error-visible", "false");
    counter++;
  }

  // check lastname

  if (lastNameValue.length < 2) {
    nomDiv.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );
    nomDiv.setAttribute("data-error-visible", "true");
  } else {
    nomDiv.setAttribute("data-error-visible", "false");
    counter++;
  }

  // check email

  if (mailFormat.test(email.value)) {
    emailDiv.setAttribute("data-error-visible", "false");
    counter++;
  } else {
    emailDiv.setAttribute(
      "data-error",
      "Veuillez saisir une adresse mail correcte."
    );
    emailDiv.setAttribute("data-error-visible", "true");
  }

  // check date

  if (birthDate.value === "") {
    birthDateDiv.setAttribute("data-error", "Merci de donner une date valide");
    birthDateDiv.setAttribute("data-error-visible", "true");
  } else {
    birthDateDiv.setAttribute("data-error-visible", "false");
    counter++;
  }

  // check number of tournaments

  if (tournamentNrFormat.test(tournamentNr.value)) {
    tournamentDiv.setAttribute("data-error-visible", "false");
    counter++;
  } else {
    tournamentDiv.setAttribute(
      "data-error",
      "Merci de donner un nombre entre 0 et 99"
    );
    tournamentDiv.setAttribute("data-error-visible", "true");
  }

  // check city

  let radioValid = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioValid = true;
      checkboxDiv.setAttribute("data-error-visible", "false");
      counter++;
      break;
    }
  }

  if (!radioValid) {
    checkboxDiv.setAttribute("data-error", "Merci de choisir une ville");
    checkboxDiv.setAttribute("data-error-visible", "true");
  }

  // check usage conditions.

  if (!checkbox1.checked) {
    checkbox1Div.setAttribute(
      "data-error",
      "Merci de lire et d'accepter les conditions d'usage"
    );
    checkbox1Div.setAttribute("data-error-visible", "true");
  } else {
    checkbox1Div.setAttribute("data-error-visible", "false");
    counter++;
  }

  // When the form is valid pass though and give success message

  const bgrounDiv = document.querySelector(".bground");
  const successDiv = document.querySelector("#success-div");
  const closeSuccess = document.querySelector(".close-success-div");
  const btnClose = document.querySelector(".btn-close");

  // when close success modal
  closeSuccess.addEventListener("click", successCrossClose);
  btnClose.addEventListener("click", closeBtn);

  // when close success modal with cross
  function successCrossClose() {
    successDiv.style.display = "none";
  }

  // close success modal with button
  function closeBtn() {
    successDiv.style.display = "none";
  }

  // reset form
  const validate = () => {
    document.querySelector(".subscribe").reset();
  };

  // if all mandatory inputs are filled launch validate
  if (counter === 7) {
    bgrounDiv.style.display = "none";
    successDiv.style.display = "block";
    validate();
  }
});
