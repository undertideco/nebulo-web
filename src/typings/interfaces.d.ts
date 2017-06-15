interface IAppState {
  cities: Array<City>;
  nearestCity?: City;
}

interface IHeaderState {
  advisory: string;
  advisoryImageUrl: string;
}

interface IListProps {
  items: Array<City>;
}

interface IListItemProps {
  cityItem: City;
}