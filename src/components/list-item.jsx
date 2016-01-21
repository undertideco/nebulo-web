var React = require('react');


import styles from '../../pcss/list-item.css';

module.exports = React.createClass({
  getAdvisoryCodeClass: function() {
    var classString = 'advisory' + this.props.cityItem.advisory_code;
    return classString;
  },
  render: function() {
    return <div className={styles.itemContainer + " " + styles[this.getAdvisoryCodeClass()]}>
      <div className={styles.cityContainer}>
        <div className="temperature">
          <p className={styles.cityTemperatureLabel}>{this.props.cityItem.temperature + '°'}</p>
        </div>
        <div className="city-name">
          <p className={styles.cityLabel}>{this.props.cityItem.city_name}</p>
        </div>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles[this.getAdvisoryCodeClass()]}>{this.props.cityItem.data}</p>
      </div>
    </div>
  }
})
