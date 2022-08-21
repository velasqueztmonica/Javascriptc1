Requests

1 - GET Requests using FETCH
The fetch() function:

Creates a request object that contains relevant information that an API needs.
Sends that request object to the API endpoint provided.
Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

fetch ('url').then(response => { // sends the request
    if (response.ok) { //ok property returns a boolean
        return response.json(); // converts response to JSON
    }

    throw new Error ('Request Failed'); //if falsy value

    }, networkError => console.log(networkError.message) //network error if couldnt reach the endpoint
    ).then(jsonResponse => {
        //code to execute with jsonResponse
    })
})

2 - POST 

fetch('url', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
}).then (response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then (jsonResponse => {
    //Code to execute with jsonResponse
});

#Handling a POST request
The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another .then() method and handle the returned JSON object and display the information to our webpage.

#ASYNC POST Request

const getDat = async () => {
    try { //block to send the request
        const response = await fetch(endpoint, 
        {
            method: 'POST',
            body: JSON.stringify({id:200})
        })
    
    if (response.ok) {
        const jsonResponse = await response.json();
        // code to execute with jsonResponse
    }
    throw new Error ('Request failed!');
    }
    catch (error) {
        console.log(error)
    }
}

##REVIEW
Review
In this lesson, we learned how to make GET and POST requests using the Fetch API and async/await keywords. Let’s recap on the concepts covered in the previous exercises:

GET and POST requests can be created in a variety of ways.
We can use fetch() and async/await to asynchronous request data from APIs.
Promises are a type of JavaScript object that represents data that will eventually be returned from a request.
The fetch() function can be used to create requests and will return promises.
We can chain .then() methods to handle promises returned by the fetch() function.
The async keyword is used to create asynchronous functions that will return promises.
The await keyword can only be used with functions declared with the async keyword.
The await keyword suspends the program while waiting for a promise to resolve.
