// Third party imports
import {
  CssBaseline,
  StyledEngineProvider,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import { RouterConstant } from './constants';
import { AuthProvider } from './context/provider/authProvider';
import Routes from './routes';
import useTheme from './theme';

function App() {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={useTheme()}>
        <CssBaseline />
        <AuthProvider>
          <BrowserRouter basename={RouterConstant.HOME}>
            <Routes />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
