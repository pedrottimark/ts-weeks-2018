import React, {Component} from 'react';
import {connect} from 'react-redux';

import Foods from './Foods';
import Portions from './Portions';

import {getFoodsPortions} from './actions';

class Category extends Component {
  componentDidMount() {
    this.props.getFoodsPortions();
  }

  render() {
    return (
      <React.Fragment>
        <Portions/>
        <Foods/>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {getFoodsPortions};

export default connect(null, mapDispatchToProps)(Category);
