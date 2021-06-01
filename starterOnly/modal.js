function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements Selection
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("#form");
const close = document.querySelector('.close')
const content = document.querySelector('.content')
const email = document.querySelector('#email')
const birthdate = document.querySelector('#birthdate')
const quantity = document.querySelector('#quantity')
const checkbox1 = document.querySelector('#checkbox1')
const conditions = document.querySelector('#conditions')
const choixVille = document.querySelector('#choixVille')
const city = document.querySelectorAll('input[name="location"]')
const success = document.querySelector('.success')
const closeSuccess = document.querySelector('#closeSuccess')
// Variables
const red = "#F44336"
// email check RegEx
const regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
let radio = ''

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form with X
close.addEventListener('click', () => {
  content.style="z-index:0;"
  modalbg.style="z-index:1;"
})
// close modal after successful submit
closeSuccess.addEventListener('click', () => {
  content.style="z-index:0;"
  modalbg.style="z-index:1;"
  success.style ="display:none;"
  form.style="display:block;"
})

// Handle Form for submit
form.addEventListener('submit', e => {
  e.preventDefault()
  cityCheck()
  console.log(radio)

  if(radio.length === 0) {
      choixVille.textContent = 'Vous devez sélectionnez une ville'
      choixVille.style.color = red
      setTimeout( () => {
        choixVille.textContent = ''
      }, 2000)
    return false
  } else { 
    radio = ''
  }
  if(validatefName() && validatelName() && validateEmail() && validateBirth() && validateQty() && validateConditions()) {
    success.style ="display:flex;"
    form.style="display:none;"
    form.reset()
  }
})

// Validation First Name
function validatefName() {
  if(checkIfEmpty(fName)) return;
  if(!checkOnlyLetters(fName)) return;
  if(!check2Letters(fName)) return;
  return true;
}
// Validation Last Name
function validatelName() {
  if(checkIfEmpty(lName)) return
  if(!checkOnlyLetters(lName)) return
  if(!check2Letters(lName)) return;
  return true
}
// Validation Email
function validateEmail(){
  if(checkIfEmpty(email)) return
  if(!checkRegex(email)) return
  return true
}
// Validation birthDate
function validateBirth(){
  if(checkIfEmpty(birthdate)) return
  return true
}
// Validation Quantity
function validateQty(){
  if(checkIfEmpty(quantity)) return
  if(!positiveInteger(quantity)) return
  return true
}
// Validation City checked
function cityCheck(){
    city.forEach( e => {
      if(e.checked) {
        radio = e.value
        return true
      } else {
        return false
      }
  })
}
// Validation Conditions
function validateConditions(){
  if(!checkbox1.checked){
    conditions.textContent ='Vous devez accepter les conditions d\'utilisation'
    conditions.style.color = red
    return }
    conditions.textContent = ''
    return true
}
// -------------------------------------------- //

// Input empty check
function checkIfEmpty(field){
  if(isEmpty(field.value.trim())) {
       setInvalid(field, `le champ ${field.name} ne peut pas être vide`)
      return true
  } else {
      setValid(field)
      return false
  }
}
// Positive Integer check
function positiveInteger(field){
  if(field.value < 0){
    setInvalid(field, `le champ ${field.name} ne peut pas être négatif`)
   return false
  } else {
    setValid(field)
    return true
  }
}
// Input length check
function check2Letters(field){
  if(field.value.length < 2){
    setInvalid(field, `le champ ${field.name} comprend au moins 2 caractères`)
    return false
  } else {
    setValid(field)
    return true
  }
}
// Input only letters check
function checkOnlyLetters(field) {
  if(/^[a-zA-Z\u00C0-\u00FF ]+$/.test(field.value)) {
      setValid(field)
      return true
  } else {
      setInvalid(field, `le champ ${field.name} comprend seulement des lettres`)
      return false
  }
}
// Email input check
function checkRegex(field, message){
  if(field.value.match(regex)) {
    setValid(field)
    return true
  } else {
    message = `le champ ${field.name} doit être un email valide`
    setInvalid(field, message)
    return false
  }
}
// Utilities Valid/Invalid
function setInvalid(field, message){
  field.nextElementSibling.innerHTML = message
  field.nextElementSibling.style.color = red
}
function setValid(field){
  field.nextElementSibling.innerHTML = ''
}
// Input empty check
function isEmpty(value){
  if(value === "") return true
  return false
}





