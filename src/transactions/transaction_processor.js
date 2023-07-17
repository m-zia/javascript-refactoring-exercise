//remove this global variable on line 2 and instead declare it as a local variable on line 6 (via 'let')
var txr = [];

function processTransactions(transActions) {

    txr = [];

    if(!validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = {}

    //instead of getting the array length, storing it in a variable and using a for-loop, we can just use forEach on the transActions array
    const numberOfTransactions = transActions.length;

    for(var i = 0; i < numberOfTransactions; i++) {
        const transaction = transActions[i];
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }

    txCount = sortByAmountThenName(txCount);
    
    // Places them back in array for returning. Could shorten below code by using .map() instead of .forEach
    Object.keys(txCount).forEach(function (key, index) {
        txr[index] = `${key} ${txCount[key]}`;
    });

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