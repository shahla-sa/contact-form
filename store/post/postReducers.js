import * as actions from "../types";

const postReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_POST:
      console.log("pppp", action.payload);
      return {
        ...state,
        loading: false,
        posts: [...state.posts, { ...action.payload, id: Date.now() }],
      };
    case actions.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default postReducer;
