import React, { Component } from 'react';
import { urlDailyImages } from './../../services/nasaData';
import { DayResult } from './DayResult';


class DailyImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null
        }

    }

    getDataDay() {
        fetch(`${urlDailyImages}`)
            .then(response => (response.json()))
            .then(result => {
                console.log(result);
                this.setState({ items: [result] })
            }
            )
    }

    componentWillMount() {
        this.getDataDay(this.props.items);
    }

    renderDay(items) {
        return (items.map(data => <DayResult key={data.url} img={data.url} title={data.title} date={data.date} description={data.explanation} />))
    }

    render() {
        const { items } = this.state;
        return (
            <section className="container">
                <div className="row">
                    <div className="col-lg-12 col-xs-12 ">
                        <div className="jumbotron jumbotron-fluid">
                            {
                                items !== null ? this.renderDay(items) : 'cargando...'
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DailyImg;