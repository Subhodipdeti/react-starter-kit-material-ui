// Third party imports
import { Navigate } from 'react-router-dom';

// Local imports
import { useAuthCtx } from '../context/provider/authProvider';
import { RouterConstant } from '../constants';

interface ProtectedRouteProps {
  props?: object;
  Component: React.FunctionComponent;
}

const getComponent = ({ props, Component }: ProtectedRouteProps) => {
  return <Component {...props} />;
};

function withProtectRouteHoc({ Component }: ProtectedRouteProps) {
  const { authCtx } = useAuthCtx();
  const user = authCtx?.isAuthenticated;
  return function (props: object) {
    if (user) {
      return getComponent({
        props,
        Component,
      });
    }
    return <Navigate to={RouterConstant.LOGIN} />;
  };
}

export default withProtectRouteHoc;
