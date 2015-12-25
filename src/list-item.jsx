var React = require('react');

module.exports = React.createClass({
  getAdvisoryCodeClass: function() {
    var classString = 'advisory-' + this.props.cityItem.advisory_code;
    return classString;
  },
  render: function() {
    return <div className={"item-container " + this.getAdvisoryCodeClass()}>
      <div className="city-container">
        <div className="temperature">
          <p className="city-temperature-label">{this.props.cityItem.temperature + '°'}</p>
        </div>
        <div className="city-name">
          <p className="city-label">{this.props.cityItem.city_name}</p>
        </div>
      </div>
      <div className="data-container">
        <p className={this.getAdvisoryCodeClass()}>{this.props.cityItem.data}</p>
      </div>
    </div>
  }
})
