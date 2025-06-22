public class WebApp implements Observer {
    private String user;

    public WebApp(String user) {
        this.user = user;
    }

    public void update(String stockName, double stockPrice) {
        System.out.println("WebApp [" + user + "]: " + stockName + " is now ₹" + stockPrice);
    }
}
