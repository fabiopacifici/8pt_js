# JS RECAP

Recap html/css/js post ferie

- data types
  - objects
  - arrays
- Control flow tools
  - loops
  - conditionals
- functions
- DOM manipulation
  - selecting elements
  - modifying elements
  - creating elements
  - removing elements
  - events
- AJAX

## Data types

There are many data types in javascript among which the most common are:

- String
- Number
- Boolean
- Object
- Array
- Null
- Undefined

Each of these data types has its own characteristics and use cases.

A piece of data is a value of a specific data type. For example 5 is a number but '5' is a string. We can group related data into array or objects to create more complex data structures.

**Arrays**:

An array is defined using square brackets []. For example: let fruits = ['apple', 'banana', 'cherry'];

**Objects**:

An object is defined using curly braces {}. For example: let person = { name: 'John', age: 30 };

### Access array or objects data

To access array's elements use the index of the element you want to access. For example: `fruits[0]` will give you 'apple'.

To access object properties use the dot notation or bracket notation. For example: `person.name` will give you 'John' and `person['age']` will give you 30.

## Control flow tools

To control the flow of our script we can use:

- Loops: allow us to run the same block of code multiple times.
- Conditionals: allow us to execute different code blocks based on certain conditions.

```js
// loop over an array of items
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// conditionally log a message
if (fruits.length > 0) {
  console.log('We have some fruits!');
} else {
  console.log('No fruits available.');
}


```

## Functions

To organize our code into reusable blocks we can use functions. A function is defined using the `function` keyword followed by the function name and parentheses (), then the function body of the function that goes inside curly braces {}.

```js
function greet(name) {
  console.log('Hello, ' + name + '!');
}
```

A function can be called using the function name followed by parentheses. For example: `greet('Alice');` will call the `greet` function and pass 'Alice' as an argument.

Functions can be declared using:

- function declaration
- function expression
- arrow function

Below an example of a function expression with an arrow function:

```js

  const greet = (name) => {
    console.log('Hello, ' + name + '!');
  };

  greet('Bob');

```

## DOM Manipulation

There are a number of ways to manipulate the DOM (Document Object Model) using JavaScript. The DOM represents the structure of an HTML document and allows us to interact with and modify the content, structure, and style of a webpage.

### Selecting Elements

To manipulate elements, we first need to select them. We can use methods like:

- `document.getElementById('id')`: Selects an element by its ID.
- `document.getElementsByClassName('class')`: Selects elements by their class name.
- `document.querySelector('selector')`: Selects the first element that matches a CSS selector.
- `document.querySelectorAll('selector')`: Selects all elements that match a CSS selector.

### Modifying Elements

Once we have selected an element, we can modify its content, attributes, and styles. For example:

```js
const heading = document.getElementById('heading');
heading.textContent = 'New Heading';
heading.style.color = 'blue';
```

### Creating and Removing Elements

We can also create new elements and remove existing ones:

```js
// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Remove an element
const oldParagraph = document.getElementById('old-paragraph');
document.body.removeChild(oldParagraph);
```

### Event Handling

To make our web pages interactive, we can add event listeners to elements. For example:

```js
const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

## Ajax

To make our application dynamic and fetch data from a server without reloading the page, we can use AJAX (Asynchronous JavaScript and XML). The modern way to perform AJAX requests is by using the Fetch API.

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

Alternatively we can use a third party library like Axios.

```js
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

## Fetch API (SWAPI + Rick & Morty)

Endpoint: <https://swapi.info/api/films>
Endpoint with images: <https://rickandmortyapi.com/documentation/#get-all-characters>
