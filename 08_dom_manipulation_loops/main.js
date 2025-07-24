console.log('hi there');

// select the dom nodes from the form
const titleFieldEl = document.getElementById('title-field')
const nameFieldEl = document.getElementById('name-field')
const companyFieldEl = document.getElementById('company-field')
const roleFieldEl = document.getElementById('role-field')
const emailFieldEl = document.getElementById('email-field')
const phoneFieldEl = document.getElementById('phone-field')
const companyPicFieldEl = document.getElementById('company-pic-field')

//console.log(titleFieldEl, nameFieldEl, companyFieldEl, roleFieldEl, emailFieldEl, phoneFieldEl, companyPicFieldEl);


// select the dom nodes from the card
const titleEl = document.getElementById('title')
const nameEl = document.getElementById('name')
const companyEl = document.getElementById('company')
const roleEl = document.getElementById('role')
const emailEl = document.getElementById('email')
const phoneEl = document.getElementById('phone')
const companyPicEl = document.getElementById('company-pic')


// handle the form submit 
// - select the form dom element
const formEl = document.querySelector('form')
// - attach the submit event listener
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  // get the values for each input
  const titleElValue = titleFieldEl.value 
  const nameElValue = nameFieldEl.value
  const companyElValue = companyFieldEl.value
  const roleElValue = roleFieldEl.value
  const emailElValue = emailFieldEl.value
  const phoneElValue = phoneFieldEl.value
  const companyPicElValue = companyPicFieldEl.value

  console.log(titleElValue, nameElValue, companyElValue, roleElValue, emailElValue, phoneElValue, companyPicElValue);
  

  // update the card
  titleEl.innerHTML = titleElValue
  nameEl.innerHTML = nameElValue
  companyEl.innerHTML = companyElValue
  roleEl.innerHTML = roleElValue
  emailEl.innerHTML = emailElValue
  phoneEl.innerHTML = phoneElValue
  companyPicEl.src = companyPicElValue


})


