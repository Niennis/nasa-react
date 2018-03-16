import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DataNews = ( {url, title, img, description, date, source}) => (
  <div className="dataContainer">
    <img className="img-fluid" src={img}></img>
    <h3 className="titleNews"><a href={url} className="urlNews" target="blank">{title}</a></h3>
    <h5 className="descriptioNres">{description}</h5>
    <h6 className="dateNews">Date: {date}.</h6>        
    <h6 className="sourceNews"> Publicado en: {source}</h6> 
  </div>  
)

DataNews.propTypes = {
  url : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
}

export default DataNews;