package app;

public class Program {


    public static void main(String[] args) {

        int p;
        p = 10;
        System.out.println(p);



        //System.out.println("Oi");
        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphones", 200.0, 2); //200.0 double

        var total1 = p1.total();
        var total2 = p2.total();

        System.out.println(total1);
        System.out.println(total2);

        p1.updatePrice(20.0);

        //Product.updatePrice(p1, 20);

        System.out.println(p1.getPrice());
    }
}
