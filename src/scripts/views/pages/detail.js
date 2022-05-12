import UrlParser from "../../routes/url-parser";
import TheRestaurantDbSource from "../../data/therestaurantdb-source";
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from "../templates/template-owner";
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
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
      id: restaurant.id,
      title: restaurant.title,
      overview: restaurant.overview,
      backdrop_path: restaurant.backdrop_path,
      vote_average: restaurant.vote_average,
    },
  });
},
};

export default Detail;
