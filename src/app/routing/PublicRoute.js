import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from 'views/Layout';
import { useAuthDataContext } from 'app/providers/AuthProvider';

const PublicRoute = ({
  component: Component,
  restricted = false,
  showHeader = false,
  showFooter = false,
  ...options
}) => {

  const { isAuthenticated } = useAuthDataContext();

  const shouldRedirect = isAuthenticated && restricted;
  if (shouldRedirect) return <Redirect to="/companies" />;

  const renderPublicRoute = (props) => {
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

  return <Route {...options} render={(props) => renderPublicRoute(props)} />;
};

export default PublicRoute;
