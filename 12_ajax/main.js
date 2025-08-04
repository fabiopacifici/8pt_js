
console.log('Ajax 101');

// Tramite una chiamata ad una API, stampiamo a schermo un numero casuale.

// # Preparation steps
// - create a variable to store the endpoint
const api_url_endpoint = 'https://flynn.boolean.careers/exercises/api/random/int'
// - select the dom elements 
const resultEl = document.getElementById('result')

console.log(api_url_endpoint, resultEl);


// # Perform an ajax call
axios.get(api_url_endpoint)
  .then(res => {
    console.log(res);


    const resultNumber = res.data.response
    console.log(resultNumber);


    resultEl.innerHTML = resultNumber


  })
console.log('Hi there');

// - add axios.get
// - handle the response with then
//console.log(res);


// Another API call

/* const another_endpoint = 'https://flynn.boolean.careers/exercises/api/random/word'

axios.get(api_url_endpoint)
  .then(res => {
    console.log(res);

  })
  */



  // Stampa in pagina una parola casuale
const randomWordEndpoint = 'https://flynn.boolean.careers/exercises/api/random/word'


axios
.get(randomWordEndpoint)
.then(response =>{
  console.log(response);
  
  const word = response.data.response

  if(response.data.success) {
    console.log(word);

    document.getElementById('result').innerText= word
  }
  

})