var React = require('react');
var ListItem = require('./list-item')

module.exports = React.createClass({
  renderList: function() {
    if (this.props.items) {
      var children = this.props.items.map(function(item){
        return <ListItem
          cityName={item.city_name}
          data={item.data}
          advisoryCode={item.advisory_code}
          key={item.id}
          />
      });

      return children;
    }
  },
  render: function() {
    return <div className="nearbyCitiesList">
      {this.renderList()}
    </div>
  }
});
