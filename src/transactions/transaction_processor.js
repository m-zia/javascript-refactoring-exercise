
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


function sortByAmountThenName(txCount) {
    return Object.fromEntries(
        Object.entries(txCount).sort((itemOne, itemTwo) => {
            return itemTwo[1] - itemOne[1] || itemOne[0].localeCompare(itemTwo[0]);
        })
    );
}


function validateTransactions(transactions) {
    return transactions !== undefined;
}

module.exports = processTransactions;