import React, { Component } from 'react';

import City from '../containers/city.jsx';

class CityList extends Component {
  constructor(props) {
    super(props);
  }

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
