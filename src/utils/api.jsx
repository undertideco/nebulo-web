var Fetch = require('whatwg-fetch');
var baseUrl = 'https://lab.jurvis.co/nebulo/'

module.exports = {
  getNearby: function(position){
    var requestUrl = baseUrl + 'nearby?lat=' + position.coords.latitude + "&lon=" + position.coords.longitude;
    return fetch(requestUrl)
    .then(function(response) {
      return response.json()
    })
  }
}
