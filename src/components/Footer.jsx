import { Component } from "react";
import { UserContext } from "../App";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <h2>Footer</h2>
          <UserContext.Consumer>
            {({ user }) => {
              return <h2> {user.name}</h2>;
            }}
          </UserContext.Consumer>
        </footer>
      </>
    );
  }
}

export default Footer;
