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
const form = document.querySelector("#form");
const close = document.querySelector('.close')
const content = document.querySelector('.content')
const first = document.querySelector('#first')
const last = document.querySelector('#last')
const email = document.querySelector('#email')
const birthdate = document.querySelector('#birthdate')
const quantity = document.querySelector('#quantity')
const checkbox1 = document.querySelector('#checkbox1')
const city = document.querySelectorAll('input[name="location"]')
// Variables
const red = "#F44336"
const regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
let radio = ""

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
close.addEventListener('click', ()=> {
  content.style="z-index:0;"
  modalbg.style="z-index:1;"

// Handle Form
})
form.addEventListener('submit', e => {
  e.preventDefault()
  cityCheck()
  if(radio.length == 0) {
    alert('Vous devez sélectionnez une ville')
  } return
})


// Validation Input
function validatefName() {
  if(checkIfEmpty(fName)) return
  if(!checkOnlyLetters(fName)) return
  if(!check2Letters(fName)) return
  return true
}
function validatelName() {
  if(checkIfEmpty(lName)) return
  if(!checkOnlyLetters(lName)) return
  return true
}
function validateEmail(){
  if(checkIfEmpty(email)) return
  if(!checkRegex(email)) return
  return true
}
function validateBirth(){
  if(checkIfEmpty(birthdate)) return
  return true
}
function validateQty(){
  if(checkIfEmpty(quantity)) return
  return true
}
function cityCheck(){
    city.forEach((e) => {
      if(e.checked) {
        radio = e.value
        console.log(e.value)
        return true
      } else {
        return false
      }

  })
}

function validateConditions(){
  if(!checkbox1.checked){
    alert('vous devez accepter les conditions d\'utilisation')
    return }
    console.log('checked')
    return true
}

// Input Tests
function checkIfEmpty(field){
  if(isEmpty(field.value.trim())) {
       setInvalid(field, `le champ ${field.name} ne peut pas être vide`)
      return true
  } else {
      setValid(field)
      return false
  }
}
function check2Letters(field){
  if(field.value.length < 2){
    setInvalid(field, `le champ ${field.name} comprend au moins 2 caractères`)
    return true
  } else {
    setValid(field)
    return false
  }
}
function isEmpty(value){
  if(value === "") return true
  return false
}
function setInvalid(field, message){
  field.nextElementSibling.innerHTML = message
  field.nextElementSibling.style.color = red
}
function setValid(field){
  field.nextElementSibling.innerHTML = ''
}
function checkOnlyLetters(field) {
  if(/^[a-zA-Z ]+$/.test(field.value)) {
      setValid(field)
      return true
  } else {
      setInvalid(field, `le champ ${field.name} comprend seulement des lettres`)
      return false
  }
}
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




