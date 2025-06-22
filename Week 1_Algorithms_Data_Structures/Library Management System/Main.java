public class Main {
    public static void main(String[] args) {
        Book[] books = new Book[] {
            new Book(1, "Data Structures", "Mark Allen"),
            new Book(2, "Operating Systems", "Silberschatz"),
            new Book(3, "Computer Networks", "Andrew Tanenbaum"),
            new Book(4, "Java Programming", "James Gosling")
        };

        System.out.println("Linear Search (Title: 'Operating Systems'):");
        Book foundLinear = LibrarySearch.linearSearch(books, "Operating Systems");
        System.out.println(foundLinear != null ? foundLinear : "Book not found");

        LibrarySearch.sortByTitle(books);

        System.out.println("\nBinary Search (Title: 'Java Programming'):");
        Book foundBinary = LibrarySearch.binarySearch(books, "Java Programming");
        System.out.println(foundBinary != null ? foundBinary : "Book not found");
    }
}
