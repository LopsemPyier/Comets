import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { ButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [
		NavComponent,
	],
	imports: [
		CommonModule,
		ButtonModule,
		RouterModule,
		IconModule,
	],
	exports: [
		NavComponent,
	],
})
export class NavModule {
}
