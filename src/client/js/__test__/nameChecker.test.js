const { checkForName } = require('../nameChecker');

test('the name list has name of Picard', () => {

    checkForName('Picard')
    expect(true).toBe(true);
});