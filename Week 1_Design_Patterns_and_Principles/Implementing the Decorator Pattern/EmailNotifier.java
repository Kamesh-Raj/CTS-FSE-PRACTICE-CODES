public class EmailNotifier implements Notifier {
    public void send(String message) {
        System.out.println("Email Notification Sent: " + message);
    }
}
