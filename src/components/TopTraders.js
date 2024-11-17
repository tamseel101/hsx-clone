// src/components/TopTraders.js
import React from 'react';
import './TopTraders.css';

function TopTraders() {
  const traders = [
    { name: 'trader1', performance: '11.15%' },
    { name: 'Ace_Bond', performance: '8.56%' },
  ];

  return (
    <aside className="top-traders">
      <h2>Top Traders</h2>
      <ul>
        {traders.map((trader, index) => (
          <li key={index}>
            {trader.name} - {trader.performance}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TopTraders;
