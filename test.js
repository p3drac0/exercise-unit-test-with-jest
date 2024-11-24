const { fromDollarToYen } = require('./app.js');


test('1000 dollars should be algo', () => {

    let result= fromDollarToYen(1000)

    expect(result).toBe(Math.floor(1000/1.07*156.5));
});