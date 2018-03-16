import React from 'react';
import News from './News';
import SearchNewsBar from './SearchNewsBar';
import './styles.css';

export const ShowNews = () => (
  <div>
    <h2 className="newsBigTitle">News</h2>
      <SearchNewsBar/>
  </div>
)