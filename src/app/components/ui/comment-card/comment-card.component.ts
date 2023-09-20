import { Component, Input } from '@angular/core';
import { IComment, IFullComment } from 'src/models/comment';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  @Input('comment') comment?: IComment;
}
