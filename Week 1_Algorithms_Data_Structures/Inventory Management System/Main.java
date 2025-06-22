public class Main {
    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();

        manager.addProduct(new Product(1, "Mouse", 50, 299.99));
        manager.addProduct(new Product(2, "Keyboard", 30, 699.99));
        manager.displayInventory();

        manager.updateProduct(2, "Mechanical Keyboard", 40, 799.99);
        manager.deleteProduct(1);
        manager.displayInventory();
    }
}
