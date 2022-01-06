import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'hauleeco';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'hauleeco'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hauleeco 123
        </p>

        <p>Xin chao {name} - {age} - {isMale ? "Male" : "Female"}</p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
            <p>Male 4</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
            <p>Male 4</p>
          </React.Fragment>
        )}

        <p>{student.name}</p>
        <ul>
          {colorList.map(color =>
          (<li key={color} style={{ color }} >{color}</li>
          ))}
        </ul>
        {!isMale && <p>Female</p>}

      </header>
    </div>
  );
}

export default App;
