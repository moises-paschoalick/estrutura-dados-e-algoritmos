package app;

public class Product {

    // Mudando para private
    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if(name != null && !"".equals(name)) {
            this.name = name;
        }
    }

    public double getPrice() {
        return price;
    }


    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    // Com orientação objetos
    public double total() {
        return price * quantity;
    }

    public void updatePrice(double percentage) {
        price = price * (1.0 + (percentage/100.0));
    }

    @Override
    public String toString() {
        return name + ", $" + String.format("%.2f", price) + ", " + quantity;
    }
}
