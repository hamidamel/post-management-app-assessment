import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { IFullPost } from 'src/models/post';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit{
  post?: Observable<IFullPost | undefined>;

  constructor(private store: Store<AppState>){

  }
  ngOnInit(): void {
    this.post = this.store.select(getPostById);
  }

}
