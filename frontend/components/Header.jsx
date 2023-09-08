import logo from '../src/assets/logo.png';
import { FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    navigate('/');
  };
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} onClick={onClick} alt="cupcake-shop-logo" />
        </div>
        <ul>
          <li>
            <Link to="/items/design">Design</Link>
          </li>
          <li>
            <Link to="/items/cake">BaseCake</Link>
          </li>
          <li>
            <Link to="/items/frosting">Frosting</Link>
          </li>
          <li>
            <Link to="/items/filling">Filling</Link>
          </li>
          <li className="dropdown">
            <button className="btn round">
              <FaRegUser />
            </button>
            <ul className="dropdown-content">
              {user ? (
                <>
                  <li>
                    <a href="/myaccount">My Account</a>
                  </li>
                  <li>
                    <a href="#" onClick={onLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="/signup">Signup</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
