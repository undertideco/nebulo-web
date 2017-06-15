const baseUrl = 'https://lab.jurvis.co/nebulo/';

export default {
  getNearby: (position) => {
    const requestUrl = baseUrl + 'nearby?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
    return fetch(requestUrl)
      .then((response) => {
        return response.json();
      });
  },
};
