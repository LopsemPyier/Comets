import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../logo/logo.module';

@NgModule({
	declarations: [
		FooterComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
		LogoModule,
	],
	exports: [
		FooterComponent,
	],
})
export class FooterModule {
}
