console.log('hi');


/* 📌 DOM + For Loop 
- with strings
- with the DOM api
*/


// select the nodes
const listUl = document.getElementById('tasks')
// create an array of string
const tasks = [
  'lean php',
  'learn js',
  'learn react'
]

// 👉 Updates the DOM multiple times (once for each array's item)
for (let i = 0; i < tasks.length; i++) {
  const thisTask = tasks[i]

  const liString = `<li>${thisTask}</li>`

  listUl.innerHTML += liString

}



// 👉 Update the DOM once after all nodes were created


/* let itemStrings = ''
for(let i = 0; i < tasks.length; i++){
  const thisTask = tasks[i]

  console.log(thisTask);
  // 👇 create a new li tag for each tasks as string
  const liString = `<li>${thisTask}</li>`  
  
  // Adds each to the external string
  itemStrings += liString  

}

console.log(itemStrings);
listUl.innerHTML = itemStrings
 */




// 👉 DOM API: Updates the DOM multiple times (once for each array's item)

/* for (let i = 0; i < tasks.length; i++) {
  const thisTask = tasks[i]

  console.log(thisTask);
  // create a new li tag for each tasks
  
  // 👇 createElement is a method of the DOM API used to create html tags as objects (nodes)

  const liEl = document.createElement('li')
  liEl.append(thisTask)
  //console.log(liEl);
  listUl.append(liEl)
  
} */



/*
 
 
  <div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h3 class="card-title">Titlo</h3>
    <p>lorem</p>
  </div>
  <div class="card-footer"></div>
</div>

 
 
*/

// create the card element
const cardEl = document.createElement('div')
// add the classes to the node
cardEl.classList.add('card')

// create the card header element
const cardHeaderEl = document.createElement('div')
cardHeaderEl.classList.add('card-header')
cardHeaderEl.append('Header')
// append the cardheader child to the card
cardEl.appendChild(cardHeaderEl)


// create the card body
// create the card title
// create the paragraph
// create the card footer


const cardElString = `
  <div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h3 class="card-title">Titlo</h3>
    <p>lorem</p>
  </div>
  <div class="card-footer"></div>
</div>`


/*  📌 Forms Handling (gestione forms ed inputs) */


// select the node
const inputEl = document.getElementById('task')
console.log(inputEl);
const buttonEl = document.getElementById('add-task')

// read the value attribute of the input
console.log(inputEl.value); // ''



/* inputEl.addEventListener('input', ()=>{
  console.log(inputEl.value); // 'sadjfsl;dfj'
  document.getElementById('charCounter').innerText = `Chars: ${inputEl.value.length}`
})
 */

/* buttonEl.addEventListener('click', ()=>{
  console.log(inputEl.value); // 'sadjfsl;dfj'
})
 */


document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault()
  
  console.log('You submitted the form');
  console.log(inputEl.value); // ''
})