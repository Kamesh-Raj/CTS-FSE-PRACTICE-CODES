public class PayPalPayment implements PaymentStrategy {
    private String email;
    public PayPalPayment(String email) {
        this.email = email;
    }
    public void pay(double amount) {
        System.out.println("Paid Rupees" + amount + " using PayPal account: " + email);
    }
}
