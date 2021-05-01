import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { IconModule } from '../icon/icon.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		TextareaComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		ReactiveFormsModule,
	],
	exports: [
		TextareaComponent,
	],
})
export class TextareaModule {
}
