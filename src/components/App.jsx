import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentToken, setCredentials } from 'redux/auth/authSlice';
import { useFetchCurrentUserQuery } from 'redux/auth/authApiSlice';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { AppNavBar } from './AppNavBar/AppNavBar';
import MainContainer from './MainContainer/MainContainer';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

function App() {
  const currentToken = useSelector(getCurrentToken);
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchCurrentUserQuery();

  useEffect(() => {
    if (data) {
      dispatch(setCredentials({ user: data, token: currentToken }));
    } else {
      return;
    }
  }, [currentToken, data, dispatch]);

  return (
    <>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#00000080"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      ) : (
        <>
          <AppNavBar />
          <MainContainer>
            <Suspense
              fallback={
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#00000080"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              }
            >
              <Routes>
                <Route path="*" element={<Navigate to="/register" />} />
                <Route
                  path="/register"
                  element={
                    <PublicRoute restricted>
                      <Register />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted>
                      <Login />
                    </PublicRoute>
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
            </Suspense>
          </MainContainer>
        </>
      )}
    </>
  );
}

export default App;
