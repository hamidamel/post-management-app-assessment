import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostPageComponent } from './edit-post/edit-post-page.component';
import { RouterModule } from '@angular/router';
import { PostPageComponent } from './post/post-page.component';
import { UiModule } from "../../components/ui/ui.module";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostListComponent } from './post-list/post-list.component';
import { PostsEffects } from './state/posts.effects';
import { postsReducer } from './state/posts.reducer';
import { POST_STATE_NAME } from './state/posts.selector';

@NgModule({
    declarations: [
        PostPageComponent,
        PostListComponent
    ],
    exports:[PostListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/'
            },
            {
                component: PostPageComponent,
                path: ':id',
            },
            {
                component: EditPostPageComponent,
                path: ':id/edit',
            },
        ]),
        UiModule,
        StoreModule.forFeature(POST_STATE_NAME,postsReducer),
        EffectsModule.forFeature([PostsEffects]),
    ]
})
export class PostsModule { }
