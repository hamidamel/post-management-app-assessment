import { PageEvent } from '@angular/material/paginator';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IPost } from 'src/models/post';

export interface PostsState extends EntityState<IPost> {
  page: PageEvent,
  totalNumber: number
}

export const postsAdapter = createEntityAdapter<IPost>({});

export const initialState: PostsState = postsAdapter.getInitialState({
  totalNumber: 0,
  page: {
    pageIndex:0, 
    pageSize: 10,
    length: 10
  }
});