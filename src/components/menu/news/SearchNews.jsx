import React, { Component } from 'react';

class SearchNews extends Component {
  render() {
    return (
      <div className="askNav">      
        <input className="inputWord" type="text" name="" placeholder="Search..." id="searchWord"></input>
        <select className="btn" name="sortBy" id="sortBy">
          <option value="">Relevancy</option>
          <option value="">Popularity</option>
          <option value="">Newest</option>
        </select>      
        <select className="btn" name="" id="language">Language
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>        
        <button className="btn btn-primary" id="askNews">Ask for news</button>
      </div>
    );
  }
}

export default SearchNews;