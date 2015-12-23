var React = require('react');
var ReactDOM = require("react-dom");
var List = require('./list');
var baseUrl = 'https://lab.jurvis.co/nebulo/';

var App = React.createClass({
  getInitialState: function() {
    return {
      cities: []
    };
  },
  componentWillMount: function() {
    this.getLocationAndLoadCities();
  },
  render: function() {
    return <div>
      <List items={this.state.cities} />
    </div>
  },
  getLocationAndLoadCities: function() {
    navigator.geolocation.getCurrentPosition(function(position){
      var requestUrl = baseUrl + 'nearby?lat=' + position.coords.latitude + "&lon=" + position.coords.longitude;
      console.log(requestUrl);

      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          var response = JSON.parse(request.response);
          if (response['success'] === true) {
            this.setState({ cities: response['nearby_cities']});
          }
        }
      }.bind(this);
      request.open('GET', requestUrl, true);
      request.send();

    }.bind(this));
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
