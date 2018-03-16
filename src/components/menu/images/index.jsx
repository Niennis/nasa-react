import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { urlSearchImages } from './../../services/nasaData';
import { ImgResult } from './ImgResult';
import './Style.css'


class SearchImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    }
    const inputVoid = () => (
      <div className="row">
        <div className="col col-lg-12">
          <h2 className="title2">Search Images</h2>
          <div className="askNav text-center">
            <input type="text" id="searchPlanet" className="form-control" ref="searchImg" />
            <button className="btn btn-primary" id="btnSearchPlanet" onClick={this.getSearchImg}>Buscar</button>
          </div>
        </div>
      </div>
    )
  }

  getSearchImg() {
    // const searchPlanet = document.getElementById('searchPlanet').value;
    fetch(`${urlSearchImages}q=venus`)
      .then(response => (response.json()))
      .then(data => {
        console.log(data);
        this.setState({ images: data.collection.items })
      }
      ).catch(function (err) {
        console.log('Error');
      });
  }

  componentWillMount() {
    this.getSearchImg(this.props.images);
    // this.inputVoid
  }

  componentDidUpdate() {
    // this.getSearchImg(this.props.images);
  }

  renderImg(images) {
    return (
      images.map((data, index) =>
        <ImgResult key={index} img={data.links[0].href} description={data.data[0].description_508} />
      )
    )
  }

  // renderProgress = () => {
  //   return (<h3> Cargando imágenes... </h3>)
  // }

  render() {
    const { images } = this.state;
    return (
      <section className="container" id="showTheImages">
        <div className="row">
          <div className="col col-lg-12">
            <h2 className="title2">Search Images</h2>
            <div className="askNav text-center">
              <input type="text" id="searchPlanet" className="form-control" ref="searchImg" />
              <button className="btn btn-primary" id="btnSearchPlanet" onClick={this.getSearchImg}>Buscar</button>
            </div>
          </div>
        </div>
        <div className="row" id="images">
          {
            images !== null ? this.renderImg(images) : this.inputVoid
          }
        </div>
      </section>
    )
  }
}

SearchImg.propTypes = {
  getSearchImg: PropTypes.func,
}

export default SearchImg;