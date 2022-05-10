import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const NowRestaurant = {
  async render() {
    return `
        <h2>Now Restaurant Page</h2>
      `;
  },

  async afterRender() {
    const home = await TheRestaurantDbSource.NowRestaurant();
    console.log(home);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default NowRestaurant;
