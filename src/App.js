import './App.css';
import '../src/Components/Hello'
import Routes from "./router";
import FooterPage from "./Components/MainInput/FooterPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
        <FooterPage/>
      </header>
    </div>
  );
}

export default App;
