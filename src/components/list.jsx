var React = require('react');
var ListItem = require('./list-item');
require('../../pcss/main.css');

module.exports = React.createClass({
  renderList: function() {
    if (this.props.items) {
      var children = this.props.items.map(function(item){
        return <ListItem
          cityItem={item}
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