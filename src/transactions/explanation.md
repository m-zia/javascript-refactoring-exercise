- Removed the global variable 'txr' that was on line 2, as it is going to be defined in the processTransactions function anyway.

# The processTransactions function:
- Added 'let' when defining the 'txr' variable in the processTransactions function.
- Instead of iterating over the transActions array with a for-loop, we have instead decided to use the for-each method to make the code declarative and more readable.
- When converting the txCount object into an array of key-value pairs, we decided to use the Object.entries method instead of Object.keys because it is easier to read and takes up fewer lines of code.




# The sortByAmountThenName function:
- Instead of using Object.keys() to sort and then using a for-of loop to put results into an object, we can use Object.fromEntries() and Object.entries() to replicate the original functionality in fewer lines of code.
- The Object.fromEntries method converts the array back into an object with the sorted order.
- The Object.entries method is used to convert the txCount object into an array of key-value pairs representing the transaction name and it's count.

- For the sorting logic we can take advantage of the || operator. Recall that if we have (x || y) then this is basically saying: "if the x condition is truthy then return x; else, return y"]
    - Therefore, the itemTwo[1] - itemOne[1] comparison will sort the counts in descending order.
    - However, in the edge case when the transactions are equal (we get 0, which is falsy), then itemTwo[1] - itemOne[1] evaluates to false, so the || operator looks at itemOne[0].localeCompare(itemTwo[0]) instead.

- The .localeCompare() method compares strings based on the user's language and location settings.
    - If itemOne[0] comes before itemTwo[0], then localeCompare returns -1, therefore itemOne comes before itemTwo.
    - If itemOne[0] is equal to itemTwo[0], then localeCompare returns 0. Therefore the order of itemOne and itemTwo doesn't change.
    - If itemOne[0] comes after itemTwo[0] in sort order, then localeCompare returns +1, therefore itemOne comes after itemTwo.



# The validateTransactions function:
- Old comparison logic can be expressed in a single line via strict inequality operator !==
