public class MobileApp implements Observer {
    private String user;

    public MobileApp(String user) {
        this.user = user;
    }

    public void update(String stockName, double stockPrice) {
        System.out.println("MobileApp [" + user + "]: " + stockName + " is now ₹" + stockPrice);
    }
}
