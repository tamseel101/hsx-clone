import React from "react";
import "./BlogSection.css";

const BlogSection = ({ title, items }) => {
  return (
    <div className="blog-section">
      <h2>{title}</h2>
      <div className="blog-blocks">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-block"
          >
            <img src={item.image} alt={item.title} className="blog-image" />
            <div className="blog-content">
              <h4>{item.title}</h4>
              <p className="blog-summary">{item.summary}</p>
              <p className="blog-details">{item.time}, {item.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
