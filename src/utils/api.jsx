const baseUrl = 'https://nebulo.undertide.co/api/';

export default {
  getNearby: (position) => {
    const requestUrl = baseUrl + 'nearby?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
    return fetch(requestUrl)
      .then((response) => {
        return response.json();
      });
  },
};
