import React from 'react';
import {connect} from 'react-redux';

const Header = ({message}) => (
  <header>
    <p>{message}</p>
  </header>
);

const mapStateToProps = ({message}) => ({message});

export default connect(mapStateToProps)(Header);
