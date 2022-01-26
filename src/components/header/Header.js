import './header.scss';
import { NavLink } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

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
      <IconContext.Provider value={{ color: '#0290ff', size: '1rem' }}>
        <span className="header__profile">
          <BsFillPersonFill />
        </span>
      </IconContext.Provider>
    </div>
  </header>
);

export default Header;
