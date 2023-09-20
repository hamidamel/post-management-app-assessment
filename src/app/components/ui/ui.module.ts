import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PostCardComponent,
    CommentCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    PostCardComponent,
    CommentCardComponent
  ]
})
export class UiModule { }
