import React from 'react';
import './App.scss';
import Products from "./Components/Products";
import PlayerStatus from "./Components/PlayerStatus";

function App() {
  return (
    <div className="App">
        <PlayerStatus/>
        <Products/>
    </div>
  );
}

export default App;
