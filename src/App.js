import React, {useState} from 'react';
import './App.scss';
import Products from "./components/Products";
import PlayerStatus from "./components/PlayerStatus";
import {initialCreditLimit, initialDeathCount, initialStage} from "./engineDynamics/configuration";

function App() {
    const [deathCount, setDeathCount] = useState(initialDeathCount)
    const [creditLimit, setCreditLimit] = useState(initialCreditLimit)
    const [stage, setStage] = useState(initialStage)
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
