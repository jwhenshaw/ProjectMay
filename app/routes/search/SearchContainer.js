import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../redux/action-creators';
import {Search} from './index';

class SearchContainer extends Component {

  render() {
    return (
      <Search>search container</Search>
    )
  }
}

const mapStateToProps = (state/*,ownProps*/) => {
  return {search: state.search}
};
const ConnectedSearchContainer = connect(mapStateToProps, actionCreators)(SearchContainer);

export default ConnectedSearchContainer;
