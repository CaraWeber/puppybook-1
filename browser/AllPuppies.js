import React from 'react';
import {loadPuppies} from './action-creators';
import store from './store';
import { Link } from 'react-router';

export default class AllPuppies extends React.Component {
  render () {

    return (
         <div className="container flexbox-container">
            <div className="jumbotron">
                <div>
                  <ul className="list-unstyled">
                  { this.props.allPuppies &&
                    this.props.allPuppies.map( puppy => (
                      <li key={puppy.id}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
                    ))
                  }
                  </ul>
                </div>
            
            </div>
          </div>
    )
  }
}