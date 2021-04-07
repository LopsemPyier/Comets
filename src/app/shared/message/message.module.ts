import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
