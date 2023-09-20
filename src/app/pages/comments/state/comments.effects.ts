import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { withLatestFrom, mergeMap, map, of, filter, switchMap } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { ApiService } from "@services/api.service";
import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store";
import { loadComments, loadCommentsSuccess } from "./comments.actions";
import { getComments } from "./comments.selector";

@Injectable()
export class CommentsEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

  loadComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts');
      }),
      map((r: any) => {
        return r.payload.routerState['params']['id'];
      }),
      mergeMap((id) => {
        return this.apiService.getComments().pipe(
          map((comments) => {
            const postComments = comments.filter((comment)=> comment.postId == id)
            return loadCommentsSuccess({ comments:postComments });
          })
        );
      }),
    );
  });
  
}