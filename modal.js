function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const closeModal = document.querySelector('.close');
  
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




