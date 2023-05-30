import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl compact">
      <div className="flex-row items-center space-x-4 card-body">
          <figure className="w-14 h-14">
            <img src={avatar_url} alt="Movie" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{login}</h2>
            <div className="card-actions justify-start">
              <Link to={`/user/${login}`}>
                Profile
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
