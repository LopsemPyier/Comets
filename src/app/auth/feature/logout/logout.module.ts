import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		LogoutComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: LogoutComponent },
		]),
	],
})
export class LogoutModule {
}
