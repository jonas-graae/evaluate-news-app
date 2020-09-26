import { validURL } from './validURL';

function handleSubmit(event) {
    event.preventDefault();
    const sentiment__URL = document.getElementById('sentiment__URL').value;
    const spinner = document.querySelector('.spinner'); 

    if(validURL(sentiment__URL)) {
        alert("This is a valid URL, please wait for senitment Analizis");
        spinner.style.display = 'block';

        postData('http://localhost:8082/savetext', {
            customURL: sentiment__URL
        }).then(() => {
            return getSentimentData('http://localhost:8082/sentiment')
        }).then(data => {
            spinner.style.display = 'none';
            updateUI(data);
        }).catch((error) => {
            console.log("error", error);
        })
    }
}

/* Function to POST data */
const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });

    try {
        console.log(response);
    } catch(error) {
        console.log("error", error);
    }
}

/* Function to GET sentiment Data -> Trickers Get Request to meaningcloud in backend  */
const getSentimentData = async (url) => {
    const request = await fetch(url);
    try {
        return await request.json();
    } catch(error){
        console.log(error);
    }
}

const updateUI = (data) => {
    const resultHeading = document.getElementById('results__heading');
    const resultBody = document.getElementById('results');

    //Clear datafields in indexHTML for new data
    resultHeading.textContent = '';
    resultBody.textContent = '';

    // Add new data to UI
    resultHeading.innerHTML = 'Text: ' + data.sentence_list[0].text;
    resultBody.innerHTML += 'subjectivity: ' + data.subjectivity + '<br>';
    resultBody.innerHTML += 'confidence: ' + data.confidence + '%<br>';
}

export { handleSubmit, postData, updateUI, getSentimentData }