export function setCities(cities) {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  }
}
