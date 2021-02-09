import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';




function App() {
  const products = [
    { name: 'Photoshop', price: '$99.23' },
    { name: 'Illustator', price: '$60.23' },
    { name: 'Pdf Reader', price: '$80.23' },
    { name: 'Pdf ', price: '$89.23' },
  ];

  const productsName = products.map(pd => <Products product={pd}></Products>);
  //console.log(productsName);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            productsName
          }
    </ul>
       
      </header>
    </div>
  );
}

function Counter() {

  const [count, setCount] = useState(10);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <button onClick={()=>setCount(count-1)}> Decress</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <div>
      <h3>Danamic Users:  {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}- {user.phone } ({user.email})</li>)
        }
      </ul>
    </div>
  );
}


function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height :'250px',
    width :'200px',
    float :'left',
  }
  
  const { name, price } = props.product;

  //console.log(name, price);

  return (
    <div style={productStyle}>
      <h3>{name }</h3>
      <h5>{price }</h5>
      <button>Buy Now</button>
    </div>
  );
}
export default App;
