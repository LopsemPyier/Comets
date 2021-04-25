import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProjectDetailModule } from '../../ui/project-detail/project-detail.module';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../../shared/utils/utils.module';
import { IsLoadingModule } from '@service-work/is-loading';


@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		ProjectDetailModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: DashboardComponent }
		]),
		UtilsModule,
		IsLoadingModule
	]
})
export class DashboardModule {
}
