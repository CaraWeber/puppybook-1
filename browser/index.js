'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SinglePuppyContainer from './SinglePuppyContainer';
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer';
import { Provider } from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, Link, IndexRoute, IndexRedirect} from 'react-router';
import { getPuppiesfromServer, getSinglePuppy } from './action-creators';


const getPuppies = () => {
  store.dispatch(getPuppiesfromServer());
} 

const fetchPuppy = (nextState) => {
  store.dispatch(getSinglePuppy(nextState.params.puppyId));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' >
        <IndexRedirect to= "/puppies" />
        <Route path='puppies'>
          <IndexRoute component={AllPuppiesContainer} onEnter={getPuppies}/>
          <Route path = ':puppyId' component={SinglePuppyContainer} onEnter={fetchPuppy} />
        </Route>  
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);