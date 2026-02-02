// Problema "transaction"
// Fazer: 

const transactions = ["alice,20,800,mtv", "alice,50,1200,mtv"]


function Transaction(csv) {
    const parts = csv.split(",");
    this.name = parts[0];
    this.time = Number(parts[1]);
    this.money = Number(parts[2]);
    this.city = parts[3];
}

const t1 = new Transaction(transactions[0]);

console.log(t1);


