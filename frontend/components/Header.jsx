import logo from '../src/assets/logo.png';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    navigate('/');
  }
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
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">BaseCake</a>
          </li>
          <li>
            <a href="#">Frosting</a>
          </li>
          <li>
            <a href="#">Filling</a>
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
                    <a href="#" onClick={onLogout}>Logout</a>
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
