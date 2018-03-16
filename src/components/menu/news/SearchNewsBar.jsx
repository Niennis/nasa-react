import React, { Component } from 'react';
import News from './News';
import DataNews from './FormatNews';
import { Twitter } from './Twitter';
import './styles.css';

const url = 'https://newsapi.org/v2/everything?apiKey=19214f11097341d1ad450bb2ad214ce1&q=nasa%20science%20';

class SearchNewsBar extends Component {
  constructor() {
    super();
    this.state = {
      input: null,
    }
  }

  handleSearch() {
    console.log('asohdoaishdaosdhaoñshdñaoshdoñi')
    const inputNews = this.refs.inputNews.value;
    const language = this.refs.language.value;
    const order = this.refs.order.value;
    fetch(`${url}${inputNews}&language=${language}&sortBy=${order}`)
    .then(data => (data.json())) 
    .then(response => {
      console.log('kasabian', response);
      this.setState({input: response.articles})
    })
  }

  componentDidMount() {
    this.handleSearch(this.props.input);
  }

  renderNews(input) {
    return(input.map((news, index) =>
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
    const {input} = this.state;
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">        
            <div className="askNav">      
              <input className="inputWord" type="text" ref="inputNews" placeholder="Search..." id="searchWord"  ></input>
              <select className="btn btnSelect" ref="order" id="sortBy">
                <option value="relevancy">Relevancia</option>
                <option value="popularity">Más populares</option>
                <option value="newest">Más nuevas</option>
              </select>      
              <select className="btn btnSelect" name="" ref="language">Language
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>         
              <button className="btn btn-primary" id="askNews" onClick={(e) => {this.handleSearch();}}>Ask for news</button>
            </div>
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                {input !== null ? this.renderNews(input) : <News/>}
              </div>
              <Twitter/>
            </div>       
          </div>
        </div>
      </div>
    );
  }
}

export default SearchNewsBar;