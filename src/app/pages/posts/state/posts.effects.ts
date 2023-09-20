import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { withLatestFrom, mergeMap, map, of } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { loadPosts, loadPostsSuccess } from "./posts.actions";
import { getPosts } from "./posts.selector";
import { ApiService } from "@services/api.service";

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      withLatestFrom(this.store.select(getPosts)),
      mergeMap(([action, posts]) => {
          return this.apiService.getPosts().pipe(
            map((posts) => {
              return loadPostsSuccess({ posts });
            })
          );
      })
    );
  });
}