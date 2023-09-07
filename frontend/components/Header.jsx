import logo from '../src/assets/logo.png';
import { FaSignInAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="cupcake-shop-logo" />
        </div>
        <ul>
            <li>
              <button className="btn">
                <FaSignInAlt /> Login
              </button>
            </li>
          </ul>
    </header>
  )
}

export default Header;