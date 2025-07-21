//

const userEl = document.getElementById('user') // <div id="user">Fabio</div>

// read the dom node
console.log(userEl);


// read the properties
console.log(userEl.id);

console.log(userEl.innerHTML);

console.log(typeof userEl);
console.log(typeof 'ciao');



// Query selector (select only the first occurrence of that node)

const cardEl = document.querySelector('.card')


console.log(cardEl);
console.log(cardEl.innerHTML);



const allCardsEl = document.querySelectorAll('.card')
console.log(allCardsEl);





// Nodes methods
// read
//const userEl = document.getElementById('user') 
const userText = userEl.innerHTML
console.log(userText);

// write
userEl.innerHTML = '<h2>Ciao</h2>'



// Sekect the dom node
const containerEl = document.querySelector('.container')
console.log(containerEl);

// read
console.log(containerEl.className);

// write
//containerEl.className = 'row'

// write but keep the current content
containerEl.className += ' row'


// Class list methods
// read
console.log(containerEl.classList);

// get the lenght
console.log(containerEl.classList.length);

// add a new class to the list
containerEl.classList.add('text-white')
console.log(containerEl.classList);

// remove an element
containerEl.classList.remove('container')
console.log(containerEl.classList);


// JS Style

const redBlockEl = document.getElementById('redBlock')



console.log(redBlockEl.style);

// read
console.log(redBlockEl.style.backgroundColor);


// write
redBlockEl.style.backgroundColor = 'green'



// select the image

const imgEl = document.querySelector('img')

console.log(imgEl.alt);
console.log(imgEl.src); // https://picsum.photos/400/200

imgEl.src = 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png'

/* 
// Il software chiede all'utente il suo nome
const userName = prompt('Type your name here')
// Il software chiede all'utente il suo colore preferito
const favColor = prompt('type your fav color ie. red')

// Il softwarfe stampa in pagina il nome dell'utente del colore specificato 

// select the node of the dom where insert the user name
const userOutputEl = document.querySelector('#userOutput')
// use the element.innerHTML property of the node to insert the user name
userOutputEl.innerHTML = userName
// use the element.style.color to color the text using the fav color
userOutputEl.style.backgroundColor = favColor.toLowerCase() // red
 */


// Even listeners

const buttonEl = document.querySelector('button')

/* 

element.addEventListner(event, callback)
*/

// with the function keyworkd (anon function)
buttonEl.addEventListener('click', function(){

  console.log('You clicked the button', this);
  
})


// with arrow function (anon function)
buttonEl.addEventListener('click', () => {

  console.log('You clicked the button', this);

})


// with a function handler as callback

function handleClick(){
  console.log('You clicked the button');

}

buttonEl.addEventListener('click', handleClick)


const clickMeEl = document.querySelector('#click-me')

clickMeEl.addEventListener('mouseenter', handleClick)  



// Al click di un pulsante cambiare il colore dell'h1 sottostante


// # preparation
// select the color-changer button
const changeColorEl = document.getElementById('color-changer')
// select the message h1
const messageEl = document.getElementById('message')

// add event listener on click to the button
changeColorEl.addEventListener('click', function(){
  // change the text color
  messageEl.style.color = 'Blue'

})