import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async nowHome() {
    const response = await fetch(API_ENDPOINT.NOW_HOME);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async favoriteRestaurant() {
    const response = await fetch(API_ENDPOINT.FAVORITE);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestaurantDbSource;