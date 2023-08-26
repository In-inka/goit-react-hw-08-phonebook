import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Head, Btn, Logo, LogIn } from './Header.styled';
import { logout } from 'redux/operations';
import { getIsLoggedIn, getUsers } from 'redux/Auth/Selector';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUsers);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const navigate = useNavigate();
  return (
    <Head>
      <Navigation>
        <Logo>PHONEBOOK</Logo>
        <LogIn>
          {isLoggedIn && <Logo>User: {user.name}</Logo>}
          {!isLoggedIn && (
            <Btn type="button" onClick={() => navigate('/signUp')}>
              Sign Up
            </Btn>
          )}

          <Btn
            type="button"
            onClick={() => (isLoggedIn ? dispatch(logout()) : navigate('/'))}
          >
            {isLoggedIn ? 'Sing Out' : 'Sign In'}
          </Btn>
        </LogIn>
      </Navigation>
    </Head>
  );
};

export default Header;
