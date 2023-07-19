
function processTransactions(transActions) {

    let txr = [];

    if(!validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = {}

    transActions.forEach(transaction => {
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    });

    txCount = sortByAmountThenName(txCount);
    
    txr = Object.entries(txCount).map(([key, value]) => `${key} ${value}`);

    return txr;
}

//Could use a simpler sorting function that is easier to read and understand - but maintain the desired result of 
//the transaction count being sorted in descending order and the transaction name being sorted in ascending order
function sortByAmountThenName(txCount) {
    let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}

//could probably simplify the function logic into 1 line 
function validateTransactions(transactions) {
    if(transactions === undefined) {
        return false;
    } 

    return true;
}

module.exports = processTransactions;