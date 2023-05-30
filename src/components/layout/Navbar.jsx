import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar({ title }) {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Git-Book</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/umukcodes" target="_blank"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Git-Book",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
