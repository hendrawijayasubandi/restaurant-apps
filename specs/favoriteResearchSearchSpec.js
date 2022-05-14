import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurantapps-idb';

describe('Searching restaurants', () => {
    let presenter;
    let favoriteRestaurants;

    const searchRestaurants = (query) => {
      const queryElement = document.getElementById('query');
      queryElement.value = query;
      queryElement.dispatchEvent(new Event('change'));
    };
  
    const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
        <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
                <ul class="restaurants">
                </ul>
            </div>
        </div>
        `;
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
        favoriteRestaurants,
    });

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
      });
    
      describe('When query is not empty', () => {
        it('should be able to capture the query typed by the user', () => {
          searchRestaurants('food a');

          expect(presenter.latestQuery)
          .toEqual('food a');
      });

      it('should ask the model to search for restaurants', () => {
        searchRestaurants('food a');

        expect(favoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('food a');
    });

    it('should show the found restaurants', () => {
        presenter._showFoundRestaurants([{ id: 1 }]);
        expect(document.querySelectorAll('.restaurant').length)
          .toEqual(1);
  
        presenter._showFoundRestaurants([{
          id: 1,
          title: 'Satu',
        }, {
          id: 2,
          title: 'Dua',
        }]);
        expect(document.querySelectorAll('.restaurant').length)
          .toEqual(2);
      });

      it('should show the title of the found restaurants', () => {
        presenter._showFoundRestaurants([{
          id: 1,
          title: 'Satu',
        }]);
        expect(document.querySelectorAll('.restaurant__title')
          .item(0).textContent)
          .toEqual('Satu');
      });

      it('should show the title of the found restaurants', () => {
        presenter._showFoundRestaurants([{
          id: 1,
          title: 'Satu',
        }]);
        expect(document.querySelectorAll('.restaurant__title')
          .item(0).textContent)
          .toEqual('Satu');
  
        presenter._showFoundRestaurants(
          [{
            id: 1,
            title: 'Satu',
          }, {
            id: 2,
            title: 'Dua',
          }],
        );

        const restaurantTitles = document.querySelectorAll('.restaurant__title');
        expect(restaurantTitles.item(0).textContent)
          .toEqual('Satu');
        expect(restaurantTitles.item(1).textContent)
          .toEqual('Dua');
      });

      it('should show - for found restaurant without title', () => {
        presenter._showFoundRestaurants([{ id: 1 }]);

        expect(document.querySelectorAll('.restaurant__title')
        .item(0).textContent)
        .toEqual('-');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
        document.getElementById('restaurant-search-container')
          .addEventListener('restaurants:searched:updated', () => {
            expect(document.querySelectorAll('.restaurant').length)
              .toEqual(3);
            done();
          });
  
        favoriteRestaurants.searchRestaurants.withArgs('food a')
          .and
          .returnValues([
            {
              id: 111,
              title: 'food abc',
            },
            {
              id: 222,
              title: 'ada juga food abcde',
            },
            {
              id: 333,
              title: 'ini juga boleh food a',
            },
          ]);
  
        searchRestaurants('food a');
      });

      it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
        document.getElementById('restaurant-search-container')
          .addEventListener('restaurants:searched:updated', () => {
            const restaurantTitles = document.querySelectorAll('.restaurant__title');
            expect(restaurantTitles.item(0).textContent)
              .toEqual('food abc');
            expect(restaurantTitles.item(1).textContent)
              .toEqual('ada juga food abcde');
            expect(restaurantTitles.item(2).textContent)
              .toEqual('ini juga boleh food a');
  
            done();
          });
  
        favoriteRestaurants.searchRestaurants.withArgs('food a')
          .and
          .returnValues([
            {
              id: 111,
              title: 'food abc',
            },
            {
              id: 222,
              title: 'ada juga food abcde',
            },
            {
              id: 333,
              title: 'ini juga boleh food a',
            },
          ]);
  
        searchRestaurants('food a');
      });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

        searchRestaurants('    ');
        expect(presenter.latestQuery.length)
          .toEqual(0);

          searchRestaurants('');
          expect(presenter.latestQuery.length)
            .toEqual(0);

            searchRestaurants('\t');
            expect(presenter.latestQuery.length)
              .toEqual(0);
    });

    it('should show all favorite restaurants', () => {
        searchRestaurants('    ');

        expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurants__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('food a').and.returnValues([]);

      searchRestaurants('food a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.restaurant').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('food a').and.returnValues([]);

      searchRestaurants('food a');
    });
  });
});