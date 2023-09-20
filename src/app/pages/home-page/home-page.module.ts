import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiModule } from 'src/app/components/ui/ui.module';
import { PostsModule } from '@pages/posts/posts.module';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
          component: HomeComponent,
          path: '',
      },
    ]),
    PostsModule
  ]
})
export class HomePageModule { }
