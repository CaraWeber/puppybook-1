import React, { Component } from 'react';

export default class SinglePuppy extends Component {

  render () {
    return (
      <div>
        <h2>{ this.props.puppy && this.props.puppy.name}</h2>
        <div>
          <img src={ this.props.puppy && this.props.puppy.image} />
        </div>
      </div>
    )
  }
}