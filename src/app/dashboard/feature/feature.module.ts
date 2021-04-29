import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ProjectListModule } from '../ui/project-list/project-list.module';
import { IconModule } from '../../shared/ui/icon/icon.module';
import { InputModule } from '../../shared/ui/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		DashboardComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '', pathMatch: 'full', component: DashboardComponent,
			},
		]),
		ProjectListModule,
		IconModule,
		InputModule,
		ReactiveFormsModule,
	],
})
export class FeatureModule {
}
