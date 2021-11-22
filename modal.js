// DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const closeModal = document.querySelector('.close');

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // close modal form
closeModal.addEventListener('click', crossClose);

function crossClose() {
  modalbg.style.display = "none";
}

//Entey Elements

const inputs = document.querySelectorAll('input[type="text"],input[type="email"]input[type="date"],input[type="number"]');

const dateInput = document.queryElementById("birthday");

const cities = document.querySelectorAll('input["type=radio"]');

const citycheck = document.getElementById("citycheck");

const checkbox1 = document.querySelector("#checkbox1");

const conditions = document.getElementById("conditionscheck");

const checkbox2 = document.querySelector("#checkbox2");

const submit = document.querySelector(".content");

const thanksPage = document.getElementById("thankspage");

const closePageCross = document.getElementById("thanksclosecross");

const closePageButton = document.getElementById("thanksclosebutton");
let first,
  last,
  email,
  quantity,
  town,
  conditionAccepted,
  newsletter,
  birthdate;


//Function

const errorDisplay = (tag, message, vaild) => {

    const container = document.querySelector("#" + tag);
    const span = document.querySelector("#" + tag + " +span"); 
    if (!vaild) {
      container.classList.add("error");
      span.classList.add("error-message");
      span.textContent = message; 
    } else {
      container.classList.remove("error"); 
      span.textContent = message;
    }
};

const firstChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay ( "first", "Veuillez entrer 2 caractères ou plaus pour le prénom.");
    first = null; 
  } else if (
    !value.match( /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
  ) {
    errorDisplay("first", "Le prénom doit contenir des lettres uniquement.");
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

const lastChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay("last", "Veuillez entrer 2 caractères ou plus pour le nom.");
    last = null; 
  }  else if 
  ( !value.match ( /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
  ) {
    errorDisplay("last", "Le nom doit contenir des lettres uniquement."); 
    last = null; 
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

const emailChecker = (value) => {
  if 
  (!value.match (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  ){
    errorDisplay("email", "Le Mail n'est pas valide"); 
    email = null; 
  } else {
    errorDisplay("email", "" , true); 
    email = value;
}
}; 


const birthdateChecker = (value) => {
  let date = new Date (value);

}








