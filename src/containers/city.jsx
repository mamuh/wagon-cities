import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city)
  }

  render() {
    const { city } = this.props
    return (
      <li className="list-group-item" onClick={this.handleClick}>{city.name}</li>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  { selectCity: selectCity },
  dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
