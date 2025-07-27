import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      Welcome to the first session of React - by SANJAIGANESH - 6429256
    </h1>

    <div style={{ height: '30px' }}></div>

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="objectives" style={{ textAlign: 'left' }}>
        <h2>Objectives learned in this Session</h2>
        <ul>
          <li>Single Page Application and its benefits</li>
          <li>What is React and how it works</li>
          <li>Differences between SPA and MPA</li>
          <li>Pros & Cons of Single-Page Application</li>
          <li>Virtual DOM</li>
          <li>Features of React</li>
        </ul>
      </div>
    </div>

    <div style={{ height: '30px' }}></div>

    <h2 style={{ textAlign: 'center' }}>
      Thank You!!
    </h2>
  </div>
);


}

export default App;
