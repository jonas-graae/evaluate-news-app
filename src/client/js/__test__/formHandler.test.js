const { getSentimentData } = require('../formHandler');

test('should contain a JSON endpoint', () => {
    getSentimentData('http://localhost:8082/sentiment').then((data) => {
        expect(200)  
    })
})