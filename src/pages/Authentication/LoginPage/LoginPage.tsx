import { Container, Typography, styled } from '@mui/material';
import { useAuthCtx } from '../../../context/provider/authProvider';
import authActions from '../../../context/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { RouterConstant } from '../../../constants';
import { Button } from '../../../components';

const LoginContainer = styled(Container)(({ theme: { palette } }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(315deg, #7950f2 5%, #748ffc 95%)',
  color: palette.primary.contrastText,
}));

function LoginPage(): React.ReactElement<{}> {
  const navigate = useNavigate();
  const { dispatch } = useAuthCtx();

  const handelLogin = () => {
    authActions.setUser(dispatch, { isAuthenticated: true });
    navigate(RouterConstant.HOME);
  };

  return (
    <LoginContainer style={{ textAlign: 'center' }}>
      <Typography variant="h1">This is Login Page</Typography>
      <Button onClick={handelLogin}>Login</Button>
    </LoginContainer>
  );
}

export default LoginPage;
