import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		FooterComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
	],
	exports: [
		FooterComponent,
	],
})
export class FooterModule {
}
