
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
};
function fromDollarToYen(dollar_amount){
    return Math.floor(dollar_amount/1.07*156.5)
}

function fromEuroToDollar(euro_amount){
    return Number(euro_amount*oneEuroIs.USD).toFixed(2)
}

function fromYenToPound(yen_amount){
    return Number(yen_amount/oneEuroIs.JPY*oneEuroIs.GBP).toFixed(2)
}



function suma(a,b){

if (isNaN(a)||isNaN(b)){
    return "Not a number"
}else{

    return(a+b)
}


}


module.exports={fromDollarToYen,suma,fromEuroToDollar,fromYenToPound}
