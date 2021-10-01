import React from 'react';
import routes from './routes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const renderRoutes = () => {
    return routes.map((route, idx) =>
      route.public ? (
        <PublicRoute
            key={route.path || idx}
            path={route.path}
            exact={route.exact}
            component={route.component}
            showHeader={route.showHeader}
            headingComponent={route.headingComponent}
            showFooter={route.showFooter}
            restricted={route.restricted}
        />
      ):(
        <PrivateRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            showHeader={route.showHeader}
            headingComponent={route.headingComponent}
            showFooter={route.showFooter}
            component={route.component}
        />)
    );
  };
  
  export default renderRoutes;