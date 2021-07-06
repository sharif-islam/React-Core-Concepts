import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";

function App() {
  const products = [
    { name: "PhotoShop", price: "$90.66" },
    { name: "Adobe", price: "$66.66" },
    { name: "Illustrator", price: "$50.66" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>My First Website</p>
        <Counter></Counter>
        <Users></Users>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}

        <Person name="Sharif Islam" food="fasta"></Person>
        <Person name="jasim"></Person>
        <Person name="manna"></Person>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleUp = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDown = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  const styleCounter = {
    border: " 1px solid red",
    padding: "10px",
  };
  return (
    <div style={styleCounter}>
      <h1> Buy Cart: {count}</h1>
      <button onClick={handleDown}>Decrease</button>
      <button onClick={handleUp}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Call API</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Product(props) {
  const styleProduct = {
    border: "1px solid red",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    width: "200px",
    height: "200px",
    margin: "5px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={styleProduct}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy now</button>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{ border: "1px solid red", margin: "5px" }}>
      <h1>Name : {props.name}</h1>
      <h3>am i joking with you?</h3>
    </div>
  );
}

export default App;
