import React, { useEffect, useState } from 'react';
import './Ticker.css';  // We will define the styles here

function Ticker() {
  const [hotProperties, setHotProperties] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        setHotProperties(data.hotProperties);
      });
  }, []);

  // Helper function to determine the color based on the change
  const getChangeColor = (change) => {
    return change.includes('+') ? 'green' : 'red';
  };

  return (
    <div className="ticker-container">
      <div className="ticker">
        {hotProperties.map((property, index) => (
          <div className="ticker-item" key={index}>
            <span className="ticker-symbol">{property.symbol}</span>
            <span className="ticker-name">{property.name}</span>
            <span className={`ticker-change ${getChangeColor(property.change)}`}>
              {property.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
