public class Main {
    public static void main(String[] args) {
        Computer basicComputer = new Computer.Builder("Intel i5", "8GB")
                                        .build();
        basicComputer.displayConfiguration();

        Computer gamingComputer = new Computer.Builder("AMD Ryzen 7", "16GB")
                                        .setStorage("1TB SSD")
                                        .setGraphicsCard("NVIDIA RTX 3060")
                                        .setKeyboard("Mechanical RGB")
                                        .build();
        gamingComputer.displayConfiguration();

        Computer businessComputer = new Computer.Builder("Intel i7", "16GB")
                                        .setStorage("512GB SSD")
                                        .setKeyboard("Ergonomic")
                                        .build();
        businessComputer.displayConfiguration();
    }
}
