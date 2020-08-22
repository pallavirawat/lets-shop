import React, {useState} from 'react';
import './App.scss';
import Products from "./Components/Products";
import PlayerStatus from "./Components/PlayerStatus";

function App() {
  const [deathCount, setDeathCount] = useState(3)
  const [creditLimit, setCreditLimit] = useState(500)
  return (
    <div className="App">
        <PlayerStatus deathCount={deathCount} creditLimit={creditLimit}/>
        {/*todo have some concept of stages at higher level which takes in component (products, product page, cart, checkout)*/}
        <Products retryCount/>
    </div>
  );
}

export default App;
