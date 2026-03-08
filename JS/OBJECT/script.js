/*function Product(name, price, quantity)  {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.toString = function() {
        return `${this.name}, $${this.price.toFixed(2)}, qty: ${this.quantity}`;
    }
}
*/

 // Sintaxe sugar (alternativa q o JS entrega)
class Product {   
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total() {
        return this.price * this.quantity;
    }
    
    updatePrice(percentage) {
        this.price = this.price * (1 + percentage/100)
    }

    toString() {
        //return this.name + ", " + this.price;
        return `${this.name}, $${this.price.toFixed(2)}, qty: ${this.quantity}`;
    }


}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

const total1 = p1.total();
const total2 = p2.total();

console.log(total1);
console.log(total2);

p1.updatePrice(10);
p2.updatePrice(20)

console.log(p1.price);
console.log(p2.price);