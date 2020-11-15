'use strict'

document.addEventListener('DOMContentLoaded', setup);

function setup() {
    document.querySelector('button').addEventListener('click', fetchData);
}

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

function displayData(jsonData) {
    let section = document.querySelector('section');
    let data = document.createElement('h1');
    section.appendChild(data);
    section.textContent = jsonData;
}

function treatError(error) {
    console.error(error);
    let errp = document.querySelector('p');
    errp.textContent = error;
}