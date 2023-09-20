import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/models/comment';
import { getComments } from '../state/comments.selector';
import { loadComments } from '../state/comments.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  public comments?: Observable<IComment[]>;

  constructor(private store: Store<AppState>){
  }
  ngOnInit(): void {
    this.comments = this.store.select(getComments);
    this.store.dispatch(loadComments());
  }
}
