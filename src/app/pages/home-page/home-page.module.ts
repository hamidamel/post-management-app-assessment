import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          component: HomeComponent,
          path: '',
      },
    ])
  ]
})
export class HomePageModule { }
