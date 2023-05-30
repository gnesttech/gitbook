import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return (
    <>
      <h2>Username: {user.login ? user.login : "None found"}</h2>
      <h2>Email: {user.email ? user.email : "None found"}</h2>
      <h2>Bio: {user.bio ? user.bio : "None found"}</h2>
      <h2>Website: {user.blog ? user.blog : "None found"}</h2>
    </>
  );
}
export default User;
