import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../../ui/logo/logo.module';

@NgModule({
	declarations: [
		AuthLayoutComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		LogoModule,
	],
	exports: [
		AuthLayoutComponent,
	],
})
export class AuthLayoutModule {
}
