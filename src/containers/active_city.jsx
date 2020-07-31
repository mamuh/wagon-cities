import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ActiveCity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeCity } = this.props;

    return (
      <div className="active-city">
        <h3>{activeCity.name}</h3>
        <p>{activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
