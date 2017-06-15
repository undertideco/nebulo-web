import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'whatwg-fetch';
import List from './components/list';
import Header from './components/header';

import Api from './utils/api';

import style from '../pcss/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      nearestCity: null
    };

    this.getLocationAndLoadCities();
  }

  render() {
    return (
      <div className={style.container}>
        <Header
          nearestCity={this.state.nearestCity} />
        <List
          items={this.state.cities} />
      </div>
    );
  }

  getLocationAndLoadCities() {
    navigator.geolocation.getCurrentPosition(function(position) {
      Api.getNearby(position)
      .then(function(data){
        console.log(data.nearby_cities);
        this.setState({ cities: data.nearby_cities, nearestCity: data.nearby_cities[0]});
      }.bind(this))
    }.bind(this));
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
