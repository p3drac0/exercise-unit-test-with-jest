

function fromDollarToYen(dollar_amount){
    return Math.floor(dollar_amount/1.07*156.5)
}



module.exports={fromDollarToYen}