// Router/index.tsx
import React, { useContext } from 'react';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import routes from './config';
import { Styles } from '../styles/styles';
import ProtectedRoute from './ProtectedRoute';
import { UsernameContext } from '../UsernameContext'; // Import the UsernameContext

const Router: React.FC = () => {
  const { username } = useContext(UsernameContext); // Access the username value from the UsernameContext

  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          const { path, exact, component, private: isPrivate } = routeItem;
          if (isPrivate) {
            return (
              <ProtectedRoute
                key={component}
                path={path}
                exact={exact}
                component={lazy(() => import(`../pages/${component}`))}
                isAuthenticated={Boolean(username)} // Pass the authentication status based on the presence of a username
              />
            );
          } else {
            return (
              <Route
                key={component}
                path={path}
                exact={exact}
                component={lazy(() => import(`../pages/${component}`))}
              />
            );
          }
        })}
        <Redirect to="/login" />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
