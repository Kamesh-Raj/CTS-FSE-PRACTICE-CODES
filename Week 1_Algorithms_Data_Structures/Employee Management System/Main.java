public class Main {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(10);

        manager.addEmployee(new Employee(1, "Alice", "Manager", 75000));
        manager.addEmployee(new Employee(2, "Bob", "Developer", 55000));
        manager.addEmployee(new Employee(3, "Charlie", "Analyst", 50000));

        System.out.println("All Employees:");
        manager.traverseEmployees();

        System.out.println("\nSearch Employee with ID 2:");
        Employee e = manager.searchEmployee(2);
        System.out.println(e != null ? e : "Not found");

        System.out.println("\nDelete Employee with ID 1:");
        boolean deleted = manager.deleteEmployee(1);
        System.out.println(deleted ? "Deleted" : "Not found");

        System.out.println("\nUpdated Employee List:");
        manager.traverseEmployees();
    }
}
