import React from "react";
import "./OpeningSection.css";

const OpeningSection = ({ title, items }) => {
  return (
    <div className="opening-section">
      <h2>{title}</h2>
      <div className="opening-blocks">
        {items.map((item, index) => (
          <div key={index} className="opening-block">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>{item.change}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningSection;
