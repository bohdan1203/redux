import { newPost } from "../App";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      state.push(newPost);
      return state;

    default:
      return state;
  }
};

export default postsReducer;
