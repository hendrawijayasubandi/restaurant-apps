import NowRestaurant from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': NowRestaurant, // default page
  '/now-restaurant': NowRestaurant,
  '/favorite' : Favorite,
  '/detail/:id': Detail,
};

export default routes;
