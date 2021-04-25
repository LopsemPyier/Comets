import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		ProjectDetailComponent
	],
	exports: [
		ProjectDetailComponent
	],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class ProjectDetailModule {
}
