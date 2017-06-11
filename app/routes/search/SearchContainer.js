import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Search } from './index'


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInput(key, val) {

  }

  render() {
    return (
      <Search
        handleInput={this.handleInput}
      ></Search>
    )
  }
}

const mapStateToProps = (state/*,props*/) => {
  return {
    search: state.search
  }
};
const ConnectedSearchContainer =  connect(mapStateToProps)(SearchContainer);

export default ConnectedSearchContainer;
