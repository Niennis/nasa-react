import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import {dailyImg} from './dailyImg';
import {images} from './images';
import ShowNews from './news'

const NavBar = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/dailyImg">Imagen del Día</Link></li>
                    <li><Link to="/ShowNews">News</Link></li>
                    <li><Link to="/images">Images</Link></li>
                </ul>
            </nav>
            <Route path="/dailyImg" component={dailyImg}></Route>
            <Route path="/ShowNews" component={ShowNews}></Route>
            <Route path="/images" component={images}></Route>
        </div>
    </Router>
)





export default NavBar;