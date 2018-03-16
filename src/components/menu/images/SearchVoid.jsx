import React, { Component } from 'react';
import { urlSearchImages } from './../../services/nasaData';
import { ImgResult } from './ImgResult';



class SearchVoid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null
        }

    }

    getSearchImg() {
        const searchPlanet = document.getElementById('searchPlanet').value;
        fetch(`${urlSearchImages}q=${searchPlanet}`)
            .then(response => (response.json()))
            .then(data => {
                console.log(data);
                this.setState({ images: data.collection.items })
            }
            )
    }

    componentDidMount() {
        this.getSearchImg(this.props.images);
    }
    renderImg(images) {
        return (
            images.map((data, index) => 
                    <ImgResult key={index} img={data.links[0].href} description={data.data[0].description_508} />
            )
        )
    }

    render() {
        const { images } = this.state;
        return (
            <section className="container" id="showTheImages">
                <div className="row">
                    <div className="col col-lg-12">
                        <h2 className="title2">Search Images</h2>
                        <div className="askNav text-center">
                            <input type="text" id="searchPlanet" className="form-control" ref="searchImg" />
                            <button className="btn btn-primary" id="btnSearchPlanet">Buscar</button>
                        </div>
                    </div>
                </div>
                <div className="row" id="images">
                    {
                        images !== null ? this.renderImg(images) : 'cargando..'
                    }
                </div>
            </section>
        )
    }
}
export default SearchVoid