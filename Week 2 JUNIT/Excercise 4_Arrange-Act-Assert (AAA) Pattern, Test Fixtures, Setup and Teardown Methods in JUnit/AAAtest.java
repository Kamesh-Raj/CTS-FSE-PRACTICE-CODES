package tests;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import org.junit.Test;

public class AAAtest {
	private BankAccount account;
    
	// Setup: This runs before each test
    @Before
    public void setUp() {
        account = new BankAccount(1000);  // Arrange: initial balance
        System.out.println("Setup complete");
    }

    // Teardown: This runs after each test
    @After
    public void tearDown() {
        account = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testDeposit() {
        // Arrange (already done in setup)
        int amount = 500;

        // Act
        account.deposit(amount);

        // Assert
        assertEquals(1500, account.getBalance());
    }

    @Test
    public void testWithdraw() {
        // Arrange (already done in setup)
        int amount = 300;

        // Act
        account.withdraw(amount);

        // Assert
        assertEquals(700, account.getBalance());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testWithdrawInsufficientFunds() {
        // Arrange
        int amount = 2000;

        // Act
        account.withdraw(amount);

        // Assert is handled by the exception rule
    }

}
