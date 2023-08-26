import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUsersisLoggenIn } from 'redux/Auth/Selector';

const PrivateRouter = ({ children }) => {
  const isLoggenIn = useSelector(getUsersisLoggenIn);
  const location = useLocation();

  return isLoggenIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRouter;
