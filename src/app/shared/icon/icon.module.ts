import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { RemixIconModule } from 'angular-remix-icon';
import { icons } from './icons.enum';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    RemixIconModule.configure(icons)
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule { }
