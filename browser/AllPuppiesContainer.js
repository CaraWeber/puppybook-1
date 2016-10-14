import { connect } from 'react-redux';
import React from 'react';
import AllPuppies from './AllPuppies';
import {loadPuppies} from './action-creators';
import {getPuppiesfromServer, GET_PUPPIES_FROM_SERVER } from './action-creators';


const mapStateToProps = ({allPuppies}) => ({
  allPuppies
});

export default connect(
  mapStateToProps
)(AllPuppies);