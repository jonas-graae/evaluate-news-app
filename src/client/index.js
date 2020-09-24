const urlChecker = require('is-valid-http-url');
import './styles/globals.scss';
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

const form = document.getElementById('sentiment__form');

form.addEventListener("submit", e => {
    e.preventDefault();
    let sentiment__URL = document.getElementById('sentiment__URL').value;

    if(urlChecker(sentiment__URL)) {
        handleSubmit();
    } else {
        alert("Please add a valid URL for using sentiment analysis")
        console.log('Error, not valid URL: ' + sentiment__URL);
    }
    
    console.log('submit has been clicked!')
});