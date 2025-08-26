console.log('Recap boolean');

// Data types (Objects, Array etc.)
// array, objects, stings, numbers
let name = 'Hi there'
console.log(name[4]);

// variable (counter); condition; increament/decrament
for (let i = 0; i < name.length; i++) {
  const thisCharacter = name[i]
  console.log(thisCharacter);
}


// Array
const movies = [
  'The Matrix', // 0
  'Inception', // 1
  'Interstellar',
  'The Dark Knight',
  'Pulp Fiction',
  'The Shawshank Redemption',
]

const inception = movies[1]
console.log(inception);


const lastMovies = movies[movies.length - 1]

console.log(lastMovies);

console.log(movies.length);

// For
for (let i = 0; i < movies.length; i++) {
  const thisMovie = movies[i]
  console.log(thisMovie);
}

// For + Dom (append a list item for each movie in the array)

let ulElement = document.querySelector('ul')

// create an empty array
//const nodes = []

for (let i = 0; i < movies.length; i++) {
  const thisMovie = movies[i]

  console.log(thisMovie);

  // DOM API 
  //const liEl = document.createElement('li')
  //liEl.innerHTML = thisMovie

  // Template literal
  const liString = `<li>${thisMovie}</li>`

  // update the dom every iteration (or only once)
  // append child
  //ulElement.appendChild(liEl)
  ulElement.innerHTML += liString

}

// insertajacentHTML

// innerHTML


const moviesList = [
  {
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    rating: 8.7
  },
  {
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    rating: 8.8
  },
  {
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    rating: 8.6
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    rating: 9.0
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    rating: 8.9
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    rating: 9.3
  }
]

//const interstellarMovie = moviesList[2]['title']
const interstellarMovie = moviesList[2].title


// ordered list of items 
const list = ['item', 'item', 'item']
console.log(list[1]);


const person = {
  name: 'Gianluca',
  lastName: 'Loddo'
}


//person.name
//person['name']


// Loop over the array of objects
for (let i = 0; i < moviesList.length; i++) {
  const thisMovie = moviesList[i]
  console.log(thisMovie.director);
  const key = 'director'
  console.log(thisMovie[key]);

}


// Array methods (foreach, map, filter, find etc.)
// ForEach
const myFunction = (element, index, arr) => {
  console.log(element, index, arr);
  
}

moviesList.forEach(myFunction)


moviesList.forEach(anotherFunction)

// Functions
function anotherFunction(element, index, arr) {
  console.log(element, index, arr);

}


moviesList.forEach(function (element, index, arr) {
  console.log(element, index, arr);

})

moviesList.forEach((element, index, arr) => {
  console.log(element, index, arr);
})


// 📌 Array filter
// print a new array with only the movies from 2010
/* const moviesAfter2010 = moviesList.filter( movie => {
    if(movie.year >= 2010){
      return true
    }
    return false
})
 */


const moviesAfter2010 = moviesList.filter(movie => movie.year >= 2010)

console.log(moviesAfter2010);


// For
const newArr = []
for (let i = 0; i < moviesList.length; i++) {
  const movie = moviesList[i];
  
  if (movie.year >= 2010) {
    newArr.push(movie)
  }

}
console.log(newArr);


// Foreach
const newArr_2 = []
moviesList.forEach((movie)=>{
  if (movie.year >= 2010) {
    newArr_2.push(movie)
  }
})
console.log(newArr_2);


// Event listeners(forms)
const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click', ()=>{
  console.log();
  
})


// Ajax / Postman
axios.get('https://flynn.boolean.careers/exercises/api/random/word')
.then(response => {
  console.log(response.data);  
})



// dom manipulation

