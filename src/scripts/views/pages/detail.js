import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createDetailFood,
  createDetailDrink,
  createDetailReview,
} from '../templates/template-owner';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRestaurantDbSource.detailRestaurant(url.id);
    const details = detail.restaurant;
    const { foods, drinks } = detail.restaurant.menus;
    const { customerReviews } = detail.restaurant;

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(detail);
    restaurantContainer.innerHTML += createDetailFood(foods);
    restaurantContainer.innerHTML += createDetailDrink(drinks);
    restaurantContainer.innerHTML += createDetailReview(customerReviews);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: details.id,
        name: details.name,
        pictureId: details.pictureId,
        description: details.description,
        rating: details.rating,
      },
    });
  },
};

export default Detail;
