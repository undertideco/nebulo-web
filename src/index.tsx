import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import List from './components/List/list';
import Header from './components/Header/header';

import Api from './utils/api';
import * as styles from './main.css';

class App extends Component<any, IAppState> {
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
      <div className={styles.container}>
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

render(<App />, document.querySelector('.container'));
