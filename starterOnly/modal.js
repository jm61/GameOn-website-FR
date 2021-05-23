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
const red = "#F44336"

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
})
form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('Submit')
})
// Validation Input
function validatefName() {
  if(checkIfEmpty(fName)) return
  if(!checkOnlyLetters(fName)) return
  return true
}
function validatelName() {
  if(checkIfEmpty(lName)) return
  if(!checkOnlyLetters(lName)) return
  return true
}
function validateEmail(){
  if(checkIfEmpty(email)) return
  return true
}
function validateBirth(){
  if(checkIfEmpty(birthdate)) return
  return true
}

// Input Tests
function checkIfEmpty(field){
  if(isEmpty(field.value.trim())) {
       setInvalid(field, `${field.name} must not be empty`)
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
      setInvalid(field, `${field.name} must contain only letters`)
      return false
  }
}




