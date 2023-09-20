import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IPost } from 'src/models/post';

export interface PostsState extends EntityState<IPost> {
  count: number;
}

export const postsAdapter = createEntityAdapter<IPost>({
});

export const initialState: PostsState = postsAdapter.getInitialState({
  count: 0,
});