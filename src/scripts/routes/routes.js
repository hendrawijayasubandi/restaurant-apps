import NowRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';

const routes = {
  '/': NowRestaurant, // default page
  '/now-restaurant': NowRestaurant,
  '/detail/:id': Detail,
};

export default routes;
