import React, {Component} from 'react';
import {connect} from 'react-redux';

import { SearchActions  as actionCreators } from '../../redux/action-creators';
import {Search} from './index';

class SearchContainer extends Component {

  render() {
    console.log('render search container');
    return (
      <Search {...this.props}></Search>
    )
  }
}

const mapStateToProps = (state/*,ownProps*/) => {
  return {search: state.search.get('flight')}
};
const ConnectedSearchContainer = connect(mapStateToProps, actionCreators)(SearchContainer);

export default ConnectedSearchContainer;
