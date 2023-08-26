import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigation, Head } from './Header.styled';
import { logout } from 'redux/operations';
import {
  getUsers,
  getUsersName,
  getUsersisLoggenIn,
} from 'redux/Auth/Selector';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUsers);
  const isLoggenIn = useSelector(getUsersisLoggenIn);

  console.log(user.name);
  return (
    <Head>
      <Navigation>
        <Link aria-current="page" to="/">
          Home
        </Link>
        {isLoggenIn && <Link to="/contacts">My contacts</Link>}
        {!isLoggenIn && <Link to="/singUp">SingUp</Link>}
        {!isLoggenIn && <Link to="/login">Login</Link>}
        {isLoggenIn && <h2>User: {user.name}</h2>}
        <button type="button" onClick={() => dispatch(logout())}>
          logout
        </button>
      </Navigation>
    </Head>
  );
};

export default Header;
