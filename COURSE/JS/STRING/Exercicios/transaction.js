/* Problema "transaction"
Fazer: 
A transaction is possibly invalid if:
the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.

You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction. Return a list of transactions that are possibly invalid. You may return the answer in any order.

Constraints:
transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.
*/

function Transaction(csv) {
    const parts = csv.split(",");
    this.name = parts[0];
    this.time = Number(parts[1]);
    this.amount = Number(parts[2]);
    this.city = parts[3];
}

function validTransaction(transactions) {

  const t1 = new Transaction(transactions[0]);
  const t2 = new Transaction(transactions[1]);  
 
  if(t1.amount > 1000)    
    return [transactions[0]];

  if(t2.amount > 1000)
    return [transactions[1]];
  
  if(t1.name === t2.name && t1.city !== t2.city && Math.abs(t1.time - t2.time) <= 60)
    return transactions;
      
}

/// Fazer dois laços
function invalidTransactions(transactions) {
    const invalidArray = new Array(transactions.lenght).fill(false);
    
    for(let i=0; i<transactions.length; i++) {
       const ti = new Transaction(transactions[i]);
       console.log(ti)
    }
}


const transactions1 = ["alice,20,800,mtv", "alice,50,100,beijing"]
const transactions2 = ["alice,20,800,mtv", "alice,20,1200,mtv"]
const transactions3 = ["alice,20,800,mtv", "bob,50,1200,mtv"]

console.log(invalidTransactions(transactions1));
//console.log(validTransaction(transactions1));
//console.log(validTransaction(transactions2));
//console.log(validTransaction(transactions3));

