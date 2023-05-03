import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="navbar-ul">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className="link">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote" className="link">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
