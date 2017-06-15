import * as React from 'react';
import  { SFC } from 'react';
import ListItem from '../ListItem/list-item';

const List: SFC<IListProps> = ({ items }) => {
  return (
      <div className="nearbyCitiesList">
        {items.map((item) => {
          return <ListItem
            cityItem={item}
            key={item.id}/>;
        })}
      </div>
  );
};

export default List;
