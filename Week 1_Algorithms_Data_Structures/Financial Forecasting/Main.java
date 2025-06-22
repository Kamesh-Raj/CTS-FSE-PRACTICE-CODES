public class Main {
    public static void main(String[] args) {
        double currentValue = 10000;
        double growthRate = 0.08; // 8%
        int years = 5;

        double forecastRecursive = FinancialForecast.predictFutureValue(currentValue, growthRate, years);
        double forecastOptimized = FinancialForecast.predictFutureValueOptimized(currentValue, growthRate, years);

        System.out.println("Recursive Forecast after " + years + " years: $" + forecastRecursive);
        System.out.println("Optimized Forecast using Math.pow: $" + forecastOptimized);
    }
}
