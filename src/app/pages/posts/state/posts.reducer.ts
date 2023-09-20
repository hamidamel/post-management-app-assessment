import { Action, createReducer, on } from "@ngrx/store";
import { loadPostsSuccess } from "./posts.actions";
import { PostsState, initialState, postsAdapter } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(loadPostsSuccess, (state, action) => {
      return postsAdapter.setAll(action.posts, {
        ...state,
        count: state.count + 1,
      });
    })
  );
  
  export function postsReducer(state: PostsState, action: Action) {
    return _postsReducer(state, action);
  }