var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      advisory: ""
    }
  },
  componentWillReceiveProps: function(nextProps) {
    var advisoryCode = nextProps.nearestCity.advisory_code;
    this.setState({
      advisory: this.getAdvisoryString(advisoryCode),
      advisoryImageUrl: this.getAdvisoryImageUrl(advisoryCode)
    });
  },
  render: function() {
    return <section className="list-header">
      <div id="advisory-image">
        <img src={this.state.advisoryImageUrl}></img>
      </div>
      <div>
        <p className="advisoryLabel">{this.state.advisory}</p>
      </div>
    </section>
  },
  getAdvisoryString: function(advisoryCode) {
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
  },
  getAdvisoryImageUrl: function(advisoryCode) {
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
})
