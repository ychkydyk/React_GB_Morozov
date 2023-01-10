import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from '../store/profile/selectors';


export const PublicRoute = ({ component }) => {
  const isAuth = useSelector(selectAuth);

  if (isAuth) {
    // return <Navigate to="/" replace />;
  }

  return component ? component : <Outlet />;
};
