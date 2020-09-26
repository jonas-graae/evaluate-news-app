 
 const { validURL } = require('../validURL');


test("Test https://google.com as valid url", () => {
    expect(validURL("https://google.com")).toBe(true);
})