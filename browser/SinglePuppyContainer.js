import { connect } from 'react-redux';
import React from 'react';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = ({puppy}) => ({
  puppy 
});

export default connect(
  mapStateToProps
)(SinglePuppy);