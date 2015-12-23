var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <li>
      <p>{this.props.cityName + " - " + this.props.data}</p>
    </li>
  }
})
