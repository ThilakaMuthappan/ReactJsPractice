import { UserContext } from "../App";
import React, { useContext } from "react";

function Header() {
    
  const { user } = useContext(UserContext);

  return (
    <>
      <header>
        <h1>TO DO LIST</h1>
        <p
          style={{
            backgroundColor: "rgb(7, 64, 82)",
            width: "30px",
            height: "30px",
            textAlign: "center",
            color: "rgb(175, 127, 161)",
            borderRadius: "40%",
          }}
        >
          {" "}
          {user.name.slice(0, 1)}{" "}
        </p>
      </header>
    </>
  );
}

export default Header;
