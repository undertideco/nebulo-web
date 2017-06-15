interface IAppState {
  cities: Array<City>;
  nearestCity?: City;
}

interface IHeaderState {
  advisory: string;
  advisoryImageUrl: string;
}