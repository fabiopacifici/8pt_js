/* Recap 

- Data types
  - string
  - numbers
  - array
  - objects
  - undefined
  - null
- Control Flow tools
  - for
  - if
- Function
- DOM Manupulation
- AJAX

*/

// 📌 Data types

/* const friut = 'apple'
console.log(friut); */

const numb = 4
const stringNumb = '4'


// Array
const fruits = ['apple 1', 'apple 2', 'apple 3']
console.log(fruits[0]);

// Objects
const fruit = {
  name: 'Apple',
  color: 'red'
}



// 📌 control flow tools: if/else + for loop 

for (let i = 0; i < fruits.length; i++) {
  // take the array item
  const item = fruits[i]
  console.log(item);
}


// if else
console.log(fruits.length > 0);

if (fruits.length > 0) {
  console.log('The basket is full of fruit');
  
} else {
  console.log('The basked it empty');
  
}

// 📌 Function 
// function declatation (hoisted)
/* greet('Fabio hoisted') */

// call the funcion (only function declarations)

/* function greet(name){
  console.log(`Hi ${name}`);
}

greet('Fabio') */
// Call the function (only function declarations)



// Function expression (Not hoisted)
const greet = function(name){
  console.log(`Hi ${name}`);
}

const greet_arrow = (name) => {
  console.log(`Hi ${name}`);
}


greet('Mario')
greet_arrow('Luigi')


// 📌 DOM Manipulation
// select dom elements
// - document.getElementById
const headingEl = document.getElementById('heading')
// - document.querySelector
//const textEl = document.querySelector('p')
//const textEl = document.querySelector('p.text')
const textEl = document.querySelector('.text')
// - document.querySelectorAll() 
// - document.getElementByClassName




// modify dom elements
headingEl.innerHTML = 'Ciao'
headingEl.style.color = 'red'
headingEl.classList.add('bg-red')

// create/remove dom elements
const headingOneEl = document.createElement('h1')
headingOneEl.classList.add('title')
headingOneEl.innerText = 'Welcome'



const headingOneStr = `<h1 class='title'>Welcome</h1>`

// Append child
headingEl.appendChild(headingOneEl)



// 📌 Event listeners

/* const buttonElement = document.createElement('button')
buttonElement.textContent = 'click me'

buttonElement.addEventListener('click', ()=>{
  console.log('Clicked');  
})
 */

const actionBtnEl = document.getElementById('action')
actionBtnEl.addEventListener('click', ()=>{
  console.log('clicked');

})



// 📌 HTTP request (Ajax call)

const api_url = 'https://swapi.info/api/films'
const moviesListElement = document.getElementById('movies')


fetch(api_url)
.then(res => res.json())
.then(movies =>{
    
  
    //console.log(movies); // data contains an array of objects

/*     for(let i = 0; i < movies.length; i++){
      const thisMovie = movies[i]
      console.log(thisMovie);
    } */

      movies.forEach(movie => {


        //console.log(movie['title']);
        //console.log(movie.title);

        // create a li dom element
        const liEl = document.createElement('li')
        // add the title inside 
        liEl.innerText = movie.title

        console.log(liEl);
        
        // append to the list element
        moviesListElement.appendChild(liEl)
        

        // verify if the array characters has items
        // if so log it to the console
        console.log(movie.planets);
        
        if(movie.planets.length > 0){
          console.log('Get the planets for this movie');
          
          movie.planets.forEach(planet_api_endpoint => {

            
            fetch(planet_api_endpoint)
            .then(res => res.json())
            .then(planet_data =>{
              console.log(planet_data.name);
              
            })
          
          })
        }

        
        // check if vehicles
        if(movie.starships.length > 0) {
          movie.starships.forEach(starship_api_endpoint => {
            console.log(starship_api_endpoint);
            fetch(starship_api_endpoint)
            .then(res => res.json())
            .then(starship =>{
              console.log(starship.name);
              
            })

            
          })
          
        }


        // check if species



      })
    
})
.catch(err => {
  console.error(err.message);
  
})
