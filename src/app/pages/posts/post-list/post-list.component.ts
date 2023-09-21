import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { IPost } from 'src/models/post';
import { loadPosts, setPageSize } from '../state/posts.actions';
import { getPage, getPosts, getTotalPostNumber } from '../state/posts.selector';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  public posts?: Observable<IPost[]>;
  public page$?: Observable<PageEvent>;
  public totalPostNumber?: Observable<number>;

  constructor(private store: Store<AppState>){
  }
  ngOnInit(): void {
    this.page$ = this.store.select(getPage);
    this.posts = this.store.select(getPosts);
    this.totalPostNumber = this.store.select(getTotalPostNumber);

    this.page$.subscribe((p)=>{
      this.store.dispatch(loadPosts());
    })
  }

  handlePageEvent(e:PageEvent){
    this.store.dispatch(setPageSize({page: e}));
  }
}
