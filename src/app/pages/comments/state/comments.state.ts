import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IComment } from 'src/models/comment';

export interface CommentsState extends EntityState<IComment> {
}

export const commentsAdapter = createEntityAdapter<IComment>({
});

export const initialState: CommentsState = commentsAdapter.getInitialState({
});