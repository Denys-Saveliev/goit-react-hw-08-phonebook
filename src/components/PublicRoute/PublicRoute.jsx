import { useSelector } from 'react-redux';
import { getCurrentStatus } from 'redux/auth/authSlice';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({
  children,
  redirectTo = '/contacts',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(getCurrentStatus);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PublicRoute;
