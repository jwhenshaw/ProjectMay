class DepartureSuggester {

  constructor() {
    this.url = 'https://www.dealchecker.co.uk/cheap-flights-suggestions/get-departure.html';
  }

  fetchSuggestions(val) {
    return this.sendFetch(val);
  }

  sendFetch(val) {
    var urlParam = "?keyword=" + val
    return fetch(this.url + urlParam).then((response) => {
      return response.text()
    }).then((responseText) => {
      return JSON.parse(responseText);
    }).catch((error) => {
      console.error(error);
    });
  }
}

export default DepartureSuggester;
