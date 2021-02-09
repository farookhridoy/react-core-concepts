import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';



function App() {

  const nayok = ['Anower', 'jaforikbarl', 'Alamgir', 'Salman Shah'];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>
        <Person name={nayok[0]}></Person>
        <Person name={nayok[1]}></Person>
        <Person name={nayok[2]}></Person>
        
      </header>
    </div>
  );
}


function Person(props) {
  return (
    <div style={{border:'2px solid red', margin:'2px'}}>
      <h1>Name:{ props.name}</h1>
    </div>
  );
}

export default App;
