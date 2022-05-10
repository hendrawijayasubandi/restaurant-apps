import UrlParser from "../../routes/url-parser";
import TheRestaurantDbSource from "../../data/therestaurantdb-source";
import { createRestaurantDetailTemplate } from "../../../templates/template-owner";

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
