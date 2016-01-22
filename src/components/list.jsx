var React = require('react');
import ListItem from './list-item';
require('../../pcss/main.css');

const List = ({items}) => {
  return <div className="nearbyCitiesList">
    {items.map((item) => {
      return <ListItem
        cityItem={item}
        key={item.id}/>
    })}
  </div>
}

export default List;
