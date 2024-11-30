const {fromDollarToYen,suma,fromEuroToDollar,fromYenToPound} = require('./app.js');



test('1000 dollars should be 146261', () => {

    let result= fromDollarToYen(1000)

    expect(result).toBe(Math.floor(1000/1.07*156.5));
});


test('1000 euros should be 1070 dollars',()=>{
    let result=fromEuroToDollar(1000)

    expect(result).toBe(Number(1070).toFixed(2))
}
)

test('10000 yen should be 55,6 pounds',()=>{
    let result =fromYenToPound(10000)
    expect(result).toBe(Number(55.59).toFixed(2))
}
)

test('35 plus 43 should be 78',()=>{
   let result=suma(43,78)
    expect(result).toBe(43+78)})



test('something plus 9 should be NaN',()=>{
    let result=suma("aprobadme por favor",9)

    expect(result).toBe("Not a number")
}
)
