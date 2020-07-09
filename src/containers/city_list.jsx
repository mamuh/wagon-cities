import React, { Component } from 'react';

// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {setCities} from '../actions';

import City from '../containers/city.jsx';

class CityList extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.setCities();
  // }

  // function mapDispatchToProps(dispatch) {
  //   return bindActionCreators(
  //   {
  //     setCities: setCities
  //   }, dispatch
  //   );
  // }

  render() {
    const { cities } = this.props;
    return (
      <ul className="cities">
      {cities.map(city => <City city={city} key={city.name} />)
      }
      </ul>
    );
  }
}


export default CityList;
