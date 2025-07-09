console.log('Hi there');


/* Conditional stetement 

// syntax

// if only
if (condition){

  // block to run if condition is true
}


// if/else

if(condition){
 // block to run if condition is true

} else {
 // block to run if condition is false 
}


// if/elseif/else

if(condition) {
 // block to run if condition is true

} else if (another_condition){

 // block to run if condition is false
 // but another_condition is true
} else {
     // block to run if condition is false 
     // block to run if another_condition is false 

  
}

*/



// 👇 if 
/* const condition = false

if(condition){
  // code to run
  console.log('I am a conditional statement');
   
} */


// 👇 if/else 

/* const condition = false

if (condition) {
  // code to run
  console.log('I am a conditional statement');

} else {
  console.log('Condition was false');
  
}

console.log('I am outside of a conditional statement');
 */


// 👇 Else if 

/* 
const condition = false
const another_condition = true

if (condition) {
  // code to run
  console.log('I am a conditional statement');

} else if (another_condition){
  console.log('I am the else if');
  
} else {
  console.log('Condition was false');

}

console.log('I am outside of a conditional statement'); */



// 👇 Relational operators

//const condition = 5 > 1 // true

/* const condition = 5 < 1 // false

const another_condition = 10 > 3 // true

console.log(condition); // false
console.log(another_condition); // true


if (condition) {
  // code to run
  console.log('I am a conditional statement');

} else if (another_condition) {
  console.log('I am the else if');

} else {
  console.log('Conditions were false');

}

console.log('I am outside of a conditional statement'); */


/* const x = 4
const y = 5


if (x > y) {
  // code to run
  console.log(`x is ${x} and y is ${y} - x is greather than y`);

} else if (y > x) {
  console.log(`x is ${x} and y is ${y} - y is greather than x`);

} else {
  console.log(`x is ${x} and y is ${y} - x and y are equal`);

}

console.log('I am outside of a conditional statement'); */


/* Logical operators 
 - AND: &&
 - OR: ||
 - NOT: !

*/


const x = 5
const y = 3
const firstName = ''

console.log(x > y);
console.log(firstName.length > 0);


console.log(x > y && firstName.length > 0); // true
console.log(x > y || firstName.length > 0); // true


if (x > y || firstName.length > 0) {
  // code to run
  console.log('Inside the if block');
  

} /* else if (y > x) {
  console.log(`x is ${x} and y is ${y} - y is greather than x`);

} else {
  console.log(`x is ${x} and y is ${y} - x and y are equal`);

} */

console.log('I am outside of a conditional statement');