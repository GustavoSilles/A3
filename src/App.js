import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Projetinho A3
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=SnyQhuQvALQ"
          target="_blank"
          rel="noopener noreferrer"
        >
        Coisas da vida
        </a>
      </header>
    </div>
  );
}

export default App;
