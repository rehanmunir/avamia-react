import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { signout } from 'slices/user';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const AuthDataContext = createContext();
const initialAuthData = {};

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState(initialAuthData);
  const [isAuthenticated, setIsAuthenticated] = useState(!(JSON.parse(localStorage.getItem('authToken'))) ? false : true);
  const [isLoading, setIsLoading] = useState(true);

  const checkIsAuthenticated = () => {
    const rawAuthData = JSON.parse(localStorage.getItem('userInfo'));
    const rawTokensData = JSON.parse(localStorage.getItem('authToken'));

    if (!rawTokensData) return Promise.reject(new Error('Unauthenticated'));
    return Promise.resolve(rawAuthData);
  };

  const checkAuth = () =>
    checkIsAuthenticated()
      .then((data) => setAuthData(data))
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => {
        setIsLoading(false);
      });

  // Load auth data from local storage if it exists
  useEffect(() => {
    checkAuth();
  }, []);

  const onLogout = () => {
    dispatch(signout());
    setAuthData(initialAuthData);
    setIsAuthenticated(false);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('authToken');
  };

  const onLogin = () => {
    const newAuthData = localStorage.getItem('userInfo');
    setIsAuthenticated(true);
    if (newAuthData) {
      setAuthData(JSON.parse(newAuthData));
    }
  };

  const authDataValue = useMemo(
    () => ({ ...authData, isLoading, onLogin, onLogout, isAuthenticated }),
    [authData, isLoading, isAuthenticated]
  );

  return <AuthDataContext.Provider value={authDataValue}>{children}</AuthDataContext.Provider>;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
