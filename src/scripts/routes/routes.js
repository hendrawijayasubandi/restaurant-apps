import NowRestaurant from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': NowRestaurant, // default page
  '/now-restaurant': NowRestaurant,
  '/detail/:id': Detail,
};

export default routes;
