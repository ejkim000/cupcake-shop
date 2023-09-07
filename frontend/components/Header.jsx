import logo from '../src/assets/logo.png';
import { FaRegUser } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="cupcake-shop-logo" />
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
          <li>
            <button className="btn round">
              <FaRegUser />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
