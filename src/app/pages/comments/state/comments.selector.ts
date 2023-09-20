import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommentsState, commentsAdapter } from "./comments.state";

export const COMMENT_STATE_NAME = 'comments';
const getCommentsState = createFeatureSelector<CommentsState>(COMMENT_STATE_NAME);
export const commentsSelectors = commentsAdapter.getSelectors();

export const getComments = createSelector(getCommentsState, commentsSelectors.selectAll);
export const getCommentsEntities = createSelector(
  getCommentsState,
  commentsSelectors.selectEntities
);
