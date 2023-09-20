import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { EditPostPageComponent } from './edit-post-page/edit-post-page.component';
import { RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    SinglePostPageComponent,
    PostPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch:'full',
        redirectTo:'/'
      },
      {
        component: PostPageComponent,
        path: ':id',
      },
      {
        component: EditPostPageComponent,
        path: ':id/edit',
      },
    ])
  ]
})
export class SinglePostPageModule { }
