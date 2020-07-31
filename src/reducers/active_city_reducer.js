export default function(state, action) {
  if (state === undefined) {
    return { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" }
  }
  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
}
