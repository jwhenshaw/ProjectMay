export const setFlightDeparture = value => {
  return {
    type: 'SET_DEPARTURE',
    vertical: 'FLIGHT',
    value: value
  }
}

export const setFlightDestination = value => {
  return {
    type: 'SET_DESTINATION',
    vertical: 'FLIGHT',
    value: value
  }
}

export const setFlightDepartureDate = value => {
  return {
    type: 'SET_DEPARTURE_DATE',
    vertical: 'FLIGHT',
    value: value
  }
}

export const setFlightReturnDate = value => {
  return {
    type: 'SET_RETURN_DATE',
    vertical: 'FLIGHT',
    value: value
  }
}
