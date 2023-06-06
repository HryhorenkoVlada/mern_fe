import { Navigate } from 'react-router-dom';

interface IProtectedRouteProps {
  isLoggedIn: boolean;
  children: any;
}

const ProtectedRoute = ({ children, isLoggedIn }: IProtectedRouteProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/sign_in" replace />;
  }

  return children;
};

export default ProtectedRoute;
