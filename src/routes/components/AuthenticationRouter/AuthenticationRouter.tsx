// Third party imports
import { Route } from 'react-router-dom';

// Local imports
import { getAuthenticationRoutes } from '../../helper';

function AuthenticationRouter() {
  const routes = getAuthenticationRoutes();
  return (
    <>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </>
  );
}

export default AuthenticationRouter;
