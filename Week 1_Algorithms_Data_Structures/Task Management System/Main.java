public class Main {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask(new Task(1, "Design UI", "Pending"));
        manager.addTask(new Task(2, "Implement Backend", "In Progress"));
        manager.addTask(new Task(3, "Test Application", "Not Started"));

        System.out.println("All Tasks:");
        manager.traverseTasks();

        System.out.println("\nSearch Task with ID 2:");
        Task found = manager.searchTask(2);
        System.out.println(found != null ? found : "Not Found");

        System.out.println("\nDelete Task with ID 1:");
        boolean deleted = manager.deleteTask(1);
        System.out.println(deleted ? "Deleted" : "Not Found");

        System.out.println("\nUpdated Task List:");
        manager.traverseTasks();
    }
}
