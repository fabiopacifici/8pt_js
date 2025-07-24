console.log('Hi there');

// Select the dom elements
const imgEl = document.querySelector('img')
const buttonEl = document.querySelector('button')


// elaborate the logic
// - how to read the src value on the img tag?
//document.writeln(imgEl.src)
console.log(imgEl.src);
// - how do you change the src value
//imgEl.src = './img/yellow_lamp.png'

// - how do you listen for a button click?
buttonEl.addEventListener('click', ()=>{
  
  console.log(imgEl.src.includes('yellow'));
  
  
  // if the img src has yellow_lamp the bulb is on (turn it off)
  if (imgEl.src.includes('yellow')){
    imgEl.src = './img/white_lamp.png'
    buttonEl.innerText = 'turn it on'
    // turn it off
  } else {
    console.log('Turn it on');
    // turn it on
    imgEl.src = './img/yellow_lamp.png'
    buttonEl.innerText = 'turn it off'


  }
  // otherwise turn in on

})