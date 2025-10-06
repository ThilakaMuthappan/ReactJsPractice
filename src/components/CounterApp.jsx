import React, { useState } from "react";

const CounterApp = () => {
  let [count, setCount] = useState(0);
  let [comp, setComp] = useState("Loading");
  let message;

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function selectComponent() {
    switch (comp) {
      case "Loading":
        return <LoadingComp />;
      case "Success":
        return <SuccessComp />;
      case "Error":
        return <ErrorComp />;
    }
  }
  if (count < 10) {
    message = (
      <div>
        <h3>You click {count} times</h3>
        <p> Still {10 - count} more times to get 10% reward</p>
      </div>
    );
  } else if (count === 10) {
    message = (
      <div>
        <h3>You click {count} times</h3>
        <p>Congrats you unlocked 10% discount</p>
      </div>
    );
  } else if (count < 20) {
    message = (
      <div>
        <h3>You click {count} times</h3>
        <p>
          You are on the way to get more reward. Keep clicking to get 20% reward
        </p>
      </div>
    );
  } else {
    message = (
      <div>
        <h3>You click {count} times</h3>
        <p>You reached top reward !!! You are Click Master</p>
      </div>
    );
  }
  return (
    <div>
      {/* TO learn props 
            <h1>Counter Application - {count}</h1>
            <button onClick = {handleIncrease} >Increase Counter</button>
            <button onClick = {handleDecrease} >Decrease Counter</button> */}
      <h1>Click to unlock 🎉</h1>
      <button className="button-75" role="button" onClick={handleIncrease}>
        Click ME!!
      </button>
      {message}
      {selectComponent()}
      {/* {count >= 10 ? (
        <p>Enjoy the 10% discount</p>
      ) : (
        <p>Click the button 10 times to get the reward</p>
      )}
      {count >= 20 && <p>You are a click Master</p>} */}
    </div>
  );
};

export default CounterApp;

function LoadingComp() {
  return (
    <div>
      <h6>Loading....</h6>
    </div>
  );
}
function SuccessComp() {
  return (
    <div>
      <h6>Success🥳</h6>
    </div>
  );
}
function ErrorComp() {
  return (
    <div>
      <h6>Error😡</h6>
    </div>
  );
}
