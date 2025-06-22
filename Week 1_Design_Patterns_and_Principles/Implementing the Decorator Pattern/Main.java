public class Main {
    public static void main(String[] args) {
        Notifier emailNotifier = new EmailNotifier();
        Notifier multiChannelNotifier = new SlackNotifierDecorator(
                                            new SMSNotifierDecorator(
                                                emailNotifier));
        multiChannelNotifier.send("Server is down!");
    }
}
