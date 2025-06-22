public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String name;
    public CreditCardPayment(String cardNumber, String name) {
        this.cardNumber = cardNumber;
        this.name = name;
    }
    public void pay(double amount) {
        System.out.println("Paid Rupees" + amount + " using Credit Card [" + cardNumber + "] by " + name);
    }
}
