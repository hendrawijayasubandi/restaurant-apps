import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurantapps-idb';

describe('Searching restaurants', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
                <ul class="restaurants">
                </ul>
            </div>
        </div>
        `;
  });

  it('should be able to capture the query typed by the user', () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    const presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants: FavoriteRestaurantIdb,
    });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    expect(presenter.latestQuery).toEqual('film a');
  });

  it('should ask the model to search for liked restaurants', () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    const presenter = new FavoriteRestaurantSearchPresenter({ favoriteRestaurants: FavoriteRestaurantIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    expect(FavoriteRestaurantIdb.searchRestaurants)
      .toHaveBeenCalledWith('film a');
  });
});