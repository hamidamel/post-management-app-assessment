import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { IComment } from "src/models/comment";
import { IPost } from "src/models/post";

export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';
export const SET_PAGE_SIZE = '[posts page] load page size';

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: IPost[] }>()
);
export const setPageSize = createAction(SET_PAGE_SIZE, props<{page: PageEvent}>());


