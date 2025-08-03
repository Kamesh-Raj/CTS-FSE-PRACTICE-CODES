import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  // Counter Handlers
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    alert('Hello! The counter was increased.');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  // Say Welcome with argument
  const sayWelcome = (msg) => {
    alert(`Hello Member1! ${msg}`);
  };

  // Synthetic event handler
  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  // Currency Conversion
  const handleSubmit = (e) => {
    e.preventDefault();
    const amountInRupees = parseFloat(amount);
    if (currency.toLowerCase() === 'euro') {
      const result = amountInRupees * 80;
      alert(`Converting to Euro Amount is ${result}`);
    } else {
      alert("Currency not supported");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <button onClick={handleSyntheticEvent}>Click on me</button>

      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br />
        <label>Currency: </label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
