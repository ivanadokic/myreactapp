import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <h1>Hello</h1>
        <label>
          <p>Enter your name here: </p>
          <input name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
