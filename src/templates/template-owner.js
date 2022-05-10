import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.title}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}" alt="${restaurant.title}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.tagline}</p>
    <h4>Release Date</h4>
    <p>${restaurant.release_date}</p>
    <h4>Duration</h4>
    <p>${restaurant.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.vote_average}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.title}"
            src="${restaurant.backdrop_path ? CONFIG.BASE_IMAGE_URL + restaurant.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.vote_average}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.title}</a></h3>
        <p>${restaurant.overview}</p>
    </div>
  </div>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
