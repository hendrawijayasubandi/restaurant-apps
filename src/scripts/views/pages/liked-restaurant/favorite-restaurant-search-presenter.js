class FavoriteRestaurantSearchPresenter {
    constructor({ favoriteRestaurants }) {
      this._listenToSearchRequestByUser();
      this._favoriteRestaurants = favoriteRestaurants;
    }
  
    _listenToSearchRequestByUser() {
      this._queryElement = document.getElementById('query');
      this._queryElement.addEventListener('change', (event) => {
        this._searchRestaurants(event.target.value);
        
      });
    }
    
    async _searchRestaurants(latestQuery) {
        this._latestQuery = latestQuery.trim();

        let foundRestaurants;
        if (this.latestQuery.length > 0) {
            foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);
        } else {
            foundRestaurants = await this._favoriteRestaurants.getAllRestaurants();
        }

        this._showFoundRestaurants(foundRestaurants);
      }
    
      _showFoundRestaurants(restaurants) {
        const html = restaurants.reduce(
          (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant__title">${restaurant.title || '-'}</span></li>`),
          '',
        );
    
        document.querySelector('.restaurants').innerHTML = html;


        document.getElementById('restaurant-search-container')
        .dispatchEvent(new Event('restaurants:searched:updated'));
      }

    get latestQuery() {
      return this._latestQuery;
    }
  }
  
export default FavoriteRestaurantSearchPresenter;