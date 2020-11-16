//Nael Louis, 1934115
'use strict'

document.addEventListener('DOMContentLoaded', setup);

/**
 * Setup is called when the dom is loaded and creates an event listener
 * for the button and call fetchData
 */
function setup() {
    document.querySelector('button').addEventListener('click', fetchData);
}

/**
 * This function use the fetch api to get a quote from an https url
 * if the response is ok it prints the status code and return the response
 * which is displayed.
 * else it throws an error which is then caught using the treatError method. 
 * @param {*} e  
 */
function fetchData(e) {
    let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    fetch(url).then(response => {
        if (response.ok) {
            console.log('Status Code: ' + response.status);
            return response.json();
        }
        else {
            throw new Error('Status Code: ' + response.status);
        }
    })
    .then(json => {
        displayData(json);
    })
    .catch(error => {
        treatError(error);
    });
    e.preventDefault();
}
/**
 * this function select the tag section and then place an header with 
 * the data collected by fetchData function and displays it.
 * @param {*} jsonData 
 */
function displayData(jsonData) {
    let data = document.querySelector('h1');
    data.textContent = jsonData;
}

/**
 * If the function fetchData throw an error this function prints it in the console
 * then prints it in a paragraph for this effect.
 * @param {*} error 
 */
function treatError(error) {
    console.error(error);
    let errp = document.querySelector('p');
    errp.textContent = error;
}