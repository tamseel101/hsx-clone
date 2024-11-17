// src/components/OpeningThisWeek.js
import React from 'react';
import './OpeningThisWeek.css';

function OpeningThisWeek() {
  const movies = [
    { title: 'Kanguva', genre: 'Action/Adventure', releaseDate: 'Nov 13, 2024', price: 'H$2.72' },
    { title: 'Red One', genre: 'Action/Adventure', releaseDate: 'Nov 15, 2024', price: 'H$87.64' },
  ];

  return (
    <section className="opening-this-week">
      <h2>Opening This Week</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.genre} - {movie.price}</p>
            <span>{movie.releaseDate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OpeningThisWeek;
