export function setFlightDeparture(value) {
  return {
    type: 'SET_DEPARTURE',
    vertical: 'FLIGHT',
    value: value
  }
}

export function setFlightDestination(value) {
  return {
    type: 'SET_DESTINATION',
    vertical: 'FLIGHT',
    value: value
  }
}

export function setFlightDepartureDate(value) {
  return {
    type: 'SET_DEPARTURE_DATE',
    vertical: 'FLIGHT',
    value: value
  }
}

export function setFlightReturnDate(value) {
  return {
    type: 'SET_RETURN_DATE',
    vertical: 'FLIGHT',
    value: value
  }
}
