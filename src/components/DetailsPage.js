import React from "react";
import { Line } from "react-chartjs-2";
import { useParams, useNavigate } from "react-router-dom"; 
import "./DetailsPage.css";
import data from "../data/data.json"; // Adjust the path to your JSON data

const DetailsPage = () => {
  const { type, symbol } = useParams(); // Get type and symbol from the URL

  // Fetch the item based on type and symbol
  const item = data[type]?.find((item) => item.symbol === symbol);

  if (!item) {
    return <div>Item not found</div>; // Display if item is not found
  }

  return (
    <div className="details-page">
      <h1>{item.name}</h1>
      <div className="category-bubble">{type}</div>

      <div className="chart-wrapper">
        {/* Render the chart again */}
        <Line
          data={{
            labels: item.chartData.map((_, idx) => `Point ${idx + 1}`),
            datasets: [
              {
                data: item.chartData,
                borderColor: parseFloat(item.change) > 0 ? "green" : "red",
                backgroundColor: "transparent",
                borderWidth: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false } },
          }}
        />
      </div>

      {/* Analysis Section */}
      <div className="analysis-section">
        <h3>Recommendations</h3>
        <ul>
          <li style={{ color: "green" }}>Strong Buy</li>
          <li style={{ color: "limegreen" }}>Buy</li>
          <li style={{ color: "orange" }}>Hold</li>
          <li style={{ color: "red" }}>Underperform</li>
          <li style={{ color: "darkred" }}>Sell</li>
        </ul>
      </div>

      {/* Performance Section */}
      <div className="performance-section">
        <h3>Performance</h3>
        <p>2022: Achieved</p>
        <p>2023: Missed</p>
        <p>2024: Achieved</p>
      </div>
    </div>
  );
};

export default DetailsPage;
