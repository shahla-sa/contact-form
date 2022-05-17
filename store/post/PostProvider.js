import { useReducer } from "react";
import postReducers from "./postReducers";
import PostContext from "./PostContext";
import * as actions from "../types";
import api from "../../services/api";

const PostProvider = ({ children }) => {
  const initialState = {
    posts: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(postReducers, initialState);

  const addPost = async (post) => {
    dispatch({ type: actions.SET_LOADING });
    try {
      const response = await api.post("/posts", post);
      dispatch({ type: actions.ADD_POST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        ...state,
        addPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
