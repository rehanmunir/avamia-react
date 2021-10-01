import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from 'views/Layout';
import { useAuthDataContext } from 'app/providers/AuthProvider';

const PrivateRoute = ({
  component: Component,
  restricted = false,
  showHeader = false,
  showFooter = false,
  ...options
}) => {

  const { isAuthenticated } = useAuthDataContext();
  const shouldRedirect = !isAuthenticated;


  const renderPrivateRoute = (props) => {

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <>
        <Layout showHeader={showHeader} showFooter={showFooter}>            
          <>
            <Component {...props} />
          </>
        </Layout>
      </>
    );
  };

  return <Route {...options} render={(props) => renderPrivateRoute(props)} />;
};

export default PrivateRoute;
