// Local imports
import { HomePage, LoginPage } from '../../pages';
import { RouterConstant } from '../../constants';


interface Route {
  path: string;
  component: React.FunctionComponent;
}

// Main Routes
function getMainRoutes(): Route[] {
  return [
    {
      path: RouterConstant.HOME,
      component: HomePage,
    },
  ];
}

// Authentication Routes
function getAuthenticationRoutes() {
  return [
    {
      path: RouterConstant.LOGIN,
      component: LoginPage,
    },
  ];
}

export { getMainRoutes, getAuthenticationRoutes };
