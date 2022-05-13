import FavoriteRestaurantIdb from '../../data/restaurantapps-idb';
import { createRestaurantItemTemplate } from '../templates/template-owner';

const Like = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Your Liked Restaurant</h2>
      <div id="restaurant" class="restaurant">

      </div>
    <div>
 `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
