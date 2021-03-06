import * as React from 'react';
import { Component } from 'react';
import * as  styles from './header.css';

class Header extends Component<any, IHeaderState> {
  constructor(props) {
    super(props);

    this.state = {
      advisory: "",
      advisoryImageUrl: "#"
    }
  }

  render() {
    return (
      <section className={styles.listHeader}>
        <div id={styles.advisoryImage}>
          <img src={this.state.advisoryImageUrl}></img>
        </div>
        <div>
          <p className={styles.advisoryLabel}>{this.state.advisory}</p>
        </div>
      </section>
    );
  }

  componentWillReceiveProps(nextProps) {
    const advisoryCode = nextProps.nearestCity.advisory_code;
    this.setState({
      advisory: this.getAdvisoryString(advisoryCode),
      advisoryImageUrl: this.getAdvisoryImageUrl(advisoryCode)
    });
  }

  getAdvisoryString(advisoryCode) {
    var advisoryUpdate = "Server Error";
    switch (advisoryCode) {
      case 0:
        advisoryUpdate = "It's Clear";
        break;
      case 1:
        advisoryUpdate = "Moderate";
        break;
      case 2:
        advisoryUpdate = "The Air is Bad";
        break;
      case 3:
        advisoryUpdate = "Hazardous";
        break;
      case 4:
        advisoryUpdate = "Stay Indoors";
        break;
      default:
        break;
    }

    return advisoryUpdate;
  }

  getAdvisoryImageUrl(advisoryCode) {
    var imageUrl;

    switch (advisoryCode) {
      case 0:
        imageUrl = 'img/good.svg';
        break;
      case 1:
        imageUrl = 'img/moderate.svg';
        break;
      case 2:
      case 3:
      case 4:
        imageUrl = 'img/hazardous.svg';
        break;
      default:
        imageUrl = 'img/good.svg';
    }

    return imageUrl;
  }

}

export default Header;
