import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Spinner from "components/Spinners/Spinner"
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary"
import store from "app/store/store"
import AuthProvider from 'app/providers/AuthProvider'
import renderRoutes from "app/routing/renderRoutes"
import "./App.scss"

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <ErrorBoundary>
              <Switch>{renderRoutes()}</Switch>
            </ErrorBoundary>
          </Router>
        </AuthProvider>
      </Provider>
    </Suspense>
  );
};

export default App;
