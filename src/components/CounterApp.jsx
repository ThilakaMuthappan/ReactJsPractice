import React, {useState} from 'react'

const CounterApp = () => {


    let [count, setCount] = useState(0);

    function handleIncrease() {
        setCount((prevCount) => prevCount + 1);
    }

    function handleDecrease() {
        setCount((prevCount) => prevCount - 1);
    }
    return (
        <div>
            <h1>Counter Application - {count}</h1>
            <button onClick = {handleIncrease} >Increase Counter</button>
            <button onClick = {handleDecrease} >Decrease Counter</button>
        </div>
    )
}

export default CounterApp
