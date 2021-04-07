import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { IconModule } from '../icon/icon.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
