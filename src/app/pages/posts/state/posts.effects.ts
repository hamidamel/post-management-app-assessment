import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { withLatestFrom, mergeMap, map, of, filter, switchMap } from "rxjs";
import { AppState } from "src/app/store/app.state";
import {  loadPosts, loadPostsSuccess } from "./posts.actions";
import { getPosts } from "./posts.selector";
import { ApiService } from "@services/api.service";
import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store";

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
          return this.apiService.getPostsWithUser().pipe(
            map((posts) => {
              return loadPostsSuccess({ posts });
            })
          );
      })
    );
  });

  getSinglePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts');
      }),
      map((r: any) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getPosts)),
      map(([id, posts]) => {
          const post =posts.find((post)=> post.id == id);
          console.log(posts);
          return loadPostsSuccess({ posts: post? [post] : []});
      })
    );
  });
}