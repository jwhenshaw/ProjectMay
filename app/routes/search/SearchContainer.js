import React, {Component} from 'react';
import {Search} from './index'


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInput(val) {
  }

  render() {
    return (
      <Search
        handleInput={this.handleInput}
      ></Search>
    )
  }
}

export default SearchContainer;
