import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    const queryParams = new URLSearchParams({
      q: text,
    });
    setLoading();
    const response = await fetch(
      `${import.meta.env.VITE_URI}/search/users?${queryParams}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_TOKEN}`,
        },
      }
    );

    const { items } = await response.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${import.meta.env.VITE_URI}/users/${login}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const responseData = await response.json();
      // setUsers(data);
      // setLoading(false);
      dispatch({
        type: "GET_USER",
        payload: responseData,
      });
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
