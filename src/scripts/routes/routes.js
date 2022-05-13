import NowRestaurant from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowRestaurant, // default page
  '/now-restaurant': NowRestaurant,
  '/favorite': Like,
  '/detail/:id': Detail,
};

export default routes;
