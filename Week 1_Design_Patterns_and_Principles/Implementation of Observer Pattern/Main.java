public class Main {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();

        Observer mobileUser = new MobileApp("Alice");
        Observer webUser = new WebApp("Bob");

        market.registerObserver(mobileUser);
        market.registerObserver(webUser);

        market.setStockPrice("TCS", 3450.75);
        market.setStockPrice("Infosys", 1599.50);

        market.removeObserver(webUser);

        market.setStockPrice("Reliance", 2720.25);
    }
}
