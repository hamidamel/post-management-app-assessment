import { Action, createReducer, on } from "@ngrx/store";
import { loadCommentsSuccess } from "./comments.actions";
import { CommentsState, commentsAdapter, initialState } from "./comments.state";

const _commentsReducer = createReducer(
    initialState,
    on(loadCommentsSuccess, (state, action) => {
      return commentsAdapter.setAll(action.comments, {
        ...state,
      });
    })
  );
  
  export function commentsReducer(state: CommentsState, action: Action) {
    return _commentsReducer(state, action);
  }