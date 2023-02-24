import { useState } from "react";
import "./App.css";
import data from "./data.js";
import Banner from "./components/Banner";
import List from "./components/List";

function App() {
  const list = data.map((item, index) => {
    return <List key={index} {...item} />;
  });
  return (
    <div className="App">
      <Banner />
      {list}
    </div>
  );
}

export default App;
