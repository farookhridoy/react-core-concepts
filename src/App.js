import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}


function Person() {
  return (
    <div style={{border:'2px solid red', margin:'2px'}}>
          <h1>Name: Omar Farook</h1>
        <h3>Name: Omar Farook</h3>
    </div>
  );
}

export default App;
