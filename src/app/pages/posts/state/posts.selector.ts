import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState, postsAdapter } from "./posts.state";
import { RouterStateUrl } from "src/app/router/router-serializer";
import { getCurrentRoute } from "src/app/router/router.selector";

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

export const getPage = createSelector(getPostsState, (state) => {
  return state.page;
});

export const getTotalPostNumber = createSelector(getPostsState, (state) => {
  return state.totalNumber;
});

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities
);

export const getPostById = createSelector(
  getPostEntities,
  getCurrentRoute,
  (posts, route: RouterStateUrl) => {
    return posts ? posts[route.params['id']] : undefined;
  }
);
