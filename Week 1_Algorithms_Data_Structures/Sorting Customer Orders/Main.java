public class Main {
    public static void main(String[] args) {
        Order[] orders = new Order[] {
            new Order(101, "Alice", 250.75),
            new Order(102, "Bob", 99.99),
            new Order(103, "Charlie", 450.50),
            new Order(104, "Diana", 175.00)
        };

        System.out.println("Before Sorting:");
        for (Order o : orders) {
            System.out.println(o);
        }

        System.out.println("\nAfter Bubble Sort:");
        OrderSorter.bubbleSort(orders);
        for (Order o : orders) {
            System.out.println(o);
        }

        Order[] orders2 = new Order[] {
            new Order(101, "Alice", 250.75),
            new Order(102, "Bob", 99.99),
            new Order(103, "Charlie", 450.50),
            new Order(104, "Diana", 175.00)
        };

        System.out.println("\nAfter Quick Sort:");
        OrderSorter.quickSort(orders2, 0, orders2.length - 1);
        for (Order o : orders2) {
            System.out.println(o);
        }
    }
}
