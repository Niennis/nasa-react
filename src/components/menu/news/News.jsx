import React, { Component } from 'react';
import _ from 'lodash';
import DataNews from './FormatNews';

const url = 'https://newsapi.org/v2/everything?apiKey=19214f11097341d1ad450bb2ad214ce1&q=nasa%20science'

class News extends Component {
  constructor() {
    super();
    this.state = {
      dataNews: null
    };
  }

  updateNews() {
    fetch(url).then(data => (data.json()))
    .then(response => {
      console.log(response);     
      this.setState({dataNews: response.articles});
    });
  }

 componentWillMount() {
    this.updateNews(this.props.dataNews);
  }

  renderNews(dataNews) {
      return(dataNews.map((news, index) =>
      <div key={index}>
        <DataNews url={news.url} title={news.title} img={news.urlToImage} description={news.description} date={news.publishedAt} source={news.source.name}>
        </DataNews>
      </div>
    ))
  }

  renderProgress = () => {
    return (<h3> Cargando noticias... </h3>)
  }

  render() {
    const {dataNews} = this.state;
    return (
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        {dataNews !== null ? this.renderNews(dataNews) : this.renderProgress()}
      </div>
    );
  }
}

export default News;