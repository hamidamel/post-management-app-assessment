import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMMENT_STATE_NAME } from './state/comments.selector';
import { commentsReducer } from './state/comments.reducer';
import { CommentsEffects } from './state/comments.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UiModule } from "../../components/ui/ui.module";



@NgModule({
    declarations: [
        CommentListComponent
    ],
    exports: [CommentListComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(COMMENT_STATE_NAME, commentsReducer),
        EffectsModule.forFeature([CommentsEffects]),
        UiModule
    ]
})
export class CommentsModule { }
