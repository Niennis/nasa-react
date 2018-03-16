import React, { Component } from 'react';

const api_key = '19214f11097341d1ad450bb2ad214ce1';
const url = 'https://newsapi.org/v2/everything?q=nasa%20science';

// https://newsapi.org/v2/everything?apiKey=19214f11097341d1ad450bb2ad214ce1&q=nasa%20science&language=${language}&sortBy${sortBy}


class News extends Component {
  constructor() {
    super();
  }

  updateNews = () => {
    const url_forecast = `${url}${api_key}`;
    fetch(url_forecast).then(data => (data.json()))
    .then(weather_data => {
      console.log(weather_data);
      const forecastData = transformForecast(weather_data);
      console.log(forecastData);
      this.setState({forecastData});
    });
  }

  render() {
    return (
      <div className="row newDiv">
        <div className="col-lg-12">
          <h3 className="titleNews"><a href="${info.url}" class="urlNews">${info.title}</a></h3>
          <h5 className="descriptioNres">${info.description}</h5>
          <h6 className="dateNews">Date: ${info.publishedAt}.</h6>        
          <h6 className="sourceNews"> Publicado en: ${info.source.name}</h6>
        </div>
      </div>
    );
  }
}

export default News;