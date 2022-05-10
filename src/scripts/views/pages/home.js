import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const nowHome = {
  async render() {
    return `
        <h2>Now Restaurant Page</h2>
      `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.nowHome();
    console.log(restaurant);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default nowHome;
