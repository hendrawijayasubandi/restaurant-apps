class FavoriteRestaurantSearchPresenter {
    constructor({ favoriteRestaurants }) {
      this._listenToSearchRequestByUser();
      this._favoriteRestaurants = favoriteRestaurants;
    }
  
    _listenToSearchRequestByUser() {
      this._queryElement = document.getElementById('query');
      this._queryElement.addEventListener('change', (event) => {
        this._latestQuery = event.target.value;
        this._favoriteRestaurants.searchRestaurants(this._latestQuery);
      });
    }
  
    get latestQuery() {
      return this._latestQuery;
    }
  }
  
export default FavoriteRestaurantSearchPresenter;