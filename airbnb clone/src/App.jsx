import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

function App() {
  const card = Data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{card}</section>
    </div>
  );
}

export default App;
