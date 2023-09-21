import { Action, createReducer, on } from "@ngrx/store";
import { loadPostsSuccess, setPageSize } from "./posts.actions";
import { PostsState, initialState, postsAdapter } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(setPageSize, (state, action) => {
      return {...state, page: action.page}
    }),
    on(loadPostsSuccess, (state, action) => {
      const currentIdx = state.page.pageIndex * state.page.pageSize;
      return postsAdapter.setAll(action.posts.slice(currentIdx, currentIdx +  state.page.pageSize ), {
        ...state,
        totalNumber: action.posts.length,
      });
    })
  );
  
  export function postsReducer(state: PostsState, action: Action) {
    return _postsReducer(state, action);
  }