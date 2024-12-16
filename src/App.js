import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
export default function App() {
  const cards = data.map(item =>
    <Card
    id={item.id}
    cardImg={item.cardImg}
    title={item.title}
    location={item.location}
    description={item.description}
    date={item.date}
    link={item.link}
    
    
    />)
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

