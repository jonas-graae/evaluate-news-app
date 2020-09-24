const urlChecker = require('is-valid-http-url');

test("Test https://google.com as valid url", () => {
    expect(urlChecker("https://google.com")).toBe(true);
})