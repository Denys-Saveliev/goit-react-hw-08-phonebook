import { Routes, Route, Navigate } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import PubliceRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { AppNavBar } from './AppNavBar/AppNavBar';

function App() {
  return (
    <>
      <AppNavBar />

      <Routes>
        <Route path="*" element={<Navigate to="/register" />} />
        <Route
          path="/register"
          element={
            <PubliceRoute restricted>
              <Register />
            </PubliceRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PubliceRoute restricted>
              <Login />
            </PubliceRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
