public class Main {
    public static void main(String[] args) {
        Image image1 = new ProxyImage("nature_photo.jpg");
        image1.display();
        System.out.println();
        image1.display();
        System.out.println();
        Image image2 = new ProxyImage("cityscape.png");
        image2.display();
    }
}
