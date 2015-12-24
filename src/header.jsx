var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      advisory: ""
    }
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(nextProps.nearestCity.advisory_code);
    this.setState({
      advisory: this.getAdvisoryString(nextProps.nearestCity.advisory_code)
    });
  },
  render: function() {
    return <section className="header">
      <p>{this.state.advisory}</p>
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
  }
})
