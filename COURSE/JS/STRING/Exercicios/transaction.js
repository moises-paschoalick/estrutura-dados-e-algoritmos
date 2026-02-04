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
    this.money = Number(parts[2]);
    this.city = parts[3];
}

function validTransaction(transaction){
  
  let isValid = true;

  console.log(transaction);

  if(transaction.money > 1000)
    return !isValid

  if(typeof(transaction.name) !== "string" ||
     !Number.isFinite(transaction.time) ||
     !Number.isFinite(transaction.money) ||
     typeof(transaction.city) !== "string" ) return !isValid
  
   //
  
  return isValid;

}

//const transactions = ["alice,20,800,mtv", "alice,50,1200,mtv"]
const transactions = ["alice,20,800,mtv", "alice,a50,a1200,mtv"]
const t1 = new Transaction(transactions[0]);
const t2 = new Transaction(transactions[1]);

console.log(validTransaction(t2));

