import * as React from 'react';
import styles from './list-item.css';

const ListItem = ({cityItem}) => {
  console.log(cityItem);
  var classString = 'advisory' + cityItem.advisory_code;
  return (
    <div className={styles.itemContainer + " " + styles[classString]}>
     <div className={styles.cityContainer}>
       <div className="temperature">
         <p className={styles.cityTemperatureLabel}>{cityItem.temperature + '°'}</p>
       </div>
       <div className="city-name">
         <p className={styles.cityLabel}>{cityItem.city_name}</p>
       </div>
     </div>
     <div className={styles.dataContainer}>
       <p className={styles[classString]}>{cityItem.data}</p>
     </div>
   </div>
 );
};

export default ListItem;
