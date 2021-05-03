import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../button/button.module';
import { LogoModule } from '../logo/logo.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [
		HeaderComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		ButtonModule,
		LogoModule,
		IconModule,
	],
	exports: [
		HeaderComponent,
	],
})
export class HeaderModule {
}
