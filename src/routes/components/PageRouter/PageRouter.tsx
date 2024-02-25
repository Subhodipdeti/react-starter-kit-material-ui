import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getMainRoutes } from '../../helper';
import AuthenticationRouter from '../AuthenticationRouter';
import withProtectRouteHoc from '../../../hoc/withProtectRouteHoc';

function PageRouter(): React.ReactElement<{}> {
  const routes = getMainRoutes();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route) => {
          const Component = withProtectRouteHoc({
            Component: route.component,
          });
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<Component />}
            />
          );
        })}
        {AuthenticationRouter()}
      </Routes>
    </Suspense>
  );
}

export default PageRouter;
