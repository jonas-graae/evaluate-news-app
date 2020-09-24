const urlChecker = require('is-valid-http-url');

function handleSubmit() {
    let sentiment__URL = document.getElementById('sentiment__URL').value;
    
    postData('http://localhost:8082/savetext', {
        customURL: sentiment__URL
    }).then(() => {
        return getSentimentData('http://localhost:8082/sentiment')
    }).then(data => {
        updateUI(data);
    }).catch((error) => {
        console.log("error", error);
    })
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