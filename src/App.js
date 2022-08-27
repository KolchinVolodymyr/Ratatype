import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div class="container">
        <div class="row">
          <div className="col-xl-4">12345</div>
          <div className="col-xl-4">12345</div>
          <div className="col-xl-4">12345</div>
        </div>
      </div>
    </div>
  );
}

export default App;
