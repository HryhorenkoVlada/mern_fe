import { useState, useCallback, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from 'src/layout';
import { Users } from 'src/user/pages';

import { AuthContext } from 'src/context/authContext';
import { ProtectedRoute, LazyLoadingRoute } from 'src/shared/routes';

const SignIn = lazy(() => import('src/user/pages/auth/SignIn'));
const SignUp = lazy(() => import('src/user/pages/auth/SignUp'));
const NewPlace = lazy(() => import('src/places/pages/NewPlace/NewPlace'));
const UpdatePlace = lazy(
  () => import('src/places/pages/UpdatePlace/UpdatePlace')
);
const UserPlaces = lazy(() => import('src/places/pages/UserPlaces/UserPlaces'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Users />} />
          <Route
            path=":userId/places"
            element={
              <LazyLoadingRoute>
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <UserPlaces />
                </ProtectedRoute>
              </LazyLoadingRoute>
            }
          />
          <Route
            path="places/new"
            element={
              <LazyLoadingRoute>
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <NewPlace />
                </ProtectedRoute>
              </LazyLoadingRoute>
            }
          />
          <Route
            path="places/:placeId/edit"
            element={
              <LazyLoadingRoute>
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <UpdatePlace />
                </ProtectedRoute>
              </LazyLoadingRoute>
            }
          />
          <Route
            path="sign_in"
            element={
              <LazyLoadingRoute>
                <SignIn />
              </LazyLoadingRoute>
            }
          />
          <Route
            path="sign_up"
            element={
              <LazyLoadingRoute>
                <SignUp />
              </LazyLoadingRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
