class FavoriteRestaurantSearchView {
    getTemplate() {
      return `
          <div id="restaurant-search-container">
              <input id="query" type="text">
              <div class="restaurant-result-container">
                  <ul class="restaurant">
                  </ul>
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
        html = '<div class="restaurant__not__found">Film tidak ditemukan</div>';
      }
  
      document.querySelector('.restaurant').innerHTML = html;
  
      document.getElementById('restaurant-search-container')
        .dispatchEvent(new Event('restaurant:searched:updated'));
    }
  }
  
export default FavoriteRestaurantSearchView;