import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [
		SelectComponent,
	],
	imports: [
		CommonModule,
		IconModule,
	],
	exports: [
		SelectComponent,
	],
})
export class SelectModule {
}
