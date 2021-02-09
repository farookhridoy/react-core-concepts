import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

let person = {
  name: "Omar Farook",
  job: "Engineer"
}

let style = {
  color: 'red',
  backgroundColor: 'yellow'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a react person </p>
        <p style={{ backgroundColor:'green' }}>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My heading : { person.name +" "+ person.job }</h1>
      </header>
    </div>
  );
}

export default App;
