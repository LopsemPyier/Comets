import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { IconModule } from '../icon/icon.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		CheckboxComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		ReactiveFormsModule,
	],
	exports: [
		CheckboxComponent,
	],
})
export class CheckboxModule {
}
