import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
