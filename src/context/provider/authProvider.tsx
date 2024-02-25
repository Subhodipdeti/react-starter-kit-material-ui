// Third party imports
import { useContext, useReducer, createContext } from 'react';

// Local imports
import { initialState, AuthReducer } from '../reducers/authReducer';

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthContext = createContext<any>(null);

export function useAuthCtx() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthCtx must be used within a AuthProvider');
  }
  return context;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authCtx, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ authCtx, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
