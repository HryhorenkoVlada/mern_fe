import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/sign_in" replace />;
  }

  return children;
};
