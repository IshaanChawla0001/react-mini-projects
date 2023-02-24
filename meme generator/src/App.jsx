import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import memesData from "./memesData";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
