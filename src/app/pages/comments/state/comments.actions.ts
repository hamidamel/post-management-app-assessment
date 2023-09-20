import { createAction, props } from "@ngrx/store";
import { IComment } from "src/models/comment";

export const LOAD_COMMENTS = '[posts page] load comments';
export const LOAD_COMMENTS_SUCCESS = '[posts page] load comments success';

export const loadComments = createAction(LOAD_COMMENTS);

export const loadCommentsSuccess = createAction(
  LOAD_COMMENTS_SUCCESS,
  props<{ comments: IComment[] }>()
);