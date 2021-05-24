import logo from './logo.svg';
import './App.css';
import '../src/Components/Hello'
import Routes from "./router";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes />
      </header>
    </div>
  );
}

export default App;
