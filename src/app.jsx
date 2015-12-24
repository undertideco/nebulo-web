var React = require('react');
var ReactDOM = require("react-dom");
var Fetch = require('whatwg-fetch');
var List = require('./list');
var Header = require('./header');
var baseUrl = 'https://lab.jurvis.co/nebulo/';

var App = React.createClass({
  getInitialState: function() {
    return {
      cities: [],
      nearestCity: {}
    };
  },
  componentWillMount: function() {
    this.getLocationAndLoadCities();
  },
  render: function() {
    console.log(this.state.cities);
    return <div>
      <Header
        nearestCity={this.state.nearestCity} />    
      <List
        items={this.state.cities} />
      <section>
        <button onClick={this.refreshButtonClicked}
          >Refresh
        </button>
      </section>
    </div>
  },
  refreshButtonClicked: function() {
    this.getLocationAndLoadCities();
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
            if (this.isMounted()) {
              this.setState({ cities: response['nearby_cities'], nearestCity: response['nearby_cities'][0]});
            }
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
