import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function NotFound() {
  return (
    <>
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="text-6xl mb-4">404</h1>
            <p className="mb-4">Page not found</p>
            <Link to="/">
              <button className="btn">
                <FaSearch className="mr-2" /> Keep Searching
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
