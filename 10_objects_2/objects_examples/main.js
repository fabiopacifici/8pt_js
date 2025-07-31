/* 

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

// Creare un array di oggetti:
// object literal stucture proprietà: nome e peso.
const bikes = [
  {
    id: 1,
    name: 'Bianchi',
    weight: 7.5
  },
  {
    name: 'Cannondale',
    weight: 6.8
  },
  {
    name: 'Trek',
    weight: 7.2
  },
  {
    name: 'Specialized',
    weight: 6.5
  },
  {
    name: 'Specialized',
    weight: 3.5
  },
  {
    name: 'Specialized',
    weight: 1.5
  }
]
// 0 {id:1}
// 1 {id:2}

// Stampare a schermo la bici con peso minore.
//const lightestBikes = bikes[0]
// initialize a variable 
let lightestBikes = bikes[0]
console.log(lightestBikes);
// loop over the array
for (let i = 0; i < bikes.length; i++) {
  // store the single element
  const thisBike = bikes[i]

  if (thisBike.weight < lightestBikes.weight) {
    lightestBikes = thisBike
  }

}
console.log(lightestBikes);



/*

Snack2

Generare numeri random 
al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


*/


const teams = [
  {
    name: 'Juventus',
    points: 0,
    fouls: 0
  },
  {
    name: 'Inter',
    points: 0,
    fouls: 0
  },
  {
    name: 'Milan',
    points: 0,
    fouls: 0
  },
  {
    name: 'Napoli',
    points: 0,
    fouls: 0
  }
]

/* Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. */


// loop over the array of teams
for (let i = 0; i < teams.length; i++) {
  // update the property points 
  // - generate a random number
  teams[i].points = Math.ceil(Math.random() * 50)
  // update the property fauls
  // - generate a random number
  teams[i].fouls = Math.ceil(Math.random() * 50)

  //console.log(teams[i]);

}

/* const person = {
  name: 'fabio',
  job: 'teacher'
}

person.name = 'Luke' */

// Output
console.log(teams);

/* 
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

// create a variable to hold the new array
const newArr = []

for (let i = 0; i < teams.length; i++) {

  // extract the current object
  const team = teams[i]
  // create a new object with only name and fouls

/*
  This is equal to the code below it   
  const name = team.name
  const fouls = team.fouls */

  // Destructuring: Equal to the above code
  const {name, fouls} = team


  console.log(name);
  console.log(fouls);
  
  
  // ES 5
/*   const newTeamObject = {
    name: team.name,
    fouls: team.fouls
  } */

  // ES6
  const newTeamObject = {
    name,
    fouls
  }

  // add the new object to the end of the array
  newArr.push(newTeamObject)

}

console.log(newArr);





// Destructuring Objects

const person = {

  name: 'Luke',
  age: 30,
  job: 'jedi'
}


const {age, job} = person
console.log(age);
console.log(job);


// Destructuring Array
const names = ['Marco', 'name 2', 'Mario', 'name 4', 'Luigi']

// empty commas to skip a position
const [marco, , mario, , luigi] = names

console.log(marco, mario, luigi);



//const anotherPerson = {person, tools: ['lightsaber', 'force'] }
// spread operator
const anotherPerson = { ...person, tools: ['lightsaber', 'force'] }

console.log(anotherPerson);



//const otherNames = [names, 'Stefano', 'Filippo']

const otherNames = [...names, 'Stefano', 'Filippo']
console.log(otherNames);



