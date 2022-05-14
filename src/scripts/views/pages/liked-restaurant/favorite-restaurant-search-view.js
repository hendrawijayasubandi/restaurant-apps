import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
    getTemplate() {
      return `
      <div id="movie-search-container">
      <input id="query" type="text">
      <div class="movie-result-container">
          <ul class="restaurants">
          </ul>
      </div>
  </div>
  `;
}

    getFavoriteMovieTemplate() {
    return `
    <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="restaurants" class="restaurants">
        </div>
    </div>
    `;
    }
  
    runWhenUserIsSearching(callback) {

      document.getElementById('query').addEventListener('change', (event) => {
        callback(event.target.value);
      });
    }
  
    showRestaurants(restaurant) {
      let html;
      if (restaurant.length > 0) {
        html = restaurant.reduce(
          (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant__title">${restaurant.title || '-'}</span></li>`),
          '',
        );
      } else {
        html = '<div class="restaurant__not__found">Food tidak ditemukan</div>';
      }
  
      document.querySelector('.restaurant').innerHTML = html;
  
      document.getElementById('restaurant-search-container')
        .dispatchEvent(new Event('restaurant:searched:updated'));
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
          html = restaurants.reduce((carry, movie) => carry.concat(createMovieItemTemplate(movie)), '');
        } else {
          html = '<div class="movie-item__not__found"></div>';
        }
    
        document.getElementById('restaurants').innerHTML = html;
    
        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
      }
  }
  
export default FavoriteRestaurantSearchView;