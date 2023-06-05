import { useState, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn, SignUp, Users } from './user/pages';
import { NewPlace, UpdatePlace, UserPlaces } from './places/pages';
import { AuthContext } from './context/authContext';
import { ProtectedRoute } from './shared/routes/ProtectedRoute';
import { MainLayout } from './layout';

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
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <UserPlaces />
              </ProtectedRoute>
            }
          />
          <Route
            path="places/new"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <NewPlace />
              </ProtectedRoute>
            }
          />
          <Route
            path="places/:placeId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <UpdatePlace />
              </ProtectedRoute>
            }
          />
          <Route path="sign_in" element={<SignIn />} />
          <Route path="sign_up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
