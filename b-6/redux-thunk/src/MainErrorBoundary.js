import React, {Component} from 'react';
import {connect} from 'react-redux';

import {catchError} from './actions';

class MainErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCaughtError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasCaughtError: true,
    });
    this.props.catchError(error);
  }

  render() {
    return this.state.hasCaughtError
      ? <main className="error"/>
      : <main>{this.props.children}</main>;
  }
}

const mapDispatchToProps = {catchError};

export default connect(null, mapDispatchToProps)(MainErrorBoundary);
