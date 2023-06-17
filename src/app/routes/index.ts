import express from 'express';
import {UserRoutes} from "../modules/user/user.route";
import {AuthRoutes} from "../modules/auth/auth.route";
import {CowRoutes} from "../modules/cow/cow.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/cows',
    route: CowRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
