const express = require('express');
const https = require('https');
const cors = require('cors');
const fetch = require('node-fetch');

// Test API response JSON
const mockAPIResponse = require('./mockAPI.js');

// Hide my API key and Password with dotenv
const dotenv = require('dotenv');
dotenv.config();

// Setup express app
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())
app.use(express.static('dist'))

let sentimentText = {};

app.get('/sentiment', async (req, res) => {
    const query = sentimentText.text;
    const apiKey = process.env.API_KEY;
    const url = 'https://api.meaningcloud.com/sentiment-2.1?key=' + apiKey + '&lang=en&txt=' + query;
    
    console.log(url);

    const response = await fetch(url)
    try {
        if(response.status === 200) {
            const data = await response.json();
            res.send(data);
        } 
    } catch (error) {
        console.log(error);
    }
    



    // https.get(url, function(response) {
    //     console.log(response.statusCode);
        
    //     response.on('data', (data) => {
    //         res.send(JSON.parse(data))
    //     });

    //     response.on('error', error => {
    //         console.log(error);
    //     })
    // })
})

app.post('/savetext', function (req, res) {
    sentimentText.text = req.body.customURL;
    res.end();
})

app.get('/savetext', function (req, res) {
    res.send(sentimentText);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})