import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantItemTemplate,
} from '../templates/template-owner';

const nowHome = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Now Restaurant Page</h2>
        <div id="restaurant" class="restaurant">

        </div>
      <div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.nowHome();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default nowHome;
