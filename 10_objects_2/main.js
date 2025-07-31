console.log('Hi');

// # Preparation
// select the dom nodes
// create the team array
// get the form element
// get the input elements
const rowEl = document.getElementById('my-team')
const formEl = document.querySelector('form')
const nameFieldEl = document.getElementById('name')
const roleFieldEl = document.getElementById('role')
const imageFieldEl = document.getElementById('image')

console.log(formEl, nameFieldEl, roleFieldEl, imageFieldEl);



/* 

const team = [
  {
    id: 1,
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: `https://picsum.photos/400/200?random=1`
  },
  {
    id: 2,
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image() {
      return `https://picsum.photos/400/200?random=${this.id}`
    }
  },
  {
    id: 3,
    name: 'Walter Smith',
    role: 'CTO',
    image() {
      return `https://picsum.photos/400/200?random=${this.id}`
    }
  },
  {
    id: 4,
    name: 'Sarah Connor',
    role: 'Lead Designer',
    image() {
      return `https://picsum.photos/400/200?random=${this.id}`
    }
  },
  {
    id: 5,
    name: 'John Doe',
    role: 'Intern',
    image() {
      return `https://picsum.photos/400/200?random=${this.id}`
    }
  },
  {
    id: 6,
    name: 'Jane Smith',
    role: 'Marketing Manager',
    image() {
      return `https://picsum.photos/400/200?random=${this.id}`
    }
  }
]


*/


const team = [
  {
    id: 1,
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: `https://picsum.photos/400/200?random=1`
  },
  {
    id: 2,
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: `https://picsum.photos/400/200?random=2`
  },
  {
    id: 3,
    name: 'Walter Smith',
    role: 'CTO',
    image: `https://picsum.photos/400/200?random=3`
  },
  {
    id: 4,
    name: 'Sarah Connor',
    role: 'Lead Designer',
    image: `https://picsum.photos/400/200?random=4`
  },
  {
    id: 5,
    name: 'John Doe',
    role: 'Intern',
    image: `https://picsum.photos/400/200?random=5`
  },
  {
    id: 6,
    name: 'Jane Smith',
    role: 'Marketing Manager',
    image: `https://picsum.photos/400/200?random=6`
  }
]

renderTeam(team)


// add an event listener for the form submit event
formEl.addEventListener('submit', function(e){
// prevent the default form behaviour
  e.preventDefault()

  // get all the form values
  console.dir(e.target);
  
  const name = nameFieldEl.value
  const role = roleFieldEl.value
  const image = imageFieldEl.value
  const id = Date.now()
  console.log(id);
  
  // create a new object for the member
  const newMember = {
    id,
    name, 
    role,
    image,
  }
  console.log(newMember);
  
  // push the new object into the array
  team.push(newMember)
  console.log(team);
  
  // update the dom to render the new list
  renderTeam(team)
})












/* Functions */

function renderTeam(team){
  // loop over the array
  rowEl.innerHTML = ''

  for (let i = 0; i < team.length; i++) {
    // - get the element for the current iteration
    const member = team[i];

    // - create variables to hold the values for each property of the object
    /*   console.log(member.name);
      console.log(member.role);
      console.log(member.image()); */

    const { name, role, image } = member

 /*    console.log(name);
    console.log(role); */

    /* console.log(member.image());
    const image = member.image() */
    // - generate the card markup (function?)
    const cardMarkupString = genateCardMarkup(name, role, image)

   /*  console.log(cardMarkupString); */


    rowEl.insertAdjacentHTML('beforeend', cardMarkupString)

  }
}

// - append the card to the rowElement

function genateCardMarkup(name, role, image) {
  return `
    <div class="col">
      <div class="card">
        <img src="${image}" alt="" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <div>${role}</div>
        </div>
      </div>
    </div>
  `
}