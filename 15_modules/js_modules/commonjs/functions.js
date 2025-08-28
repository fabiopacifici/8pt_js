// sum
function sum(numb_1, numb_2) {
  const result = numb_1 + numb_2
  return result
  //return 'This function makes a sum'
}

const user = {
  name: 'Fabio',
  age: 30 
}


// multiply
function multiply(numb_1, numb_2) {
  return numb_1 * numb_2
}

// subtraction
function subtraction(numb_1, numb_2) {
  return numb_1 - numb_2
}

// division
function division(numb_1, numb_2) {
  return numb_1 / numb_2
}

//module.exports = sum // (exports only sum)


// exports multiple features
module.exports = {
  sum,
  user,
  multiply,
  subtraction,
  division
}