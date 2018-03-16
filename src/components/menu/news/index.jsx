import React from 'react';
import News from './News';
// import { Twitter } from './Twitter';
import SearchNewsBar from './SearchNewsBar';
import './styles.css';

// https://newsapi.org/v2/everything?apiKey=19214f11097341d1ad450bb2ad214ce1&q=nasa%20science&language=${language}&sortBy${sortBy}

export const ShowNews = () => (
  <div>
    <h2>News</h2>
    <SearchNewsBar/>
  </div>
)