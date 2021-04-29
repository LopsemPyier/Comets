import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationLayoutComponent } from './application-layout.component';
import { NavModule } from '../nav/nav.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ApplicationLayoutComponent,
	],
	imports: [
		CommonModule,
		NavModule,
		RouterModule,
	],
	exports: [
		ApplicationLayoutComponent,
	],
})
export class ApplicationLayoutModule {
}
