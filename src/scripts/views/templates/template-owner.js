import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `

  <div class="restaurant__info">
    <h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
  </div>
  <div class="restaurant__info">
  <h3>Information</h3>
    <div class="restaurant__overview">
      <h3>Overview</h3>
      <p>${restaurant.restaurant.description}</p>
    </div>
  </div>
  <div class="restaurant__info">
    <h4>Alamat</h4>
    <p>${restaurant.restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.restaurant.rating} ⭐️</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createDetailFood = (foods) => {
  let text = `
    <div class="restaurant__info" tabindex="0">
      <h4>Makanan</h4>
  `;
  foods.forEach((food) => {
    text += `<p>${food.name}</p>`;
  });
  text += `
  </div>`;
  return text;
};

const createDetailDrink = (drinks) => {
  let text = `
    <div class="restaurant__info" tabindex="0">
      <h4>Minuman</h4>
  `;
  drinks.forEach((drink) => {
    text += `<p>${drink.name}</p>`;
  });
  text += `
  </div>`;
  return text;
};

const createDetailReview = (customerReviews) => {
  let text = `
    <div class="restaurant__info" tabindex="0">
      <h4>Review</h4>
  `;
  customerReviews.forEach((review) => {
    text += `<p>nama : ${review.name}</p>
             <p>review : ${review.review}</p>
             <p>Date : ${review.date}</p>
             <br>
    `;
  });
  text += `
  </div>`;
  return text;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createDetailFood,
  createDetailDrink,
  createDetailReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
