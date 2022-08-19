// Information to reach API
const apiKey = 'a2a421e1a58d4817bf8615ae97321159';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten }); // used to send the information, which needs to be in string format, to the request body
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'apiKey': apiKey
        },
        body: data,
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed');
    }, networkError => 
        console.log(networkError.message)
    ).then(jsonResponse => {
        //code to execute
    })
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);