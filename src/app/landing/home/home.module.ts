import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { IconModule } from 'src/app/shared/icon/icon.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent }
    ]),
    ButtonModule,
    IconModule
  ]
})
export class HomeModule { }
