var React = require('react');

module.exports = React.createClass({
  getAdvisoryCodeClass: function() {
    var classString = 'advisory-' + this.props.advisoryCode;
    return classString;
  },
  render: function() {
    return <li className={this.getAdvisoryCodeClass()}>
      <p className={this.getAdvisoryCodeClass()}>{this.props.cityName + " - " + this.props.data}</p>
    </li>
  }
})
