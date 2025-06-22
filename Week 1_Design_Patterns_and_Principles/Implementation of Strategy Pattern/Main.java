public class Main {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        context.setPaymentStrategy(new CreditCardPayment("1234-5678-9876-5432", "Alice"));
        context.executePayment(1500.0);

        context.setPaymentStrategy(new PayPalPayment("bob@example.com"));
        context.executePayment(2000.0);
    }
}
