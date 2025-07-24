console.log('hi');


// Syntax Object Literal


const ball = {

}
console.log(ball);

const mouse = {
  colors: ['black', 'gray'],
  type: 'vertical',
  wireless: true,
  price: 45,
  led: {
    size: 'small',
    color: 'red'
  },
  printDetails() {
    console.log('Print the mouse details');
    console.log(`Mouse ${this.type} - price: ${this.price}`);


  }


}


mouse.printDetails()

console.log(mouse);



const user = {
  name: 'Fabio',
  email: 'fabio@fabio.com',
  password: '123123123123123'
}

console.log(user);



// Read the values of an object
console.log(mouse.wireless);

// chiave dinamica
const key = 'led'
console.log(mouse[key]);


/* const userAnswer = prompt('tyupe a name of key') // led
console.log(mouse[userAnswer]); */


// ❌ with dot notation
// mouse.userAnswer


// 📌 For in loop

/* 
- for keyword
- (let key in object)
- {// your code}

*/

const palla = {
  "prezzo": 12,
  "tipo": "pallina da golf"
};


for (let key in palla) {
  console.log(key); // 1.prezzo  |  2. tipo
  console.log(palla[key]); // 1. 12 | 2. pallina da golf 
}


// 1. key = 'prezzo' 
// - palla['prezzp'] // 12
// 2. key = 'tipo'
// - palla['tipo'] // pallina da golf



// Risultato atteso:
// 12
// pallina da golf
// non per forza in questo ordine


for (let key in mouse) {
  console.log(key);
  console.log(mouse);

  console.log(mouse[key]);


}




const cat = {
  name: 'antifa',
  color: 'black'
}

const catKey = 'color'
console.log(cat[catKey]) // black

/* 
cat['name']
cat['color'] 

*/

for (let key in cat) {
  console.log(key);
  console.log(cat);
  console.log(cat[key]);

}


// Add a new property to the cat object

cat.friends = ['Anakin', 'Gaza', 'Jabba', 'Grogu', 'Strabi', 'Cookie', 'Albi', 'Mando']

console.log(cat);



// 📌 Array of objects (complex data types)

const posts = [
  {
    id: 1,
    title: 'Learn PHP',
    content: 'lorem ipsum dolor',
    author: 'Fabio'
  },
  {
    id: 2,
    title: 'Learn JS',
    content: 'lorem ipsum dolor',
    author: 'Fabio'
  },
  {
    id: 3,
    title: 'Learn Laravel',
    content: 'lorem ipsum dolor',
    author: 'Fabio'
  },
  {
    id: 4,
    title: 'Learn React',
    content: 'lorem ipsum dolor',
    author: 'Fabio'
  }
]

// Loop over the array

const rowEl = document.querySelector('.row')
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];


  console.log(post);

  const postMarkup = `
  <div class="col">
    <div class="card">
      ${post.title}
    </div>
  </div>`


  rowEl.insertAdjacentHTML('beforeend', postMarkup)

}


const names = ['name 1', 'name 2']

for (let index = 0; index < names.length; index++) {
  const element = names[index];
  
}



names[0]



cat.color
cat.name



/* Snack 1 

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const zucchini = [
  {
    id:1, 
    varieta: 'varieta 1',
    peso: 10,
    lunghezza: 15 
  },
  {
    id: 1,
    varieta: 'varieta 1',
    peso: 5,
    lunghezza: 15
  },
  {
    id: 1,
    varieta: 'varieta 1',
    peso: 10,
    lunghezza: 15
  },
  {
    id: 1,
    varieta: 'varieta 1',
    peso: 8,
    lunghezza: 15
  },
  {
    id: 1,
    varieta: 'varieta 1',
    peso: 100,
    lunghezza: 15
  }
]


let pesoTotale = 0
for (let i = 0; i < zucchini.length; i++) {
  const zucchina = zucchini[i];
  console.log(zucchina.peso);
  pesoTotale += zucchina.peso
}

console.log(pesoTotale);
