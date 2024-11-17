import React, { useState, useEffect } from "react"; 
import { Line } from "react-chartjs-2"; 
import { 
  Chart as ChartJS, 
  LineElement, 
  PointElement, 
  LinearScale, 
  CategoryScale, 
  Tooltip, 
} from "chart.js"; 
import Modal from "react-bootstrap/Modal"; 
import Button from "react-bootstrap/Button"; 
import "./Section.css"; 

// Register Chart.js components 
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip); 

const Section = ({ title, type }) => { 
  const [items, setItems] = useState([]); 
  const [showModal, setShowModal] = useState(false); 
  const [modalData, setModalData] = useState(null); 

  useEffect(() => { 
    fetch("/data/data.json") 
      .then((response) => response.json()) 
      .then((data) => { 
        if (data[type]) { 
          setItems(data[type]); 
        } else { 
          console.error(`Invalid type: ${type}`); 
        } 
      }) 
      .catch((error) => console.error("Error fetching data:", error)); 
  }, [type]); 

  const handleItemClick = (item) => { 
    setModalData(item); 
    setShowModal(true); 
  }; 

  const renderModalContent = () => {
    if (!modalData) return null;

    const { category, recommendation, performance, image, about } = modalData;

    const recommendationColors = {
      "Strong Buy": "green",
      Buy: "lightgreen",
      Hold: "orange",
      Underperform: "darkorange",
      Sell: "red",
    };

    const performanceYears = Object.keys(performance).map((year) => (
      <div key={year} className="performance-year">
        <span>{year}:</span>
        <span
          style={{
            color: performance[year] === "Achieved" ? "green" : "red",
          }}
        >
          {performance[year]}
        </span>
      </div>
    ));

    return (
      <div className="modal-content-wrapper">
        <div className="modal-header-content">
          <img src={image} alt={modalData.name} className="modal-image" />
          <div>
            <h5>{modalData.name}</h5>
            <p className="modal-category">Category: {category}</p>
          </div>
        </div>

        <h5>Recommendation:</h5>
        <span
          className="bubble"
          style={{ backgroundColor: recommendationColors[recommendation] }}
        >
          {recommendation}
        </span>

        <div className="performance-earnings-section">
          <h5>Performance & Earnings:</h5>
          <div className="earnings-section">
            <div className="earnings-list">
              {Object.entries(performance).map(([year, result]) => (
                <div
                  key={year}
                  className="performance-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",  // Align the year and result
                    marginBottom: "10px",  // Adds some space between each item
                  }}
                >
                  <span>{year}</span>
                  <span style={{ color: result === "Achieved" ? "green" : "red" }}>
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-section">
          <h5>About:</h5>
          <p>{about}</p>
        </div>
      </div>
    );
  };

  const renderItem = (item, index) => { 
    if (type === "stocks" || type === "hotProperties") { 
      const isPositiveChange = parseFloat(item.change) > 0; 

      const chartData = { 
        labels: item.chartData.map((_, idx) => `Point ${idx + 1}`), 
        datasets: [ 
          { 
            data: item.chartData, 
            borderColor: isPositiveChange ? "green" : "red", 
            backgroundColor: "transparent", 
            borderWidth: 2, 
            pointRadius: 0, 
          }, 
        ], 
      }; 

      const chartOptions = { 
        responsive: true, 
        maintainAspectRatio: false, 
        plugins: { 
          legend: { display: false }, 
          tooltip: { enabled: false }, 
        }, 
        scales: { 
          x: { display: false }, 
          y: { display: false }, 
        }, 
      }; 

      return ( 
        <div 
          key={index} 
          className="block financial-block" 
          onClick={() => handleItemClick(item)} 
        > 
          <img src={item.image} alt={item.name} className="block-image" /> 
          <div className="block-content"> 
            <p className="symbol">{item.symbol}</p> 
            <h4>{item.name}</h4> 
          </div> 
          <div className="chart-wrapper"> 
            <Line data={chartData} options={chartOptions} /> 
          </div> 
          <div className="price-details"> 
            <p className="price">{item.price}</p> 
            <p 
              className="change" 
              style={{ color: isPositiveChange ? "green" : "red" }} 
            > 
              {item.change} 
            </p> 
          </div> 
        </div> 
      ); 
    } else if (type === "news") { 
      return ( 
        <a 
          key={index} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block news-block" 
        > 
          <img src={item.image} alt={item.title} className="block-image" /> 
          <div className="block-content"> 
            <h4>{item.title}</h4> 
            <p className="summary">{item.summary}</p> 
            <p className="details"> 
              {item.time}, {item.date} 
            </p> 
          </div> 
        </a> 
      ); 
    } 
  };

  return ( 
    <div className="section"> 
      <h2>{title}</h2> 
      <div className="blocks"> 
        {items.map((item, index) => renderItem(item, index))} 
      </div> 

      {/* Modal Component */} 
      <Modal show={showModal} onHide={() => setShowModal(false)} centered> 
        <Modal.Body>{renderModalContent()}</Modal.Body> 
        <Modal.Footer style={{ justifyContent: 'center' }}>
          <Button 
            variant="warning" 
            style={{ 
              backgroundColor: 'black', 
              borderColor: 'gold', 
              color: 'gold', 
              fontWeight: 'bold', 
              padding: '10px 20px', 
              fontSize: '16px',
            }} 
            onClick={() => alert('Invest Now Clicked!')} 
          >
            Invest Now
          </Button>
        </Modal.Footer>
      </Modal> 
    </div> 
  ); 
}; 

export default Section;
