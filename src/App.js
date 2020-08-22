import React, {useState} from 'react';
import './App.scss';
import Products from "./components/Products";
import PlayerStatus from "./components/PlayerStatus";

function App() {
    const [deathCount, setDeathCount] = useState(3)
    const [creditLimit, setCreditLimit] = useState(500)
    const [stage, setStage] = useState(1)
    console.log(`deathcount ${deathCount} creditlimit ${creditLimit} stage ${creditLimit}`)
      
    return (
        <div className="App">
            <PlayerStatus deathCount={deathCount} creditLimit={creditLimit} stage={stage}/>
            {/*todo have some concept of stages at higher level which takes in component (products, product page, cart, checkout)*/}
            <Products deathCount={deathCount} setDeathCount={setDeathCount}
                      creditLimit={creditLimit} setCreditLimit={setCreditLimit}
                      stage={stage} setStage={setStage}
            />
        </div>
    );
}

export default App;
