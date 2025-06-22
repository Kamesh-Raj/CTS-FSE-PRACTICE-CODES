public class Main {
    public static void main(String[] args) {
        Product[] products = new Product[] {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Book", "Stationery"),
            new Product(4, "Phone", "Electronics")
        };

        Product linearResult = SearchAlgorithms.linearSearch(products, "Book");
        System.out.println("Linear Search Result: " + (linearResult != null ? linearResult : "Not found"));

        SearchAlgorithms.sortByName(products);

        Product binaryResult = SearchAlgorithms.binarySearch(products, "Phone");
        System.out.println("Binary Search Result: " + (binaryResult != null ? binaryResult : "Not found"));
    }
}
