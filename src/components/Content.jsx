import React, { useState } from "react";
import CounterApp from "./CounterApp";
import Shop from "./Shop";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  //   function printSomething(e, user) {
  //     console.log(e);
  //     console.log("Hello" + user);
  //   }

  const [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "React", checked: true },
    { id: 3, label: "Spring", checked: false },
  ]);
  let [newItem, setNewItem] = useState(" ");
  return (
    <main>
      {/* <h1>Main content </h1>
            <button className="button-75" role="button" onClick = {(e) => printSomething(e, "thilaka")} >
                <span className="text">Click ME!!</span>
            </button> */}
      {/* <CounterApp /> */}
      {/* <Shop /> */}
      <div>
        <input
          type="text"
          size="50"
          value={newItem}
          placeholder="Add new Item"
          onChange={(e) => {
            console.log(e);
          }}
        ></input>
        <button>Add</button>
      </div>
      <ul>
        {items.map((items) => {
          return (
            <li key={items.id} className="item">
              <input
                type="checkbox"
                checked={items.checked}
                onChange={() => {}}
              />
              <label>{items.label}</label>
              <FaTrashAlt role="button" tabIndex="0" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
