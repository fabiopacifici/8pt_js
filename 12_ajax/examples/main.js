console.log('Ajax 101');

const api_url = 'https://flynn.boolean.careers/exercises/api/random/int'


// 📌 Fetch API js native function

/* fetch(api_url)
  .then( response => response.json())
  .then(data => {
    // codice per far qualcosa con la risposta
    console.log(data);
    document.writeln(data.response)
  })
  .catch(error => {
    // codice da eseguire in caso di errore
    console.error(error);
  }); */


// 📌 3. Axios: perform an ajax request to the provided api_url endpoint 
axios.get(api_url)
  .then(response => {
    // 📌 4. Handle the response promise
    console.log(response);
    //codice da eseguire in caso di successo
    const result = response.data;

    console.log(result);

    
    
  })
/*   .catch(error => {
    // codice da eseguire in caso di errore
    console.error(error)
  })
  .then(() => {
    // codice da eserguire a prescindere dall'esito
    // (ad esempio si può fermare un loader!)
  }) */




const randomWordsApiEndpoit = 'https://flynn.boolean.careers/exercises/api/random/word'

// With axios



// With fetch (?)

