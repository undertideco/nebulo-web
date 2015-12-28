var React = require('react');
var ReactDOM = require("react-dom");
var Fetch = require('whatwg-fetch');
var List = require('./list');
var Header = require('./header');
var baseUrl = 'https://lab.jurvis.co/nebulo/';

var Api = require('./utils/api');

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
    console.log(this.state);
    return <div>
      <Header
        nearestCity={this.state.nearestCity} />
      <List
        items={this.state.cities} />
    </div>
  },
  getLocationAndLoadCities: function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      Api.getNearby(position)
      .then(function(data){
        console.log(data.nearby_cities);
        if(this.isMounted()){
          this.setState({ cities: data.nearby_cities, nearestCity: data.nearby_cities[0]});
          console.log('yo');
        }
      }.bind(this))
    }.bind(this));
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
