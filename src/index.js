import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Generator from './Generator';
import Redirect from './Redirect'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Route path='/'>
            <Switch>
                <Route exact path='/' component={Generator}/>
                <Route path = '/:id' component={Redirect}/>
            </Switch>
        </Route>
    </BrowserRouter>, 
    document.getElementById('root'));

