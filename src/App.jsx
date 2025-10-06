import { createContext, useState } from "react";
import Content from "./components/Content";
import CounterApp from "./components/CounterApp";
import Footer from "./components/Footer";
import Header from "./components/Header";

export let UserContext = createContext();

function App() {
  let [user, setUser] = useState({
    name: "Thilaka",
    age: 20,
    qualification: "B.Tech",
  });

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
