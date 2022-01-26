import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <ul className="nav__elements">
          <li className="nav__element">
            <span className="logo">Bookstore CMS</span>
          </li>
          <li className="nav__element">
            <NavLink className="nav__link" to="/">
              Books
            </NavLink>
          </li>
          <li className="nav__element">
            <NavLink className="nav__link" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
      <span className="header__profile" />
    </div>
  </header>
);

export default Header;
