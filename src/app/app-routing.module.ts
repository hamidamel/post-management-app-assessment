import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('@pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path:"posts",
    loadChildren: () => import('@pages/posts/posts.module').then(m => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
