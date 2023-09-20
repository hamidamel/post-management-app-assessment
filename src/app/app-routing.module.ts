import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('@pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path:"post",
    loadChildren: () => import('@pages/single-post-page/single-post-page.module').then(m => m.SinglePostPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
