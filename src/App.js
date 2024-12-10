// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import slides from './mock.json';
import Section from "./components/Section"; // Import Section component
import Footer from './components/Footer'; // Import the Footer component
import data from "./data/data.json"; // Import the JSON data
import Ticker from './components/Ticker';  // Import the ticker component

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Header />

      <Slider slides={slides}/>

      <div className="container">
        <Section title="Young Stars" type="stocks" items={data.stocks} />
        <Section title="Latest News" type="news" items={data.news} />
        <Section title="Trending Stars" type="hotProperties" items={data.hotProperties} />
      </div>
      
      <Footer />  {/* Footer will appear at the bottom of the page */}
      <Ticker /> {/* Include the Ticker component */}
    </div>
  );
}

export default App;
