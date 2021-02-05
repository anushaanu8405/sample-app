import logo from './logo.svg';
import './App.css';
import CustomizedDialogs from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CustomizedDialogs></CustomizedDialogs>
    </div>
  );
}

export default App;
